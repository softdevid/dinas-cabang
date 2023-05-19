<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Berita;
use App\Models\Galeri;
use App\Models\Ikm;
use App\Models\KalenderPendidikan;
use App\Models\LayananPublik;
use App\Models\Sejarah;
use App\Models\Sekolah;
use App\Models\Event;
use App\Models\Prestasi;
use App\Models\ProfilPejabat;
use App\Models\ProfilSuperAdmin;
use App\Models\PermohonanInformasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    return Inertia::render('Home/Index', [
      'title' => 'Homepage',
      'superadmin' => ProfilSuperAdmin::first(),
      'banner' => Banner::where('jenisBanner', 'utama')->first() ?? '',
      'berita' => Berita::latest()->first() ?? '',
      'galeri' => Galeri::where('jenis', 'foto')->paginate(3) ?? '',
      'event' => Event::get(),
    ]);
  }

  public function profilPejabat()
  {
    return Inertia::render('Home/ProfilPejabat', [
      'title' => 'Profil Pejabat',
      'pejabat' => ProfilPejabat::get(),
      'superadmin' => ProfilSuperAdmin::select('logoImgUrl')->first(),
    ]);
  }

  public function sejarah()
  {
    return Inertia::render('Home/Sejarah', [
      'title' => 'Sejarah',
      'sejarah' => Sejarah::first(),
      'banner' => Banner::where('jenisBanner', 'sejarah')->select('imgUrl')->first() ?? '',
    ]);
  }

  public function berita()
  {
    $berita = DB::table('beritas')
      ->select('beritas.*', DB::raw('created_at, "%d-%m-%Y %H"'))
      ->limit(100)
      ->get();

    return Inertia::render('Home/Berita', [
      'title' => 'Berita',
      'berita' => $berita,
      'banner' => Banner::where('jenisBanner', 'berita')->select('imgUrl')->first() ?? '',
    ]);
  }

  public function detailBerita($slug)
  {
    $berita = DB::table('beritas')
      ->select('beritas.*', DB::raw('created_at, "%d-%m-%Y %H"'))
      ->where('slug', $slug)
      ->first();

    $beritas = DB::table('beritas')
      ->select('beritas.*', DB::raw('created_at, "%d-%m-%Y %H"'))
      ->orderBy('created_at', 'desc')
      ->paginate(3);

    return Inertia::render('Home/DetailBerita', [
      'title' => 'Berita',
      'berita' => $berita,
      'beritas' => $beritas,
      // 'banner' => Banner::where('jenisBanner', 'berita')->select('imgUrl')->first() ?? '',
    ]);
  }

  public function visiMisi()
  {
    return Inertia::render('Home/VisiMisi', [
      'title' => 'Visi dan Misi',
      'superadmin' => ProfilSuperAdmin::select('visi', 'misi')->first(),
    ]);
  }

  public function pemohonanInformasi()
  {
    return Inertia::render('Home/PermohonanInformasi', [
      'title' => 'Formulir Permohonan Informasi',
      'superadmin' => ProfilSuperAdmin::select('logoImgUrl')->first(),
      'permohonan' => PermohonanInformasi::get(),
    ]);
  }

  public function galerifoto()
  {
    return Inertia::render('Home/Galeri/GaleriFoto', [
      'title' => 'Galeri Foto',
      'foto' => Galeri::where('jenis', 'foto')->get() ?? '',
      'banner' => Banner::where('jenisBanner', 'galeri')->first() ?? '',
    ]);
  }

  public function galeriinfografis()
  {
    return Inertia::render('Home/Galeri/GaleriInfografis', [
      'title' => 'Galeri Infografis',
      'infografis' => Galeri::where('jenis', 'infografis')->get() ?? '',
      'banner' => Banner::where('jenisBanner', 'galeri')->first() ?? '',
    ]);
  }

  public function kalenderPendidikan()
  {
    return Inertia::render('Home/KalenderPendidikan', [
      'title' => 'Kalender Pendidikan',
      'kalenderPendidikan' => KalenderPendidikan::where('statusKalender', 'Aktif')->get(),
      'superadmin' => ProfilSuperAdmin::select('logoImgUrl')->first(),
    ]);
  }

  public function layananPublik()
  {
    return Inertia::render('Home/LayananPublik', [
      'title' => 'Layanan Publik',
      'layanan' => LayananPublik::get(),
    ]);
  }

  public function daftarInformasi()
  {
    return Inertia::render('Home/DaftarInformasi', [
      'title' => 'Daftar Informasi Dinas',
      'superadmin' => ProfilSuperAdmin::first(),
    ]);
  }

  public function indexKepuasanMasyarakat()
  {
    return Inertia::render('Home/IndexKepuasanMasyarakat', [
      'title' => 'Index Kepuasan Masyarakat',
      'dataIkm' => Ikm::first() ?? '',
      'superadmin' => ProfilSuperAdmin::select('logoImgUrl')->first(),
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
      'prestasiOlahraga' => Prestasi::where('kategoriLomba', 'Olahraga')->paginate(5),
      'prestasiSenibudaya' => Prestasi::where('kategoriLomba', 'Seni budaya')->paginate(5),
      'prestasiTeknologi' => Prestasi::where('kategoriLomba', 'Teknologi')->paginate(5),
      'prestasiIlmusosial' => Prestasi::where('kategoriLomba', 'Ilmu Sosial')->paginate(5),
      'superadmin' => ProfilSuperAdmin::select('logoImgUrl')->first(),
    ]);
  }

  public function surveyKepuasanMasyarakat()
  {
    return Inertia::render('Home/SurveyKepuasanMasyarakat', [
      'title' => 'Survey Kepuasan Masyarakat',
    ]);
  }


  //data api profil superadmin
  public function dataSuperadmin()
  {
    $data = ProfilSuperAdmin::first();
    return response()->json($data);
  }

  //data api untuk prestasi halaman utama
  function dataPrestasiOlahraga()
  {
    $prestasiOlahraga = DB::table('prestasis')
      ->join('sekolahs', 'prestasis.idSekolah', '=', 'sekolahs.id')
      ->select('prestasis.*', 'sekolahs.website as website')
      ->where('prestasis.kategoriLomba', 'Olahraga')
      ->orderBy('created_at', 'desc')
      ->paginate(5);

    return response()->json($prestasiOlahraga);
  }

  function dataPrestasiSenibudaya()
  {
    $prestasiSenibudaya = Prestasi::where('kategoriLomba', 'Seni budaya')->paginate(5);
    return response()->json($prestasiSenibudaya);
  }
  function dataPrestasiTeknologi()
  {
    $teknologi = Prestasi::where('kategoriLomba', 'Teknologi')->paginate(5);
    return response()->json($teknologi);
  }

  function dataPrestasiIlmusosial()
  {
    $sosial = Prestasi::where('kategoriLomba', 'Ilmu Sosial')->paginate(5);
    return response()->json($sosial);
  }

  public function data()
  {
    $sekolah = Sekolah::where('idUser', auth()->user()->id)->first();
    return response()->json($sekolah);
  }
}
