<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SekolahController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('AdminSekolah/Index', [
      'title' => 'Sekolah'
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
    $request->validate([
      'namaSekolah' => 'required',
      'visi' => 'required',
      'misi' => 'required',
      'noHp' => 'required',
      'email' => 'required|unique:users,email|unique:sekolahs,email',
      'desa' => 'required',
      'kecamatan' => 'required',
      'kabupaten' => 'required',
      'alamatLengkap' => 'required',
      'password' => 'required',
      'level' => 'required',
    ]);

    DB::transaction(function () use ($request) {
      $u = User::create([
        'name' => $request->namaSekolah,
        'email' => $request->email,
        'password' => $request->password,
        'level' => $request->level,
      ]);
      Sekolah::create([
        'idUser' => $u->id,
        'namaSekolah' => $request->namaSekolah,
        'visi' => $request->visi,
        'misi' => $request->misi,
        'noHp' => $request->noHp,
        'email' => $request->email,
        'desa' => $request->desa,
        'kecamatan' => $request->kecamatan,
        'kabupaten' => $request->kabupaten,
        'alamatLengkap' => $request->alamatLengkap,
      ]);
    });

    return back()->with('message', 'Berhasil menambah Akun Sekolah');
  }

  /**
   * Display the specified resource.
   */
  public function show(Sekolah $sekolah)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Sekolah $sekolah)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Sekolah $sekolah, $id)
  {
    $request->validate([
      'namaSekolah' => 'required',
      'visi' => 'required',
      'misi' => 'required',
      'noHp' => 'required',
      'email' => 'required|unique:users,email|unique:sekolahs,email',
      'desa' => 'required',
      'kecamatan' => 'required',
      'kabupaten' => 'required',
      'alamatLengkap' => 'required',
      'password' => 'required',
      'level' => 'required',
    ]);

    $sekolah = Sekolah::find($id);
    $user = User::find($sekolah->idUser);

    DB::transaction(function () use ($request, $sekolah, $user) {
      $sekolah->update([
        'namaSekolah' => $request->namaSekolah,
        'visi' => $request->visi,
        'misi' => $request->misi,
        'noHp' => $request->noHp,
        'email' => $request->email,
        'desa' => $request->desa,
        'kecamatan' => $request->kecamatan,
        'kabupaten' => $request->kabupaten,
        'alamatLengkap' => $request->alamatLengkap,
      ]);
      $user->update([
        'name' => $request->namaSekolah,
        'email' => $request->email,
        'password' => $request->password,
        'level' => $request->level,
      ]);
    });

    return back()->with('message', 'Berhasil menambah Akun Sekolah');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Sekolah $sekolah, $id)
  {
    $sekolah = Sekolah::find($id);
    $user = User::find($sekolah->idUser);
    $sekolah->delete();
    $user->delete();
    return back()->with('message', 'Berhasil dihapus');
  }
}
