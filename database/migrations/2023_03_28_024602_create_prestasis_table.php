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
    Schema::create('prestasis', function (Blueprint $table) {
      $table->id();
      $table->foreignId('idSekolah');
      $table->string('namaLomba');
      $table->string('kategoriLomba'); // olahraga, teknologi, seni budaya, ilmu sosial
      $table->string('namaPeserta');
      $table->string('statusPeserta');
      $table->string('asalInstansi');
      $table->string('penanggungJawab');
      $table->string('targetCapaian');
      $table->date('jadwalPelaksanaan');
      $table->string('sumberAnggaran');
      $table->string('tingkatPrestasi'); //kecamatan, kabupaten/kota, provinsi, nasional, internasional
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('prestasis');
  }
};
