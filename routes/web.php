<?php

use App\Http\Controllers\AdminSekolahController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
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
Route::get('/super-admin', [SuperAdminController::class, 'index'])->name('home.index');

Route::prefix('/admin-sekolah')->group(function () {
  Route::get('/', [AdminSekolahController::class, 'index'])->name('admin-sekolah.index');
  Route::get('/profil', [AdminSekolahController::class, 'profil'])->name('admin-sekolah.profil');
  Route::get('/prestasi', [AdminSekolahController::class, 'prestasi'])->name('admin-sekolah.prestasi');
  Route::get('/guru', [AdminSekolahController::class, 'guru'])->name('admin-sekolah.guru');
  Route::get('/siswa', [AdminSekolahController::class, 'siswa'])->name('admin-sekolah.siswa');
  Route::get('/berita', [AdminSekolahController::class, 'berita'])->name('admin-sekolah.berita');
});

// require __DIR__ . '/auth.php';
