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
    Schema::create('siswas', function (Blueprint $table) {
      $table->id();
      $table->foreignId('idSekolah');
      $table->string('nisn');
      $table->string('nis');
      $table->string('namaSiswa');
      $table->string('jurusan')->nullable();
      $table->string('kelas');
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
    Schema::dropIfExists('siswas');
  }
};
