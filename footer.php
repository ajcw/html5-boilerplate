    <?php

        if ($env === 'live') {
            print '
                <script type="text/javascript" src="/js/compiled/all.min.js"></script>
           ';
        }
        
        else {
            print '
                <script src="js/lib/jquery-1-10.2.js"></script>
                <script src="js/main.js"></script>
                <script src="js/plugin.js"></script>
            ';
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
