<?php

require_once __DIR__.'/tools.php';

// $AppID = 'wx5b257b94167e1ffc';
// $AppSecret = '3be90e7eb5cf183b5e05ce5f93a2b4e8';
$GLOBALS['AppID'] = 'wx3774ed6d9068f2a2';
$GLOBALS['AppSecret'] = '19aefb7aac57b15918468ea214d2a0f3';

/**
// 注意：这里需要将获取到的token缓存起来（或写到数据库中）
// 不能频繁的访问https://api.weixin.qq.com/cgi-bin/token，每日有次数限制
// 通过此接口返回的token的有效期目前为2小时。令牌失效后，JS-SDK也就不能用了。
// 因此，这里将token值缓存1小时，比2小时小。缓存失效后，再从接口获取新的token，这样
// 就可以避免token失效。
// S()是ThinkPhp的缓存函数，如果使用的是不ThinkPhp框架，可以使用你的缓存函数，或使用数据库来保存。
*/
function wx_get_token(){
    $token = G('access_token');
    if (!$token) {
        $res = file_get_contents('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$GLOBALS['AppID'].'&secret='.$GLOBALS['AppSecret']);
        $res = json_decode($res, true);
        var_dump($res);
        $token = $res['access_token'];
        S('access_token', $token);
    }
    return $token;
}


// 注意：这里需要将获取到的ticket缓存起来（或写到数据库中）
// ticket和token一样，不能频繁的访问接口来获取，在每次获取后，我们把它保存起来。
function wx_get_jsapi_ticket(){
    $ticket = "";
    do{
        $ticket = G('wx_ticket');
        if (!empty($ticket)) {
            break;
        }
        $token = G('access_token');
        if (empty($token)){
            wx_get_token();
        }
        $token = G('access_token');
        if (empty($token)) {
            logErr("get access token error.");
            break;
        }
        $url = sprintf("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=%s&type=jsapi",
            $token);
        $res = file_get_contents($url);
        $res = json_decode($res, true);
        $ticket = $res['ticket'];
        S('wx_ticket', $ticket);
    }while(0);
    return $ticket;
}

$timestamp = time();
$wxnonceStr = "yuebadamingxinss";
$wxticket = wx_get_jsapi_ticket();
$wxOri = sprintf("jsapi_ticket=%s&noncestr=%s&timestamp=%s&url=%s",
    $wxticket, $wxnonceStr, $timestamp, curPageURL());
$wxSha1 = sha1($wxOri);