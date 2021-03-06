<?php include ('global-variables.php'); ?>
<!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $pageTitle; ?></title>

    <?php
        // Detect if this is the local dev site, or live site
        $current_url = array_shift(explode(".",$_SERVER['HTTP_HOST']));

        // If live, used minifed CSS (from http://code.google.com/p/minify/)
        if ($env === 'live') {
            print '
                <link type="text/css" rel="stylesheet" href="/css/all.min.css" />
           ';
        }
        // Otherwise use individual files - remember to add/remove CSS files from both positions
        else {
            print '
                <link href="/css/compiled/00-normalize.css" rel="stylesheet" />
                <link href="/css/compiled/01-core.css" rel="stylesheet" />
                <link href="/css/compiled/02-layout.css" rel="stylesheet" />
                <link href="/css/compiled/03-typography.css" rel="stylesheet" />
                <link href="/css/compiled/04-header.css" rel="stylesheet" />
                <link href="/css/compiled/05-footer.css" rel="stylesheet" />
            ';
        }
    ?>

    <!--[if IE 8]>
        <link href="/css/compiled/ie8.css" rel="stylesheet" />
    <![endif]-->

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

</head>
<body>
    <!--[if lt IE 8]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

