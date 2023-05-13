<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SuperAdminSiswaController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Siswa/Siswa', [
      'title' => 'Data Siswa',
      'siswa' => Siswa::limit(200)->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Siswa/SiswaTambah', [
      'title' => 'Tambah siswa',
      'dataSekolah' => Sekolah::select('id', 'namaSekolah')->get(),
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
      'agama' => 'required',
      'alamatLengkap' => 'required',
    ]);

    Siswa::create($data);
    return response()->json(['data' => 'Berhasil menambah siswa']);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Siswa $siswa)
  {
    return Inertia::render('SuperAdmin/Siswa/SiswaEdit', [
      'title' => 'Edit siswa',
      'dataSiswa' => Siswa::where('id', $siswa->id)->first(),
      'dataSekolah' => Sekolah::select('id', 'namaSekolah')->get(),
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
      'agama' => 'required',
      'alamatLengkap' => 'required',
    ], [
      'idSekolah.required' => 'Sekolah harus dipilih'
    ]);

    Siswa::where(['id' => $id])->update($data);
    return response()->json(['data' => 'Berhasil mengubah data siswa']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Siswa $siswa)
  {
    $siswa = Siswa::where(['id' => $siswa->id])->first();
    $siswa->delete();
    return response()->json(['data' => 'Berhasil menghapus data siswa']);
  }
}
