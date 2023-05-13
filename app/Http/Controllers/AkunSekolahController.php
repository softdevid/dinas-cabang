<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;

class AkunSekolahController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Sekolah/SekolahIndex', [
      'title' => 'Data Akun Sekolah',
      'sekolah' => Sekolah::orderBy('namaSekolah', 'desc')->get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Sekolah/SekolahTambah', [
      'ttile' => 'Tambah Akun Sekolah',
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'namaSekolah' => 'required',
      'email' => 'required|unique:sekolahs,email',
      'password' => 'required|min:6',
      'jenjang' => 'required',
    ]);

    DB::transaction(function () use ($request) {
      $data = User::create([
        'name' => $request->namaSekolah,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'level' => 'sekolah',
      ]);
      Sekolah::create([
        'idUser' => $data->id,
        'kode' => Str::random(10),
        'namaSekolah' => $request->namaSekolah,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'jenjang' => $request->jenjang
      ]);
    });
    return response()->json(['data' => 'Berhasil membuat Akun sekolah']);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    return Inertia::render('SuperAdmin/Sekolah/SekolahEdit', [
      'title' => 'Edit Akun sekolah',
      'sekolah' => Sekolah::where('id', $id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $id)
  {
    $sekolah = Sekolah::where('id', $id)->first();
    $user = User::where('id', $sekolah->idUser)->first();

    if ($request->email != $sekolah->email) {
      // $data['email'] = 'required|unique:sekolahs,email';
      $request->validate([
        'email' => 'required|unique:sekolahs,email'
      ]);
    }

    $request->validate([
      'namaSekolah' => 'required',
      'jenjang' => 'required',
    ]);

    DB::transaction(function () use ($request, $sekolah, $user) {
      $sekolah->update([
        'namaSekolah' => $request->namaSekolah,
        'visi' => $request->visi,
        'misi' => $request->misi,
        'noHp' => $request->noHp,
        'email' => $request->email,
        'passsword' => Hash::make($request->password) ?? $sekolah->password,
        'jenjang' => $request->jenjang,
        'alamatLengkap' => $request->alamatLengkap,
        'imgName' => $request->imgName,
        'imgUrl' => $request->imgUrl,
      ]);
      $user->update([
        'name' => $request->namaSekolah,
        'email' => $request->email,
        'password' => Hash::make($request->password) ?? $sekolah->password,
        'level' => 'sekolah',
      ]);
    });

    return response()->json(['data' => 'Berhasil mengedit Akun sekolah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    $sekolah = Sekolah::where('id', $id)->first();
    $user = User::where('id', $sekolah->idUser)->first();
    // dd($sekolah, $sekolah);
    if ($sekolah->imgName != null) {
      Cloudinary::destroy($sekolah->imgName);
    }

    $sekolah->delete();
    $user->delete();
    return response()->json(['data' => 'Akun Berhasil dihapus']);
    // return back();
  }
}
