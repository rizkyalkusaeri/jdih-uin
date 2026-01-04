<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('legal_products', function (Blueprint $table) {
            $table->json('metadata')->nullable()->after('status');
            $table->foreignId('publisher_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('place_id')->nullable()->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('legal_products', function (Blueprint $table) {
            $table->dropForeign(['publisher_id']);
            $table->dropForeign(['place_id']);
            $table->dropColumn(['publisher_id', 'place_id', 'metadata']);
        });
    }
};
