<?php

namespace App\Http\Controllers\Support;

use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\APIController;
use App;
use Auth;
use Log;
use App\Tiket;
use App\TiketList;
use Jenssegers\Date\Date;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class TiketController extends APIController
{
    use AuthenticatesUsers;

    public function __construct()
    {
        auth()->shouldUse('api_supports');
        $this->hari_ini = Date::now()->format('l j F Y H:i:s');
    }

    /**
     * 
     * @group Login
     * @bodyParam email string required the email address of the supplier
     */

    /**
		valid vaidation
    		'company' => 'asdf Company',
            'aplication' => 'asdf Aplikasi',
            'prioritas' => 'low',
            'masalah' => 'masal asss as',
            'gambar' => 'http?"sd'
    */
    public function list(Request $request)
    {
        $collection = Tiket::where('status', 'open')->latest()->paginate(5);
        return $this->responseSuccess($collection);
    }
    public function listGambar(Request $request)
    {
        $collection = Tiket::latest()->paginate(5);
        return $this->responseSuccess($collection);
    }
     public function select($tiketId)
    {
        $collection = Tiket::join('clients', 'clients.id', '=', 'tiket.id_client')
        ->where('tiket.id', $tiketId)
        ->get();
        return $this->responseSuccess($collection);
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    }
    public function selectOpen($listId)
    {
        $collection = TiketList::where('id_tiket', $listId)
        ->get();
        return $this->responseSuccess($collection);
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    }
     public function listPost(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'masalah' => 'required|string|max:255',
            'idTiket' => 'required',
            'gambar' => 'nullable|sometimes|image|mimes:jpeg,bmp,png,jpg,svg|max:2000'
        ]);

        if ($validator->fails()) {
             return $this->responseUnprocessable($validator->errors());
        }

        try {
            if($request->file('gambar')){
            $file = $request->file('gambar');
            $ext = $file->extension();
            $paths = str_random(20).'.'.$ext ;
            list($width, $height) = getimagesize($file);
            // $path = Storage::disk('public')->putFileAs(
            //     'uploads', $file, $name
            // );
            $url = url('/images'); 
            $path = $url.'/'.$paths;
            $id = auth()->setRequest($request)->user()->id;
            $file->move(public_path('images'), $paths);
            $user = $this->createList($request->all(), $id, $path, $width, $height);
            }
            if(!$request->file('gambar')){
            $id = auth()->setRequest($request)->user()->id;
            $path = null;
            $width = null;
            $height = null;
            $user = $this->createList($request->all(), $id, $path, $width, $height);
            }
            
            return $this->responseSuccess('input tiket successfully.');
        } catch (Exception $e) {
            return $this->responseServerError('input tiket error.');
        }
    }
    protected function createList(array $data, $id, $path, $width, $height)
    {
        return TiketList::create([
            'id_client' => $id,
            'id_tiket' => $data['idTiket'],
            'role_post' => 'support',
            'masalah' => $data['masalah'],
            'gambar' => $path,
            'gambar_height' => $height,
            'gambar_width' => $width,
            'created' => $this->hari_ini
        ]);
    }
     public function close(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'idTiket' => 'required|string',
        ]);

        if ($validator->fails()) {
             return $this->responseUnprocessable($validator->errors());
        }

        try {
            $user = $this->upadateStatus($request->all());
            return $this->responseSuccess('input tiket successfully.');
        } catch (Exception $e) {
            return $this->responseServerError('update error.');
        }
    }

    protected function upadateStatus(array $data)
    {
        return Tiket::where('id', $data['idTiket'])
            ->update(['status' => "closed"]);
    }
     public function listCLose(Request $request)
    {
        $collection = Tiket::where('status', 'closed')->latest()->paginate(5);
        return $this->responseSuccess($collection);
    }
}

