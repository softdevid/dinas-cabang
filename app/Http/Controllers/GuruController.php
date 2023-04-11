<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Sekolah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Guru/GuruIndex', [
      'title' => 'Guru',
      'dataSekolah' => $sekolah,
      'dataGuru' => $sekolah->gurus()->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Guru/GuruTambah', [
      'title' => 'Tambah Guru',
      'dataSekolah' => $sekolah,
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $idSekolah = $request->idSekolah;
    $request->validate([
      'nip' => 'required',
      'namaGuru' => 'required',
      'mapel' => 'required',
      'jabatan' => 'required',
      'tglLahir' => 'required',
      'jenisKelamin' => 'required',
      'alamatLengkap' => 'required',
    ], [
      'nip.required' => 'NIP harus diisi',
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

    // return redirect()->to('/admin-sekolah/' . $idSekolah . '/guru')->with('message', 'Guru berhasil ditambah!');
    return response()->json(["data" => "Berhasil menambah guru"]);
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
  public function edit(Sekolah $sekolah, Guru $guru)
  {
    return Inertia::render('AdminSekolah/Guru/GuruEdit', [
      'title' => 'Guru Edit',
      'dataSekolah' => $sekolah,
      'dataGuru' => $guru,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $idSekolah, $nip)
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

    Guru::where(['nip' => $nip, 'idSekolah' => $idSekolah])
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

    return response()->json(['data' => 'Berhasi diubah']);
    // return back()->with('message', 'Guru berhasil diubah!');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($idSekolah, $nip)
  {
    $guru = Guru::where('idSekolah', $idSekolah)->where('nip', $nip)->firstOrFail();
    // $guru = Guru::where('id', $id)->findOrFail();
    // dd($guru);

    $guru->delete();

    return response()->json([
      'message' => 'Data guru berhasil dihapus'
    ]);
    // $guru = Guru::where('nip', $nip)->first();
    // $guru->delete();
    // return response()->json(['data' => 'Guru berhasil dihapus']);
  }
}
