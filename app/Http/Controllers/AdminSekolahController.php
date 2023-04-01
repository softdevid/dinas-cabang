<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSekolahController extends Controller
{
  public function index()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Dashboard',
    ]);
  }

  public function profil()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Profil',
    ]);
  }

  public function prestasi()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Prestasi',
    ]);
  }

  public function guru()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Guru',
    ]);
  }

  public function siswa()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Siswa',
    ]);
  }

  public function berita()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Berita',
    ]);
  }

}
