<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  public function up(): void
  {
    Schema::create('ratings', function (Blueprint $table) {
      $table->id();
      $table->foreignId('legal_product_id')->constrained()->cascadeOnDelete();
      $table->string('ip_address')->nullable();
      $table->integer('rating'); // 1-5
      $table->text('feedback')->nullable();
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('ratings');
  }
};
