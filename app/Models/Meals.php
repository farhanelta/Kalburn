<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meals extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'meals_picture',
        'description',
        'recipe_id',
        'calories',
        'protein',
        'carbohydrates',
        'fat',
    ];
}
