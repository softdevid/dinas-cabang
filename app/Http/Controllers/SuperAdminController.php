<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Guru;
use App\Models\Prestasi;
use App\Models\Sekolah;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SuperAdminController extends Controller
{

  public function index()
  {
    return Inertia::render('SuperAdmin/Index', [
      'title' => 'Dashboard',
      'prestasiCount' => Prestasi::count(),
      'beritaCount' => Berita::count(),
      'siswaCount' => Siswa::count(),
      'guruCount' => Guru::count(),
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
      'prestasi' => Prestasi::latest()->get(),
    ]);
  }

  public function guru()
  {
    return Inertia::render('SuperAdmin/Guru', [
      'title' => 'Guru',
      'guru' => Guru::orderBy('namaGuru', 'desc')->get(),
    ]);
  }

  public function siswa(Request $request, Sekolah $sekolah)
  {
    $siswa = DB::table('sekolahs')
      ->join('siswas', 'siswas.idSekolah', '=', 'sekolahs.id')
      ->select('sekolahs.namaSekolah', 'siswas.*')
      ->orderBy('sekolahs.created_at', 'desc')
      ->get();

    return Inertia::render('SuperAdmin/Siswa', [
      'title' => 'Siswa',
      'siswa' => $siswa,
    ]);
  }

  public function berita()
  {

    $berita = Berita::orderBy('created_at', 'desc')->get();
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
