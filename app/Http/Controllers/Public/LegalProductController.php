<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Category;
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
            $year = $request->input('year');
            $query->where('year', $year);
        }

        if ($request->filled('type')) {
            $types = $request->input('type');
            if (is_string($types)) {
                $types = explode(',', $types);
            }
            if (is_array($types) && count($types) > 0) {
                // Filter by Type Name
                $query->whereHas('type', function ($q) use ($types) {
                    $q->whereIn('name', $types);
                });
            }
        }

        if ($request->filled('category')) {
            $categories = $request->input('category');
            if (is_string($categories)) {
                $categories = explode(',', $categories);
            }
            if (is_array($categories) && count($categories) > 0) {
                $query->whereHas('category', function ($q) use ($categories) {
                    $q->whereIn('name', $categories);
                });
            }
        }

        if ($request->filled('subject')) {
            $subjects = $request->input('subject');
            if (is_string($subjects)) {
                $subjects = explode(',', $subjects);
            }
            if (is_array($subjects) && count($subjects) > 0) {
                $query->whereHas('subjects', function ($q) use ($subjects) {
                    $q->whereIn('name', $subjects);
                });
            }
        }

        if ($request->filled('status')) {
            $statuses = $request->input('status');
            if (is_string($statuses)) {
                $statuses = explode(',', $statuses);
            }
            if (is_array($statuses) && count($statuses) > 0) {
                $query->where(function ($q) use ($statuses) {
                    if (in_array('Berlaku', $statuses)) {
                        $q->orWhereIn('status', ['active', 'Berlaku']);
                    }
                    if (in_array('Tidak Berlaku', $statuses)) {
                        $q->orWhereIn('status', ['inactive', 'Tidak Berlaku', 'Dicabut']);
                    }
                });
            }
        }

        // Sorting
        $sort = $request->input('sort', 'Terbaru');
        switch ($sort) {
            case 'Terpopuler':
                // Assuming logic for popularity (e.g., view_count or similar)
                // For now fall back to new
                $query->orderBy('views_count', 'desc');
                break;
            case 'Tahun Terlama':
                $query->orderBy('year', 'asc');
                break;
            case 'Terbaru':
            default:
                $query->orderBy('created_at', 'desc');
                break;
        }

        $legalProducts = $query->paginate(10)->withQueryString();

        // Log Search
        if ($request->filled('search')) {
            try {
                \App\Models\SearchLog::create([
                    'keyword' => $request->input('search'),
                    'hits' => $legalProducts->total(),
                    'ip_address' => $request->ip(),
                ]);
            } catch (\Exception $e) {
                // Fail silently to not disrupt user experience
                \Illuminate\Support\Facades\Log::error('Failed to log search: ' . $e->getMessage());
            }
        }

        // Filter Data for Sidebar (Rich Data with Counts)
        $availableYears = LegalProduct::select('year')->distinct()->orderBy('year', 'desc')->pluck('year');

        $availableTypes = Type::withCount(['legalProducts' => function ($q) {
            $q->where('status', '!=', 'Draft');
        }])->orderBy('legal_products_count', 'desc')->get()->map(function ($type) {
            return [
                'id' => $type->id,
                'name' => $type->name,
                'count' => $type->legal_products_count
            ];
        });

        $availableCategories = Category::where('type', 'legal')->withCount(['legalProducts' => function ($q) {
            $q->where('status', '!=', 'Draft');
        }])->orderBy('legal_products_count', 'desc')->get()->map(function ($cat) {
            return [
                'id' => $cat->id,
                'name' => $cat->name,
                'count' => $cat->legal_products_count
            ];
        });

        $availableSubjects = \App\Models\Subject::withCount(['legalProducts' => function ($q) {
            $q->where('status', '!=', 'Draft');
        }])->orderBy('legal_products_count', 'desc')->get()->map(function ($subject) {
            return [
                'id' => $subject->id,
                'name' => $subject->name,
                'count' => $subject->legal_products_count
            ];
        });

        // Status Counts (Only Active/Inactive)
        $statusCounts = LegalProduct::select('status', \Illuminate\Support\Facades\DB::raw('count(*) as total'))
            ->whereIn('status', ['active', 'Berlaku', 'inactive', 'Tidak Berlaku', 'Dicabut']) // Include all relevant
            ->groupBy('status')
            ->pluck('total', 'status');

        // Map to standardized Status options
        $availableStatuses = [
            ['name' => 'Berlaku', 'value' => 'Berlaku', 'count' => ($statusCounts['active'] ?? 0) + ($statusCounts['Berlaku'] ?? 0)],
            ['name' => 'Tidak Berlaku', 'value' => 'Tidak Berlaku', 'count' => ($statusCounts['inactive'] ?? 0) + ($statusCounts['Tidak Berlaku'] ?? 0) + ($statusCounts['Dicabut'] ?? 0)],
        ];

        return Inertia::render('ProdukHukum/Index', [
            'legalProducts' => $legalProducts,
            'filters' => [
                'search' => $request->input('search'),
                'year' => $request->input('year'), // Single value now
                'type' => $request->input('type', []),
                'category' => $request->input('category', []), // Added category filter
                'subject' => $request->input('subject', []),
                'status' => $request->input('status', []),
                'sort' => $sort,
            ],
            'options' => [
                'years' => $availableYears,
                'types' => $availableTypes,
                'categories' => $availableCategories, // Added available categories
                'subjects' => $availableSubjects,
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
                'replacedBy',
                'supportingLinks'
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
            ->where('status', 'Active')
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
        if (!$legalProduct->file_path || !\Illuminate\Support\Facades\Storage::disk('public')->exists($legalProduct->file_path)) {
            abort(404);
        }

        return \Illuminate\Support\Facades\Storage::disk('public')->download($legalProduct->file_path, $legalProduct->slug . '.pdf');
    }

    public function preview(LegalProduct $legalProduct)
    {
        if (!$legalProduct->file_path || !\Illuminate\Support\Facades\Storage::disk('public')->exists($legalProduct->file_path)) {
            abort(404);
        }

        $path = \Illuminate\Support\Facades\Storage::disk('public')->path($legalProduct->file_path);

        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . $legalProduct->slug . '.pdf"'
        ]);
    }

    public function rate(Request $request, $id)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'email' => 'required|email|max:255',
            'name' => 'nullable|string|max:255',
            'q1' => 'required|boolean', // Setuju/Tidak Setuju
            'q2' => 'required|boolean',
            'q3' => 'required|boolean',
            'q4' => 'required|boolean',
            'q5' => 'required|boolean', // Merekomendasikan/Belum
            'feedback' => 'required|string|max:1000'
        ]);

        $ip = $request->ip();
        // Check duplication (1 rating per IP per day for this product)
        $exists = \App\Models\Rating::where('legal_product_id', $id)
            ->where('ip_address', $ip)
            ->whereDate('created_at', Carbon::today())
            ->exists();

        if ($exists) {
            return back()->withErrors(['message' => 'Anda sudah mengisi survei untuk dokumen ini hari ini.']);
        }

        \App\Models\Rating::create([
            'legal_product_id' => $id,
            'ip_address' => $ip,
            'rating' => $request->rating,
            'email' => $request->email,
            'name' => $request->name,
            'q1' => $request->q1,
            'q2' => $request->q2,
            'q3' => $request->q3,
            'q4' => $request->q4,
            'q5' => $request->q5,
            'feedback' => $request->feedback
        ]);

        return back()->with('success', 'Terima kasih atas partisipasi survei Anda!');
    }
}
