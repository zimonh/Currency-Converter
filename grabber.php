<?php
	$href = str_replace(['~','|','*'],['?','=','&'],$_GET["!"]);
/* gets the data from a URL */
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
$dom->loadHTML($stringy);//put your complete source html string here
libxml_use_internal_errors(false);

	$elm=$dom;

$tag = $elm->tagName;
$cnt = $elm->nodeValue;
//replace src="/ with src="$href/


$str  = $dom->saveHtml($elm);


header('Content-type:application/json;charset=utf-8');
echo trim(strip_tags($str));


?>