<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrestasiController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $prestasi = Prestasi::latest()->paginate(10);
    return Inertia::render('', [
      'title' => 'Prestasi',
      'prestasi' => $prestasi,
    ]);
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
      'jenisPrestasi' => 'required',
    ]);

    Prestasi::create($data);
    return back()->with('message', 'Berhasil menambah Prestasi');
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
  public function edit(Prestasi $prestasi)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Prestasi $prestasi, $id)
  {
    $data = $request->validate([
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
      'jenisPrestasi' => 'required',
    ]);

    $prestasi = Prestasi::find($id);
    $prestasi->update($data);
    return back()->with('message', 'Berhasil menambah Prestasi');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Prestasi $prestasi, $id)
  {
    $prestasi = Prestasi::find($id);
    $prestasi->delete();
    return back()->with('message', 'Prestasi Berhasil dihapus!');
  }
}
