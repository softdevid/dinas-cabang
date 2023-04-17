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
    Schema::create('sekolahs', function (Blueprint $table) {
      $table->id();
      $table->foreignId('idUser')->nullable();
      $table->string('namaSekolah');
      $table->text('visi')->nullable();
      $table->text('misi')->nullable();
      $table->text('noHp')->nullable();
      $table->text('email')->unique();
      $table->string('password');
      $table->text('jenjang'); //SD, SMP, SMA/SMK
      $table->text('alamatLengkap')->nullable();
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
    Schema::dropIfExists('sekolahs');
  }
};
