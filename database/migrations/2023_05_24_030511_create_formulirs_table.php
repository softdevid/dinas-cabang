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
    Schema::create('formulirs', function (Blueprint $table) {
      $table->id();
      $table->string('namaFormulir');
      $table->text('file');
      $table->text('storagePath');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('formulirs');
  }
};
