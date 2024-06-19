<?php

use App\Http\Controllers\GalleryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('gallery', [GalleryController::class, 'index']);
Route::post('gallery', [GalleryController::class, 'store']);
Route::get('gallery/{id}', [GalleryController::class, 'show']);
Route::put('galleryupdate/{id}', [GalleryController::class, 'update']);
Route::delete('gallerydelete/{id}', [GalleryController::class, 'destroy']);
