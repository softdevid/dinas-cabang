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
      $table->id();
      $table->string('nip');
      $table->foreignId('idSekolah');
      $table->string('namaGuru');
      $table->string('email')->unique();
      $table->string('noHp');
      $table->string('mapel'); //mata pelajaran gurunya, misal matematika, ppkn
      $table->string('jabatan'); //kepala sekolah, guru, wakil kepala sekolah
      $table->date('tglLahir');
      $table->string('agama');
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
