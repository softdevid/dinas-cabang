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
    Schema::create('beritas', function (Blueprint $table) {
      $table->id();
      $table->foreignId('idUser');
      $table->string('namaPenulis');
      $table->string('kategoriBerita'); //berita
      $table->string('judulBerita');
      $table->string('slug');
      $table->text('deskripsi');
      $table->string('imgName');
      $table->string('imgUrl');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('beritas');
  }
};
