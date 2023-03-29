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
    Schema::create('profil_super_admins', function (Blueprint $table) {
      $table->id();
      $table->foreignId('idUser');
      $table->string('namaSuperAdmin');
      $table->text('alamatLengkap');
      $table->text('noHp');
      $table->string('email')->unique();
      $table->text('lingkupKegiatan');
      $table->text('visi');
      $table->text('misi');
      $table->text('tugasPokok')->nullable();
      $table->text('fungsi')->nullable();
      $table->text('unitKerjaDibawahnya')->nullable();
      $table->text('imgName')->nullable(); //struktur Organisasi name image
      $table->text('imgUrl')->nullable(); //struktur organisasi url image
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('profil_super_admins');
  }
};
