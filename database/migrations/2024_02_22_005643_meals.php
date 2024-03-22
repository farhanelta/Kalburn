<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meals', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->string('name')->nullable(false);
            $table->string('meals_picture')->nullable();
            $table->text('description')->nullable(false);
            $table->integer('recipe_id')->nullable();
            $table->string('type');
            $table->integer('calories')->nullable();
            $table->integer('protein')->nullable();
            $table->integer('carbohydrates')->nullable();
            $table->integer('fat')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};
