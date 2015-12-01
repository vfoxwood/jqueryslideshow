//start prev/next toggle

$(document).ready(function(){
    $(".divs div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next").click(function(){
        if ($(".divs div:visible").next().length != 0)
            //start jQuery animation
            $(".divs div:visible").next().slideDown(500).prev().hide();
        else {
            $(".divs div:visible").hide();
            //start jQuery UI effect to signal that you're back at the beginning of the slideshow
            $(".divs div:first").effect("bounce", {times:4}, 800);
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".divs div:visible").prev().length != 0)
            //start jQuery UI effect to signal that you're going backward
            $(".divs div:visible").prev().effect("pulsate", {times:5}, 800).next().hide();
        else {
            $(".divs div:visible").hide();
            //start Jquery UI effect to signal that you're going backward
            $(".divs div:last").effect("pulsate", {times:5}, 800);
        }
        return false;
    });
// end prev/next toggle
    
    
// start buttons
    
   $("#one").click(function(){
       $(".cls1").hide().delay(100).fadeIn(500);
       $(".cls2").hide();
       $(".cls3").hide();
       $(".cls4").hide();
       $(".cls5").hide();
       
   });
   
   $("#two").click(function(){
       $(".cls1").hide();
       $(".cls2").hide().delay(100).fadeIn(500);
       $(".cls3").hide();
       $(".cls4").hide();
       $(".cls5").hide();
       
   });
   
   $("#three").click(function(){
       $(".cls1").hide();
       $(".cls2").hide();
       $(".cls3").hide().delay(100).fadeIn(500);
       $(".cls4").hide();
       $(".cls5").hide();
       
   });
   
   $("#four").click(function(){
       $(".cls1").hide();
       $(".cls2").hide();
       $(".cls3").hide();
       $(".cls4").hide().delay(100).fadeIn(500);
       $(".cls5").hide();
       
   });
   
   $("#five").click(function(){
       $(".cls1").hide();
       $(".cls2").hide();
       $(".cls3").hide();
       $(".cls4").hide();
       $(".cls5").hide().delay(100).fadeIn(500);
       
   }); 
   
    
});

