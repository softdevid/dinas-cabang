<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use App\Models\Sekolah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrestasiController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Prestasi/PrestasiIndex', [
      'title' => 'Prestasi',
      'dataSekolah' => $sekolah,
      'dataPrestasi' => $sekolah->prestasis()->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(Sekolah $sekolah)
  {
    return Inertia::render('AdminSekolah/Prestasi/PrestasiTambah', [
      'title' => 'Tambah Prestasi',
      'dataSekolah' => $sekolah,
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      'idSekolah' => 'required',
      'namaLomba' => 'required',
      'kategoriLomba' => 'required',
      'namaPeserta' => 'required',
      'statusPeserta' => 'required',
      'asalInstansi' => 'required',
      'penanggungJawab' => 'required',
      'targetCapaian' => 'required',
      'jadwalPelaksanaan' => 'required',
      'sumberAnggaran' => 'required',
      'tingkatPrestasi' => 'required',
    ]);

    Prestasi::create($data);
    return response()->json(['data' => 'Berhasil menambah prestasi']);
  }

  /**
   * Display the specified resource.
   */
  public function show(Prestasi $prestasi)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Sekolah $sekolah, Prestasi $prestasi)
  {
    return Inertia::render('AdminSekolah/Prestasi/PrestasiEdit', [
      'title' => 'Edit Prestasi',
      'dataSekolah' => $sekolah,
      'dataPrestasi' => $prestasi,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $idSekolah, $id)
  {
    $data = $request->validate([
      'idSekolah' => 'required',
      'namaLomba' => 'required',
      'kategoriLomba' => 'required',
      'namaPeserta' => 'required',
      'statusPeserta' => 'required',
      'asalInstansi' => 'required',
      'penanggungJawab' => 'required',
      'targetCapaian' => 'required',
      'jadwalPelaksanaan' => 'required',
      'sumberAnggaran' => 'required',
      'tingkatPrestasi' => 'required',
    ]);

    $prestasi = Prestasi::where(['id' => $id, 'idSekolah' => $idSekolah])->first();
    $prestasi->update($data);
    return response()->json(['data' => 'Berhasil diubah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($idSekolah, $id)
  {
    $prestasi = Prestasi::where(['id' => $id, 'idSekolah' => $idSekolah])->first();
    $prestasi->delete();
    return response()->json(['data' => 'Prestasi berhasil dihapus']);
  }
}
