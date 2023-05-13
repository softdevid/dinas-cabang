<?php

namespace App\Http\Controllers;

use App\Models\Skm;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkmController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Skm/Index', [
      'title' => 'Survey Kepuasan Masyarakat',
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Skm/Create', [
      'title' => 'Tambah Pertanyaan',
    ]);
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
  public function show(Skm $skm)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Skm $skm)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Skm $skm)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Skm $skm)
  {
    //
  }
}
