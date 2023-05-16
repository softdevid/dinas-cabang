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
    $data = $request->validate([
      'judul' => 'required|max:255',
      'deskripsi' => 'required|max:500',
      'imgName1' => 'required',
      'imgUrl1' => 'max:255',
      'imgName2' => 'max:255',
      'imgUrl2' => 'max:255',
    ]);

    Event::create($data);
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
    return Inertia::render('SuperAdmin/Event/EventTambah', [
      'title' => 'Edit Event',
      'event' => Event::where('id', $event->id)->first(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Event $event)
  {
    $data = $request->validate([
      'judul' => 'required|max:255',
      'deskripsi' => 'required|max:500',
      'imgName1' => 'required',
      'imgUrl1' => 'max:255',
      'imgName2' => 'max:255',
      'imgUrl2' => 'max:255',
    ]);

    Event::where('id', $event)
      ->update($data);
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
