<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSekolahController extends Controller
{
  public function index(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Dashboard',
      'dataSekolah' => $sekolah
    ]);
  }

  public function profil()
  {
    return Inertia::render('AdminSekolah/Profil', [
      'title' => 'Profil',
    ]);
  }

  public function prestasi()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Prestasi',
    ]);
  }

  public function siswa()
  {
    return Inertia::render('AdminSekolah/Siswa', [
      'title' => 'Siswa',
    ]);
  }

  public function editProfilSekolah(Sekolah $sekolah) //edit profil sekolah
  {
    return Inertia::render('AdminSekolah/Profil/ProfilEdit', [
      'title' => 'Edit Profil',
      'dataSekolah' => $sekolah,
    ]);
  }

  public function updateProfilSekolah() //update profil sekolah
  {
    return Inertia::render('AdminSekolah/Siswa', [
      'title' => 'Siswa',
    ]);
  }
}
