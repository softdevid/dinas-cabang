<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Berita;
use App\Models\Guru;
use App\Models\Ikm;
use App\Models\Prestasi;
use App\Models\ProfilPejabat;
use App\Models\ProfilSuperAdmin;
use App\Models\Sejarah;
use App\Models\Sekolah;
use App\Models\Siswa;
use App\Models\Sosmed;
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
    User::create([
      'name' => 'Softdev Admin',
      'email' => 'admin@gmail.com',
      'password' => Hash::make('password'),
      'level' => 'super admin'
    ]);

    // User::create([
    //   'name' => 'SEKOLAH 1',
    //   'email' => 'sekolah@gmail.com',
    //   'password' => Hash::make('password'),
    //   'level' => 'sekolah'
    // ]);

    // Sekolah::factory(10)->create();
    // Guru::factory(100)->create();
    // Siswa::factory(100)->create();
    // Prestasi::factory(150)->create();
    // Berita::factory(100)->create();
    // ProfilPejabat::factory(10)->create();

    ProfilSuperAdmin::create([
      'idUser' => '1',
      'namaSuperAdmin' => 'Cabang Dinas Pendidikan Wilayah 9',
      'alamatLengkap' => '-',
      'noHp' => '-',
      'email' => 'admin@gmail.com',
      'password' => Hash::make('password'),
      'lingkupKegiatan' => '-',
      'visi' => '-',
      'misi' => '-',
      'tugasPokok' => '-',
      'fungsi' => '-',
      'unitKerjaDibawahnya' => '-',
      'unitKerjaDibawahnya' => '-',
    ]);

    Sosmed::create([
      'namaMedsos' => 'Youtube',
      'urlImage' => 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
      'urlSosmed' => '#',
    ]);
    Sosmed::create([
      'namaMedsos' => 'Instagram',
      'urlImage' => 'https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg',
      'urlSosmed' => '#',
    ]);
    Sosmed::create([
      'namaMedsos' => 'Twitter',
      'urlImage' => 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
      'urlSosmed' => '#',
    ]);
    Sosmed::create([
      'namaMedsos' => 'Facebook',
      'urlImage' => 'https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg',
      'urlSosmed' => '#',
    ]);

    Sejarah::create([
      'idUser' => 1,
      'deskripsi' => '-',
    ]);

    Ikm::create([
      'dasarHukum' => '-',
      'pengertian' => '-',
    ]);
  }
}
