<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    return Inertia::render('Home/Index', [
      'title' => 'Homepage',
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

  public function kalenderPendidikan()
  {
    return Inertia::render('Home/KalenderPendidikan', [
      'title' => 'Kalender Pendidikan',
    ]);
  }

  public function layananPublik()
  {
    return Inertia::render('Home/LayananPublik', [
      'title' => 'Layanan Publik',
    ]);
  }

  public function daftarInformasi()
  {
    return Inertia::render('Home/DaftarInformasi', [
      'title' => 'Daftar Informasi Dinas',
    ]);
  }

  public function indexKepuasanMasyarakat()
  {
    return Inertia::render('Home/IndexKepuasanMasyarakat', [
      'title' => 'Index Kepuasan Masyarakat',
    ]);
  }

  public function formulirPengaduan()
  {
    return Inertia::render('Home/FormulirPengaduan', [
      'title' => 'Formulir Pengaduan',
    ]);
  }

  public function prestasi()
  {
    return Inertia::render('Home/Prestasi', [
      'title' => 'Prestasi',
    ]);
  }

  public function surveyKepuasanMasyarakat()
  {
    return Inertia::render('Home/SurveyKepuasanMasyarakat', [
      'title' => 'Survey Kepuasan Masyarakat',
    ]);
  }
}
