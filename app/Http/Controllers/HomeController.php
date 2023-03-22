<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    return Inertia::render('Home/Index', [
      'title' => 'Dinas Cabang',
    ]);
  }

  public function profilPejabat()
  {
    return Inertia::render('Home/ProfilPejabat', [
      'title' => 'Profil Pejabat',
    ]);
  }

  public function sejarah()
  {
    return Inertia::render('Home/Sejarah', [
      'title' => 'Sejarah',
    ]);
  }

  public function berita()
  {
    return Inertia::render('Home/Berita', [
      'title' => 'Berita',
    ]);
  }

  public function visiMisi()
  {
    return Inertia::render('Home/VisiMisi', [
      'title' => 'Visi dan Misi',
    ]);
  }

  public function galeri()
  {
    return Inertia::render('Home/Galeri', [
      'title' => 'Galeri',
    ]);
  }
}
