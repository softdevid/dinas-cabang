<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Guru;
use App\Models\Prestasi;
use App\Models\Siswa;
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

  public function siswa(Request $request)
  {
    $siswa = Siswa::query();

    if ($request->has('search')) {
      $search = $request->query('search');
      $siswa->where('namaSiswa', 'like', '%' . $search . '%');
    }

    if ($request->has('kategoriBerita')) {
      $kategoriBerita = $request->query('kategoriBerita');
      if ($kategoriBerita === 'all') {
        $siswa->where(function ($query) {
          $query->where('kategoriBerita', 'berita')
            ->orWhere('kategoriBerita', 'informasi')
            ->orWhereNull('kategoriBerita');
        });
      } else {
        $siswa->where('kategoriBerita', $kategoriBerita);
      }
    }

    $siswa = $siswa->get();

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
