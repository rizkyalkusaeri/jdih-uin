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
        $tables = [
            'categories',
            'initiators',
            'legal_fields',
            'links',
            'locations',
            'signers',
            'legal_products',
            'posts',
            'users'
        ];

        foreach ($tables as $table) {
            Schema::table($table, function (Blueprint $table) {
                $table->softDeletes();
            });
        }

        Schema::table('categories', function (Blueprint $table) {
            $table->enum('status', ['active', 'inactive'])->default('active');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->enum('status', ['active', 'inactive'])->default('active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $tables = [
            'categories',
            'initiators',
            'legal_fields',
            'links',
            'locations',
            'signers',
            'legal_products',
            'posts',
            'users'
        ];

        foreach ($tables as $table) {
            Schema::table($table, function (Blueprint $table) {
                $table->dropSoftDeletes();
            });
        }

        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('status');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
