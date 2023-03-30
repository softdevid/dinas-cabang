<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class GaleriController extends Controller
{
  public function store(Request $request)
  {
    if ($request->jenis === 'foto') {
      $data = $request->validate([
        'judul' => 'required|max:50',
        'deskripsi' => 'required|max:100',
        'imgName' => 'required',
        'imgUrl' => 'required',
        'jenis' => 'required',
      ]);
      Galeri::create($data);
      return back()->with('message', 'Foto berhasil ditambah');
    } elseif ($request->jenis === 'video') {
      $data = $request->validate([
        'judul' => 'required|max:50',
        'deskripsi' => 'required|max:100',
        'youtubeFrame' => 'required',
        'jenis' => 'required',
      ]);
      Galeri::create($data);
      return back()->with('message', 'Foto berhasil ditambah');
    } else {
      $data = $request->validate([
        'judul' => 'required|max:50',
        'deskripsi' => 'required|max:100',
        'imgName' => 'required',
        'imgUrl' => 'required',
        'jenis' => 'required',
      ]);
      Galeri::create($data);
      return back()->with('message', 'Foto berhasil ditambah');
    }
  }

  public function update(Request $request, $id)
  {
    $galeri = Galeri::where('id', $id)->first();
    if ($galeri->jenis === 'foto') {
      $data = $request->validate([
        'judul' => 'required|max:50',
        'deskripsi' => 'required|max:100',
        'imgName' => 'required',
        'imgUrl' => 'required',
        'jenis' => 'required',
      ]);
      $galeri->update($data);
      return back()->with('message', 'Foto berhasil diubah');
    } elseif ($galeri->jenis === 'video') {
      $data = $request->validate([
        'judul' => 'required|max:50',
        'deskripsi' => 'required|max:100',
        'youtubeFrame' => 'required',
        'jenis' => 'required',
      ]);
      $galeri->update($data);
      return back()->with('message', 'Video berhasil diubah');
    } else {
      $data = $request->validate([
        'judul' => 'required|max:50',
        'deskripsi' => 'required|max:100',
        'imgName' => 'required',
        'imgUrl' => 'required',
        'jenis' => 'required',
      ]);
      $galeri->update($data);
      return back()->with('message', 'Infografis berhasil diubah');
    }
  }

  public function destroy($id)
  {
    $galeri = Galeri::where('id', $id)->first();
    if ($galeri->jenis !== 'video') {
      Cloudinary::destroy($galeri->imgName);
      $galeri->delete();
      return back()->with('message', 'Berhasil di hapus');
    } else {
      $galeri->delete();
      return back()->with('message', 'Berhasil di hapus');
    }
  }
}
