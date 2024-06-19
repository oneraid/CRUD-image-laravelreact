<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;
use App\Http\Requests\GelleryStoreRequest;
use Illuminate\Support\Str;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::paginate(5);

        return response()->json([
            'galleries' => $galleries
        ], 200);
    }

    public function store(GelleryStoreRequest $request)
    {
        try {
            $name = $request->name;
            $description = $request->description;
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();

            // Menyimpan gambar ke direktori public/images
            $request->image->move(public_path('images'), $imageName);

            // Membuat URL dengan format yang diinginkan
            $url = asset('images/' . $imageName);

            Gallery::create([
                'name' => $name,
                'description' => $description,
                'image' => $imageName,
                'url' => $url
            ]);

            return response()->json([
                'message' => "Gallery successfully created."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    public function show($id)
    {
        $gallery = Gallery::find($id);
        if (!$gallery) {
            return response()->json([
                'message' => 'Gallery Not Found.'
            ], 404);
        }

        return response()->json([
            'gallery' => $gallery
        ], 200);
    }

    public function update(GelleryStoreRequest $request, $id)
    {
        try {
            $gallery = Gallery::find($id);
            if (!$gallery) {
                return response()->json([
                    'message' => 'Gallery Not Found.'
                ], 404);
            }

            $gallery->name = $request->name ?? $gallery->name;
            $gallery->description = $request->description ?? $gallery->description;

            if ($request->hasFile('image')) {
                $currentImage = public_path('images') . '/' . $gallery->image;
                if (file_exists($currentImage)) {
                    @unlink($currentImage);
                }

                $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
                $request->image->move(public_path('images'), $imageName);

                $gallery->image = $imageName;
                $gallery->url = asset('images/' . $imageName);
            }

            $gallery->save();

            return response()->json([
                'message' => "Gallery successfully updated."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    public function destroy($id)
    {
        $gallery = Gallery::find($id);
        if (!$gallery) {
            return response()->json([
                'message' => 'Gallery Not Found.'
            ], 404);
        }

        $currentImage = public_path('images') . '/' . $gallery->image;
        if (file_exists($currentImage)) {
            @unlink($currentImage);
        }

        $gallery->delete();

        return response()->json([
            'message' => "Gallery successfully deleted."
        ], 200);
    }
}
