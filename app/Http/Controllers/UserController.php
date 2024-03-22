<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function show()
    {
        $users = User::all();

        if ($users->isEmpty()) {
            return response()->json([
                'message' => 'No User Data Found',
            ], 404);
        }

        return $users->toArray();
    }

    public function showall()
    {
        $user = User::withTrashed()->get();

        if ($user->isEmpty()) {
            return response()->json([
                'message' => 'No Meals Data Found',
            ], 404);
        }

        return $user->toArray();
    }

    public function one($id)
    {
        $users = User::find($id);

        if (!$users) {
            return response()->json([
                'message' => 'User Not Found',
            ], 404);
        }

        return $users->toArray();
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'user_picture',
                'email_verified_at',
                'password' => 'required',
                'phone_number' => 'unique:users,phone_number',
                'birth_date' => 'date',
                'gender' => 'in:Male,Female',
            ]);

            $user = User::create($validated);

            return response()->json([
                'message' => 'User Created Successfully!',
                'data' => $user->toArray(),
            ], 201);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }
    }

    public function update(Request $request, $id)
    {
        $record = User::findOrFail($id); // Find user, including soft-deleted

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $record->id, // Exclude current ID
            'user_picture',
            'email_verified_at',
            'password' => 'required',
            'phone_number' => 'unique:users,phone_number,' . $record->id,  // Exclude current ID
            'birth_date' => 'date',
            'gender' => 'in:Male,Female',
        ]);

        $record->update($validatedData);

        return response()->json([
            'message' => 'User Updated Successfully!',
            'data' => $record,
        ], 201);
    }

    public function destroy($id)
    {
        $record = User::findOrFail($id);

        if (request()->has('force')) {
            $record->forceDelete();
        } else {
            $record->delete();
        }

        return response()->json([
            'message' => 'User Deleted Successfully!',
            'data' => $record,
        ], 201);
    }
}
