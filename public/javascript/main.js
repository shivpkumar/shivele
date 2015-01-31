
$(document).ready(function(){


/* ==========================================================================
   Preload
========================================================================== */


    $("html").queryLoader2({
        barColor: "#111",
        backgroundColor: "#fff",
        percentage: true,
        barHeight: 3,
        completeAnimation: "fade",
        minimumTime: 200
    });

    $("body").fadeIn('slow')

/* ==========================================================================
   Scroll about page
========================================================================== */
$(".learn-more").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });


/* ==========================================================================
   For Bootstrap current state on portfolio sorting
========================================================================== */


    $('ul.nav-pills li a').click(function (e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })


/* ==========================================================================
  Parallax
========================================================================== */

    $('#parallax-quote').parallax("50%", 0.8);
    $('#parallax-connect').parallax("50%", 0.8);
    $('.parallax-content').parallax("50%", 0.3);



/* ==========================================================================
  Flex Slider
========================================================================== */

      $('.flexslider').flexslider({
        animation: "slide",
        selector: ".home-slides > li",
        controlNav: true,
        directionNav: false ,
        direction: "vertical"
      });


/* ==========================================================================
  Google Maps
========================================================================== */
 $('.gmap').each(function(index, element) {
    var gmap = $(element);
    var addr = 'http://maps.google.com/maps?hl=en&ie=utf8&output=embed&sensor=false&iwd=1&mrt=loc&t=m&q=' + encodeURIComponent(gmap.attr('data-address'));
    addr += '&z=' + gmap.attr('data-zoom');
    if (gmap.attr('data-bubble') == 'true') {
      addr += '&iwloc=addr';
    } else {
      addr += '&iwloc=near';
    }
    gmap.attr('src', addr);
  });

/* ==========================================================================
  Portfolio sorting
========================================================================== */

  $(window).load(function(){
    var $container = $('.grid-wrapper');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.grid-controls li a').click(function(){
        $('.grid-controls .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});


     $('.mix a').hover(
               function(){
                         $(this).find('.overlay').stop().slideDown(500);
                         return false;
               },
               function(){
                         $(this).find('.overlay').stop().slideUp(500);
                         return false;
               }
     );



/* ==========================================================================
  Team
========================================================================== */

  $(".team-footer").mouseenter(function() {
            $(".follow", this).stop().animate({top:70},'fast');
            $(".follow", this).next().fadeIn()
    });

    $(".team-footer").mouseleave(function() {
            $(".follow", this).stop().animate({top:0},'fast');
            $(".follow", this).next().fadeOut()

    });


/* ==========================================================================
  Magnific Popup
========================================================================== */
/*  */
$('.grid-wrapper').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
      enabled:true
      }
    });

/* ==========================================================================
 Sticky menu
========================================================================== */
$(".navbar").sticky({topSpacing: 0});

/* ==========================================================================
 Scroll spy and scroll filter
========================================================================== */

    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
     });



/*==========================================================================
VEGAS Home Slider
========================================================================== */


    $.vegas('slideshow', {
        backgrounds:[

        { src:'images/backgrounds/shiv_michele_roof.jpg', fade:1000 },
        { src:'images/backgrounds/shiv_michele_big_sur.jpg', fade:1000 },
        { src:'images/backgrounds/shiv_michele_kauai.jpg', fade:1000 }
        ]
      })('overlay', {
        src:'images/overlays/16.png'
      });
      $( "#vegas-next" ).click(function() {
        $.vegas('next');
      });
      $( "#vegas-prev" ).click(function() {
        $.vegas('previous');
    });

/*==========================================================================
Contact form
========================================================================== */

    //   $('#contact-form').validate({
    //     rules: {
    //         name: {
    //             minlength: 2,
    //             required: true
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         message: {
    //             minlength: 2,
    //             required: true
    //         }
    //     },
    //     highlight: function (element) {
    //         $(element).closest('.control-group').removeClass('success').addClass('error');
    //     },
    //     success: function (element) {
    //         element.text('OK!').addClass('valid')
    //             .closest('.control-group').removeClass('error').addClass('success');
    //     }
    // });

/*==========================================================================
Count to timer
========================================================================== */
var untilOrSince = null;
var todayDate = new Date();
var weddingDate = new Date(2015, 8-1, 14, 19);

if (todayDate < weddingDate) {
  $('#countdown').countdown({
    until: weddingDate,
    format: 'ODHMS',
    layout: '<div class="row"><div class="col-md-2"><div class="count">{o<}<div class="counter">{on}</div>{o>}<h3>Months</h3></div></div><div class="col-md-3"><div class="count">{d<}<div class="counter">{dn}</div>{d>}<h3>Days</h3></div></div><div class="col-md-2"><div class="count">{h<}<div class="counter">{hn}</div>{h>}<h3>Hours</h3></div></div><div class="col-md-3"><div class="count">{m<}<div class="counter">{mn}</div>{m>}<h3>Minutes</h3></div></div><div class="col-md-2"><div class="count">{s<}<div class="counter">{sn}</div>{s>}<h3>Seconds</h3></div></div></div>'
  });
} else {
  $('#countdown').countdown({
    since: weddingDate,
    format: 'ODHMS',
    layout: '<div class="row"><div class="col-md-2"><div class="count">{o<}<div class="counter">-{on}</div>{o>}<h3>Months</h3></div></div><div class="col-md-3"><div class="count">{d<}<div class="counter">-{dn}</div>{d>}<h3>Days</h3></div></div><div class="col-md-2"><div class="count">{h<}<div class="counter">-{hn}</div>{h>}<h3>Hours</h3></div></div><div class="col-md-3"><div class="count">{m<}<div class="counter">-{mn}</div>{m>}<h3>Minutes</h3></div></div><div class="col-md-2"><div class="count">{s<}<div class="counter">-{sn}</div>{s>}<h3>Seconds</h3></div></div></div>'
  });
}


$('#countdown').countdown({
  until: new Date(2015, 8-1, 15, 10),
  format: 'ODHMS',
  layout: '<div class="row"><div class="col-md-2"><div class="count">{o<}<div class="counter">{on}</div>{o>}<h3>Months</h3></div></div><div class="col-md-3"><div class="count">{d<}<div class="counter">{dn}</div>{d>}<h3>Days</h3></div></div><div class="col-md-2"><div class="count">{h<}<div class="counter">{hn}</div>{h>}<h3>Hours</h3></div></div><div class="col-md-3"><div class="count">{m<}<div class="counter">{mn}</div>{m>}<h3>Minutes</h3></div></div><div class="col-md-2"><div class="count">{s<}<div class="counter">{sn}</div>{s>}<h3>Seconds</h3></div></div></div>'
});


});
