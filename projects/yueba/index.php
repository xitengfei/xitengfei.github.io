<?php
	require_once 'lib/weixin.php';

?>

<!DOCTYPE html>
<html>
  <head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1,IE=edge" />
	<title>约吧大明星</title>
	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
	<script type="text/javascript" src="./js/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="./js/functions.js"></script>
	<script type="text/javascript" src="./js/main.js"></script>
	<link rel="stylesheet" type="text/css" href="./css/fonts/fonts.css">
	<link rel="stylesheet" type="text/css" href="./css/main.css">
	<meta name="sharecontent" data-msg-img="" data-msg-title="" data-msg-content=""/>
	<script type="text/javascript">
	wx.config({
	    debug: true, // 开启调试模式
	    appId: 'wx5b257b94167e1ffc', // 必填，公众号的唯一标识
	    timestamp: '', // 必填，生成签名的时间戳
	    nonceStr: '', // 必填，生成签名的随机串
	    signature: '',// 必填，签名，见附录1
	    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(function(){
		console.log('wx is ready!');
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

	<!-- end copy -->
  </head>
  <body>
	<!-- copy these lines to your document: -->
	<img src="http://xitengfei.github.io/static/logo.png" class="shareImg"/>

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