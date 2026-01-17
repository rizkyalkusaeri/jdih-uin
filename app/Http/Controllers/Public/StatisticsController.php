<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\LegalProduct;
use App\Models\Type;
use App\Models\VisitorLog;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class StatisticsController extends Controller
{
  public function index()
  {
    // 1. Visitor Stats
    $visitorStats = Cache::remember('stats_visitor_stats', 30, function () {
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

    // 2. Legal Products by Type (Pie/Doughnut Chart)
    $productsByType = Type::withCount(['legalProducts' => function ($q) {
      $q->whereIn('status', ['active', 'Berlaku']);
    }])
      ->having('legal_products_count', '>', 0)
      ->get()
      ->map(function ($type) {
        return [
          'label' => $type->name, // e.g. "Peraturan Rektor"
          'value' => $type->legal_products_count,
          'color' => $this->getColorForType($type->name),
        ];
      });

    // 3. Legal Products by Year (Bar Chart) - Last 5 or 10 years
    $productsByYear = LegalProduct::selectRaw('year, COUNT(*) as count')
      ->whereIn('status', ['active', 'Berlaku'])
      ->whereNotNull('year')
      ->groupBy('year')
      ->orderBy('year', 'asc')
      ->get()
      ->map(function ($item) {
        return [
          'year' => $item->year,
          'count' => $item->count,
        ];
      });

    // 4. Top 5 Most Viewed Products
    $topProducts = LegalProduct::with('type')
      ->withCount('views')
      ->whereIn('status', ['active', 'Berlaku'])
      ->orderByDesc('views_count')
      ->take(5)
      ->get()
      ->map(function ($product) {
        return [
          'title' => $product->title,
          'number' => $product->number,
          'type' => $product->type->name ?? '-',
          'views' => $product->views_count,
          'slug' => $product->slug,
          'year' => $product->year,
        ];
      });

    return Inertia::render('Statistics/Index', [
      'visitorStats' => $visitorStats,
      'productsByType' => $productsByType,
      'productsByYear' => $productsByYear,
      'topProducts' => $topProducts,
    ]);
  }

  private function getColorForType($name)
  {
    // Simple color mapping or hashing
    $colors = [
      'Peraturan' => '#10B981', // Emerald
      'Keputusan' => '#3B82F6', // Blue
      'Surat' => '#F59E0B', // Amber
      'Instruksi' => '#6366F1', // Indigo
      'Edaran' => '#EC4899', // Pink
      'Nota' => '#8B5CF6', // Purple
    ];

    foreach ($colors as $key => $color) {
      if (str_contains(strtolower($name), strtolower($key))) {
        return $color;
      }
    }

    return '#6B7280'; // Gray default
  }
}
