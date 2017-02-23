<?php

use Illuminate\Http\Request;

Route::get('ping', function(){
    return [
        'status' => 'ok',
        'timestamp' => \Carbon\Carbon::now()
    ];
});

Route::group(['middleware' => 'auth:api'], function() {
    Route::resource('users', 'Users\UsersController');
});


Route::get('/redirect', function () {
    $query = http_build_query([
        'client_id' => '2',
        'redirect_uri' => 'http://base-core.dev:705/web',
        'response_type' => 'token',
        'scope' => '*',
    ]);

    return redirect('http://base-core.dev:705/oauth/authorize?'.$query);
});