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
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name');
            $table->string('user_picture')->nullable();
            $table->string('email')->unique()->nullable(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable(false);
            $table->string('phone_number')->nullable();
            $table->date('birth_date')->nullable();
            $table->enum('gender', ['Male', 'Female'])->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();

            $table->primary('id');
            $table->unique('phone_number', 'user_saved_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
