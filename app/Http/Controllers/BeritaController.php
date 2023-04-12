<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\ProfilSuperAdmin;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BeritaController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(User $user, Request $request)
  {
    $berita = Berita::query();

    if ($request->has('search')) {
      $search = $request->query('search');
      $berita->where('judulBerita', 'like', '%' . $search . '%');
    }

    if ($request->has('kategoriBerita')) {
      $kategoriBerita = $request->query('kategoriBerita');
      if ($kategoriBerita === 'all') {
        $berita->where(function ($query) {
          $query->where('kategoriBerita', 'berita')
            ->orWhere('kategoriBerita', 'informasi')
            ->orWhereNull('kategoriBerita');
        });
      } else {
        $berita->where('kategoriBerita', $kategoriBerita);
      }
    }

    $berita = $berita->get();

    return Inertia::render('SuperAdmin/Berita/Index', [
      'title' => 'Berita',
      'beritas' => $berita,
    ]);
  }

  public function dataBerita(Request $request)
  {
    $beritas = DB::table('beritas')->select('*')->limit(100);

    $kategoriBerita = $request->input('kategoriBerita');

    if ($kategoriBerita !== 'all') {
      $beritas->where('kategoriBerita', $kategoriBerita);
    }

    if ($request->has('search')) {
      $search = $request->query('search');
      $beritas->where('judulBerita', 'like', '%' . $search . '%');
    }

    $beritas = $beritas->paginate(15);

    return response()->json($beritas);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(ProfilSuperAdmin $profil)
  {
    return Inertia::render('SuperAdmin/Berita/Add', [
      'title' => 'Tambah Berita',
      'profil' => $profil,
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'namaPenulis' => 'required',
      'kategoriBerita' => 'required',
      'judulBerita' => 'required',
      'deskripsi' => 'required',
      'imgName' => 'max:255',
    ], [
      'namaPenulis.required' => 'Nama penulis harus diisi',
      'kategoriBerita.required' => 'Kategori harus dipilih',
      'judulBerita.required' => 'Judul Berita harus diisi',
      'deskripsi.required' => 'Deskripsi Berita harus diisi',
      'imgName.max:255' => 'Gambar Sampul Berita harus diupload',
    ]);

    Berita::create([
      'idUser' => 1,
      'namaPenulis' => $request->namaPenulis,
      'kategoriBerita' => $request->kategoriBerita,
      'judulBerita' => $request->judulBerita,
      'slug' => Str::slug($request->judulBerita),
      'deskripsi' => $request->deskripsi,
      'imgName' => $request->imgName ?? '',
      'imgUrl' => $request->imgUrl ?? '',
    ]);

    return response()->json(['data' => 'Berita berhasil di tambah']);
  }

  /**
   * Display the specified resource.
   */
  public function show(Berita $berita)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Berita $berita, $id)
  {
    return Inertia::render('SuperAdmin/Berita/Edit', [
      'title' => 'Edit Berita',
      'berita' => Berita::where('id', $id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $id)
  {
    $request->validate([
      'namaPenulis' => 'required',
      'kategoriBerita' => 'required',
      'judulBerita' => 'required',
      'deskripsi' => 'required',
      'imgName' => 'max:255',
      'imgUrl' => 'max:255',
    ]);

    $berita = Berita::where('id', $id)
      ->update([
        'idUser' => $request->idUser ?? 1,
        'namaPenulis' => $request->namaPenulis,
        'kategoriBerita' => $request->kategoriBerita,
        'judulBerita' => $request->judulBerita,
        'slug' => Str::slug($request->judulBerita),
        'deskripsi' => $request->deskripsi,
        'imgName' => $request->imgName ?? '',
        'imgUrl' => $request->imgUrl ?? '',
      ]);

    return response()->json(['data' => 'Berhasil diubah']);
    // return back()->with('message', 'Berhasil mengubah Berita');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    $berita = Berita::where('id', $id)->first();
    // Cloudinary::destroy($berita->imgName);
    $berita->delete();
    return response()->json(['data' => 'Berita berhasil dihapus']);
  }

  public function deleteImage(Request $request)
  {
    Cloudinary::destroy($request->imgName);
    return back();
  }
}
