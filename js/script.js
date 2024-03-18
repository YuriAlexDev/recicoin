//SLIDE BOX
$(function(){
    

    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {

        $('.bxCarrosel').bxSlider({
        
            mode: 'horizontal',
            swipeThreshold:true,
            touchEnabled: true,
            oneToOneTouch: true,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            auto: true,
            controls:true,
            infiniteLoop: true,
            autoHover:true,
            slideWidth:300,
            slideMargin:20,
            responsive:true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            shrinkItems:true,
            speed:1200
      
        });
    
    }else{   
       
        $('.bxCarrosel').bxSlider({
        
            mode: 'horizontal',
            swipeThreshold:true,
            touchEnabled: false,
            oneToOneTouch: false,
            preventDefaultSwipeX: true,
            preventDefaultSwipeY: false,
            auto: true,
            controls:true,
            infiniteLoop: true,
            autoHover:true,
            slideWidth:500,
            slideMargin:40,
            responsive:true,
            minSlides: 1,
            maxSlides: 2,
            moveSlides: 1,
            shrinkItems:true,
            speed:1200
      
        });

    }  

}); 