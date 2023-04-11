<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiswaController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Siswa/SiswaIndex', [
      'title' => 'Siswa',
      'dataSekolah' => $sekolah,
      'dataSiswa' => $sekolah->siswas()->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Siswa/SiswaTambah', [
      'title' => 'Tambah Siswa',
      'dataSekolah' => $sekolah,
    ]);
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
      'jurusan' => 'max:255',
      'alamatLengkap' => 'required',
    ]);

    Siswa::create($data);
    return response()->json(['data' => 'Berhasil menambah siswa']);
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
  public function edit(Sekolah $sekolah, Siswa $siswa)
  {
    return Inertia::render('AdminSekolah/Siswa/SiswaEdit', [
      'title' => 'Siswa Edit',
      'dataSekolah' => $sekolah,
      'dataSiswa' => $siswa,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $id)
  {
    $data = $request->validate([
      'nisn' => 'required',
      'nis' => 'required',
      'idSekolah' => 'required',
      'namaSiswa' => 'required',
      'kelas' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'jurusan' => 'max:255',
      'alamatLengkap' => 'required',
    ]);

    Siswa::where('id', $id)->update($data);
    return response()->json(['data' => 'Berhasil mengubah data siswa']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($idSekolah, $id)
  {
    $siswa = Siswa::where(['id' => $id, 'idSekolah' => $idSekolah])->first();
    $siswa->delete();
    return response()->json(['data' => 'Berhasil menghapus data siswa']);
  }
}
