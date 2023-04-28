<?php

namespace App\Http\Controllers;

use App\Models\LaporanPengaduan;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class LaporanPengaduanController extends Controller
{
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

  public function updateStatusTerima($id)
  {
    LaporanPengaduan::where('id', $id)
      ->update(['statusLaporan' => 'terima']);
    return back()->with('message', 'Berhasil mengubah Status Laporan jadi diterima');
  }

  public function updateStatusTertunda($id)
  {
    LaporanPengaduan::where('id', $id)
      ->update(['statusLaporan' => 'tertunda']);
    return back()->with('message', 'Berhasil mengubah Status Laporan jadi tertunda');
  }

  public function updateStatusSelesai($id)
  {
    LaporanPengaduan::where('id', $id)
      ->update(['statusLaporan' => 'selesai']);
    return back()->with('message', 'Berhasil mengubah Status Laporan jadi selesai');
  }


  public function destroy($id)
  {
    $laporan = LaporanPengaduan::where('id', $id)->first();
    if ($laporan->imgName) {
      Cloudinary::destroy($laporan->imgName);
    }

    $laporan->delete();
    return response()->json(['data' => 'Berhasil menghapus Laporan']);
  }
}
