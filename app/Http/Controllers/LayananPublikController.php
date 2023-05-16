<?php

namespace App\Http\Controllers;

use App\Models\LayananPublik;
use App\Models\OptionLayanan;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class LayananPublikController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/LayananPublik/LayananPublikIndex', [
      'title' => 'Layanan Publik',
      'layananPublik' => LayananPublik::orderBy('created_at', 'desc')->limit(100)->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/LayananPublik/LayananPublikTambah', [
      'title' => 'Tambah Layanan Publik',
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'namaLayanan' => 'required|max:255',
      'jenisLayanan' => 'required',
      'deskripsiLayanan' => 'required',
      'imgName' => 'required',
    ], [
      'imgName.required' => 'Gambar cover harus diisi',
    ]);

    LayananPublik::create([
      'namaLayanan' => $request->namaLayanan,
      'slug' => Str::slug($request->namaLayanan),
      'jenisLayanan' => $request->jenisLayanan,
      'deskripsiLayanan' => $request->deskripsiLayanan,
      'imgName' => $request->imgName ?? null,
      'imgUrl' => $request->imgUrl ?? null,
      'imgName1' => $request->imgName1 ?? null,
      'imgUrl1' => $request->imgUrl1 ?? null,
      'imgName2' => $request->imgName2 ?? null,
      'imgUrl2' => $request->imgUrl2 ?? null,
      'imgName3' => $request->imgName3 ?? null,
      'imgUrl3' => $request->imgUrl3 ?? null,
    ]);

    return response()->json(['data' => 'Berhasil menambah layanan publik']);
  }

  /**
   * Display the specified resource.
   */
  public function show(LayananPublik $layananPublik)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(LayananPublik $layananPublik)
  {
    return Inertia::render('SuperAdmin/LayananPublik/LayananPublikEdit', [
      'title' => 'Edit Layanan Publik',
      'layananPublik' => LayananPublik::where('id', $layananPublik->id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, LayananPublik $layananPublik)
  {
    $request->validate([
      'namaLayanan' => 'required|max:255',
      'jenisLayanan' => 'required',
      'deskripsiLayanan' => 'required',
      'imgName' => 'required',
    ], [
      'imgName.required' => 'Gambar cover harus diisi',
    ]);

    LayananPublik::where('id', $layananPublik->id)
      ->update([
        'namaLayanan' => $request->namaLayanan,
        'slug' => Str::slug($request->namaLayanan),
        'jenisLayanan' => $request->jenisLayanan,
        'deskripsiLayanan' => $request->deskripsiLayanan,
        'imgName' => $request->imgName ?? null,
        'imgUrl' => $request->imgUrl ?? null,
        'imgName1' => $request->imgName1 ?? null,
        'imgUrl1' => $request->imgUrl1 ?? null,
        'imgName2' => $request->imgName2 ?? null,
        'imgUrl2' => $request->imgUrl2 ?? null,
        'imgName3' => $request->imgName3 ?? null,
        'imgUrl3' => $request->imgUrl3 ?? null,
      ]);

    return response()->json(['data' => 'Berhasil mengubah layanan publik']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(LayananPublik $layananPublik)
  {
    $layanan = LayananPublik::where('id', $layananPublik->id)->first();

    if ($layanan->imgName !=  null) {
      Cloudinary::destroy($layanan->imgName);
    }

    if ($layanan->imgName1 !=  null) {
      Cloudinary::destroy($layanan->imgName1);
    }

    if ($layanan->imgName2 !=  null) {
      Cloudinary::destroy($layanan->imgName2);
    }

    if ($layanan->imgName3 !=  null) {
      Cloudinary::destroy($layanan->imgName3);
    }

    $layanan->delete();
    return response()->json(['data' => 'Berhasil menghapus layanan publik']);
  }

  public function deleteImageCover(Request $request)
  {
    Cloudinary::destroy($request->imgName);
    return response()->json(['data' => 'Berhasil menghapus gambar']);
  }

  public function deleteImage1(Request $request)
  {
    Cloudinary::destroy($request->imgName1);
    return response()->json(['data' => 'Berhasil menghapus gambar']);
  }

  public function deleteImage2(Request $request)
  {
    Cloudinary::destroy($request->imgName2);
    return response()->json(['data' => 'Berhasil menghapus gambar']);
  }

  public function deleteImage3(Request $request)
  {
    Cloudinary::destroy($request->imgName3);
    return response()->json(['data' => 'Berhasil menghapus gambar']);
  }
}
