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
        Schema::table('ratings', function (Blueprint $table) {
            // Make legal_product_id nullable as ratings are now site-wide too (or at least not strictly tied to one product for general feedback)
            // Note: We cannot easily change a column to nullable if it has constraints without dropping foreign key first.
            // But here we want to KEEP the relation if it exists.
            // Let's modify it.
            $table->unsignedBigInteger('legal_product_id')->nullable()->change();

            // Add new columns for survey
            $table->string('email')->after('legal_product_id');
            $table->string('name')->nullable()->after('email');

            // Survey Questions (boolean for Setuju/Tidak Setuju)
            $table->boolean('q1')->nullable()->comment('Mudah digunakan?');
            $table->boolean('q2')->nullable()->comment('Dokumen lengkap?');
            $table->boolean('q3')->nullable()->comment('Mudah dipahami?');
            $table->boolean('q4')->nullable()->comment('Tampilan menarik?');
            $table->boolean('q5')->nullable()->comment('Merekomendasikan?'); // 1 = Yes, 0 = No/Belum

            // Make rating nullable as we might use the survey instead of stars
            $table->integer('rating')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ratings', function (Blueprint $table) {
            $table->dropColumn(['email', 'name', 'q1', 'q2', 'q3', 'q4', 'q5']);
            $table->unsignedBigInteger('legal_product_id')->nullable(false)->change();
            $table->integer('rating')->nullable(false)->change();
        });
    }
};
