"use strict";

app.cPager.ctrl('myCtrl', {

    myTask: function () {
        console.log('---> myTask 1. ');

        // Your Code here...
        

        return function () {
            console.log('---> myTask 2. ');

            // Your Code here...

        };
    },
    onlyTask: function () {
        console.log('---> Only Task; No PageChange');



        return false;
    },
    myAnimateTask: function () {
        console.log('---> myAnimateTask 1. ');

        // Your Code here...
        
        

        
        

        return function () {
            console.log('---> myAnimateTask 2. ');

            // Your Code here...

            return function () {
                console.log('---> myAnimateTask 3. ');
    
                // Your Code here...
                

                
                
                            $("#trigger").on("click",function(){
                
                $(".paket").addClass("movey").removeClass("movex").stop().removeClass("paket"); // fällt aber hier
                $( "body" ).append( '<div class="movex absolute paket paketstyle">DHL</div>' );

                animatePack();
            })
            
            
            
            
        var animatePack = function () {

                    $('.movex').css('left','-50px')
                               .animate({'left':$(window).width()*0.75},
                                        5000,
                                        'linear',
                                        function(){
                                            $(this).addClass("movey").removeClass("movex").removeClass("paket");
                                            $( "body" ).append( '<div class="movex absolute paket paketstyle">DHL</div>' );
                                            animatePack();
                        });
    
                                $('.movey').css('top','27vh')
                                       .animate({'top':$(window).height()-200},
                                                3000,
                                                'linear',
                                                function(){
                                                wertebereich = $(this).offset().left;
                                                if(wertebereich>=600 && wertebereich<=800) {
                                                   //alert(wertebereich);
                                                    $(".points").append( "jetroffen" ); 
                                                }
                                                console.log(wertebereich);
                                                    $(this).detach();        
                                            //animatePack();
                                });    
            
            
            
                                
            
            
            
                        };

        animatePack();
                
                
                
                
                
                
                
                
                

            };
        };
    }

});