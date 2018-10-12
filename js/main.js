$(document).ready(function(){
   //heder slider  

   $('.slider-active').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
// counter
  $('.counter').counterUp({
    delay: 20,
    time: 1000
});

// client area carousel

$('.client-active').owlCarousel({
  loop:true,
  nav:false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      700:{
          items:3
      },
      992:{
          items:4
      },
      1000:{
          items:4
      }
  }
});

// developer area carousel

$('.developer-active').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

// brand slider
$('.brand-wrapper').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:2500,
    arrows:false,
    mobileFirst:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
  });


  //sticky header
  $(window).scroll(function(){
      if($(window).scrollTop() > 240){
          $('.header-area').addClass('sticky-header');
      }
      else{
        $('.header-area').removeClass('sticky-header'); 
      }
  });



  //scroll top button
  $(window).scroll(function(){
      if($(window).scrollTop() > 250){
          $('#scrollTop').fadeIn();
      }else{
          $('#scrollTop').fadeOut();
      }
  });

  $('#scrollTop').click(function(){
      $('html,body').animate({
        scrollTop:0
      },1500);
  });



  // hambugger 
  $('#hamburgger').click(function(){
     $(this).toggleClass('open');
     $('.main-menu').toggleClass('left');
  });
})