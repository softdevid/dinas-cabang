<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Sekolah;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class SuperAdminGuruController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $guru = DB::table('gurus')
      ->join('sekolahs', 'gurus.idSekolah', '=', 'sekolahs.id')
      ->select('sekolahs.*', 'gurus.*')
      ->orderBy('namaGuru', 'desc')
      ->get();

    return Inertia::render('SuperAdmin/Guru/Guru', [
      'title' => 'Data guru',
      'guru' => $guru,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Guru/GuruTambah', [
      'title' => 'Tambah guru',
      'dataSekolah' => Sekolah::orderBy('namaSekolah', 'asc')->select('namaSekolah', 'jenjang', 'id')->get(),
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'idSekolah' => 'required',
      'nip' => 'required',
      'namaGuru' => 'required',
      'mapel' => 'required',
      'jabatan' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'alamatLengkap' => 'required',
      'agama' => 'required',
      'email' => 'required',
      'noHp' => 'required',
    ], [
      'idSekolah.required' => 'Sekolah Harus diisi harus diisi',
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
      'agama' => $request->agama,
      'email' => $request->email,
      'noHp' => $request->noHp,
    ]);

    return response()->json(["data" => "Berhasil menambah guru"]);
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
  public function edit(Guru $guru)
  {
    return Inertia::render('SuperAdmin/Guru/GuruEdit', [
      'title' => 'Edit Guru',
      'guru' => Guru::find($guru->id),
      'dataSekolah' => Sekolah::orderBy('namaSekolah', 'asc')->select('id', 'namaSekolah', 'jenjang')->get(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Guru $guru)
  {
    $guru = Guru::where('id', $guru->id)->first();

    if ($request->email != $guru->email) {
      $request->validate(['email' => 'unique:gurus,email']);
    }

    $data = $request->validate([
      'idSekolah' => 'required',
      'nip' => 'required',
      'namaGuru' => 'required',
      'mapel' => 'required',
      'jabatan' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'alamatLengkap' => 'required',
      'email' => 'required',
      'noHp' => 'required',
      'agama' => 'required',
    ], [
      'idSekolah.required' => 'Sekolah harus dipilih',
    ]);

    $guru->update($data);
    return response()->json(['data' => 'Berhasil mengubah data guru']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Guru $guru)
  {
    $guru->where('id', $guru->id)->delete();
    return response()->json(['data' => 'Berhasil menghapus guru']);
  }
}
