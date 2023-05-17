<?php

namespace App\Http\Controllers;

use App\Models\Sosmed;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SosmedController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Sosmed/SosmedIndex', [
      'title' => 'Sosmed',
      'sosmed' => Sosmed::get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Sosmed/SosmedTambah', [
      'title' => 'Sosmed',
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      'namaMedsos' => 'required|max:255',
      'urlImage' => 'required|max:255',
      'urlSosmed' => 'required|max:255'
    ]);

    Sosmed::create($data);
    return response()->json(['data' => 'Berhasil menambah Sosmed']);
  }

  /**
   * Display the specified resource.
   */
  public function show(Sosmed $sosmed)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Sosmed $sosmed)
  {
    return Inertia::render('SuperAdmin/Sosmed/SosmedEdit', [
      'title' => 'Edit Sosmed',
      'sosmed' => Sosmed::where('id', $sosmed->id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Sosmed $sosmed)
  {
    $data = $request->validate([
      'namaMedsos' => 'required|max:255',
      'urlImage' => 'required|max:255',
      'urlSosmed' => 'required|max:255'
    ]);

    Sosmed::where('id', $sosmed->id)
      ->update($data);
    return response()->json(['data' => 'Berhasil mengubah Sosmed']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Sosmed $sosmed)
  {
    Sosmed::where('id', $sosmed->id)
      ->delete();
    return response()->json(['data' => 'Berhasil menghapus']);
  }

  public function dataSosmed()
  {
    $s = Sosmed::get();
    return response()->json($s);
  }
}
