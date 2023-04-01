<?php

namespace App\Http\Controllers;

use App\Models\LaporanPengaduan;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class LaporanPengaduanController extends Controller
{
  public function store(Request $request) //store untuk halaman pengaduan
  {
    $data = $request->validate([
      'judulLaporan' => 'required',
      'isiLaporan' => 'required',
      'asalPelapor' => 'required',
      'jenisLaporan' => 'required',
      'statusLaporan' => 'required',
    ]);

    LaporanPengaduan::create($data);
    return back()->with('message', 'Berhasil menambahkan Laporan Pengaduan');
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
    if ($laporan->imgName === null) {
      $laporan->delete();
      return back()->with('message', 'Berhasil menghapus!');
    } else {
      Cloudinary::destroy($laporan->imgName);
      $laporan->delete();
      return back()->with('message', 'Berhasil menghapus!');
    }
  }
}
