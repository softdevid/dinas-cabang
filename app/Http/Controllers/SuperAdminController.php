<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SuperAdminController extends Controller
{
    public function index()
    {
        return Inertia::render('SuperAdmin/Index', [
            'title' => 'Dashboard',
        ]);
    }
    public function profil()
    {
        return Inertia::render('SuperAdmin/Profile', [
            'title' => 'Profile',
        ]);
    }
}
