<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArtikelController extends Controller
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

    Artikel::create([
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
  public function show(Artikel $artikel)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Artikel $artikel)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Artikel $artikel, $id)
  {
    $request->validate([
      'namaPenulis' => 'required',
      'jenisArtikel' => 'required',
      'judulArtikel' => 'required',
      'deskripsi' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    $artikel = Artikel::find($id);
    $artikel->update([
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
   * Remove the specified resource from storage.
   */
  public function destroy(Artikel $artikel, $id)
  {
    $artikel = Artikel::find($id);
    $artikel->delete();
  }
}
