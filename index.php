<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>

    <?php
        // Detect if this is the local dev site, or live site
        $current_url = array_shift(explode(".",$_SERVER['HTTP_HOST']));

        // If live, used minifed CSS (from http://code.google.com/p/minify/)
        if (($current_url != "local") && ($current_url != "ajcw")) {
            print "
                <link type=\"text/css\" rel=\"stylesheet\" href=\"/min/b=css&amp;f=compiled/00-normalize.css,compiled/01-main.css\" />
           ";
        }
        // Otherwise use individual files - remember to add/remove CSS files from both positions
        else {
            print "
                <link href=\"/css/compiled/00-normalize.css\" rel=\"stylesheet\" />
                <link href=\"/css/compiled/01-main.css\" rel=\"stylesheet\" />
                
                <script src=\"js/vendor/modernizr-2.6.2.min.js\"></script>
                <script src=\"js/main.js\"></script>
                <script src=\"js/plugin.js\"></script>
            ";
        }
    ?>

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

</head>
<body>
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <p>Hello world! This is HTML5 Boilerplate.</p>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <?php

        if (($current_url != "local") && ($current_url != "ajcw")) {
            print "
                <script type=\"text/javascript\" src=\"/min/b=js&amp;f=js/vendor/modernizr-2.6.2.min.js\"></script>
           ";
        }
        // If not live use individual files - remember to add/remove JS files from both positions
        else {
            print "
                <script src=\"js/main.js\"></script>
                <script src=\"js/plugin.js\"></script>
            ";
        }
    ?>
    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X');ga('send','pageview');
    </script>
</body>
</html>
