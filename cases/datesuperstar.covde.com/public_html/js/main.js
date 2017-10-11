function shareConfig(){
	var randomIndex = getRandomNum(0, 9);
	var title = shareTitles[randomIndex];
	
	var img = starIcons['scene'+currentScene.scene_index];

	$('title').text(title);
	$('body').children('.shareImg').attr('src', img);
	$("meta[name='sharecontent']").attr('data-msg-img', img);
	$("meta[name='sharecontent']").attr('data-msg-title',title);
	$("meta[name='sharecontent']").attr('data-msg-content',title);

	wx.onMenuShareTimeline({
	    title: title,
	    link: document.URL,
	    imgUrl: img
	});

    wx.onMenuShareAppMessage({
	    title: title,
	    desc: '快来许愿吧！',
	    link: document.URL,
	    imgUrl: img
	});
}

window.msgSubmitted = false;
window.submitMsg = function(scene){
	var apiUrl = 'http://datesuperstar.covde.com/comment/saveComment';
	var msg = $('#'+scene.id).find('textarea').val();
	console.log('submit msg:', msg);
	$.ajax({
        url : apiUrl,
        data : { region:'', comment:msg },
        dataType : 'JSON',
        type : 'POST',
        async : true,
        success : function(data){
            console.log('submited succesfull', data);
        }
    });
}

// watch scene change
watchScene(function(scene,lastScene){
	console.log(currentScene);

	if(currentScene.scene_index == "0"){
		var $loadingbox = $('#'+currentScene.id).find('.loadingbox');

		renderApp();

		progressSlider($loadingbox, function(){
			$('#'+currentScene.id).find('.loadingbox').hide();
			$('#'+currentScene.id).find('.loadingbox').next('p').show();

			$('#'+currentScene.id).find('.enter-layer').removeClass('hide');
		});
	}

	if(currentScene.scene_index == "1"){
		musicPlay();
		$("#musicPlayBtn").show();
	}

	if(liuyanScenes.indexOf(currentScene.scene_index) >= 0){
		var $scene = $('#'+currentScene.id);
		
		$el = $scene.find('.HYPE_element:eq(1)');
		$el.addClass('msg-board').empty();
		$input = $('<textarea name="msg">我有一个心愿。</textarea><p style="display:none;" class="tips"></p>');
		$el.append($input);
		$input.keyup(function(){
			var v = $(this).val();
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
			submitMsg(lastScene);
			msgSubmitted = true;
		}
	}
});


function scene0(){
	var loadoverText = '《约吧大明星》第二季 <br> 5月11日起每周四晚8点撩心上线';
	var $scene = $(".HYPE_scene[hype_scene_index='0']");
	var $layer = $scene.children('div:eq(2)');
	$html ='<div class="loadingbox"> \
				<div class="percent"><i>1</i>%</div> \
				<div class="progress"><div class="progressbar"><span class="progressbar-fill"></span></div></div>	\
			</div>';
	$html += '<p class="loadingendtip" style="display:none"><img src="img/intobuttonword.png"></p>';
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
	scene0();
	$("body").append('<div id="musicPlayBtn" class="play" style="display:none;"></div>');
	$("#musicPlayBtn").click(function(){
		if(window.playing){
			musicStop();
		}else{
			musicPlay();
		}
	});
}