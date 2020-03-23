<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class userController extends Controller
{
    public function index(User $user) {
        return view('users.index', compact('user'));
    }
}
