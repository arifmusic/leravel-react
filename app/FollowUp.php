<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class FollowUp extends Model
{
    protected $table = 'follow_up';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_sales',
        'company',
        'name',
        'addres',
        'email',
        'phone',
        'phone_2',
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
