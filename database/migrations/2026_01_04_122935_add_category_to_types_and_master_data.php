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
        Schema::table('types', function (Blueprint $table) {
            if (!Schema::hasColumn('types', 'category_id')) {
                $table->foreignId('category_id')->nullable()->after('id')->constrained()->nullOnDelete();
            }
        });

        Schema::create('publishers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('places', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('type')->nullable(); // e.g. "Tempat Penetapan"
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('places');
        Schema::dropIfExists('publishers');

        Schema::table('types', function (Blueprint $table) {
            if (Schema::hasColumn('types', 'category_id')) {
                $table->dropForeign(['category_id']);
                $table->dropColumn('category_id');
            }
        });
    }
};
