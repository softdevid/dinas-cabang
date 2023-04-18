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
      $table->string('password');
      $table->text('lingkupKegiatan');
      $table->text('visi');
      $table->text('misi');
      $table->longText('sejarah');
      $table->text('tugasPokok')->nullable();
      $table->text('fungsi')->nullable();
      $table->text('unitKerjaDibawahnya')->nullable();
      $table->text('organisasiImgName')->nullable(); //struktur Organisasi name image
      $table->text('organisasiImgUrl')->nullable(); //struktur organisasi url image
      $table->text('visiImgName')->nullable(); //visi name image
      $table->text('visiImgUrl')->nullable(); //visi url image
      $table->text('misiImgName')->nullable(); //misi name image
      $table->text('misiImgUrl')->nullable(); //misi url image
      $table->text('logoImgName')->nullable(); //logo name image
      $table->text('logoImgUrl')->nullable(); //logo url image
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
