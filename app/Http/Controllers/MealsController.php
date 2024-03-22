<?php

namespace App\Http\Controllers;

use App\Models\Meals;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;

class MealsController extends Controller
{
    public function show()
    {
        $Meal = Meals::all();

        if ($Meal->isEmpty()) {
            return response()->json([
                'message' => 'No Meals Data Found',
            ], 404);
        }

        return $Meal->toArray();
    }

    public function showall()
    {
        $Meal = Meals::withTrashed()->get();

        if ($Meal->isEmpty()) {
            return response()->json([
                'message' => 'No Meals Data Found',
            ], 404);
        }

        return $Meal->toArray();
    }

    public function one($id)
    {
        $Meal = Meals::find($id);

        if (!$Meal) {
            return response()->json([
                'message' => 'Meals Not Found',
            ], 404);
        }

        return $Meal->toArray();
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:users,name',
                'meals_picture',
                'description' => 'required',
                'recipe_id' => 'integer',
                'calories' => 'integer',
                'protein' => 'integer',
                'carbohydrates' => 'integer',
                'fat' => 'integer',
            ]);

            $Meals = Meals::create($validated);

            return response()->json([
                'message' => 'Meals Created Successfully!',
                'data' => $Meals->toArray(),
            ], 201);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }
    }

    public function update(Request $request, $id)
    {
        $record = Meals::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|unique:users,name',
            'meals_picture',
            'description' => 'required',
            'recipe_id' => 'integer',
            'calories' => 'integer',
            'protein' => 'integer',
            'carbohydrates' => 'integer',
            'fat' => 'integer',
        ]);

        $record->update($validatedData);

        return response()->json([
            'message' => 'Meals Updated Successfully!',
            'data' => $record,
        ], 201);
    }

    public function destroy($id)
    {
        $record = Meals::findOrFail($id);

        if (request()->has('force')) {
            $record->forceDelete();
        } else {
            $record->delete();
        }

        return response()->json([
            'message' => 'Meals Deleted Successfully!',
            'data' => $record,
        ], 201);
    }
}
