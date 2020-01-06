    window.onload = function () {
        var p = $(".page");
        p.each(function(index){
            $(this).on("mousewheel DOMMouseScroll", function(e){
                e.preventDefault();
                $(this).find(".con_wrap").addClass("on");
                var delta=0;
                if(!event) event=window.event;
                if(event.wheelDelta){
                    delta = event.wheelDelta / 120;
                    if(window.opera) delta = -delta;
                } else if(event.detail){
                    delta = -event.detail / 3;
                }
                var moveTop = $(window).scrollTop();
                var elem = $(".page").eq(index);
                if(delta < 0){ //마우스 휠을 위에서 아래로
                    if($(elem).next != undefined){
                        try{
                            moveTop = $(elem).next().offset().top;
                        } catch(e) { }
                    }
                } else {
                    if($(elem).prev() != undefined){
                        try{
                            moveTop = $(elem).prev().offset().top;
                        } catch(e){}
                    }
                }
                $("html, body").stop().animate({
                    scrollTop:moveTop+"px"
                }, {duration:800, complete:function(){

                }});
            });
        });
    }    