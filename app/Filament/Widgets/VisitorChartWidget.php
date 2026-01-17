<?php

namespace App\Filament\Widgets;

use App\Models\VisitorLog;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class VisitorChartWidget extends ChartWidget
{
  protected ?string $heading = 'Statistik Pengunjung (30 Hari Terakhir)';
  protected static ?int $sort = 3;
  protected int | string | array $columnSpan = 'full';

  protected function getData(): array
  {
    $data = Trend::model(VisitorLog::class)
      ->between(
        start: now()->subDays(30),
        end: now(),
      )
      ->perDay()
      ->count();

    return [
      'datasets' => [
        [
          'label' => 'Pengunjung',
          'data' => $data->map(fn(TrendValue $value) => $value->aggregate),
          'borderColor' => '#3b82f6',
        ],
      ],
      'labels' => $data->map(fn(TrendValue $value) => $value->date),
    ];
  }

  protected function getType(): string
  {
    return 'line';
  }
}
