<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFollowUpTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('follow_up', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('id_sales');
            $table->string('name');
            $table->string('company');
            $table->string('addres');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->string('phone_2')->nullable()->unique();
            $table->string('created');
            $table->string('role')->default('ROLE_SALES');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
