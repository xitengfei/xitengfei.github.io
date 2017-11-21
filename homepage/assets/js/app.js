!function() {
    // console.log(1);

    function activeCard(selector){
        if(selector == '#home'){
            $("#body").removeClass('wide-view');
            $(".xui-card").removeAttr('active-page');
        }else{
            if(!$(selector).length){
                console.log('card'+selector+'not found!');
                return;
            }
            
            $("#body").addClass('wide-view');
            $(".xui-card").removeAttr('active-page');
            $(selector).attr('active-page', 'true');
        }
    }

    var hash = window.location.hash;
    activeCard(hash);

    $("#main-menu li a").click(function(){
        var selector = $(this).attr('href');
        activeCard(selector);
    });
    $(window).on('hashchange', function() {
        var hash = window.location.hash;
        activeCard(hash);
    })

}();