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
        Schema::table('categories', function (Blueprint $table) {
            $table->json('field_config')->nullable()->after('status');
        });

        Schema::table('legal_products', function (Blueprint $table) {
            $table->dropColumn('metadata');

            $table->string('author')->nullable();
            $table->string('edition')->nullable();
            $table->string('page_description')->nullable();

            $table->date('validity_start')->nullable();
            $table->date('validity_end')->nullable();

            $table->string('doc_nature')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('field_config');
        });

        Schema::table('legal_products', function (Blueprint $table) {
            $table->json('metadata')->nullable();

            $table->dropColumn([
                'author',
                'edition',
                'page_description',
                'validity_start',
                'validity_end',
                'doc_nature'
            ]);
        });
    }
};
