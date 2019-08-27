<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateClientVerificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_verifications', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('user_id');
            $table->string('token');
            $table->foreign('user_id')->references('id')->on('clients')->onDelete('cascade');
        });
        Schema::table('clients', function (Blueprint $table) {
            $table->boolean('is_verified')->default(0);
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("client_verifications");
        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn('is_verified');
        });
    }
}