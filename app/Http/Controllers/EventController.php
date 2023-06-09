<?php

namespace App\Http\Controllers;

use App\Models\Event;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('SuperAdmin/Event/EventIndex', [
      'title' => 'Event',
      'event' => Event::get(),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('SuperAdmin/Event/EventTambah', [
      'title' => 'Tambah Event',
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    // dd($request->all());
    $request->validate([
      'judul' => 'required|max:255',
      'deskripsi' => 'required|max:500',
      'imgName1' => 'required',
      'imgUrl1' => 'max:255',
    ]);

    Event::create([
      'judul' => $request->judul,
      'deskripsi' => $request->deskripsi,
      'imgName1' => $request->imgName1,
      'imgUrl1' => $request->imgUrl1,
      'imgName2' => $request->imgName2 ?? null,
      'imgUrl2' => $request->imgUrl2 ?? null,
    ]);

    return response()->json(['data' => 'Berhasil menambah']);
  }

  /**
   * Display the specified resource.
   */
  public function show(Event $event)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Event $event)
  {
    return Inertia::render('SuperAdmin/Event/EventEdit', [
      'title' => 'Edit Event',
      'event' => Event::where('id', $event->id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Event $event)
  {
    $request->validate([
      'judul' => 'required|max:255',
      'deskripsi' => 'required|max:500',
      'imgName1' => 'required',
    ]);

    Event::where('id', $event->id)
      ->update([
        'judul' => $request->judul,
        'deskripsi' => $request->deskripsi,
        'imgName1' => $request->imgName1,
        'imgUrl1' => $request->imgUrl1,
        'imgName2' => $request->imgName2 ?? null,
        'imgUrl2' => $request->imgUrl2 ?? null,
      ]);
    return response()->json(['data' => 'Berhasil menambah']);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Event $event)
  {
    $event = Event::where('id', $event->id)->first();

    if ($event->imgName1 != null) {
      Cloudinary::destroy($event->imgName1);
    }

    if ($event->imgName2 != null) {
      Cloudinary::destroy($event->imgName2);
    }

    $event->delete();
    return response()->json(['data' => 'Berhasil menghapus']);
  }

  public function deleteImage1(Request $request)
  {
    Cloudinary::destroy($request->imgName1);
    return response()->json(['data' => 'Berhasil dihapus']);
  }

  public function deleteImage2(Request $request)
  {
    Cloudinary::destroy($request->imgName2);
    return response()->json(['data' => 'Berhasil dihapus']);
  }
}
