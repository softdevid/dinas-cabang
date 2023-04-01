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
    Schema::create('galeris', function (Blueprint $table) {
      $table->id();
      $table->string('judul')->nullable();
      $table->text('deskripsi')->nullable();
      $table->text('imgName')->nullable();
      $table->text('imgUrl')->nullable();
      $table->text('youtubeFrame')->nullable(); //diisi hanya ketika jenisnya video. rencana awal video diambil dari youtube
      $table->string('jenis'); //foto, video, infografis
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('galeris');
  }
};
