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