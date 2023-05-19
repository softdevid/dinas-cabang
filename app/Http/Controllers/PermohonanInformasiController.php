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
    // $request->validate([
    //   'namaPermohonan' => 'required|max:255',
    //   'file' => 'required|mimes:docx,pdf',
    // ]);

    // if ($request->hasFile('file')) {
    //   $file = $request->file('file');
    //   $fileName = $file->getClientOriginalName();

    //   // Pindahkan file ke direktori tujuan
    //   $request->file('file')->store('uploads');

    //   // Simpan data ke database
    //   $fileData = [
    //     'namaPermohonan' => $request->namaPermohonan,
    //     'fileName' => $fileName,
    //   ];

    //   PermohonanInformasi::create($fileData);

    //   return response()->json(['data' => 'Berhasil menambah formulir permohonan informasi']);
    // }
    $permohonan = new PermohonanInformasi();
    $permohonan->namaPermohonan = $request->input('namaPermohonan');

    if ($request->hasFile('file')) {
      $pdfFile = $request->file('file');
      $pdfFileName = time() . '_' . $pdfFile->getClientOriginalName();
      $pdfFile->move(public_path('uploads'), $pdfFileName);
      // $pdfFile->store('uploads');
      $permohonan->fileName = $pdfFileName;
    }

    $permohonan->save();

    return response()->json(['data' => 'Permohonan berhasil dibuat'], 201);
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
    // $request->validate([
    //   'namaPermohonan' => 'max:255',
    //   'file' => 'mimes:docx,pdf'
    // ]);

    $permohonan = PermohonanInformasi::findOrFail($id);

    // Menghapus file PDF lama jika ada
    if ($request->hasFile('file')) {
      Storage::delete(public_path('uploads/' . $permohonan->file));
    }

    $permohonan->namaPermohonan = $request->input('namaPermohonan');

    if ($request->hasFile('file')) {
      $pdfFile = $request->file('file');
      $pdfFileName = time() . '_' . $pdfFile->getClientOriginalName();
      $pdfFile->move(public_path('uploads'), $pdfFileName);
      $permohonan->fileName = $pdfFileName;
    }

    $permohonan->save();

    return response()->json(['message' => 'Permohonan berhasil diperbarui']);
  }


  public function updateFile(Request $request)
  {
    $request->validate([
      'namaPermohonan' => 'max:255',
      'file' => 'mimes:docx,pdf'
    ]);
    $file = PermohonanInformasi::find($request->id);
    // dd($request->all(), $file);

    if ($request->hasFile('file')) {
      // Hapus file yang ada sebelumnya
      // File::delete($file->fileName);
      Storage::delete($file->fileName);

      $newFile = $request->file('file');
      $newFileName = $newFile->getClientOriginalName();

      // Pindahkan file baru ke direktori tujuan
      $newFile->store('uploads');
    }

    $file->update([
      'fileName' => $newFileName ?? $file->fileName,
      'namaPermohonan' => $request->namaPermohonan ?? $file->namaPermohonan,
    ]);

    return response()->json(['data' => 'Berhasil mengubah formulir permohonan informasi']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(PermohonanInformasi $permohonanInformasi)
  {
    $permohonan = PermohonanInformasi::where('id', $permohonanInformasi->id)->first();
    Storage::disk('uploads')->delete('1684478638_setting password.png');
    Storage::delete(public_path('uploads'), '1684478638_setting password.png');
    // if ($permohonan->fileName) {
    //   Storage::delete(public_path('uploads/' . $permohonan->fileName));
    // }
    return back();
    // return response()->json(['data' => 'Berhasil menghapus Formulir Permohonan Informasi']);
  }


  public function deletePDF(Request $request)
  {
    Cloudinary::destroy($request->pdfName);
    return response()->json(['data' => 'Berhasil menghapus PDF']);
  }
}
