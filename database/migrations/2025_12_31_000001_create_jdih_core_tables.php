<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->enum('type', ['legal', 'post'])->default('legal');
            $table->timestamps();
        });

        Schema::create('legal_products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('number')->unique()->nullable();
            $table->text('abstract')->nullable();
            $table->string('year')->nullable();
            $table->date('determination_date')->nullable();
            $table->date('published_date')->nullable();
            $table->enum('status', ['active', 'inactive', 'draft'])->default('active');
            $table->string('language')->default('Bahasa Indonesia')->nullable();
            $table->string('source')->nullable();
            $table->string('file_path')->nullable(); // For PDF
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('type_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('location_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('legal_field_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('legal_products');
        Schema::dropIfExists('categories');
    }
};
