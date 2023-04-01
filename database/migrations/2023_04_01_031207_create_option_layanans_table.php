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
    Schema::create('option_layanans', function (Blueprint $table) {
      $table->id();
      $table->foreignId('idLayananPublik');
      $table->string('optionLayanan');
      $table->text('deskripsiOption');
      $table->text('imgName')->nullable();
      $table->text('imgUrl')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('option_layanans');
  }
};
