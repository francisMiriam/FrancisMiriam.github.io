// <script src="jquery-2.1.0.min.js"></script>

// <script>
// http://stackoverflow.com/questions/16475198/jquery-scrolltop-animation
// nur die Links, die mit "#" anfangen, werden beachtet
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500); // 500 (0.5sek) legt Geschwindkeit fest
    }

});

// </script>