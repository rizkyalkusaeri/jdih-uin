<?php

namespace App\Filament\Widgets;

use App\Models\LegalProduct;
use App\Models\Post;
use App\Models\VisitorLog;
use Filament\Widgets\StatsOverviewWidget as BaseStatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverviewWidget extends BaseStatsOverviewWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        return [
            Stat::make('Total Produk Hukum', LegalProduct::count())
                ->description('Semua produk hukum terdaftar')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary')
                ->chart([7, 2, 10, 3, 15, 4, 17]),
            Stat::make('Total Berita', Post::count())
                ->description('Semua berita dipublikasikan')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('success')
                ->chart([17, 16, 14, 15, 14, 13, 12]),
            Stat::make('Total Pengunjung', VisitorLog::count())
                ->description('Total kunjungan tercatat')
                ->descriptionIcon('heroicon-m-users')
                ->color('warning')
                ->chart([15, 4, 10, 2, 12, 4, 12]),
        ];
    }
}
