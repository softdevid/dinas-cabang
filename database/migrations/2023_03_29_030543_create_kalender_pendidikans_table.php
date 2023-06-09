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
    Schema::create('kalender_pendidikans', function (Blueprint $table) {
      $table->id();
      $table->text('imgName');
      $table->text('imgUrl');
      $table->string('statusKalender'); //Aktif, Diarsipkan
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('kalender_pendidikans');
  }
};
