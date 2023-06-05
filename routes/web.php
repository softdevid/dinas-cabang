<?php

use App\Http\Controllers\AdminSekolahController;
use App\Http\Controllers\AkunSekolahController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PrestasiController;
use App\Http\Controllers\ProfilPejabatController;
use App\Http\Controllers\ProfilSuperAdminController;
use App\Http\Controllers\SejarahController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\SkmController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\IkmController;
use App\Http\Controllers\KalenderPendidikanController;
use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\LaporanPengaduanController;
use App\Http\Controllers\SuperAdminGuruController;
use App\Http\Controllers\SuperAdminPrestasiController;
use App\Http\Controllers\SuperAdminSiswaController;
use App\Http\Controllers\LayananPublikController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FormulirController;
use App\Http\Controllers\PermohonanInformasiController;
use App\Http\Controllers\SosmedController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/profil-pejabat', [HomeController::class, 'profilPejabat'])->name('home.profilPejabat');
Route::get('/sejarah', [HomeController::class, 'sejarah'])->name('home.sejarah');
Route::get('/berita', [HomeController::class, 'berita'])->name('home.berita');
Route::get('/berita/{berita:slug}', [HomeController::class, 'detailBerita'])->name('home.detailberita');
Route::get('/visi-misi', [HomeController::class, 'visiMisi'])->name('home.visiMisi');
Route::get('/kalender-pendidikan', [HomeController::class, 'kalenderPendidikan'])->name('home.kalenderPendidikan');
Route::get('/daftar-informasi', [HomeController::class, 'daftarInformasi'])->name('home.daftarInformasi');
Route::get('/layanan-publik', [HomeController::class, 'layananPublik'])->name('home.layananPublik');
Route::get('/index-kepuasan-masyarakat', [HomeController::class, 'indexKepuasanMasyarakat'])->name('home.indexKepuasanMasyarakat');
Route::get('/prestasi', [HomeController::class, 'prestasi'])->name('home.prestasi');
Route::get('/survey-kepuasan-masyarakat', [HomeController::class, 'surveyKepuasanMasyarakat'])->name('home.surveyKepuasanMasyarakat');
Route::get('/formulir-pengaduan', [HomeController::class, 'formulirPengaduan'])->name('home.formulirPengaduan');
Route::post('/formulir-pengaduan', [LaporanPengaduanController::class, 'store'])->name('home.formulirPengaduan.store');

Route::get('/permohonan-informasi', [HomeController::class, 'pemohonanInformasi'])->name('home.pemohonanInformasi');

Route::get('/galeri', [HomeController::class, 'galerifoto'])->name('home.galerifoto');
Route::get('/galeri-infografis', [HomeController::class, 'galeriinfografis'])->name('home.galeriinfografis');

Route::group([
  'prefix' => '/super-admin',
  // 'middleware' => ['auth', 'verified']
  'middleware' => ['cek.idsekolah']
], function () {
  Route::get('/', [SuperAdminController::class, 'index'])->name('super-admin.index');
  Route::get('/profil', [SuperAdminController::class, 'profil'])->name('super-admin.profil');
  Route::get('/prestasi', [SuperAdminController::class, 'prestasi'])->name('super-admin.prestasi');


  //route edit profil superadmin
  Route::get('/profil/{id}/edit', [ProfilSuperAdminController::class, 'edit'])->name('profilSuperAdmin.edit');
  Route::patch('/profil/{id}', [ProfilSuperAdminController::class, 'update'])->name('profilSuperAdmin.update');

  Route::resource('prestasi', SuperAdminPrestasiController::class);
  Route::resource('guru', SuperAdminGuruController::class);
  Route::resource('siswa', SuperAdminSiswaController::class);
  Route::resource('berita', BeritaController::class);
  Route::resource('pejabat', ProfilPejabatController::class);
  Route::resource('sekolah', AkunSekolahController::class);
  Route::resource('sejarah', SejarahController::class);
  Route::resource('banner', BannerController::class);
  Route::resource('galeri', GaleriController::class);
  Route::resource('kalender-pendidikan', KalenderPendidikanController::class);
  Route::resource('index-kepuasan-masyarakat', IkmController::class);
  Route::resource('pengaduan', LaporanPengaduanController::class);
  Route::resource('skm', SkmController::class);
  Route::resource('layanan-publik', LayananPublikController::class);
  Route::resource('event', EventController::class);
  Route::resource('sosmed', SosmedController::class);

  Route::resource('permohonan-informasi', PermohonanInformasiController::class);
  // Route::resource('formulir', FormulirController::class);

  Route::post('/formulir-update', [FormulirController::class, 'updateFormulir'])->name('updateFormulir');

  //route tabs banner
  Route::get('/banner', [SuperAdminController::class, 'banner'])->name('super-admin.banner');
  Route::get('/banner-sejarah', [SuperAdminController::class, 'bannerSejarah'])->name('super-admin.banner.sejarah');
  Route::get('/banner-berita', [SuperAdminController::class, 'bannerBerita'])->name('super-admin.banner.berita');
  Route::get('/banner-galeri', [SuperAdminController::class, 'bannerGaleri'])->name('super-admin.banner.galeri');


  //delete image in layanan publik
  Route::post('/delete-image-cover', [LayananPublikController::class, 'deleteImageCover'])->name('deleteImageCover');
  Route::post('/delete-image1', [LayananPublikController::class, 'deleteImage1'])->name('deleteImage1');
  Route::post('/delete-image2', [LayananPublikController::class, 'deleteImage2'])->name('deleteImage2');
  Route::post('/delete-image3', [LayananPublikController::class, 'deleteImage3'])->name('deleteImage3');

  Route::post('/delete-pdf', [PermohonanInformasiController::class, 'deletePDF'])->name('deletePDF');
});

