//= require jquery-1.8.3.min
//= require bootstrap.min
//= require prettify

CSite = {
  banner: {
    show: function bannerShow() {
      console.log('showing banner');
      $('#caliper-banner').css('top', '0');
      $('.nav-wrap').css('padding-top', '45px');
    },
    hide: function bannerHide() {
      console.log('hiding banner');
      $('#caliper-banner').css('top', '-42px');
      $('.nav-wrap').css('padding-top', '0');
    },
    text: function bannerMessage(message) {
      if (!message) {
        return $('#caliper-banner .message').text();
      } else {
        $('#caliper-banner .message').text(message);
      }
    }
  },
  heading: function(heading) {
    var selector = '#ab-heading';
    $(selector).html(heading);
    $(selector).css('visibility', 'visible');
  }
}


$(function() {

  var headerHtml = [
    "Visiblity. Insight. Answers",
    "Analytics for Single Page Apps",
    "Monitoring for HTML5 &amp; Javascript",
    "Webapps are easy.</br>Monitoring them is not",
  ]

  Abba('header text')
    .control('test a', function() {
      CSite.heading(headerHtml[0]);
    })
    .variant('test b', function() {
      CSite.heading(headerHtml[1]);
    })
    .variant('test c', function() {
      CSite.heading(headerHtml[2]);
    })
    .variant('test d', function() {
      CSite.heading(headerHtml[3]);
    })
    .variant('test e', function() {
      CSite.heading(headerHtml[4]);
    })
    .start();

  if (window.location.pathname == "/subscribe/confirm") {
    Abba('header text').complete();
  }

  if (localStorage.getItem('bannerHidden') != true) {
    CSite.banner.show();
  }

  //preload banner background
  function preloadBackground() {
    var img = new Image();

    img.onload = function() {
      /*$('.jumbotron .background').css('background', "url('/img/screenshot.png')");*/
      $('.jumbotron .background').css('opacity', '0.6');
    };

    img.src = "/img/screenshot-8.png";
  }


  $('#caliper-banner .close').click(function() {
    CSite.banner.hide();
    localStorage.setItem('bannerHidden', 1);
  });

  $('#down').click(function() {
    $('html, body').animate({scrollTop: $('#client-performance').offset().top}, 500);
  });

  $('#snap-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
  });

  //--- Main
  prettyPrint();
  preloadBackground();

});
