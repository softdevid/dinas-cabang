<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class BannerController extends Controller
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
      'imgName' => 'required',
      'imgUrl' => 'required',
      'deskripsi' => 'max:500',
      'jenisBanner' => 'required'
    ], [
      'imgName.required' => 'Gambar harus ada',
    ]);

    Banner::create([
      'imgName' => $request->imgName,
      'imgUrl' => $request->imgUrl,
      'deskripsi' => $request->deskripsi ?? '-',
      'jenisBanner' => $request->jenisBanner,
    ]);
    return response()->json(['data' => 'Berhasil menambah banner']);
  }

  /**
   * Display the specified resource.
   */
  public function show(Banner $banner)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Banner $banner)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Banner $banner)
  {
    $data = $request->validate([
      'imgName' => 'required',
      'imgUrl' => 'required',
      'deskripsi' => 'max:500',
      'jenisBanner' => 'required'
    ], [
      'imgName.required' => 'Gambar harus ada',
    ]);
    $banner->where(['id' => $banner->id])
      ->update([
        'imgName' => $request->imgName,
        'imgUrl' => $request->imgUrl,
        'deskripsi' => $request->deskripsi ?? '-',
        'jenisBanner' => $request->jenisBanner,
      ]);
    return response()->json(['data' => 'Berhasil mengubah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Banner $banner)
  {
    $banner = $banner->where('id', $banner->id)->first();
    Cloudinary::destroy($banner->imgName);
    $banner->delete();
    return response()->json(['data' => 'Berhasil menghapus banner']);
  }
}
