<?php

namespace App\Http\Controllers;

use App\Models\Ikm;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IkmController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/IndexKepuasanMasyarakat/IndexKepuasanMasyarakatIndex', [
      'title' => 'Index Kepuasan Masyarakat Page',
      'ikm' => Ikm::first(),
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
  public function show(Ikm $ikm)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Ikm $ikm)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Ikm $ikm, $id)
  {
    $data = $request->validate([
      'dasarHukum' => 'required',
      'pengertian' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    Ikm::where('id', $id)
      ->update($data);

    return response()->json(['data' => 'Berhasil diubah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Ikm $ikm)
  {
    //
  }
}
