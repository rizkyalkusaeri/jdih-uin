<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use App\Models\PostView;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class InformationController extends Controller
{
  public function index(Request $request)
  {
    $query = Post::with('category', 'tags')
      ->categoryType('post') // Ensure only 'post' type categories
      ->whereNotNull('published_at');

    // Search
    if ($request->filled('q')) {
      $search = $request->input('q');
      $query->where(function ($q) use ($search) {
        $q->where('title', 'like', "%{$search}%")
          ->orWhere('content', 'like', "%{$search}%");
      });
    }

    // Filter by Category
    if ($request->filled('category')) {
      $categories = (array) $request->input('category');
      $query->whereHas('category', function ($q) use ($categories) {
        $q->whereIn('slug', $categories);
      });
    }

    // Sorting
    $sort = $request->input('sort', 'newest');
    if ($sort === 'popular') {
      $query->withCount('views')->orderByDesc('views_count');
    } else {
      $query->latest('published_at');
    }

    $posts = $query->paginate(10)->withQueryString()->through(function ($post) {
      return [
        'id' => $post->id,
        'title' => $post->title,
        'slug' => $post->slug,
        'desc' => \Illuminate\Support\Str::limit(strip_tags($post->content), 150),
        'date' => Carbon::parse($post->published_at)->translatedFormat('d F Y'),
        'image' => $post->image_path ? \Illuminate\Support\Facades\Storage::url($post->image_path) : null,
        'category' => $post->category,
        'views_count' => $post->views_count ?? $post->views()->count(), // Fallback if not eager loaded
      ];
    });

    $categories = Category::where('type', 'post')->withCount('posts')->get();

    return Inertia::render('Information/Index', [
      'posts' => $posts,
      'categories' => $categories,
      'filters' => $request->only(['q', 'category', 'sort']),
    ]);
  }

  public function show(Request $request, $slug)
  {
    $post = Post::with(['category', 'tags', 'user'])
      ->where('slug', $slug)
      ->firstOrFail();

    // Record View
    $this->recordView($post, $request);

    $relatedPosts = Post::where('id', '!=', $post->id)
      ->where('category_id', $post->category_id)
      ->whereNotNull('published_at')
      ->latest()
      ->take(3)
      ->get()
      ->map(function ($p) {
        return [
          'id' => $p->id,
          'title' => $p->title,
          'slug' => $p->slug,
          'date' => Carbon::parse($p->published_at)->translatedFormat('d F Y'),
          'image' => $p->image_path ? \Illuminate\Support\Facades\Storage::url($p->image_path) : null,
        ];
      });

    return Inertia::render('Information/Show', [
      'post' => [
        'id' => $post->id,
        'title' => $post->title,
        'content' => $post->content,
        'date' => Carbon::parse($post->published_at)->translatedFormat('d F Y, H:i'),
        'author' => $post->user->name ?? 'Admin',
        'category' => $post->category,
        'tags' => $post->tags,
        'image' => $post->image_path ? \Illuminate\Support\Facades\Storage::url($post->image_path) : null,
        'views_count' => $post->views()->count(),
      ],
      'relatedPosts' => $relatedPosts,
    ]);
  }

  protected function recordView(Post $post, Request $request)
  {
    // Simple View Recording (debounce logic could be added here or via middleware session)
    // For now, just record every hit or check session to avoid spam in short time

    $sessionKey = 'viewed_post_' . $post->id;

    if (!$request->session()->has($sessionKey)) {
      $post->views()->create([
        'ip_address' => $request->ip(),
        'user_agent' => $request->userAgent(),
        'user_id' => $request->user()?->id,
      ]);
      $request->session()->put($sessionKey, true);
    }
  }
}
