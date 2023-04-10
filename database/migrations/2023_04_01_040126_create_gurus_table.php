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
    Schema::create('gurus', function (Blueprint $table) {
      $table->foreignId('idSekolah');
      $table->id('nip');
      $table->string('namaGuru');
      $table->string('mapel'); //mata pelajaran gurunya, misal matematika, ppkn
      $table->string('jabatan'); //kepala sekolah, guru, wakil kepala sekolah
      $table->date('tglLahir');
      $table->string('jenisKelamin');
      $table->text('alamatLengkap');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('gurus');
  }
};
