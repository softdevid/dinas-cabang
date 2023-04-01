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
    //
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
      'jenisArtikel' => 'required',
      'judulArtikel' => 'required',
      'deskripsi' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    Berita::create([
      'namaPenulis' => $request->namaPenulis,
      'jenisArtikel' => $request->jenisArtikel,
      'judulArtikel' => $request->judulArtikel,
      'slug' => Str::slug($request->judulArtike),
      'deskripsi' => $request->deskripsi,
      'imgName' => $request->imgName,
      'imgUrl' => $request->imgUrl,
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
      'jenisArtikel' => 'required',
      'judulArtikel' => 'required',
      'deskripsi' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    $berita = Berita::find($id);
    $berita->update([
      'namaPenulis' => $request->namaPenulis,
      'jenisArtikel' => $request->jenisArtikel,
      'judulArtikel' => $request->judulArtikel,
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
    $berita = Berita::find($id);
    Cloudinary::destroy($berita->imgName);
    $berita->delete();
  }
}
