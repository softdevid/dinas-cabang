<?php

namespace App\Http\Controllers;

use App\Models\ProfilSuperAdmin;
use Illuminate\Http\Request;

class ProfilSuperAdminController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
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
  public function show(ProfilSuperAdmin $profilSuperAdmin)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(ProfilSuperAdmin $profilSuperAdmin)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, ProfilSuperAdmin $profilSuperAdmin)
  {
    $data = $request->validate([
      'namaSuperAdmin' => 'required',
      'alamatLengkap' => 'required',
      'lingkupKegiatan' => 'required',
      'visi' => 'required',
      'misi' => 'required',
      'tugasPokok' => 'required',
      'fungsi' => 'required',
      'unitKerjaDibawahnya' => 'required',
      'imgName' => 'required',
      'imgUrl' => 'required',
    ]);

    ProfilSuperAdmin::create($data);
    return back()->with('message', 'Berhasil diubah');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(ProfilSuperAdmin $profilSuperAdmin)
  {
    //
  }
}
