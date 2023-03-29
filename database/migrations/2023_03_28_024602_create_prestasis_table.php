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
      $table->string('namaLomba');
      $table->string('kategoriLomba');
      $table->string('namaPeserta');
      $table->string('statusPeserta');
      $table->string('asalInstansi');
      $table->string('penanggungJawab');
      $table->string('targetCapaian');
      $table->string('jadwalPelaksanaan');
      $table->string('sumberAnggaran');
      $table->string('tingkatPrestasi');
      $table->string('jenisPrestasi'); // olahraga, teknologi, seni budaya, ilmu sosial
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
