<?php


Route::get('/', function(){
    return redirect(getPrefix(config('custom.web_route')).'/login');
});

Route::get('apidocs', function(){
    // aglio -i docs/api/blueprint/apidocs.apib --theme-variables Flatly --theme-template triple -o resources/views/apidocs.blade.php
    return view('apidocs');
});

Auth::routes();

	//dd(getNavPrefix(2).config('custom.web_route').'/home');
Route::get('home', 'HomeController@index');

