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
    Schema::create('laporan_pengaduans', function (Blueprint $table) {
      $table->id();
      $table->string('judulLaporan');
      $table->text('isiLaporan');
      $table->text('asalPelapor');
      $table->string('jenisLaporan'); //pengaduan, aspirasi
      $table->string('imgName')->nullable();
      $table->string('imgUrl')->nullable();
      $table->string('statusLaporan'); //terima, tertunda, selesai
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('laporan_pengaduans');
  }
};
