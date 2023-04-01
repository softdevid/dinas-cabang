<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
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
    $data = $request->validate([
      'nisn' => 'required',
      'nis' => 'required',
      'idSekolah' => 'required',
      'namaSiswa' => 'required',
      'kelas' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'alamatLengkap' => 'required',
    ]);

    Siswa::create($data);
    return back()->with('message', 'Berhasil di tambah');
  }

  /**
   * Display the specified resource.
   */
  public function show(Siswa $siswa)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Siswa $siswa)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Siswa $siswa, $id)
  {
    $data = $request->validate([
      'nisn' => 'required',
      'nis' => 'required',
      'idSekolah' => 'required',
      'namaSiswa' => 'required',
      'kelas' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'alamatLengkap' => 'required',
    ]);

    Siswa::where('id', $id)->update($data);
    return back()->with('message', 'Berhasil di tambah');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Siswa $siswa, $id)
  {
    $siswa = Siswa::where('id', $id)->first();
    $siswa->delete();
    return back()->with('message', 'Siswa berhasil dihapus');
  }
}
