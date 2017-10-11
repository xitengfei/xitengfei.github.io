<?php

function G($key){
	$path = __DIR__.'/data.txt';
	$str = file_get_contents($path);
	if($str){
		$data = json_decode($str, true);
		if($data && isset($data[$key])){
			return $data[$key];
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function S($key, $val){
	$path = __DIR__.'/data.txt';
	// exit($path);
	$str = file_get_contents($path);
	$data = json_decode($str, true);
	if(!$data){
		$data = array();	
	}
	$data[$key] = $val;
	$str = json_encode($data);
	return file_put_contents($path, $str, LOCK_EX);
}


function curPageURL() {
  $pageURL = 'http';
  $pageURL .= "://";
  if ($_SERVER["SERVER_PORT"] != "80") {
    $pageURL .= $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . $_SERVER["REQUEST_URI"];
  }else{
    $pageURL .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
  }
  return $pageURL;
}