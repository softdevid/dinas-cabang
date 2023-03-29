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
    Schema::create('ikms', function (Blueprint $table) {
      $table->id();
      $table->text('dasarHukum');
      $table->text('pengertian');
      $table->text('imgName'); //index kepuasan masyarakat image name
      $table->text('imgUrl'); //index kepuasan masyarakat image url
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('ikms');
  }
};
