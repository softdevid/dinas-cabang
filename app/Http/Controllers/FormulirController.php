<?php

namespace App\Http\Controllers;

use App\Models\Formulir;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FormulirController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Formulir/FormulirIndex', [
      'title' => 'Formulir',
      'formulir' => Formulir::get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Formulir/FormulirAdd', [
      'title' => 'Tambah Formulir'
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    if ($request->jenis === 'tambah') {
      $request->validate([
        'namaFormulir' => 'required',
      ]);

      if ($request->hasFile('file')) {
        $file = $request->file('file');
        $storagePath = $file->store('uploads');
        $newFile = new Formulir();
        $newFile->file = $file->getClientOriginalName();
        $newFile->storagePath = $storagePath;
        $newFile->namaFormulir = $request->namaFormulir;
        $newFile->save();

        // $request->flash('message', 'Menambah berhasil');
        // $request->session()->flash('message', 'Task was successful!');
        return redirect()->to('/super-admin/formulir')->with('message', 'Berhasil menambah');
        // return response()->json(['data' => 'Berhasil menambah Formulir']);
      }
    } else {
      $formulir = Formulir::find($request->id);

      if ($request->hasFile('file')) {
        Storage::delete($formulir->storagePath);
        $newFile = $request->file('file');

        $file = $newFile->getClientOriginalName();
        $storagePath = $newFile->store('uploads');
      }
      if ($request->has('namaFormulir')) {
        $namaFormulir = $request->input('namaFormulir');
      }
      $formulir->update([
        'storagePath' => $storagePath ?? $formulir->storagePath,
        'file' => $file ?? $formulir->file,
        'namaFormulir' => $namaFormulir ?? $formulir->namaFormulir,
      ]);

      return response()->json(['data' => 'Berhasil mengubah Formulir']);
    }
  }

  /**
   * Display the specified resource.
   */
  public function show(Formulir $formulir)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Formulir $formulir)
  {
    return Inertia::render('SuperAdmin/Formulir/FormulirEdit', [
      'title' => 'Edit Formulir',
      'formulir' => Formulir::find($formulir->id),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Formulir $formulir)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Formulir $formulir)
  {
    $formulir = Formulir::find($formulir->id);
    // dd($formulir);
    Storage::delete($formulir->storagePath);
    $formulir->delete();
    return back();
  }
}
