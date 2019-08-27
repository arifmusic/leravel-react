<?php

namespace App\Http\Controllers\Client;

use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\APIController;
use App;
use Auth;
use Log;
use Hash;
use App\Client;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class AuthController extends APIController
{
    use AuthenticatesUsers;

    public function __construct()
    {
        auth()->shouldUse('api_client');
    }

    /**
     * Login a supplier
     * 
     * @group Login
     * @bodyParam email string required the email address of the supplier
     * @bodyParam password string required the password of the supplier
     * 
     * @response {
     *    "access_token": "eyJ0eKHJhkHKJHkjojnbgfzI1NiJ9.eyJpc3MiOi..",
     *    "token_type": "bearer",
     *    "expires_in": 18000,
     *    "user_id": 42,
     *    "role": "ROLE_SUPPLIER_ADMIN",
     *    "name": "John Smith",
     *    "email": "john.smith9999@gmail.com",
     *    "type": "supplier"
     * }
     */

    /**
		valid vaidation
    		'company' => 'asdf Company',
            'aplication' => 'asdf Aplikasi',
            'prioritas' => 'low',
            'masalah' => 'masal asss as',
            'gambar' => 'http?"sd'
    */
    public function update(Request $request)
    {
        Validator::extend('password', function ($attribute, $value, $parameters, $validator) {
            return Hash::check($value, \Auth::user()->password);
        });
 
        // message for custom validation
        $messages = [
            'password' => 'Password yang Anda masukan tidak benar.',
        ];
 
        // validate form
        $validator = Validator::make($request->all(), [
            'current_password'      => 'required|string|password',
            'password'              => 'required|string|min:5|confirmed',
            'password_confirmation' => 'required|string',
 
        ], $messages);
 
        // if validation fails
        if ($validator->fails()) {
             return $this->responseUnprocessable($validator->errors());
        }
 
        // update password
       try {
            $id = auth()->setRequest($request)->user()->id;
            $this->upadatePassword($request->password, $id);
            return $this->responseSuccess('successfully.');
        } catch (Exception $e) {
            return $this->responseServerError('update error.');
        }
    }
    protected function upadatePassword($data, $id)
    {
        return Client::where('id', $id)
            ->update(['password' => bcrypt($data)]);
    }
 
}

