<?php

namespace App\Http\Controllers;

use App\Models\KalenderPendidikan;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class KalenderPendidikanController extends Controller
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
    $data = $request->validate([
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    KalenderPendidikan::create($data);
    return back()->with('message', 'Berhasil menambah kalender pendidikan');
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
  public function update(Request $request, KalenderPendidikan $kalenderPendidikan, $id)
  {
    $data = $request->validate([
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    KalenderPendidikan::where('id', $id)->update($data);
    return back()->with('message', 'Berhasil mengubah kalender pendidikan');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(KalenderPendidikan $kalenderPendidikan, $id)
  {
    $kalender = KalenderPendidikan::where('id', $id)->first();
    Cloudinary::destroy($kalender->imgName);
    $kalender->delete();

    return back()->with('message', 'Berhasil menghapus Gambar Kalender Pendidikan');
  }
}
