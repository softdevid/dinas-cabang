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
    Schema::create('profil_pejabats', function (Blueprint $table) {
      $table->id();
      $table->string('namaPejabat');
      $table->string('jabatan');
      $table->text('profil');
      $table->text('pendidikan');
      $table->text('karir');
      $table->text('penghargaan');
      $table->string('imgName')->nullable();
      $table->string('imgUrl')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('profil_pejabats');
  }
};
