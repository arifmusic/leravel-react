<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTiketListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('tiket_list', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('id_client');
            $table->uuid('id_tiket');
            $table->enum('role_post', array('client', 'support'));
            $table->string('masalah');
            $table->string('gambar')->nullable();
            $table->integer('gambar_height')->nullable();
            $table->integer('gambar_width')->nullable();
            $table->string('created');
            $table->string('role')->default('ROLE_CLIENTS');
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
