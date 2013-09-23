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
        ga('create','UA-512906-1');ga('send','pageview');
    </script>
</body>
</html>
