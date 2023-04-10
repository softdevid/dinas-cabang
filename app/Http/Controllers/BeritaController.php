<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BeritaController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $berita = Berita::orderBy('created_at', 'desc')->get();
    return response()->json($berita);
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
    $request->validate([
      'namaPenulis' => 'required',
      'kategoriBerita' => 'required',
      'judulBerita' => 'required',
      'deskripsi' => 'required',
      'imgName' => 'required',
    ], [
      'namaPenulis.required' => 'Nama penulis harus diisi',
      'kategoriBerita.required' => 'Kategori harus dipilih',
      'judulBerita.required' => 'Judul Berita harus diisi',
      'deskripsi.required' => 'Deskripsi Berita harus diisi',
      'imgName.required' => 'Gambar Sampul Berita harus diupload',
    ]);

    Berita::create([
      'namaPenulis' => $request->namaPenulis,
      'kategoriBerita' => $request->kategoriBerita,
      'judulBerita' => $request->judulBerita,
      'slug' => Str::slug($request->judulArtike),
      'deskripsi' => $request->deskripsi,
      'imgName' => $request->imgName ?? '',
      'imgUrl' => $request->imgUrl ?? '',
    ]);

    return back()->with('message', 'Berhasil menambah Artikel');
  }

  /**
   * Display the specified resource.
   */
  public function show(Berita $berita)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Berita $berita)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Berita $berita, $id)
  {
    $request->validate([
      'namaPenulis' => 'required',
      'kategoriBerita' => 'required',
      'judulBerita' => 'required',
      'deskripsi' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    $berita = Berita::find($id);
    $berita->update([
      'namaPenulis' => $request->namaPenulis,
      'kategoriBerita' => $request->kategoriBerita,
      'judulBerita' => $request->judulBerita,
      'slug' => Str::slug($request->judulArtike),
      'deskripsi' => $request->deskripsi,
      'imgName' => $request->imgName,
      'imgUrl' => $request->imgUrl,
    ]);

    return back()->with('message', 'Berhasil mengubah Berita');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Berita $berita, $id)
  {
    $berita = Berita::where('id', $id)->first();
    // dd($berita);
    Cloudinary::destroy($berita->imgName);
    $berita->delete();
    return back()->with('message', 'Berhasil di hapus');
  }

  public function deleteImage(Request $request)
  {
    Cloudinary::destroy($request->imgName);
    return back();
  }
}
