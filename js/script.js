var scrollPos = 0;
(function (){
   $(window).scroll(function (event) {
      if  ( $(window).scrollTop() > 100 ) {

              var st = $(this).scrollTop();
              if(st > scrollPos){
                  $('.header').addClass('scroll');
                   $('.header').removeClass('notscroll');
              }else{
                  $('.header').removeClass('scroll');
                  $('.header').addClass('notscroll');
              }
              scrollPos = st;
              if(scrollPos < 10){
                 $('.header').removeClass('scroll');
                $('.header').removeClass('notscroll');
              } 
      }else{
        $('.header').removeClass('scroll');
        $('.header').removeClass('notscroll');
      }
    });    
})();
$(document).scroll(function () {
  var singularity = $('.singularity');
      var s_top = $(window).scrollTop() + $(window).height(); 
      if ($('.singularity').length > 0) {
           var tpx = $('.singularity').offset().top + $('.singularity').height()/8;
           var brokers = $('.brokers').offset().top + $('.brokers').height()/8;
           var totools = $('.tools').offset().top + $('.tools').height()/6;    
           if(s_top > tpx){
              $("body").addClass('visible');  
              $(".singularity__wrap").addClass('visible');  
           } 
           else{
             $("body").removeClass('visible');  
             $(".singularity__wrap").removeClass('visible');  
           } 
           // if(s_top > brokers + 500){
           //  $("body").removeClass('visible'); 
           // }
           if(s_top > totools){
             $(".singularity__wrapper, .singularity__wrap").addClass('stop');  
             $(".singularity__wrap").removeClass('visible');  
            }
            else{
             $(".singularity__wrapper, .singularity__wrap").removeClass('stop');  
           }    
       } 
       if ($('.exclusive__sidebar').length > 0) {
            var s_top1 = $("html").scrollTop(); 
            var exclusiveContainer = $('.exclusive__sidebar').offset().top;
            var automation = $('.automation').offset().top - $('.exclusive__left').height() - 260;
            if(s_top1 > exclusiveContainer){
               $(".exclusive__left").addClass('sticky'); 
            }
            else{
               $(".exclusive__left").removeClass('sticky');  
            } 
            if(s_top1 > automation){
              $(".exclusive__left").removeClass('sticky');  
              $('.exclusive__container').addClass('stop'); 
            }else{
            $('.exclusive__container').removeClass('stop');  
          } 


      }
      if ($('.company__wrapper').length > 0) {
         var s_top2 = $("html").scrollTop(); 

         var companyWrap = $('.company__container').offset().top;
         if(s_top2 > companyWrap){
          $('.company__wrap').addClass('visible'); 
          if(s_top2 - companyWrap> $('.company').height()/2 - $(window).height()/2){
            $('.company__insure').addClass('active');
            $('.company__cards').addClass('active');
            $('.company__subtitle').addClass('active');
            $('.company__title').addClass('active');
          }else{
            $('.company__insure').removeClass('active');
            $('.company__cards').removeClass('active');
            $('.company__subtitle').removeClass('active');
            $('.company__title').removeClass('active');            
          }
         }else{
          $('.company__wrap').removeClass('visible'); 
         }   
         var network = $('.company').offset().top + $('.company').height() - $('.company__insure').height() - $(window).height()/2 + 170;
         
          if(s_top2 > network){
            $('.company__wrap').removeClass('visible');  
            $('.company__wrap').addClass('stop');  
          }else{
            $('.company__wrap').removeClass('stop');  
          }            
      }          
});

