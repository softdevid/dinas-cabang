<?php

namespace App\Http\Controllers;

use App\Models\PermohonanInformasi;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
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
    if ($request->jenis === 'tambah') {
      $request->validate([
        'namaFormulir' => 'required|max:255',
        'file' => 'required|mimes:pdf',
      ]);

      if ($request->hasFile('file')) {
        $file = $request->file('file');
        $namaFile = $file->getClientOriginalName();
        $storagePath = $file->move('uploads/', $namaFile);

        $newFile = new PermohonanInformasi();
        $newFile->storagePath = $storagePath;
        $newFile->file = $namaFile;
        $newFile->namaFormulir = $request->namaFormulir;
        $newFile->save();

        return redirect()->to('/super-admin/permohonan-informasi')->with('message', 'Berhasil menambah');
        // return response()->json(['data' => 'Berhasil menambah']);
      }
    } else {
      if ($request->hasFile('file')) {
        $request->validate([
          'file' => 'required|mimes:pdf',
        ]);
      }
      if ($request->namaFormulir) {
        $request->validate([
          'namaFormulir' => 'required',
        ]);
      }

      $formulir = PermohonanInformasi::find($request->id);

      if ($request->hasFile('file')) {
        File::delete(public_path($formulir->storagePath));

        $newFile = $request->file('file');
        $namaFile = $newFile->getClientOriginalName();
        $storagePath = $newFile->move('uploads/', $namaFile);
      }

      if ($request->has('namaFormulir')) {
        $namaFormulir = $request->input('namaFormulir');
      }
      $formulir->update([
        'storagePath' => $storagePath ?? $formulir->storagePath,
        'file' => $file ?? $formulir->file,
        'namaFormulir' => $namaFormulir ?? $formulir->namaFormulir,
      ]);

      return redirect('/super-admin/permohonan-informasi')->with('message', 'Berhasil mengubah');
    }
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
  public function update(Request $request, $id)
  {
    //
  }


  public function downloadFile(Request $request, $id)
  {
    $data = PermohonanInformasi::find($id);
    return Storage::download($data->storagePath);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(PermohonanInformasi $permohonanInformasi)
  {
    $permohonan = PermohonanInformasi::where('id', $permohonanInformasi->id)->first();
    File::delete(public_path($permohonan->storagePath));
    $permohonan->delete();
    return response()->json(['data' => 'Berhasil menghapus Formulir Permohonan Informasi']);
  }


  public function deletePDF(Request $request)
  {
    Cloudinary::destroy($request->pdfName);
    return response()->json(['data' => 'Berhasil menghapus']);
  }
}
