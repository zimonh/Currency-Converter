<?php
//block from cross origin works with index where it is initiated
//and uses credentials from fetch(url,{credentials: 'same-origin'})
session_start();
if($_SESSION["origin"]){

	$s = parse_ini_file('/home/zimonh53/secure_connect/fixer_api.ini');
		$access_key =$s['access_key'];

	$href = $_GET["!"].$access_key;
	function get_data($href) {
		$ch = curl_init();
		$timeout = 5;
		curl_setopt($ch, CURLOPT_URL, $href);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}

	$stringy = get_data($href);
	$dom = new DOMDocument();
	libxml_use_internal_errors(true);
	$dom->loadHTML($stringy);
	libxml_use_internal_errors(false);
	$elm = $dom;
	$tag = $elm->tagName;
	$str = $dom->saveHtml($elm);

	header('Content-type:application/json;charset=utf-8');
	echo trim(strip_tags($str));
}
?>