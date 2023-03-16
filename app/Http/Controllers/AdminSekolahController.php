<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSekolahController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminSekolah/Index', [
            'title' => 'Dashboard',
        ]);
    }
}
