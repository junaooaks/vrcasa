<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <title>3D Cape Views</title>
      <meta charset="utf-8">
      <meta name="format-detection" content="telephone=no">
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="keywords" content="Vr Casas 360 photos 3d tour">
      <!-- CSRF Token -->
      <meta name="csrf-token" content="{{ csrf_token() }}">


      <!-- MDBootstrap -->
      <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
     <!-- Bootstrap tooltips -->
     <script type="text/javascript" src="js/popper.min.js"></script>
     <!-- Bootstrap core JavaScript -->
     <script type="text/javascript" src="js/bootstrap.min.js"></script>
     <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>


      <link rel="icon" href="favicon.ico" type="image/x-icon">
      <link href="{{ asset('css/app.css') }}" rel="stylesheet">
      <link rel="stylesheet" href="{{ asset('css/style.css') }}">
      <style>.ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}</style>
    </head>


    <body>
        
      
            
            <div>
                <main >
                    @yield('content')
                </main>
            </div>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
        
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('js/core.min.js') }}"></script>
    <script src="{{ asset('js/script.js') }}"></script>
        
    </body>
    
</html>
