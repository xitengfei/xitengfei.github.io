<?php

require_once __DIR__.'/tools.php';

// $AppID = 'wx5b257b94167e1ffc';
// $AppSecret = '3be90e7eb5cf183b5e05ce5f93a2b4e8';
$GLOBALS['AppID'] = 'wx5b257b94167e1ffc';
$GLOBALS['AppSecret'] = '3be90e7eb5cf183b5e05ce5f93a2b4e8';

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