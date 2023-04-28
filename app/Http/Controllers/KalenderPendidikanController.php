<?php

namespace App\Http\Controllers;

use App\Models\KalenderPendidikan;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KalenderPendidikanController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/KalenderPendidikan/KalenderPendidikanIndex', [
      'title' => 'Kalender Pendidikan',
      'kalenderPendidikan' => KalenderPendidikan::get(),
    ]);
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
    $data = $request->validate([
      'imgName' => 'required',
      'imgUrl' => 'required',
      'statusKalender' => 'required',
    ], [
      'imgName.required' => 'Gambar harus ada',
    ]);

    KalenderPendidikan::create($data);
    return response()->json(['data' => 'Berhasil Menambah Kalender Pendidikan']);
  }

  /**
   * Display the specified resource.
   */
  public function show(KalenderPendidikan $kalenderPendidikan)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(KalenderPendidikan $kalenderPendidikan)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, KalenderPendidikan $kalenderPendidikan)
  {
    $data = $request->validate([
      'imgName' => 'required',
      'imgUrl' => 'required',
      'statusKalender' => 'required'
    ], [
      'imgName.required' => 'Gambar harus ada'
    ]);

    KalenderPendidikan::where('id', $kalenderPendidikan->id)
      ->update($data);
    return response()->json(['data' => 'Berhasil mengubah kalender Pendidikan']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(KalenderPendidikan $kalenderPendidikan)
  {
    $kalender = KalenderPendidikan::where('id', $kalenderPendidikan->id)->first();
    Cloudinary::destroy($kalender->imgName);
    $kalender->delete();

    return response()->json(['data' => 'Berhasil dihapus']);
  }
}
