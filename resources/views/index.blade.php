<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="Description" content="Front1 – tepat cari diskon">

        <!-- Open Graph data / Facebook Card data -->
        <meta property="og:title" content="Front1 – tepat cari diskon">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://asdf.com/">
        <meta property="og:image" content="https://reactjs.org/logo-og.png">
        <meta property="og:image:alt" content="Cari diskon">
        <meta property="og:description" content="Cari diskon bayak disini">

        <!-- Twitter Card data -->
        <meta name="twitter:card" content="summary">
        <meta name="twitter:creator" content="@asdf">

        <!-- Mobile header color for Chrome, Firefox OS and Opera -->
        <meta name="theme-color" content="#2c638f">
        <!-- Mobile header color Windows Phone -->
        <meta name="msapplication-navbutton-color" content="#2c638f">
        <!-- Mobile header color for iOS Safari (supports black, black-translucent or default) -->
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
            <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
        <title>{{ env('APP_NAME') }}</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="root">
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