Route::group([
  'prefix' => '/admin-sekolah/{sekolah:kode}',
  'middleware' => ['auth', 'cek.idsekolah']
  // 'middleware' => ['cek.idsekolah']
], function () {
  Route::get('/', [AdminSekolahController::class, 'index'])->name('admin-sekolah.index');
  Route::redirect('/', '/admin-sekolah/{sekolah:kode}/profil');

  // route profil sekolah
  Route::get('/profil', [AdminSekolahController::class, 'profil'])->name('admin-sekolah.profil');
  Route::post('/profil/update', [AdminSekolahController::class, 'updateProfilSekolah'])->name('admin-sekolah.profil.update');
  Route::get('/profil/{id}/edit', [AdminSekolahController::class, 'editProfilSekolah'])->name('admin-sekolah.profil.edit');

  // Route::resource('prestasi', PrestasiController::class);
  Route::resource('prestasi', PrestasiController::class)->parameters([
    'prestasi' => 'id'
  ])->names([
    'index' => 'admin-sekolah.prestasi.index',
    'create' => 'admin-sekolah.prestasi.create',
    'store' => 'admin-sekolah.prestasi.store',
    'show' => 'admin-sekolah.prestasi.show',
    'edit' => 'admin-sekolah.prestasi.edit',
    'update' => 'admin-sekolah.prestasi.update',
    'destroy' => 'admin-sekolah.prestasi.destroy',
  ]);

  // Route::resource('guru', GuruController::class);
  Route::resource('guru', GuruController::class)->parameters([
    'guru' => 'id'
  ])->names([
    'index' => 'admin-sekolah.guru.index',
    'create' => 'admin-sekolah.guru.create',
    'store' => 'admin-sekolah.guru.store',
    'show' => 'admin-sekolah.guru.show',
    'edit' => 'admin-sekolah.guru.edit',
    'update' => 'admin-sekolah.guru.update',
    'destroy' => 'admin-sekolah.guru.destroy',
  ]);

  // Route::resource('siswa', SiswaController::class);
  Route::resource('siswa', SiswaController::class)->parameters([
    'siswa' => 'id'
  ])->names([
    'index' => 'admin-sekolah.siswa.index',
    'create' => 'admin-sekolah.siswa.create',
    'store' => 'admin-sekolah.siswa.store',
    'show' => 'admin-sekolah.siswa.show',
    'edit' => 'admin-sekolah.siswa.edit',
    'update' => 'admin-sekolah.siswa.update',
    'destroy' => 'admin-sekolah.siswa.destroy',
  ]);
});

// Route delete image in cloudinary
Route::post('/delete-image', [BeritaController::class, 'deleteImage']);
Route::post('/delete-image-organisasi', [ProfilSuperAdminController::class, 'deleteImgOrganisasi'])->name('deleteImgOrganisasi');
Route::post('/delete-image-visi', [ProfilSuperAdminController::class, 'deleteImgVisi'])->name('deleteImgVisi');
Route::post('/delete-image-misi', [ProfilSuperAdminController::class, 'deleteImgMisi'])->name('deleteImgMisi');
Route::post('/delete-image-logo', [ProfilSuperAdminController::class, 'deleteImgLogo'])->name('deleteImgLogo');
Route::post('/delete-image-sejarah', [SejarahController::class, 'deleteImgSejarah'])->name('deleteImgSejarah');

Route::post('/delete-image1-event', [EventController::class, 'deleteImage1'])->name('deleteImage1.event');
Route::post('/delete-image2-event', [EventController::class, 'deleteImage2'])->name('deleteImage2.event');

//data api
Route::get('/api/berita', [BeritaController::class, 'index']);
Route::get('/data-prestasi-olahraga', [HomeController::class, 'dataPrestasiOlahraga']);
Route::get('/data-prestasi-senibudaya', [HomeController::class, 'dataPrestasiSenibudaya']);
Route::get('/data-prestasi-teknologi', [HomeController::class, 'dataPrestasiTeknologi']);
Route::get('/data-prestasi-sosial', [HomeController::class, 'dataPrestasiIlmusosial']);
Route::get('/api/data-superadmin', [HomeController::class, 'dataSuperadmin'])->name('home.dataSuperadmin');
Route::get('/api/data-sosmed', [SosmedController::class, 'dataSosmed'])->name('dataSosmed');
Route::get('/api/data', [HomeController::class, 'data'])->name('data');

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
