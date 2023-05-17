<?php

namespace App\Http\Controllers;

use App\Models\Prestasi;
use App\Models\Sekolah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SuperAdminPrestasiController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $prestasi = DB::table('prestasis')
      ->join('sekolahs', 'prestasis.idSekolah', '=', 'sekolahs.id')
      ->select('sekolahs.*', 'prestasis.*')
      ->limit(100)
      ->get();

    return Inertia::render('SuperAdmin/Prestasi/Prestasi', [
      'title' => 'Prestasi',
      'prestasi' => $prestasi,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Prestasi/PrestasiTambah', [
      'title' => 'Tambah Prestasi',
      'dataSekolah' => Sekolah::select('id', 'namaSekolah')->get(),
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $sekolah = Sekolah::where('id', $request->idSekolah)->select('namaSekolah')->first();
    $data = $request->validate([
      'idSekolah' => 'required',
      'namaLomba' => 'required',
      'kategoriLomba' => 'required',
      'namaPeserta' => 'required',
      'statusPeserta' => 'required',
      'penanggungJawab' => 'required',
      'targetCapaian' => 'required',
      'jadwalPelaksanaan' => 'required',
      'sumberAnggaran' => 'required',
      'tingkatPrestasi' => 'required',
    ], [
      'idSekolah.required' => 'Sekolah harus dipilih',
    ]);
    $data['asalInstansi'] = $sekolah->namaSekolah;

    Prestasi::create($data);
    return response()->json(['data' => 'Berhasil menambah prestasi']);
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
  public function edit(Prestasi $prestasi)
  {
    return Inertia::render('SuperAdmin/Prestasi/PrestasiEdit', [
      'title' => 'Edit Prestasi',
      'dataSekolah' => Sekolah::select('id', 'namaSekolah')->get(),
      'prestasi' => Prestasi::where('id', $prestasi->id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Prestasi $prestasi)
  {
    $sekolah = Sekolah::where('id', $request->idSekolah)->select('namaSekolah')->first();
    $data = $request->validate([
      'idSekolah' => 'required',
      'namaLomba' => 'required',
      'kategoriLomba' => 'required',
      'namaPeserta' => 'required',
      'statusPeserta' => 'required',
      'penanggungJawab' => 'required',
      'targetCapaian' => 'required',
      'jadwalPelaksanaan' => 'required',
      'sumberAnggaran' => 'required',
      'tingkatPrestasi' => 'required',
    ], [
      'idSekolah.required' => 'Sekolah harus dipilih',
    ]);
    $data['asalInstansi'] = $sekolah->namaSekolah;

    Prestasi::where('id', $prestasi->id)->update($data);
    return response()->json(['data' => 'Berhasil menambah prestasi']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Prestasi $prestasi)
  {
    Prestasi::where('id', $prestasi->id)
      ->delete();
    return response()->json(['data' => 'Berhasil menghapus Prestasi']);
  }
}
