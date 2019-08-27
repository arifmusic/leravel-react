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
use App\Client;
use App\Http\Controllers\Controller;
use App\Requests\LoginValidation;


class LoginController extends APIController
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
    public function login(LoginValidation $request)
    {
        $email = $request->input('email');
        try {
            $credentials = $request->only('email', 'password');
            if(!$token = auth()->attempt([
                'email' => $email, 
                'password' => $request->input('password'),
                ])) {

                return $this->responseUnauthorized();
            }
        } catch (JWTException $e) {
             return $this->responseUnprocessable("Could not create token!");
        }
        $users = Client::where([
                    ['email', '=', $email],
                    ['is_verified', '=', '1'],
                    ])->first();
        if ($users === null) {
                return $this->responseUnauthorized(['Email not verified']);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'company' => auth()->user()->company,
            'email' => auth()->user()->email,
            'type' => 'client' //api_client guard 
        ]);
    }
}