$('.areas__slider').css('max-height','414px');
$(document).ready(function () {
  $('.areas__slider').css('max-height','100%');
   $('.industries__slider').slick({
      arrows: false,
      dots: false,
      fade:true,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 1,
   });
   $('.areas__slider').slick({
      arrows: false,
      dots: false,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 1,
      speed: 1300,
      adaptiveHeight:true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots:true,
          }
        },
      ]      
   });  
   $('.singularity__slider').slick({
      arrows: false,
      dots: true,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 1,
      speed: 1300,     
   }); 
   $('.main__slider').slick({
      arrows: false,
      dots: true,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 1,
      speed: 1300,     
   });       
   $('.generation__items').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   });   
   $('.singularity__cards').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 651,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   });   
   $('.why-choose__cards').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   });    
   $('.autonomy__slider').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            adaptiveHeight:true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   }); 
   $('.scheme__cards').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 1181,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   });     
   $('.cards-customer').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   }); 
   $('.customers__right').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 651,
          settings: {
            arrows: false,
            dots: true,
            draggable: true,
            adaptiveHeight: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   });  
   $('.withkoop__cards').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 867,
          settings: {
            arrows: false,
            dots: true,
            draggable: true,
            adaptiveHeight: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   });  
    $('.team__cards').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 761,
          settings: {
            arrows: false,
            dots: true,
            draggable: true,
            adaptiveHeight: true,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 1,
            speed: 1300,            
          }
        },        
      ]      
   });                
    $('.menu__link').mouseenter(function (event) {
      $(this).parent().addClass('hover');
   });  
   $('.menu__item').mouseleave(function (event) {  
    $(this).removeClass('hover');
   }); 
    $('.footer__block a span').click(function (event) {
      $(this).parent().toggleClass('active');
      event.preventDefault();
   });  
    $('.footer__block a b').click(function (event) {
      $('.footer__block a').removeClass('active');
   }); 
   $('.menu__item').click(function (event) {  
    $(this).addClass('active');
   });    
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('html, body').toggleClass('lock');
      
   });
   $('.header__burger').click(function (event) {
      if(!$(this).hasClass('.active'))
      {
        $('.menu__item').removeClass('active');
      }
   });
   $('.contact-us__input input').focus(function (event) {
      $(this).next().addClass('active');
   });
   $('.contact-us__input input').blur(function (event) {
      if(!$(this).val()){
        $(this).next().removeClass('active');
      }
   });

   $(document).ready(function () {
      $('.spoiler__title').click(function(event){
         $(this).toggleClass('active').next().slideToggle(300);
         $('.spoiler__body').toggleClass('active');
         $(this).parent().toggleClass('active');
      })
   });  
   $(document).ready(function () {
      $('.spoiler-other__title').click(function(event){
         $(this).toggleClass('active').next().slideToggle(300);
         $(this).parent().toggleClass('active');
      })
   });       
   $('.sharing__checkbox input').on('change', function() {
        if($(this).is(':checked')){
           $('.sharing__checkbox b').text('Enabled');
           $(".sharing__image img").attr('src','img/autocover/Scheme/Scheme 03-2.svg');
         }else{
           $('.sharing__checkbox b').text('Disabled');
           $(".sharing__image img").attr('src','img/autocover/Scheme/Scheme 03-1.svg');
         }
       
      
    });
    $('.industries__more').click(function (event) {
      event.preventDefault();
        $(this).hide();
        $(".industries__left span").toggleClass('active');      
    });     
   
    $('.tabs__item').click(function (event) {
          $(this).addClass('active');
          $(".tabs__item").not(this).removeClass('active');
    });    
    $('.tabs__item-1').click(function(event){
        $('#tab_01').addClass('target');
        $('#tab_02').removeClass('target');
        $('#tab_03').removeClass('target');
    });
    $('.tabs__item-2').click(function(event){
        $('#tab_02').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_03').removeClass('target');
    });
    $('.tabs__item-3').click(function(event){
        $('#tab_03').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_02').removeClass('target');
    });
    $('.filter__item').click(function (event) {
          $(this).addClass('active');
          $(".filter__item").not(this).removeClass('active');
    });   
    $('.filter__item:nth-child(1)').click(function(event){
        $('.filter__card').show();
    });    
    $('.filter__item:nth-child(2)').click(function(event){
        $('.filter__card').hide();
        $('.filter__card[data-source="company"]').show();
    });
   $('.filter__item:nth-child(3)').click(function(event){
        $('.filter__card').hide();
        $('.filter__card[data-source="technology"]').show();
    });
   $('.filter__item:nth-child(4)').click(function(event){
        $('.filter__card').hide();
        $('.filter__card[data-source="news"]').show();
    });
   $('.footer__input').click(function(event){
        $('.search').addClass('active');
        $('html, body').addClass('lock');
    });
   $('.search-close').click(function(event){
        $('.search').removeClass('active');
        $('html, body').removeClass('lock');
    });

   
  AOS.init({
     once: true,
  });   
});      


