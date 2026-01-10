<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\LegalProduct;
use App\Models\Type; // Assuming Type model exists for filter data
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Carbon;

class LegalProductController extends Controller
{
    public function index(Request $request)
    {
        $query = LegalProduct::query()
            ->with(['type', 'category']) // Eager load relationships
            ->withCount('views')
            ->where('status', '!=', 'Draft'); // Example constraint, adjust as needed

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('number', 'like', "%{$search}%");
            });
        }

        if ($request->filled('year')) {
            $years = $request->input('year');
            // If it's an array (checkboxes)
            if (is_array($years)) {
                $query->whereIn('year', $years);
            } else {
                $query->where('year', $years);
            }
        }

        if ($request->filled('type')) {
            $types = $request->input('type'); // Passed as type names or IDs
            if (is_array($types)) {
                $query->whereHas('type', function ($q) use ($types) {
                    $q->whereIn('name', $types);
                });
            }
        }

        if ($request->filled('status')) {
            $statuses = $request->input('status');
            if (is_array($statuses)) {
                $query->whereIn('status', $statuses);
            }
        }

        // Sorting
        $sort = $request->input('sort', 'Terbaru');
        switch ($sort) {
            case 'Terpopuler':
                // Assuming logic for popularity (e.g., view_count or similar)
                // For now fall back to new
                $query->latest('published_date');
                break;
            case 'Tahun Terlama':
                $query->orderBy('year', 'asc');
                break;
            case 'Terbaru':
            default:
                $query->latest('published_date');
                break;
        }

        $legalProducts = $query->paginate(10)->withQueryString();

        // Filter Data for Sidebar
        $availableYears = LegalProduct::select('year')->distinct()->orderBy('year', 'desc')->pluck('year');
        $availableTypes = Type::pluck('name'); // Or hardcode if preferred
        $availableStatuses = ['Berlaku', 'Dicabut', 'Tidak Berlaku'];

        return Inertia::render('ProdukHukum/Index', [
            'legalProducts' => $legalProducts,
            'filters' => [
                'search' => $request->input('search'),
                'year' => $request->input('year', []),
                'type' => $request->input('type', []),
                'status' => $request->input('status', []),
                'sort' => $sort,
            ],
            'options' => [
                'years' => $availableYears,
                'types' => $availableTypes,
                'statuses' => $availableStatuses
            ]
        ]);
    }

    public function show($slug)
    {
        $legalProduct = LegalProduct::where('slug', $slug)
            ->with([
                'type',
                'category',
                'initiator',
                'signer',
                'publisher',
                'place',
                'legalField',
                'subjects',
                'location',
                'items',
                'replacedDocuments',
                'replacedBy'
            ])
            ->withCount('views')
            ->firstOrFail();

        // Track View
        $sessionKey = 'viewed_legal_product_' . $legalProduct->id;
        if (!request()->session()->has($sessionKey)) {
            try {
                \App\Models\LegalProductView::create([
                    'legal_product_id' => $legalProduct->id,
                    'ip_address' => request()->ip(),
                    'user_agent' => request()->header('User-Agent'),
                ]);
                request()->session()->put($sessionKey, true);
            } catch (\Exception $e) {
                // Fail silently
            }
        }

        // Related Documents: Same Type (Prioritized by Subject overlap if possible, currently simple Latest Same Type)
        // Advanced logic: Filter by Type, then sort by shared subjects desc, then published_date desc
        $relatedDocuments = LegalProduct::where('type_id', $legalProduct->type_id)
            ->where('id', '!=', $legalProduct->id)
            ->latest('published_date')
            ->limit(4)
            ->get();

        $links = \App\Models\Link::all();

        // Calculate average rating
        $avgRating = \App\Models\Rating::where('legal_product_id', $legalProduct->id)->avg('rating') ?? 0;
        $ratingCount = \App\Models\Rating::where('legal_product_id', $legalProduct->id)->count();

        return Inertia::render('ProdukHukum/Show', [
            'legalProduct' => $legalProduct,
            'relatedDocuments' => $relatedDocuments,
            'links' => $links,
            'ratingStats' => ['average' => round($avgRating, 1), 'count' => $ratingCount]
        ]);
    }

    public function download(LegalProduct $legalProduct)
    {
        if (!$legalProduct->file_path || !\Illuminate\Support\Facades\Storage::disk('local')->exists($legalProduct->file_path)) {
            abort(404);
        }

        return \Illuminate\Support\Facades\Storage::disk('local')->download($legalProduct->file_path, $legalProduct->slug . '.pdf');
    }

    public function preview(LegalProduct $legalProduct)
    {
        if (!$legalProduct->file_path || !\Illuminate\Support\Facades\Storage::disk('local')->exists($legalProduct->file_path)) {
            abort(404);
        }

        $path = \Illuminate\Support\Facades\Storage::disk('local')->path($legalProduct->file_path);

        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . $legalProduct->slug . '.pdf"'
        ]);
    }

    public function rate(Request $request, $id)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'feedback' => 'nullable|string|max:500'
        ]);

        $ip = $request->ip();
        // Check duplication (1 rating per IP per day for this product)
        $exists = \App\Models\Rating::where('legal_product_id', $id)
            ->where('ip_address', $ip)
            ->whereDate('created_at', \Illuminate\Support\Carbon::today())
            ->exists();

        if ($exists) {
            return back()->withErrors(['message' => 'Anda sudah memberikan rating hari ini.']);
        }

        \App\Models\Rating::create([
            'legal_product_id' => $id,
            'ip_address' => $ip,
            'rating' => $request->rating,
            'feedback' => $request->feedback
        ]);

        return back()->with('success', 'Terima kasih atas penilaian Anda!');
    }
}
