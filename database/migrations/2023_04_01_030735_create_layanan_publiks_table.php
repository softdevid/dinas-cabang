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
    Schema::create('layanan_publiks', function (Blueprint $table) {
      $table->id();
      $table->string('namaLayanan');
      $table->string('slug');
      $table->string('deskripsiLayanan');
      $table->string('jenisLayanan'); //gratis, berbayar
      $table->string('imgName')->nullable();
      $table->string('imgUrl')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('layanan_publiks');
  }
};
