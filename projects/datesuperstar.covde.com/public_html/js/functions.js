window.shareTitles = [
	'我的心愿独自上路，再许一个陪陪它，说不定就能实现啦！',
	'万事帮会驾着七彩祥云，来帮我实现心愿！',
	'由于我刚刚许的心愿系统无法识别，需要再去许一个！',
	'三千道藏有云：万丈高楼平地起，实现心愿靠自己！',
	'如假包换的心愿秘籍就在每周四晚8点腾讯视频《约吧大明星》！',
	'经过系统鉴定，朋友圈里第3个点赞的Ta是帮我实现愿望的有缘人',
	'第5个点赞的可人儿，你憋跑，你将肩负实现我心愿的重任！',
	'抢沙发评论我的老铁，你太关心我的心愿啦，实现就靠你啦~',
	'听说5月11日看腾讯视频《约吧大明星》第二季，心愿被实现的几率会增加7倍哦~',
	'万事帮告诉我，再瘦10斤就可以实现心愿'
];
window.liuyanScenes = ['5','6','7','8','9'];
window.starIcons = {
	'scene5':'http://datesuperstar.covde.com/img/luhan02.jpg',
	'scene6':'http://datesuperstar.covde.com/img/qiaoxin03.jpg',
	'scene7':'http://datesuperstar.covde.com/img/yangyandong04.jpg',
	'scene8':'http://datesuperstar.covde.com/img/lichen01.jpg',
	'scene9':'http://datesuperstar.covde.com/img/yingcaier05.jpg'
};

window.currentScene = {
	scene_index:null,
	id:null
};

window.initCustomeScript = function(shouldShow, mainContentContainer){
	if(!shouldShow){
		documentReady();
	}
}

// watch scene change
function watchScene(callback){
	var interval1 = setInterval(function(){
		var len = $(".HYPE_scene").length;
		for(var i=0;i<len;i++){
			var $dom = $(".HYPE_scene").eq(i);
			if($dom.attr('aria-hidden') !== 'true'){
				var hype_scene_index = $dom.attr('hype_scene_index');
				if(hype_scene_index != currentScene.scene_index){
					var lastScene = {
						scene_index:currentScene.scene_index,
						id:currentScene.id
					};
					currentScene.scene_index = hype_scene_index;
					currentScene.id = $dom.attr('id');
					callback(currentScene, lastScene);
				}
				break;
			}
		}
	}, 200);
}


function progressSlider($e, endCallback){
	var p = 0;
	$num = $e.find('.percent i');
	$bar = $e.find('.progressbar-fill');
	console.log($bar.length);
	var i = setInterval(function(){
		p++;
		$num.text(p);
		$bar.css('width', p + '%');
		if(p == 100){
			clearInterval(i);
			endCallback();
		}
	}, 30);
}


function getRandomNum(Min,Max){
	var Range = Max - Min; 
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}


window.isIos = function(){
    var u = navigator.userAgent;
    var ret = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return ret;
};

function musicPlay(){
	audio1.play();
	window.playing = true;
	$("#musicPlayBtn").attr('class', 'pause');
}

function musicStop(){
	audio1.pause();
	window.playing = false;
	$("#musicPlayBtn").attr('class', 'play');
}