<?php

namespace App\Http\Controllers;

use App\Models\Sejarah;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SejarahController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Sejarah/SejarahIndex', [
      'title' => 'Sejarah',
      'sejarah' => Sejarah::where(['idUser' => 1])->first(),
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
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Sejarah $sejarah)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Sejarah $sejarah)
  {
    return Inertia::render('SuperAdmin/Sejarah/SejarahEdit', [
      'title' => 'Edit Sejarah',
      'sejarah' => $sejarah->where('id', $sejarah->id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Sejarah $sejarah)
  {
    $data = $request->validate([
      'deskripsi' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'required',
      'imgName2' => 'max:255',
      'imgUrl2' => 'max:255',
    ]);

    Sejarah::where('id', $sejarah->id)
      ->update($data);

    return response()->json(['data' => 'Berhasil mengubah Sejarah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Sejarah $sejarah)
  {
    //
  }

  public function deleteImgSejarah(Request $request)
  {
    Cloudinary::destroy($request->imgName2);
    return response()->json(['data' => 'Berhasil menghapus gambar']);
  }
}
