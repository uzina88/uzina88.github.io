$(document).ready(function(){
    $(".lst img").click(function(){
        var $src = $(this).attr("src");
        var $alt = $(this).attr("alt");
        $("#pop .pop_wrap").find("img").remove();
        $("#pop .pop_wrap").append("<img src='"+$src+"' alt='"+$alt+"'>");
        $("#pop").delay(300).fadeIn();
    });
    $("#pop .pop_wrap").click(function(){
        $("#pop").fadeOut();
    });
});    