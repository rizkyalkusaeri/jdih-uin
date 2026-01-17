<?php

namespace App\Filament\Widgets;

use App\Models\LegalProduct;
use Filament\Widgets\ChartWidget;

class LegalProductChartWidget extends ChartWidget
{
  protected ?string $heading = 'Distribusi Produk Hukum per Jenis';
  protected static ?int $sort = 2;

  protected function getData(): array
  {
    $data = LegalProduct::query()
      ->selectRaw('count(*) as aggregate, type_id')
      ->groupBy('type_id')
      ->with('type')
      ->get();

    return [
      'datasets' => [
        [
          'label' => 'Produk Hukum',
          'data' => $data->pluck('aggregate'),
          'backgroundColor' => [
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6',
            '#ec4899',
            '#6366f1'
          ],
        ],
      ],
      'labels' => $data->map(fn(LegalProduct $product) => $product->type->name ?? 'Unknown'),
    ];
  }

  protected function getType(): string
  {
    return 'pie';
  }
}
