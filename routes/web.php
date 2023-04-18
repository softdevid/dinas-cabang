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
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\SuperAdmin;
use App\Http\Controllers\SuperAdminController;

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

// Route::get('/dashboard', function () {
//   return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//   Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//   Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//   Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });



Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/profil-pejabat', [HomeController::class, 'profilPejabat'])->name('home.profilPejabat');
Route::get('/sejarah', [HomeController::class, 'sejarah'])->name('home.sejarah');
Route::get('/berita', [HomeController::class, 'berita'])->name('home.berita');
Route::get('/visi-misi', [HomeController::class, 'visiMisi'])->name('home.visiMisi');
Route::get('/galeri', [HomeController::class, 'galeri'])->name('home.galeri');
Route::get('/kalender-pendidikan', [HomeController::class, 'kalenderPendidikan'])->name('home.kalenderPendidikan');
Route::get('/daftar-informasi', [HomeController::class, 'daftarInformasi'])->name('home.daftarInformasi');
Route::get('/layanan-publik', [HomeController::class, 'layananPublik'])->name('home.layananPublik');
Route::get('/index-kepuasan-masyarakat', [HomeController::class, 'indexKepuasanMasyarakat'])->name('home.indexKepuasanMasyarakat');
Route::get('/formulir-pengaduan', [HomeController::class, 'formulirPengaduan'])->name('home.formulirPengaduan');
Route::get('/prestasi', [HomeController::class, 'prestasi'])->name('home.prestasi');
Route::get('/survey-kepuasan-masyarakat', [HomeController::class, 'surveyKepuasanMasyarakat'])->name('home.surveyKepuasanMasyarakat');

Route::prefix('/super-admin')->group(function () {
  Route::get('/', [SuperAdminController::class, 'index'])->name('super-admin.index');
  Route::get('/profil', [SuperAdminController::class, 'profil'])->name('super-admin.profil');
  Route::get('/prestasi', [SuperAdminController::class, 'prestasi'])->name('super-admin.prestasi');
  Route::get('/guru', [SuperAdminController::class, 'guru'])->name('super-admin.guru');
  Route::get('/siswa', [SuperAdminController::class, 'siswa'])->name('super-admin.siswa');

  //route edit profil superadmin
  Route::get('/profil/{id}/edit', [ProfilSuperAdminController::class, 'edit'])->name('profilSuperAdmin.edit');
  Route::patch('/profil/{id}', [ProfilSuperAdminController::class, 'update'])->name('profilSuperAdmin.update');

  Route::resource('berita', BeritaController::class);
  Route::resource('pejabat', ProfilPejabatController::class);
  Route::resource('sekolah', AkunSekolahController::class);

  //route tabs banner
  Route::get('/banner', [SuperAdminController::class, 'banner'])->name('super-admin.banner');
  Route::get('/banner/sejarah', [SuperAdminController::class, 'bannerSejarah'])->name('super-admin.banner.sejarah');
  Route::get('/banner/berita', [SuperAdminController::class, 'bannerBerita'])->name('super-admin.banner.berita');
  Route::get('/banner/galeri', [SuperAdminController::class, 'bannerGaleri'])->name('super-admin.banner.galeri');
});

Route::group([
  'prefix' => '/admin-sekolah/{sekolah:id}',
  // 'middleware' => ['auth', 'cek.idsekolah']
  'middleware' => ['cek.idsekolah']
], function () {
  Route::get('/', [AdminSekolahController::class, 'index'])->name('admin-sekolah.index');

  // route profil sekolah
  Route::get('/profil', [AdminSekolahController::class, 'profil'])->name('admin-sekolah.profil');
  Route::post('/profil/update', [AdminSekolahController::class, 'updateProfilSekolah'])->name('updateProfilSekolah');
  Route::get('/profil/{id}/edit', [AdminSekolahController::class, 'editProfilSekolah'])->name('editProfilSekolah');
  // Route::post('/delete-image', [AdminSekolahController::class, 'deleteImage'])->name('deleteImage');

  Route::resource('prestasi', PrestasiController::class);
  Route::resource('guru', GuruController::class);
  Route::resource('siswa', SiswaController::class);
});

// Route delete image in cloudinary
Route::post('/delete-image', [BeritaController::class, 'deleteImage']);
Route::post('/delete-image-organisasi', [ProfilSuperAdminController::class, 'deleteImgOrganisasi'])->name('deleteImgOrganisasi');
Route::post('/delete-image-visi', [ProfilSuperAdminController::class, 'deleteImgVisi'])->name('deleteImgVisi');
Route::post('/delete-image-misi', [ProfilSuperAdminController::class, 'deleteImgMisi'])->name('deleteImgMisi');
Route::post('/delete-image-logo', [ProfilSuperAdminController::class, 'deleteImgLogo'])->name('deleteImgLogo');

Route::get('/api/berita', [BeritaController::class, 'index']);

//delete image

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
