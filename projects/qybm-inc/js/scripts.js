(function($){

function runInViewPort(){
	$("body > div.app").each(function(){
		var that = this;
		if(isScrolledIntoView2(this)){
			setTimeout(function(){
				$(that).find(".circle").addClass("open");
			}, 300);
		}
	});

	var $count = $("body > div.intro");
	if(isScrolledIntoView2($count) && !xCounterRendered){
		xCounterRendered = true;
		//counter
		setTimeout(function(){
			$(".xcounter").each(function(i, e){
				var counter = new xCounter({
					obj: $(e),
					color: '#FCA136'
				});
				counter.init();
			});
		}, 300);
	}
}

function events(){
	xCounterRendered = false;
	
	runInViewPort();
	$(window).scroll(function(){
		runInViewPort();
	});
	
	$(".case-list li").mouseover(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
}


$(function(){
	//events();
});


})(jQuery);