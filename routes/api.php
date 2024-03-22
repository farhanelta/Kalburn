<?php

use App\Http\Controllers\MealsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('admin')->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('/users', 'show');
        Route::get('/user/{id}', 'one');
        Route::post('/users/store', 'store');
        Route::put('/users/update/{id}', 'update');
        Route::delete('/users/delete/{id}', 'destroy');
    });
    Route::controller(MealsController::class)->group(function () {
        Route::get('/meals', 'show');
        Route::get('/meal/{id}', 'one');
        Route::post('/meals/store', 'store');
        Route::put('/meals/update/{id}', 'update');
        Route::delete('/meals/delete/{id}', 'destroy');
    });
});

Route::get('/csrf-token', function () {
    return response()->json([
        'csrf_token' => csrf_token(),
    ]);
});
