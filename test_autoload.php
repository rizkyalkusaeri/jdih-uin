<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

try {
    if (class_exists(\App\Filament\Resources\FeedbackResource::class)) {
        echo "Class exists!\n";
        echo "Model: " . \App\Filament\Resources\FeedbackResource::getModel() . "\n";
    } else {
        echo "Class NOT found!\n";
    }
} catch (\Throwable $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
