<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;

class GuruController extends Controller
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
    $request->validate([
      'nip' => 'required',
      'namaGuru' => 'required',
      'mapel' => 'required',
      'jabatan' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'alamatLengkap' => 'required',
    ]);

    Guru::create([
      'idSekolah' => $request->idSekolah,
      'nip' => $request->nip,
      'namaGuru' => $request->namaGuru,
      'mapel' => $request->mapel,
      'jabatan' => $request->jabatan,
      'tglLahir' => $request->tglLahir,
      'jenisKelamin' => $request->jenisKelamin,
      'alamatLengkap' => $request->alamatLengkap,
    ]);

    return back()->with('message', 'Guru berhasil ditambah!');
  }

  /**
   * Display the specified resource.
   */
  public function show(Guru $guru)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Guru $guru)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Guru $guru, $id)
  {
    $request->validate([
      'nip' => 'required',
      'namaGuru' => 'required',
      'mapel' => 'required',
      'jabatan' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'alamatLengkap' => 'required',
    ]);

    Guru::where('id', $id)
      ->update([
        'idSekolah' => $request->idSekolah,
        'nip' => $request->nip,
        'namaGuru' => $request->namaGuru,
        'mapel' => $request->mapel,
        'jabatan' => $request->jabatan,
        'tglLahir' => $request->tglLahir,
        'jenisKelamin' => $request->jenisKelamin,
        'alamatLengkap' => $request->alamatLengkap,
      ]);

    return back()->with('message', 'Guru berhasil diubah!');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Guru $guru, $id)
  {
    $guru = Guru::where('id', $id)->first();
    $guru->delete();
    return back()->with('message', 'Guru berhasil dihapus!');
  }
}