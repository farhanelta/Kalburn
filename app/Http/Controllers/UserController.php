<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function show(){
        $user = DB::table('users')->get();

        if($user == null){
            return response()->json([
                'message' => 'No User Data'
            ], 404);
        } else {
            return $user;
        }
    }
}
