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
        Schema::create('legal_product_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('legal_product_id')->constrained('legal_products')->cascadeOnDelete();
            $table->foreignId('replaced_legal_product_id')->constrained('legal_products')->cascadeOnDelete();
            $table->text('description')->nullable();
            $table->timestamps();

            // Prevent duplicate entries for the same pair
            $table->unique(['legal_product_id', 'replaced_legal_product_id'], 'legal_product_histories_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('legal_product_histories');
    }
};
