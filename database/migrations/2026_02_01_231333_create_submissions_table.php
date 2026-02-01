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
        Schema::create('submissions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('nip_nim');
            $table->string('unit_kerja');
            $table->string('whatsapp');
            $table->foreignId('type_id')->constrained('types');
            $table->string('nota_dinas_number');
            $table->string('title');
            $table->text('product_summary');
            $table->string('cover_letter_path');
            $table->string('draft_document_path');
            $table->string('tracking_code')->unique();
            $table->string('status')->default('pending');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('submissions');
    }
};
