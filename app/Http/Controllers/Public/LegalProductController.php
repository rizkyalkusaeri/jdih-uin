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
            ->with(['type', 'category', 'initiator', 'signer'])
            ->firstOrFail();

        // Increment View Count (Custom logic or simple increment)
        // $legalProduct->increment('view_count'); // Ensure column exists or use analytics table

        // Related Documents (Mock logic or simple category match)
        $relatedDocuments = LegalProduct::where('category_id', $legalProduct->category_id)
            ->where('id', '!=', $legalProduct->id)
            ->limit(3)
            ->get();

        return Inertia::render('ProdukHukum/Show', [
            'legalProduct' => $legalProduct,
            'relatedDocuments' => $relatedDocuments
        ]);
    }
}
