<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\ProfilSuperAdmin;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // \App\Models\User::factory(10)->create();

    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);

    User::create([
      'name' => 'Softdev Admin',
      'email' => 'softdev@gmail.com',
      'password' => Hash::make('password'),
      'level' => 'super admin'
    ]);

    User::create([
      'name' => 'SEKOLAH 1',
      'email' => 'sekolah@gmail.com',
      'password' => Hash::make('password'),
      'level' => 'sekolah'
    ]);

    ProfilSuperAdmin::create([
      'idUser' => '1',
      'namaSuperAdmin' => 'Softdev Admin',
      'alamatLengkap' => 'Selabaya RT 2/5, Kalimanah, Purbalingga',
      'noHp' => '08888882',
      'email' => 'softdev@gamil.com',
      'lingkupKegiatan' => 'Mengerjakan program aplikasi berupa website dan aplikasi desktop',
      'visi' => 'Membuat perubahan, pembaruan, dan pembuatan teknologi yang lebih terbarukan',
      'misi' => 'lorem ipsumgeogjeotjuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
      'tugasPokok' => 'lorem',
      'fungsi' => 'lorem',
      'unitKerjaDibawahnya' => 'lorem',
      'unitKerjaDibawahnya' => 'lorem',
      'imgName' => null,
      'imgUrl' => null,
    ]);
  }
}
