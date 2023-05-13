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
      'namaLayanan' => 'required',
      'jenisLayanan' => 'required',
      'optionLayanan' => 'required',
    ]);

    DB::transaction(function () use ($request) {
      $l = LayananPublik::create([
        'namaLayanan' => $request->namaLayanan,
        'slug' => Str::slug($request->namaLayanan),
        'jenisLayanan' => $request->jenisLayanan,
        'imgName' => $request->imgName,
        'imgUrl' => $request->imgUrl,
      ]);

      OptionLayanan::create([
        'idLayananPublik' => $l->id,
        'optionLayanan' => $request->optionLayanan,
        'deskripsi' => $request->deskripsi ?? null,
        'imgName' => $request->imgName ?? null,
        'imgUrl' => $request->imgUrl ?? null,
      ]);
    });

    return back()->with('Layanan Publik berhasil dibuat');
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
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, LayananPublik $layananPublik, $id)
  {
    $request->validate([
      'namaLayanan' => 'required',
      'jenisLayanan' => 'required',
      'optionLayanan' => 'required',
      'imgName' => 'required',
    ], [
      'imgName.required' => 'Gambar harus diisi!',
    ]);

    DB::transaction(function () use ($request, $id) {
      LayananPublik::where('id', $id)
        ->update([
          'namaLayanan' => $request->namaLayanan,
          'slug' => Str::slug($request->namaLayanan),
          'jenisLayanan' => $request->jenisLayanan,
          'imgName' => $request->imgName,
          'imgUrl' => $request->imgUrl,
        ]);

      OptionLayanan::where('idLayananPublik', $id)
        ->update([
          'idLayananPublik' => $id,
          'optionLayanan' => $request->optionLayanan,
          'deskripsi' => $request->deskripsi ?? null,
          'imgName' => $request->imgName ?? null,
          'imgUrl' => $request->imgUrl ?? null,
        ]);
    });

    return back()->with('Layanan Publik berhasil dibuat');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(LayananPublik $layananPublik, $id)
  {
    $l = LayananPublik::where('id', $id)->first();
    Cloudinary::destroy($l->imgName);
    $o = OptionLayanan::where('idLayananPublik', $l->id)->first();
    if ($o->imgName !== null) {
      Cloudinary::destroy($o->imgName);
    } else {
      $l->destroy();
      $o->destroy();
    }
    return back()->with('message', 'Berhasil dihapus!');
  }
}
