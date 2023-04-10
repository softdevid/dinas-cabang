<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SuperAdminController extends Controller
{

  public function index()
  {
    return Inertia::render('SuperAdmin/Index', [
      'title' => 'Dashboard',
    ]);
  }
  public function profil()
  {
    return Inertia::render('SuperAdmin/Profile', [
      'title' => 'Profile',
    ]);
  }

  public function prestasi()
  {
    return Inertia::render('SuperAdmin/Prestasi', [
      'title' => 'Prestasi Sekolah',
    ]);
  }

  public function guru()
  {
    return Inertia::render('SuperAdmin/Guru', [
      'title' => 'Guru',
    ]);
  }

  public function siswa()
  {
    return Inertia::render('SuperAdmin/Siswa', [
      'title' => 'Siswa',
    ]);
  }

  public function berita()
  {
    // $berita = Berita::latest()->paginate(20);
    $berita = Berita::orderBy('created_at', 'desc')->get();
    // dd($berita);
    return Inertia::render('SuperAdmin/Berita/Index', [
      'title' => 'Berita',
      'berita' => $berita,
    ]);
  }


  //function halaman banner
  public function banner() //banner halaman utama
  {
    return Inertia::render('SuperAdmin/Banner/Utama', [
      'title' => 'Banner Halaman Utama',
    ]);
  }

  public function bannerSejarah() //banner halaman sejarah
  {
    return Inertia::render('SuperAdmin/Banner/Sejarah', [
      'title' => 'Banner Halaman Sejarah',
    ]);
  }

  public function bannerBerita() //banner halaman berita
  {
    return Inertia::render('SuperAdmin/Banner/Berita', [
      'title' => 'Banner Halaman Berita',
    ]);
  }

  public function bannerGaleri() //banner halaman galeri
  {
    return Inertia::render('SuperAdmin/Banner/Galeri', [
      'title' => 'Banner Halaman Galeri',
    ]);
  }
}
