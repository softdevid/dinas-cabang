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
      $table->foreignId('idUser')->default(1);
      $table->longText('deskripsi')->default('-');
      $table->string('imgName')->nullable();
      $table->string('imgUrl')->nullable();
      $table->string('imgName2')->nullable();
      $table->string('imgUrl2')->nullable();
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
