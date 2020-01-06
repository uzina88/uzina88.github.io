$(document).ready(function(){
    var wd = $(".vs").width();    
    var len = $(".img_box li").length;
    var intv = setInterval(function(){ nextAni(); }, 2900);
    //console.log(wd, len);
    function nextAni(){
        $(".img_box").not(":animated").animate({"margin-left":-wd+"px"}, 600, function(){
            $(".img_box li").eq(0).appendTo($(".img_box"));
            $(".img_box").css("margin-left","0px");
        });
    }
    function prevAni(){
        $(".img_box li").eq(len-1).prependTo($(".img_box"));
        $(".img_box").css("margin-left",-wd+"px");
        $(".img_box").not(":animated").animate({"margin-left":"0px"}, 600);
    }
    $(".btn_box .next_btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){ nextAni(); }, 2900);
    });
    $(".btn_box .prev_btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){ nextAni(); }, 2900);
    });
});