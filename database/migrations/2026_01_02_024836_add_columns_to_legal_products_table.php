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
            $table->foreignId('signer_id')->nullable()->constrained('signers')->nullOnDelete();
            $table->foreignId('initiator_id')->nullable()->constrained('initiators')->nullOnDelete();
            $table->string('government_affair')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('legal_products', function (Blueprint $table) {
            $table->dropForeign(['signer_id']);
            $table->dropForeign(['initiator_id']);
            $table->dropColumn(['signer_id', 'initiator_id', 'government_affair']);
        });
    }
};
