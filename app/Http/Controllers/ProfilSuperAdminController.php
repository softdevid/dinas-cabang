<?php

namespace App\Http\Controllers;

use App\Models\ProfilSuperAdmin;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ProfilSuperAdminController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(ProfilSuperAdmin $profilSuperAdmin)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(ProfilSuperAdmin $profilSuperAdmin, $id)
  {
    return Inertia::render('SuperAdmin/ProfilSuperAdmin/ProfilEdit', [
      'title' => 'Edit Profil',
      'profil' => $profilSuperAdmin->where('id', $id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $id)
  {
    $profil = ProfilSuperAdmin::where('id', $id)->first();
    $user = User::where('id', $profil->idUser)->first();

    if ($profil->email != $request->email) {
      $request->validate(['email' => 'required|unique:users,email']);
    }

    $request->validate([
      'namaSuperAdmin' => 'required|max:255',
      'alamatLengkap' => 'required|max:500',
      'noHp' => 'required',
      'lingkupKegiatan' => 'required',
      'visi' => 'required',
      'misi' => 'required',
      'tugasPokok' => 'required',
      'fungsi' => 'required',
      'unitKerjaDibawahnya' => 'required',
      'logoImgName' => 'max:255',
      'logoImgUrl' => 'max:255',
      'visiImgName' => 'max:255',
      'visiImgUrl' => 'max:255',
      'misiImgName' => 'max:255',
      'misiImgUrl' => 'max:255',
      'organisasiImgName' => 'max:255',
      'organisasiImgUrl' => 'max:255',
    ]);

    if ($profil->visiImgName != $request->visiImgName) {
      Cloudinary::destroy($profil->visiImgName);
    }

    if ($profil->misiImgName != $request->misiImgName) {
      Cloudinary::destroy($profil->misiImgName);
    }

    if ($profil->organisasiImgName != $request->organisasiImgName) {
      Cloudinary::destroy($profil->organisasiImgName);
    }

    if ($profil->logoImgName != $request->logoImgName) {
      Cloudinary::destroy($profil->logoImgName);
    }

    DB::transaction(function () use ($profil, $user, $request) {
      $profil->update([
        'namaSekolah' => $request->namaSekolah,
        'alamatLengkap' => $request->alamatLengkap,
        'email' => $request->email,
        'noHp' => $request->noHp,
        'password' => $user->password ?? Hash::make($request->password),
        'lingkupKegiatan' => $request->lingkupKegiatan,
        'visi' => $request->visi,
        'misi' => $request->misi,
        'tugasPokok' => $request->tugasPokok,
        'fungsi' => $request->fungsi,
        'unitKerjaDibawahnya' => $request->unitKerjaDibawahnya,
        'sejarah' => $request->sejarah,
        'logoImgName' => $request->logoImgName,
        'logoImgUrl' => $request->logoImgUrl,
        'visiImgName' => $request->visiImgName,
        'visiImgUrl' => $request->visiImgUrl,
        'misiImgName' => $request->misiImgName,
        'misiImgUrl' => $request->misiImgUrl,
        'organisasiImgName' => $request->organisasiImgName,
        'organisasiImgUrl' => $request->organisasiImgUrl,
      ]);
      $user->update([
        'name' => $request->namaSuperAdmin,
        'email' => $request->email,
        'password' => $user->password ?? Hash::make($request->password),
      ]);
    });

    return response()->json(['data' => 'Profil berhasil diubah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(ProfilSuperAdmin $profilSuperAdmin)
  {
    //
  }

  public function deleteImgOrganisasi(Request $request)
  {
    Cloudinary::destroy($request->organisasiImgName);
    return response()->json(['data' => 'Berhasil menghapus gambar organisasi']);
  }

  public function deleteImgVisi(Request $request)
  {
    Cloudinary::destroy($request->visiImgName);
    return response()->json(['data' => 'Berhasil menghapus gambar visi']);
  }

  public function deleteImgMisi(Request $request)
  {
    Cloudinary::destroy($request->misiImgName);
    return response()->json(['data' => 'Berhasil menghapus gambar Mii']);
  }

  public function deleteImgLogo(Request $request)
  {
    Cloudinary::destroy($request->logoImgName);
    return response()->json(['data' => 'Berhasil menghapus gambar Logo']);
  }
}
