<?php

namespace App\Http\Controllers\Sales;

use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\APIController;
use App;
use Auth;
use Log;
use App\FollowUp;
use Jenssegers\Date\Date;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;


class FollowController extends APIController
{
    use AuthenticatesUsers;

    public function __construct()
    {
        auth()->shouldUse('api_sales');
        $this->hari_ini = Date::now()->format('l j F Y H:i:s');
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
    public function index(Request $request)
    {
        $rules = [
            'company' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'addres' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:follow_up',
            'phone' => 'required|numeric|unique:follow_up',
            'phone_2' => 'numeric|nullable|unique:follow_up'
        ];
        $messages = [
        'email.unique' => 'email sudah digunakan',
        'phone.unique' => 'phone sudah digunakan',
        'phone_2.unique' => 'phone sudah digunakan'
        ];
        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
             return $this->responseUnprocessable($validator->errors());
        }

        try {
            $id = auth()->setRequest($request)->user()->id;
            $this->create($request->all(), $id);
            return $this->responseSuccess('input tiket successfully.');
        } catch (Exception $e) {
            return $this->responseServerError('input tiket error.');
        }
    }

    protected function create(array $data, $id)
    {
        return FollowUp::create([
            'id_sales' => $id,
            'company' => $data['company'],
            'name' => $data['name'],
            'addres' => $data['addres'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'phone_2' => $data['phone_2'],
            'created' => $this->hari_ini
        ]);
    }
    public function list(Request $request)
    {
        $id = auth()->setRequest($request)->user()->id;
        $collection = FollowUp::where('id_sales', $id);
        $collection = $collection->latest()->paginate(5);
        return $this->responseSuccess($collection);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
}

