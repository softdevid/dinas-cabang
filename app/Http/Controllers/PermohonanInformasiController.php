<?php

namespace App\Http\Controllers;

use App\Models\PermohonanInformasi;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PermohonanInformasiController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/PermohonanInformasi/PermohonanIndex', [
      'title' => 'Permohonan Informasi',
      'permohonan' => PermohonanInformasi::get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/PermohonanInformasi/PermohonanTambah', [
      'title' => 'Tambah Permohonan Informasi',
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      'namaPermohonan' => 'required|max:255',
      'pdfName' => 'required',
      'pdfUrl' => 'required'
    ]);

    PermohonanInformasi::create($data);
    return response()->json(['data' => 'Berhasil menambah formulir permohonan informasi']);
  }

  /**
   * Display the specified resource.
   */
  public function show(PermohonanInformasi $permohonanInformasi)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(PermohonanInformasi $permohonanInformasi)
  {
    return Inertia::render('SuperAdmin/PermohonanInformasi/PermohonanEdit', [
      'title' => 'Edit Permohonan Informasi',
      'permohonan' => PermohonanInformasi::where('id', $permohonanInformasi->id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, PermohonanInformasi $permohonanInformasi)
  {
    $data = $request->validate([
      'namaPermohonan' => 'required|max:255',
      'pdfName' => 'required',
      'pdfUrl' => 'required'
    ]);

    PermohonanInformasi::where('id', $permohonanInformasi->id)
      ->update($data);

    return response()->json(['data' => 'Berhasil mengubah formulir permohonan informasi']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(PermohonanInformasi $permohonanInformasi)
  {
    $permohonan = PermohonanInformasi::where('id', $permohonanInformasi->id)->first();
    Cloudinary::destroy($permohonan->pdfName);
    $permohonan->delete();

    return response()->json(['data' => 'Berhasil menghapus Formulir Permohonan Informasi']);
  }


  public function deletePDF(Request $request)
  {
    Cloudinary::destroy($request->pdfName);
    return response()->json(['data' => 'Berhasil menghapus PDF']);
  }
}
