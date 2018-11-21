(function ($) {
   //Prallax Effect
    $(window).on('scroll', () => {
       let top = $(this).scrollTop();
        if ($(this).width() > 992) {
            $('#showcase').css({
                'background-position-y': top / 2 - 90 + 'px'
            });
            $('.content').css({
                'transform': 'translate(0,-' + top / 4 + 'px)'
            })
        }
        else{
            $('#showcase').css({
                'background-position-y': top / 2 - 0 + 'px'
            });
            $('.content').css({
                'transform': 'translate(0,-' + top / 4 + 'px)'
            })
        }
        
    });

    //Isotope Plugin

    let gallery = $('.gallery');
    gallery.find('.col-lg-3').addClass('loop');
    let isotope_gallery = gallery.isotope({});
    $('.filtering').on('click' , 'li' , function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        gallery.find('.col-lg-3').removeClass('loop');
        let data_filter = $(this).data('filter');
        gallery.isotope({filter: data_filter}).on( 'arrangeComplete', function( event, filteredItems ){
            $.each(filteredItems,function(index,value){
                $(value.element).addClass('loop');
            })
        });
    });

    //MagnificPopup plugin
    gallery.magnificPopup({
        delegate: '.loop .move',
        type:'image',
        gallery:{
            enabled:true
        }
    });

    //chart
    let bar =$('.bar');
    $(window).on('scroll',function(){
        let ts = $(this).scrollTop();
        let chartPos = $('.chart').offset().top - 300;
        if(chartPos <= ts){
            bar.each(function(){
                let percent = $(this).data('percent');
                $(this).animate({
                    'height' : percent
                },1000).children('.des').text(percent);
            })
        }
    })
    
    

    //resume timeline

    let timeline = $('.timeline-content');
    let windows = $(window);

    timeline.each(function(){
        if(windows.width() > 992){
            $(this).find('.collapse').removeClass('show');
        }else{
            $(this).find('.collapse').addClass('show');
        }
    }).find('.collapse').eq(0).addClass('show');

    windows.on('resize',function(){
        timeline.each(function(){
            if(windows.width() > 992){
                $(this).find('.collapse').removeClass('show');
            }else{
                $(this).find('.collapse').addClass('show');
            }
        }).find('.collapse').eq(0).addClass('show');;
    });

    //flexSlider Plugin
    $('.flexslider').flexslider({
        animation: 'fade',
        selector: '.slides > .item',
        prevText:'',
        nextText:'',
        controlNav:'thumbnails',
        pauseOnHover:false,
        pauseOnAction:false
    })

   // circle-progress
   $(window).on('scroll',function(){
        let ts = $(this).scrollTop();
        let circlePos = $('#circle-progress').offset().top - 300;
        if(circlePos <= ts){
            $('.circle-progress-percent').each(function(){
                let percent = $(this).data('percent');
                $(this).animate({
                    'height': percent
                },1000).next('span').text(percent);
            });
        }

   })
  

   //knowledge progress
   $(window).on('scroll',function(){
        let ts = $(this).scrollTop();
        let progressPos = $('#knowledge').offset().top - 300;
        if(progressPos <= ts){
            $('.progress-percent').each(function(){
                let percent =$(this).data('percent');
                $(this).animate({
                    'width': percent
                },1000).children('span').text(percent);
            });
        }

})


   

   //Milestones section
   $('.counter').counterUp({
       delay:10,
       time:1000
   });

    //sticky Navbar
    function stickyNav(nav,navPos){
        let windowObj = $(window);
        windowObj.on('scroll',function(){
            if($(this).width() > 992){
                let topScroll = $(this).scrollTop();
                if(topScroll > navPos){
                    $(nav).removeClass('normal-nav');
                    $(nav).addClass('sticky-nav');
                }else{
                    $(nav).removeClass('sticky-nav');
                    $(nav).addClass('normal-nav');
                }

            }else{
                    $(nav).removeClass('sticky-nav');
                    $(nav).removeClass('normal-nav');

            }
        })
    }
  
    let navpos = $('.navbar').offset().top;
    stickyNav('.navbar',navpos);

  //smooth scroll

    let smoothLinks = $('.nav-link');

    smoothLinks.on('click',function(e){
        let $this = $(this);
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        },1000,'easeInOutBack');
        setTimeout(function(){
            $this.parent().addClass('active-item').siblings().removeClass('active-item');
        },1000)
       
    });
    $(window).on('scroll',function(){
        let topScrolls = $(this).scrollTop();
        smoothLinks.each(function(){
            let sectionPosition = $(this.hash).offset().top;
            if( sectionPosition <= topScrolls){
                $(this).parent().addClass('active-item').siblings().removeClass('active-item')
            }
        })
    });

        
})(jQuery);