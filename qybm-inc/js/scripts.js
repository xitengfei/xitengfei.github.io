(function($){

//rotateCircle
(function(){
	function renderCircle(obj){
		var $items = obj.find('.ringItem');
		var pleft, ptop;
		for(var i = 0, l = $items.length; i < l; i++) {
		  	pleft = (50 - 45*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
		  	ptop = (50 + 45*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
			$items.eq(i).css({'left':pleft, 'top':ptop});
		}
	}
	function init(){
		$(".circle .ring").each(function(){
			renderCircle($(this));
		});
	}
	init();
})();


var xCounter = function(settings){
	var unitDeg = 1;
	var totalDeg = 360;
	var deg = 0;
	var timerN, timerR;
	var start, end;
	var numberOffset = 60;
	var options = {
		obj:null,
		totalPercent:0.8,
		start:0,
		end:60,
		speed:10,
		color: 'red'
	};

	this.options = $.extend({}, this.options, settings);
	if(!this.options.obj){
		return false;
	}
	this.options.totalPercent = this.options.obj.data('percent');
	this.options.start = this.options.obj.data('start');
	this.options.end = this.options.obj.data('end');
	this.options.speed = this.options.obj.data('speed');
	// this.options.color = this.options.obj.data('color');

	start = this.options.start;
	end = this.options.end;

	totalDeg = this.options.totalPercent * 360;
	numberOffset = end - start;
	unitDeg = totalDeg/(numberOffset * 10); unitDeg.toFixed(3);
	

	var _self = this;

	var number = function(){
		start += 1;
		if(start <= end){
			_self.options.obj.find(".number").text(start);
		}else{
			clearInterval(timerN);
		}
	}

	var rotate = function(){
		deg += unitDeg;
		if(deg <= totalDeg){
			if(deg <= 180){
				_self.options.obj.find(".pie1").css("transform","rotate(" + deg + "deg)");
			}else{
				_self.options.obj.find(".pie2").css("backgroundColor", _self.options.color);
				_self.options.obj.find(".pie2").css("transform","rotate(" + deg + "deg)");
			}
		}else{
			clearInterval(timerR);
		}
	}

	var setColor = function(){
		_self.options.obj.find(".bg").css('backgroundColor', _self.options.color);
	}

	this.init = function(){
		interval = parseInt(1000/this.options.speed);

		rotate();
		timerR = setInterval(function(){
			rotate();
		}, interval/10);

		number();
		timerN = setInterval(function(){
			number();
		}, interval);
	}

	// this.reset = function(){
	// 	clearInterval(timerN);
	// 	clearInterval(timerR);
	// 	_self.options.obj.find(".pie1").css("transform","rotate(0deg)");
	// 	_self.options.obj.find(".pie2").css("transform","rotate(0deg)");
	// 	_self.options.obj.find(".pie2").css("backgroundColor","#333");
	// }

	setColor();
}


function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return (( elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)) || ( (elemTop < docViewTop) && (elemBottom > docViewBottom) );
}

function isScrolledIntoView2(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return elemTop < (docViewTop + $window.height()/2);
}

function runInViewPort(){
	var xCounterRendered = false;
	
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
	events();
});


})(jQuery);