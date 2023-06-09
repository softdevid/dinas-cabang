<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Prestasi;
use App\Models\Sekolah;
use App\Models\Siswa;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminSekolahController extends Controller
{
  public function index(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Dashboard',
      'dataSekolah' => $sekolah,
      'prestasiCount' => Prestasi::where('idSekolah', $sekolah->id)->count(),
      'siswaCount' => Siswa::where('idSekolah', $sekolah->id)->count(),
      'guruCount' => Guru::where('idSekolah', $sekolah->id)->count(),
    ]);
  }

  public function profil(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Profil/ProfilIndex', [
      'title' => 'Profil',
      'dataSekolah' => $sekolah,
      'prestasiCount' => Prestasi::where('idSekolah', $sekolah->id)->count(),
      'siswaCount' => Siswa::where('idSekolah', $sekolah->id)->count(),
      'guruCount' => Guru::where('idSekolah', $sekolah->id)->count(),
    ]);
  }

  public function prestasi()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Prestasi',
    ]);
  }

  public function siswa()
  {
    return Inertia::render('AdminSekolah/Siswa', [
      'title' => 'Siswa',
    ]);
  }

  public function editProfilSekolah(Sekolah $sekolah) //edit profil sekolah
  {
    return Inertia::render('AdminSekolah/Profil/ProfilEdit', [
      'title' => 'Edit Profil',
      'dataSekolah' => $sekolah,
    ]);
  }

  public function updateProfilSekolah(Request $request, $id) //update profil sekolah
  {
    $sekolah = Sekolah::where(['id' => $request->idSekolah])->first();
    $user = User::where(['id' => $request->idUser])->first();

    if ($request->email != $sekolah->email) {
      $request->validate(['email' => 'required|unique:sekolahs,email']);
    }

    $request->validate(
      [
        'namaSekolah' => 'required|max:255',
        'visi' => 'required|max:500',
        'misi' => 'required|max:500',
        'noHp' => 'required|max:255',
        'alamatLengkap' => 'required|max:500',
        'imgName' => 'required',
        'jenjang' => 'required',
        'website' => 'max:255',
      ],
      [
        'imgName.required' => 'Logo harus ada',
      ]
    );


    DB::transaction(function () use ($sekolah, $user, $request) {
      $sekolah->update([
        'namaSekolah' => $request->namaSekolah,
        'visi' => $request->visi,
        'misi' => $request->misi,
        'noHp' => $request->noHp,
        'email' => $request->email,
        'password' => $sekolah->password ?? Hash::make($request->password),
        'alamatLengkap' => $request->alamatLengkap,
        'jenjang' => $request->jenjang,
        'imgName' => $request->imgName,
        'imgUrl' => $request->imgUrl,
        'website' => $request->website,
      ]);

      $user->update([
        'name' => $request->namaSekolah,
        'email' => $request->email,
        'password' => $user->password ?? Hash::make($request->password),
      ]);
    });

    return response()->json(['data' => 'Berhasil diupdate']);
  }

  public function deleteImage(Request $request)
  {
    Cloudinary::destroy($request->imgName);
    return response()->json(['data' => 'Gambar Logo berhasil dihapus']);
  }
}
