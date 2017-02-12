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


Route::get('{object}/{action}/{param}',function($object,$action,$param){
    return json_encode(["object"=>$object,"action"=>$action,"param"=>$param,"status"=>"success"]);
     return "ok";
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});