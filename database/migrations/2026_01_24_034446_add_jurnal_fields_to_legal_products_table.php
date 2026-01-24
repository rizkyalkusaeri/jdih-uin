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
            $table->longText('description')->nullable()->after('abstract');
            $table->string('accreditation')->nullable()->after('description');
            $table->string('link')->nullable()->after('accreditation'); // External link / Direct link
            $table->string('cover_image')->nullable()->after('link');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('legal_products', function (Blueprint $table) {
            $table->dropColumn(['description', 'accreditation', 'link', 'cover_image']);
        });
    }
};
