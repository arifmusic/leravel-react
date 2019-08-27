<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['api']], function () {
	Route::post('v1/clients-register', 'Client\RegisterController@register');	
    Route::post('v1/clients-login', 'Client\LoginController@login');
    Route::post('v1/supports-login', 'Support\LoginController@login');
    Route::post('v1/sales-login', 'Sales\LoginController@login');
    Route::post('v1/forgot-password', 'Client\ForgotPasswordController@email');
    Route::post('v1/password-reset', 'Client\ResetPasswordController@reset');
    Route::post('v1/verification', 'Client\VerificationController@set');
}); 

// clients api
Route::group(['middleware' => ['api', 'manage_token:api_client,ROLE_CLIENTS']], function () {
    Route::post('v1/clients-open-tiket', 'Client\TiketController@index');
    Route::post('v1/clients-open-list-tiket', 'Client\TiketController@listPost');
    Route::get('v1/clients-list-tiket', 'Client\TiketController@list');
    Route::get('v1/clients-list-tiket/{id}', 'Client\TiketController@select');
    Route::get('v1/clients-open-list-tiket/{id}', 'Client\TiketController@selectOpen');
    Route::post('v1/clients-close-tiket', 'Client\TiketController@close');
    Route::put('v1/clients-change-password', 'Client\AuthController@update');
});

// supports api
Route::group(['middleware' => ['api', 'manage_token:api_supports|api_client,ROLE_SUPPORTS|ROLE_CLIENTS']], function () {
    Route::post('v1/supports-open-list-tiket', 'Support\TiketController@listPost');
    Route::get('v1/supports-list-tiket', 'Support\TiketController@list');
    Route::get('v1/supports-gambar-tiket', 'Support\TiketController@listGambar');
    Route::get('v1/supports-list-tiket/{id}', 'Support\TiketController@select');
    Route::get('v1/supports-open-list-tiket/{id}', 'Support\TiketController@selectOpen');
    Route::post('v1/supports-close-tiket', 'Support\TiketController@close');
    Route::get('v1/supports-list-closed-tiket', 'Support\TiketController@listClose');
});

// sales api
Route::group(['middleware' => ['api', 'manage_token:api_sales,ROLE_SALES']], function () {
    Route::post('v1/sales-follow-up', 'Sales\FollowController@index');
    Route::get('v1/sales-list-tiket', 'Sales\FollowController@list');
});
// Not Found
Route::fallback(function(){
    return response()->json(['message' => 'Resource not found.'], 404);
});