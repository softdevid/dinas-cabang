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
    Schema::create('sejarahs', function (Blueprint $table) {
      $table->id();
      $table->longText('deskripsi');
      $table->string('imgName');
      $table->string('imgUrl');
      $table->string('imgName2');
      $table->string('imgUrl2');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('sejarahs');
  }
};
