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
    Schema::create('permohonan_informasis', function (Blueprint $table) {
      $table->id();
      $table->string('namaPermohonan');
      $table->string('pdfName');
      $table->string('pdfUrl');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('permohonan_informasis');
  }
};
