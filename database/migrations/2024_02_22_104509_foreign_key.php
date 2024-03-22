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
        Schema::table('purchase', function (Blueprint $table) {
            $table->foreign('meals_id')->references('id')->on('meals')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('meals', function (Blueprint $table) {
            $table->foreign('recipe_id')->references('id')->on('recipe')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('delivery', function (Blueprint $table) {
            $table->foreign('meals_id')->references('id')->on('meals')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('phone_number')->references('phone_number')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('subscription_plans', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('meals_history', function (Blueprint $table) {
            $table->foreign('meals_id')->references('id')->on('meals')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('user_data', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('payment', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
