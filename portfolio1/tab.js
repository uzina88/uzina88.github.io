    $(document).ready(function(){
        $(".tab_btn_box button").click(function(){
            var idx = $(this).index();
            $(".tab_btn_box button").removeClass("on");
            $(this).addClass("on");
            $(".tab_con_box .tab_con").removeClass("on");
            $(".tab_con_box .tab_con").eq(idx).addClass("on");
        });
    });    