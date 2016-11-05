(function($){

    //hide submenu after click # on mobile
    $(".navbar-nav li").click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $("#navbar-collapse-1").removeClass('in');
    });

    //switchClass when scroll
    function switchClass(){
        if($(window).scrollTop() > 30){
            $('nav').addClass('small-nav');
            $('nav').removeClass('transparent');
        }else{
            $('nav').addClass('transparent');
            $('nav').removeClass('small-nav');
        }
    }
    switchClass();
    $(window).scroll(function(){
        switchClass();
    });


    /**=====================================
    Responsive logic
    =======================================*/
    function banerHeight(){
        var h = $(".banner_container img.banner_bg").height();
        $(".banner_container .banner").height(h);
    }

    var response = function(){
        banerHeight();
    }
    $(window).resize(function(){
        response();
    });
    response();
})(jQuery);