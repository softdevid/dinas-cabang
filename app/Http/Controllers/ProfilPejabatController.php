<?php

namespace App\Http\Controllers;

use App\Models\ProfilPejabat;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilPejabatController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/ProfilPejabat/ProfilPejabatIndex', [
      'title' => 'Profil Pejabat',
      'profilPejabat' => ProfilPejabat::get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/ProfilPejabat/ProfilPejabatTambah', [
      'title' => 'Tambah Profil Pejabat',
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      'namaPejabat' => 'required',
      'jabatan' => 'required',
      'profil' => 'required',
      'pendidikan' => 'required',
      'karir' => 'required',
      'penghargaan' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'max:255',
    ], [
      'imgName' => 'Foto Pejabat harus diisi',
    ]);

    ProfilPejabat::create($data);
    return response()->json(['data' => 'Berhasil di tambah']);
  }

  /**
   * Display the specified resource.
   */
  public function show($id)
  {
    return Inertia::render('SuperAdmin/ProfilPejabat/ProfilPejabatShow', [
      'title' => 'Detail Pejabat',
      'profilPejabat' => ProfilPejabat::find($id),
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit($id)
  {
    return Inertia::render('SuperAdmin/ProfilPejabat/ProfilPejabatEdit', [
      'title' => 'Edit Pejabat',
      'profilPejabat' => ProfilPejabat::find($id),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $id)
  {
    $pejabat = ProfilPejabat::find($id);
    $data = $request->validate([
      'namaPejabat' => 'required',
      'jabatan' => 'required',
      'profil' => 'required',
      'pendidikan' => 'required',
      'karir' => 'required',
      'penghargaan' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'max:255',
    ], ['imgName.required' => 'Gambar harus ada']);

    $pejabat->update($data);
    return response()->json(['data' => 'Berhasil diubah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(ProfilPejabat $profilPejabat, $id)
  {
    $pejabat = ProfilPejabat::find($id);
    Cloudinary::destroy($pejabat->imgName);
    $pejabat->delete();
    return response()->json(['data' => 'Berhasil dihapus']);
  }
}
