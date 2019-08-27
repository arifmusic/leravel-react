<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Tiket extends Model
{
    protected $table = 'tiket';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'id_client',
        'company',
        'aplication',
        'prioritas',
        'masalah',
        'gambar',
        'gambar_height',
        'gambar_width',
        'status',
        'created'
    ];
    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'user_id' => 'integer',
    ];

    /**
     * A Open_tiket belongs to a User.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
}
