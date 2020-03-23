<?php

Auth::routes();

Route::group(['middleware' => ['auth']], function() {
    Route::get('/', 'TimelineController@index');
    Route::post('/posts', 'PostController@create');

    Route::get('/users/{user}', 'UserController@index');
});