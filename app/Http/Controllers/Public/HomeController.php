<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\LegalProduct;
use App\Models\Post;
use App\Models\Rating;
use App\Models\Type;
use App\Models\VisitorLog;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    // 1. Stats
    $totalProducts = Cache::remember('home_total_products', 60, function () {
      return LegalProduct::whereIn('status', ['active', 'Berlaku'])->count();
    });

    $todayVisitors = Cache::remember('home_today_visitors', 30, function () {
      return VisitorLog::whereDate('created_at', Carbon::today())->count();
    });

    $totalVisitors = Cache::remember('home_total_visitors', 60, function () {
      return VisitorLog::count();
    });

    $avgRating = Cache::remember('home_avg_rating', 60, function () {
      return round(Rating::avg('rating') ?? 0, 1);
    });

    // 2. Products
    $recentProducts = LegalProduct::with('type')
      ->whereIn('status', ['active', 'Berlaku'])
      ->latest()
      ->take(4)
      ->get()
      ->map(function ($product) {
        return $this->transformProduct($product);
      });

    $popularProducts = LegalProduct::with('type')
      ->withCount('views')
      ->whereIn('status', ['active', 'Berlaku'])
      ->orderByDesc('views_count')
      ->take(4)
      ->get()
      ->map(function ($product) {
        return $this->transformProduct($product);
      });

    // 3. Collections (Matrix) - Keeping for now if needed, but adding Top Types
    $collections = Type::withCount(['legalProducts' => function ($q) {
      $q->whereIn('status', ['active', 'Berlaku']);
    }])
      ->orderByDesc('legal_products_count')
      ->take(4)
      ->get();

    // New: Top 5 Types by Views
    $topTypes = Type::withCount('views')
      ->orderByDesc('views_count')
      ->take(5)
      ->get()
      ->map(function ($type) {
        return [
          'name' => $type->name,
          'count' => $type->views_count,
        ];
      });

    // New: Visitor Stats Breakdown
    $visitorStats = Cache::remember('home_visitor_stats', 30, function () {
      $now = Carbon::now();
      return [
        'total' => VisitorLog::count(),
        'year' => VisitorLog::whereYear('created_at', $now->year)->count(),
        'month' => VisitorLog::whereYear('created_at', $now->year)
          ->whereMonth('created_at', $now->month)
          ->count(),
        'today' => VisitorLog::whereDate('created_at', $now)->count(),
        'online' => VisitorLog::where('created_at', '>=', $now->subMinutes(5))
          ->distinct('ip_address')
          ->count('ip_address'),
      ];
    });

    // 4. Posts
    $news = $this->getPosts();

    // 5. Feedbacks
    $feedbacks = Rating::whereNotNull('feedback')
      ->latest()
      ->take(5)
      ->get();

    $types = Type::orderBy('name')->get();

    return Inertia::render('Home', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'stats' => [
        'totalProducts' => $totalProducts,
        'todayVisitors' => $todayVisitors,
        'totalVisitors' => $totalVisitors,
        'avgRating' => $avgRating,
      ],
      'recentProducts' => $recentProducts,
      'popularProducts' => $popularProducts,
      'collections' => $collections,
      'news' => $news,
      'feedbacks' => $feedbacks,
      'types' => $types,
      'topTypes' => $topTypes,
      'visitorStats' => $visitorStats,
      'awards' => \App\Models\Award::all()->map(fn($a) => [
        'id' => $a->id,
        'title' => $a->title,
        'image' => $a->image ? \Illuminate\Support\Facades\Storage::url($a->image) : null,
      ]),
    ]);
  }

  private function getPosts()
  {
    return Post::with('category')
      ->latest()
      ->take(3)
      ->get()
      ->map(function ($post) {
        return [
          'id' => $post->id,
          'title' => $post->title,
          'slug' => $post->slug,
          'desc' => \Illuminate\Support\Str::limit(strip_tags($post->content), 100),
          'date' => Carbon::parse($post->published_at ?? $post->created_at)->translatedFormat('d F Y'),
          'image' => $post->image ? \Illuminate\Support\Facades\Storage::url($post->image) : null,
          'category' => $post->category->name ?? 'Umum',
        ];
      });
  }

  private function transformProduct($product)
  {
    $categoryName = $product->type->category->name ?? 'Umum';
    $badgeStyle = 'bg-gray-100 text-gray-600'; // Default

    if (str_contains(strtolower($categoryName), 'peraturan')) {
      $badgeStyle = 'bg-green-50 text-green-700';
    } elseif (str_contains(strtolower($categoryName), 'monografi')) {
      $badgeStyle = 'bg-amber-50 text-amber-600';
    } elseif (str_contains(strtolower($categoryName), 'khusus') || str_contains(strtolower($categoryName), 'sk')) { // Assuming SK/Khusus map to Blue
      $badgeStyle = 'bg-red-50 text-red-700'; // Using Red/Blue as per design, let's stick to the request: SK Rektor (Blue in one, Red in another? Let's follow logic). 
      // HTML provided: SK Rektor (Blue/10 text-ho-blue-dark), Surat Edaran (Amber), Peraturan (Green).
      // Let's map strictly to the HTML example if possible, or general category logic.
      // User said: "Peraturan Perundang-Undangan, Monografi Hukum, Dokumen Hukum Khusus". 
      // Let's map 'Khusus' to Blue.
      $badgeStyle = 'bg-blue-50 text-blue-900';
    }

    return [
      'id' => $product->id,
      'title' => $product->title,
      'number' => $product->number,
      'slug' => $product->slug,
      // 'year' => $product->year, // Removed Year as per request
      'type' => $product->type->name ?? 'Dokumen',
      'badge_style' => $badgeStyle,
      'desc' => \Illuminate\Support\Str::limit($product->title, 120), // Description matches logic
      'downloads' => 'PDF',
      'published_at' => Carbon::parse($product->published_date)->translatedFormat('d F Y')
    ];
  }

  public function postImage(Post $post)
  {
    if (!$post->image_path || !Storage::exists($post->image_path)) {
      abort(404);
    }

    return response()->file(Storage::path($post->image_path));
  }
}
