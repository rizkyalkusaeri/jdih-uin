<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Facades\FilamentView;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Blade;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('sys-admin-panel')
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->brandName('CMS JDIH UIN')
            ->brandLogo(asset('images/jdih.png'))
            ->favicon(asset('images/jdih.png'))
            ->sidebarCollapsibleOnDesktop()
            ->spa()
            ->login()
            ->bootUsing(function () {
                FilamentView::registerRenderHook(
                    'panels::styles.after',
                    fn(): string => Blade::render('
                    <style>
                        /* Memberikan shadow pada sidebar */
                        .fi-sidebar {
                            box-shadow: 4px 0 15px -3px rgba(0, 0, 0, 0.07), 2px 0 6px -2px rgba(0, 0, 0, 0.05);
                            border-right: none !important; /* Menghapus garis border bawaan agar shadow lebih clean */
                        }

                        /* Opsional: Memberikan shadow halus pada topbar agar senada */
                        .fi-topbar {
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                        }
                    </style>
                '),
                );
            })
            ->colors([
                'primary' => Color::Blue,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
