<?php

namespace App\Http\Controllers\Client;

use App\Client;
use App\Http\Controllers\APIController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Http\Controllers\Controller;
use Validator, DB, Hash, Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;


class RegisterController extends APIController
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'company' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:clients',
            'phone_number' => 'required|numeric|min:6|unique:clients',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
             return $this->responseUnprocessable($validator->errors());
        }

        try {
            $user = $this->create($request->all());
            $this->vericated($user);
            return $this->responseSuccess('Registered successfully.');
        } catch (Exception $e) {
            return $this->responseServerError('Registration error.');
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return Client::create([
            'company' => $data['company'],
            'email' => $data['email'],
            'phone_number' => $data['phone_number'],
            'password' => Hash::make($data['password']),
        ]);
    }
    protected function vericated($user)
    {
        $id=$user->id;
        $name=$user->company;
        $email=$user->email;
        $verification_code = str_random(30);
        DB::table('client_verifications')->insert(['user_id'=>$id,'token'=>$verification_code]);
        $subject = "Verify email address Tubber";
        $url =  url(url('/').route('verification', ['app_t' => $verification_code], false));
        Mail::send('verify', ['name' => $name, 'url' => $url],
            function($mail) use ($email, $name, $subject){
                $mail->from(getenv('FROM_EMAIL_ADDRESS'));
                $mail->to($email, $name);
                $mail->subject($subject);
            });
    }
}
