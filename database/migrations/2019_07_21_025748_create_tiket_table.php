<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTiketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tiket', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('id_client');
            $table->enum('status', array('open', 'closed'));
            $table->string('company');
            $table->string('aplication');
            $table->enum('prioritas', array('high', 'medium', 'low'));
            $table->string('masalah');
            $table->string('gambar');
            $table->integer('gambar_height');
            $table->integer('gambar_width');
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
        Schema::dropIfExists('tiket');
    }
}
