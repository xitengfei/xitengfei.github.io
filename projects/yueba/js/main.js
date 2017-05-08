function shareConfig(){
	var randomIndex = getRandomNum(0, 9);
	var title = shareTitles[randomIndex];
	// var img = 'http://file.youboy.com/d/151/55/37/5/610915.jpg';
	var img = starIcons['scene'+currentScene.scene_index];

	console.log(img);

	$('title').text(title);
	$('body').children('.shareImg').attr('src', img);
	$("meta[name='sharecontent']").attr('data-msg-img', img);
	$("meta[name='sharecontent']").attr('data-msg-title',title);

	wx.onMenuShareTimeline({
	    title: title, // 分享标题
	    link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	    imgUrl: img, // 分享图标
	    success: function () { 
	        // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	        // 用户取消分享后执行的回调函数
	    }
	});
}

window.message = null;
window.msgSubmitted = false;
window.submitMsg = function(){
	console.log('ajax submit msg:', message);
}

// watch scene change
watchScene(function(scene,lastScene){
	console.log(currentScene);

	if(currentScene.scene_index == "0"){
		var $loadingbox = $('#'+currentScene.id).find('.loadingbox');

		renderApp();

		progressSlider($loadingbox, function(){
			$('#'+currentScene.id).find('.enter-layer').removeClass('hide');
		});
	}

	if(currentScene.scene_index == "4"){

	}

	if(liuyanScenes.indexOf(currentScene.scene_index) >= 0){
		var $scene = $('#'+currentScene.id);
		
		$el = $scene.find('.HYPE_element:eq(1)');
		$el.addClass('msg-board').empty();
		$input = $('<textarea name="msg">我有个愿望dream。</textarea><p style="display:none;" class="tips"></p>');
		$el.append($input);
		$input.keyup(function(){
			var v = $(this).val();
			window.message = v;
			if(v.length < 5 || v.length > 300){
				$(this).next('p').text('Tips：许愿文字不得超过300字，不得小于5个字哦').show();
				$(this).parents('.HYPE_scene').find('.submit-btn2').show();
			}else{
				$(this).next('p').hide();
				$(this).parents('.HYPE_scene').find('.submit-btn2').hide();
			}
		});

		$el_button = $scene.find('.HYPE_element:eq(3)');
		$el_button.addClass('submit-btn');
		var $button2 = $('<div class="submit-btn2" style="display:none;"></div>');
		$button2.click(function(){
			console.log('clicked me!!!');
		});
		$scene.append($button2);

		shareConfig();
	}

	if(currentScene.scene_index > 9){
		if(!msgSubmitted){
			submitMsg();
			msgSubmitted = true;
		}
	}
});


function scene0(){
	var $scene = $(".HYPE_scene[hype_scene_index='0']");
	var $layer = $scene.children('div:eq(2)');
	$html ='<div class="loadingbox"> \
				<div class="percent"><i>1</i>%</div> \
				<div class="progress"><div class="progressbar"><span class="progressbar-fill"></span></div></div>	\
			</div>';
	$layer.append($html);

	$scene.children('div:eq(3)').addClass('enter-layer hide');
}

function scene2(){
	var $scene = $(".HYPE_scene[hype_scene_index='2']");
	var $next_step_layer = $scene.children('div:eq(1)');
	$next_step_layer.addClass('next_step_layer hide');

	// var $input_layer = $scene.children('div:first');
	var $html = '<div class="inputPwd"> \
		<input name="password" id="password" placeholder="请输入暗号" /> \
		<p style="display:none;" class="tips">Tips：密码即第二季播出日期哦（0511）</p>';
	$scene.append($html);

	var keyupvalues = ['','0','05','051','0511'];
	$("#password").keyup(function(){
		var v = $(this).val();
		if(keyupvalues.indexOf(v) < 0){
			$(".inputPwd .tips").show();
			$(this).val('');
		}
		if(v == '0511'){
			$(".inputPwd .tips").hide();
			$next_step_layer.removeClass('hide');
		}
	});
}


function renderApp(){
	scene2();
}

function documentReady(){
	console.log($('.HYPE_scene').length);
	scene0();
}