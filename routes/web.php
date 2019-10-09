<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/catalog', function () {
    return view('catalog');
});

Route::get('/buy', function () {
    return view('buy');
});

Route::get('/rent', function () {
    return view('rent');
});

Route::get('/sell', function () {
    return view('sell');
});

Route::get('/hotel', function () {
    return view('hotel');
});

Route::get('/business', function () {
    return view('business');
});

Route::get('/owner', function () {
    return view('owner');
});

Route::get('/realestate', function () {
    return view('realestate');
});

Route::get('/photography', function () {
    return view('photography');
});

Route::get('/dashboard', function () {
    return view('./app/dashboard');
});

Route::get('/singin', function () {
    return view('./singin');
});
Route::get('/singup', function () {
    return view('./singup');
});