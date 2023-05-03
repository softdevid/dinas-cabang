<?php

namespace App\Http\Controllers;

use App\Models\LaporanPengaduan;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaporanPengaduanController extends Controller
{
  public function index()
  {
    return Inertia::render('SuperAdmin/LaporanPengaduan/PengaduanIndex', [
      'title' => 'Laporan Pengaduan',
      'pengaduan' => LaporanPengaduan::latest()->get(),
    ]);
  }

  public function store(Request $request) //store untuk halaman pengaduan
  {
    // dd($request->all());
    $data = $request->validate([
      'judulLaporan' => 'required',
      'isiLaporan' => 'required',
      'asalPelapor' => 'required',
      'jenisLaporan' => 'required',
      'statusLaporan' => 'required',
      'imgName' => 'max:255',
      'imgUrl' => 'max:255',
    ]);
    LaporanPengaduan::create($data);
    return response()->json(['data' => 'Berhasil Menambah Laporan Pengaduan']);
  }

  public function update(LaporanPengaduan $pengaduan, Request $request)
  {
    // dd($request->all());
    LaporanPengaduan::where('id', $pengaduan->id)
      ->update(['statusLaporan' => $request->statusLaporan]);
    return response()->json(['data' => 'Berhasil mengubah Status Laporan']);
  }


  public function destroy(LaporanPengaduan $pengaduan)
  {
    $laporan = LaporanPengaduan::where('id', $pengaduan->id)->first();
    if ($laporan->imgName) {
      Cloudinary::destroy($laporan->imgName);
    }

    $laporan->delete();
    return response()->json(['data' => 'Berhasil menghapus Laporan']);
  }
}
