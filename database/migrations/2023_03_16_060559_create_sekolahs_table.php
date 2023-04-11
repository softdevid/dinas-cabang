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
    Schema::create('sekolahs', function (Blueprint $table) {
      $table->id();
      $table->string('namaSekolah');
      $table->text('visi');
      $table->text('misi');
      $table->text('noHp');
      $table->text('email')->unique();
      $table->string('password');
      // $table->text('sejarah')->nullable();
      $table->text('alamatLengkap');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('sekolahs');
  }
};
