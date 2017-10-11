<?php
	require_once __DIR__.'/lib/weixin.php';
?>
<!DOCTYPE html>
<html>
  <head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1,IE=edge" />
	<title>听说在这里许的愿，99%都被万事帮实现了。</title>
	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
	<script type="text/javascript" src="./js/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="./js/functions.js"></script>
	<script type="text/javascript" src="./js/main.js"></script>
	<link rel="stylesheet" type="text/css" href="./css/fonts/fonts.css">
	<link rel="stylesheet" type="text/css" href="./css/main.css">
	<meta name="sharecontent" data-msg-img="./img/logo.jpg" data-msg-title="" data-msg-content=""/>
	<div id='wx_pic' style='margin:0 auto;display:none;'><img src='./img/logo.jpg' /></div>
	<script type="text/javascript">
	wx.config({
	    debug: true, // 开启调试模式
	    appId: '<?php echo $GLOBALS['AppID']; ?>', // 必填，公众号的唯一标识
	    timestamp: '<?php echo $timestamp; ?>', // 必填，生成签名的时间戳
	    nonceStr: '<?php echo $wxnonceStr; ?>', // 必填，生成签名的随机串
	    signature: '<?php echo $wxSha1; ?>',// 必填，签名，见附录1
	    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});

	window.playing = false;
	window.audio1 = document.createElement('audio');
	audio1.loop = 'loop';
	audio1.src = "img/bgmusic.mp3";

	wx.ready(function(){
		console.log('wx is ready!');
		audio1.play();audio1.pause();

		wx.onMenuShareTimeline({
		    title: '听说在这里许的愿，99%都被万事帮实现了。',
		    link: document.URL, //
		    imgUrl: "http://datesuperstar.covde.com/img/logo.jpg"
		});
		wx.onMenuShareAppMessage({
	        title: '听说在这里许的愿，99%都被万事帮实现了。',
	        desc: '快来许愿吧！',
	        link: document.URL,
	        imgUrl: "http://datesuperstar.covde.com/img/logo.jpg"
	    });
	});
	wx.error(function(res){
		console.log(res);
	});
	</script>
	<style>
		html {
			height:100%;
		}
		body {
			background-color:#FFFFFF;
			margin:0;
			height:100%;
		}
	</style>
	<!-- copy these lines to your document head: -->

	<meta name="viewport" content="user-scalable=yes, width=414" />
	<meta name="apple-mobile-web-app-capable" content="yes" />

	<!-- end copy -->
  </head>
  <body>
	<!-- copy these lines to your document: -->
	<img src="./img/logo.jpg" class="shareImg"/>

	<div id="hype_container" style="margin:auto;position:relative;width:100%;height:100%;overflow:hidden;">
		<script type="text/javascript" charset="utf-8" src="hyperesources/hype_generated_script.js?63223"></script>
	</div>

	<!-- end copy -->
	


	<!-- text content for search engines: -->

	<div style="display:none" aria-hidden=true>

		<div></div>
		<div>我有个愿望。</div>
		<div>我有个愿望。</div>

	</div>

	<!-- end text content: -->

  </body>
</html>