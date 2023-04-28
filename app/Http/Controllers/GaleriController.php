<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleriController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Galeri/GaleriIndex', [
      'title' => 'Galeri',
      'galeri' => Galeri::get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Galeri/GaleriTambah', [
      'title' => 'Tambah Galeri',
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      'judul' => 'max:255',
      'deskripsi' => 'max:255',
      'jenis' => 'required',
      'imgName' => 'required',
      'imgName2' => 'max:255',
      'imgName3' => 'max:255',
      'imgUrl' => 'required',
      'imgUrl2' => 'max:255',
      'imgUrl3' => 'max:255',
    ], [
      'imgName.required' => 'Gambar utama harus ada',
    ]);

    Galeri::create($data);
    return response()->json(['data' => 'Berhasil menambah ke galeri']);
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
  public function edit(Galeri $galeri)
  {
    return Inertia::render('SuperAdmin/Galeri/GaleriEdit', [
      'title' => 'Edit Galeri',
      'galeri' => $galeri->where('id', $galeri->id)->first()
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Galeri $galeri)
  {
    $data = $request->validate([
      'judul' => 'max:255',
      'deskripsi' => 'max:255',
      'jenis' => 'required',
      'imgName' => 'required',
      'imgName2' => 'max:255',
      'imgName3' => 'max:255',
      'imgUrl' => 'required',
      'imgUrl2' => 'max:255',
      'imgUrl3' => 'max:255',
    ], [
      'imgName.required' => 'Gambar utama harus ada',
    ]);

    Galeri::where('id', $galeri->id)
      ->update($data);

    return response()->json(['data' => 'Berhasil mengubah galeri']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Galeri $galeri)
  {
    $galeri = $galeri->where('id', $galeri->id)->first();
    if ($galeri->imgName) {
      Cloudinary::destroy($galeri->imgName);
    }
    if ($galeri->imgName2) {
      Cloudinary::destroy($galeri->imgName2);
    }
    if ($galeri->imgName3) {
      Cloudinary::destroy($galeri->imgName3);
    }

    $galeri->delete();
    return response()->json(['data' => 'Berhasil dihapus']);
  }
}
