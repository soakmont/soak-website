var w = 0;
$(function () {
  'use strict';
  /* -------- preloader ------- */
  $(window).on('load', function () {
    w = setTimeout(function () {
      $('#preloader').fadeOut(500);
    }, 1000);
  });
  /* -------- preloader End ------- */

  /*----- Sticky Header -----*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('header, .top-scroll').addClass('fixed');
    } else {
      $('header, .top-scroll').removeClass('fixed');
    }
  });
  /*----- Sticky Header End -----*/

  /*----- Top scrolling -----*/
  $('.scrollTo').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top - 100,
      },
      1000,
    );
  });
  /*----- Top scrolling End -----*/

  /* -------- Images Parallax ------- */
  if ($('.parallax').length > 0) {
    (function ($) {
      var parallax = -0.5;

      var $bg_images = $('.parallax');
      var offset_tops = [];
      $bg_images.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });

      $(window).scroll(function () {
        var dy = $(this).scrollTop();
        $bg_images.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css('background-position', '50% ' + (dy - ot) * parallax + 'px');
        });
      });
    })(jQuery);
  }
  if ($('.parallax-2').length > 0) {
    (function ($) {
      var parallax = 0.3;

      var $bg_images = $('.parallax-2');
      var offset_tops = [];
      $bg_images.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });

      $(window).scroll(function () {
        var dy = $(this).scrollTop();
        $bg_images.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css('background-position', '50% ' + (dy - ot) * parallax + 'px');
        });
      });
    })(jQuery);
  }
  /* -------- Images Parallax ------- */

  /*index : Roadmap slider*/
  if ($('.roadmap-slider').length > 0) {
    $('.roadmap-slider').owlCarousel({
      loop: true,
      autoplay: false,
      dots: true,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          loop: true,
          nav: false,
        },
        420: {
          items: 2,
          loop: true,
          nav: false,
          margin: 0,
        },
        767: {
          items: 3,
          loop: true,
          nav: false,
          margin: 0,
        },
        1200: {
          items: 4,
          loop: true,
          nav: false,
          margin: 0,
        },
      },
    });
  }
  /*end Roadmap slider*/

  /* Team slider*/
  if ($('.team-slider').length > 0) {
    $('.team-slider').owlCarousel({
      items: 4,
      loop: true,
      margin: 0,
      nav: false,
      responsive: {
        0: {
          dots: true,
          nav: false,
          items: 1,
        },
        420: {
          items: 1,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  /* Tokan Graph */
  if ($('#tokensale-part').length > 0) {
    function tokan_graph() {
      var scrollDistance = $(window).scrollTop();
      var scrollDistance1 = $('#tokensale-part').offset().top - 140;

      if (scrollDistance >= scrollDistance1 - 140 && scrollDistance <= scrollDistance1 + 140) {
        $('.donut').listtopie({
          startAngle: 270,
          strokeWidth: 5,
          hoverEvent: true,
          hoverBorderColor: '#4df3ff',
          hoverAnimate: false,
          drawType: 'round',
          speedDraw: 150,
          hoverColor: '#4df3ff',
          textColor: '#1c5256',
          strokeColor: '#1c5256',
          textSize: '18',
          hoverAnimate: true,
          marginCenter: 85,
        });
      }
    }

    $(window).scroll(function () {
      tokan_graph();
    });

    $(window).on('resize', function () {
      $(window).resize(function () {
        if (w != $(window).width()) {
          if ($(window).width() < 767) {
            $('.donut').listtopie('refresh');
          }
          w = $(window).width();
        }
      });
    });

    $('.token-graph').addClass('token-graph-right');
  }
  /* Tokan Graph End */

  function responsive_dropdown() {
    /* Responsive Menu */
    $('.menu-toggle').on('click', function () {
      $('.menu-toggle').toggleClass('active');
      $('.menu').slideToggle('slow');
    });
    $('.mega-menu > .opener').on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('.menu ul ul').slideUp(200);
      } else {
        $('.mega-menu > .opener').removeClass('active');
        $(this).addClass('active');
        $('.menu ul ul').slideUp(200);
        $(this).siblings('.menu ul ul').slideDown(200);
      }
    });
    /* Responsive Menu End */
  }
  $(document).ready(function () {
    responsive_dropdown();
  });

  function accordion_faq() {
    /* Accordion FAQ */
    if ($('.accordion-faq-box').length > 0) {
      $('.accordion-faq-title').on('click', function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).siblings('.accordion-faq-content').slideUp(200);
        } else {
          $(this);
          $('.accordion-faq-title').removeClass('active');
          $(this).addClass('active');
          $('.accordion-faq-content').slideUp(200);
          $(this).siblings('.accordion-faq-content').slideDown(200);
        }
      });
    }
    /* Accordion FAQ End */
  }
  $(document).ready(function () {
    accordion_faq();
  });

  /* -------- Countdown Timer ------- */
  if ($('.coins-counter-loop').length > 0) {
    var your_date = '2021-09-28 00:00:00';
    var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    var countDown = new Date(your_date.replace(/-/g, '/')).getTime();

    setInterval(function () {
      var now = new Date().getTime(),
        distance = countDown - now;
      document.getElementById('days').innerText = Math.floor(distance / day);
      document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
      document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
      document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);
    }, second);
  }
  /* -------- Countdown Timer End ------- */

  /* -------- Coins Progress --------*/
  if ($('.coins-progress').length > 0) {
    setTimeout(coins_progress, 3000);
    function coins_progress() {
      $('.coins-progress span').each(function () {
        $(this).animate(
          {
            width: $(this).attr('data-progress') + '%',
          },
          1000,
        );
        $(this).text($(this).attr('data-progress') + '%');
      });
    }
  }
  /* -------- Coins Progress End --------*/
});

$('.app-button').click(function () {
  Swal.fire('Coming soon', 'Our web app is under construction. Please come back later.', 'warning');
});
