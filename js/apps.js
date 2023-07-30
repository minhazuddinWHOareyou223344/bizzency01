
    $(function(){  
      let navbar = $(".navbar");
  let backToTopBtn = $(".backToTopBtn");
  let number = 10;



  $(window).scroll(function () {
    let scrTop = $(window).scrollTop();
    console.log(scrTop);
    if (scrTop > 400) {
      navbar.addClass("menuFixed");
    } else {
      navbar.removeClass("menuFixed");
    }

    //*Back to top button view
    if (scrTop > 700) {
      backToTopBtn.fadeIn();
    } else {
      backToTopBtn.fadeOut();
    }
  });
    
        $('#progressone').LineProgressbar({
            percentage: 90 ,// 90%
            fillBackgroundColor: '#0f2f44',
            backgroundColor: '#EEEEEE',
            radius: '10px',
            height: '10px',
            width: '400px'
            
          });
          $('#progresstwo').LineProgressbar({
            percentage: 85 ,// 90%
            fillBackgroundColor: '#ffc612',
            backgroundColor: '#EEEEEE',
            radius: '10px',
            height: '10px',
            width: '400px'
          });
          $('#progressthree').LineProgressbar({
            percentage: 75 ,// 90%
            fillBackgroundColor: '#3498db',
            backgroundColor: '#EEEEEE',
            radius: '10px',
    
            height: '10px',
            width: '400px'
          });
          $('#progressfour').LineProgressbar({
            percentage: 80,// 90%
            fillBackgroundColor: '#8484bf',
            backgroundColor: '#EEEEEE',
            radius: '10px',
            height: '10px',
            width: '400px'
          });


    let serchicon =$('.sercharea')
   
    let navber =$('#navberall .nav-item p a')
    let   cancal =$('.cancal')
    

    navber.click(function(){
        serchicon.show();
       
    });

    cancal.click(function(){
        serchicon.fadeOut(500);  
        console.log('minhaz')
        
    })
    $('#services').slick({
      slidesToShow: 3,
     
      slidesToscroll:1,
      prevArrow:".overlay .arrows  span.laftarrows",
      nextArrow:".overlay .arrows  span.rightarrows",
      autoplay: true,
      autoplaySpeed: 700,
      arrows: true,
      dots: false,
      centerMode: true,
      centerPadding: '0px',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('#Portfolio').slick({
      slidesToShow: 3,
      prevArrow:".portfoliocard  .arrowss  span.laftarrows",
      nextArrow:".portfoliocard  .arrowss  span.rightarrows",
      slidesToscroll:1,
    
      autoplay: false,
      autoplaySpeed: 700,
      arrows: true,
      dots: false,
      centerMode: true,
      centerPadding: '0px',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('#test').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      slidesToShow: 2,
      prevArrow:"#tests .arrows  span.laftarrows",
      nextArrow:"#tests .arrows  span.rightarrows",
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
  $('#blog').slick({
    slidesToShow: 3,
    prevArrow:".overlays .arrows  span.laftarrows",
      nextArrow:".overlays .arrows  span.rightarrows",
    slidesToscroll:1,
  
    autoplay: false,
    autoplaySpeed: 700,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  $("#scroll-to-top").illBeBack({
    left   : 30,

  });

  
})
new VenoBox({
    selector: '.boss',
    share:true,
    spinner:'flow' ,

   
 });
 AOS.init();
 function addDarkmodeWidget() {
  new Darkmode({
    label: '🌓',
  }).showWidget();
}
window.addEventListener('load', addDarkmodeWidget);
window.onscroll = function() {scrollFunction()};

