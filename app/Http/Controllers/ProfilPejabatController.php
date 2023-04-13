<?php

namespace App\Http\Controllers;

use App\Models\ProfilPejabat;
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
  public function show(ProfilPejabat $profilPejabat)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(ProfilPejabat $profilPejabat)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, ProfilPejabat $profilPejabat, $id)
  {
    $pejabat = ProfilPejabat::find($id);
    $data = $request->validate([
      'namaPejabat' => 'required',
      'jabatan' => 'required',
      'profil' => 'required',
      'pendidikan' => 'required',
      'karir' => 'required',
      'penghargaan' => 'required',
    ]);

    $pejabat->update($data);
    return back()->with('Berhasil di ubah');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(ProfilPejabat $profilPejabat, $id)
  {
    $pejabat = ProfilPejabat::find($id);
    $pejabat->delete();
    return back()->with('message', 'Berhasil dihapus');
  }
}
