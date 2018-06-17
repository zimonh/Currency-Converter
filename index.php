<?php
	//developer mode
	$d = '';
	$d = '?'.date("Y.m.d.h.m.s");

	//block the grabber script from cross origin
	session_start(['cookie_lifetime' => 600,]);
	$_SESSION["origin"] = true;
?>
<!DOCTYPE html>
<html lang="en">
<head>

	<title>Currency Converter</title>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" 	content="IE=edge">
	<meta property="og:title" 			content="Currency Converter by ZIMONH" />
	<meta property="og:type" 			content="website"  />
	<meta property="og:url" 			content="http://convert.zimonh.at" />
	<meta property="og:image" 			content="OGcoverCur.jpg" />
	<meta property="og:image:secure_url" content="OGcoverCur.jpg" />
	<meta property="og:image:width"		content="1200" />
	<meta property="og:image:height" 	content="630" />
	<meta property="og:image:type" 		content="image/jpeg" />
	<meta property="og:description" 	content="Get free currency rates while you type using the latest or custom dates. Calculate the exchange rate. A powerful calculator to compare valuta." />
	<meta name='description' 			content='Get free currency rates while you type using the latest or custom dates. Calculate the exchange rate. A powerful calculator to compare valuta.'>
	<meta name="viewport" 				content="width = device-width, initial-scale = 1">


	<link rel="icon" type="image/png" href="https://zimonh.at/zh/img/zh.ico">

	<link   integrity="sha256-916EbMg70RQy9LHiGkXzG8hSg9EdNy97GazNG/aiY1w=" crossorigin="anonymous" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
	<script integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script integrity="sha256-U5ZEeKfGNOja007MMD3YBI0A3OSZOQbeG6z2f2Y0hu8=" crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script integrity="sha256-KM512VNnjElC30ehFwehXjx1YCHPiQkOPmqnrWtpccM=" crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

	<link   href="style.css<?php echo $d; ?>" rel="stylesheet">
</head>
<body>
<div class="overlay hidden-sm hidden-xs"></div>
	<div class="container-fluid">
		<div id="stylepicker" class="container text-center" style="margin-top:6vh; margin-bottom:70px;">
			<div class="col-lg-12" style="text-align:center; font-family: Helvetica, sans-serif;">
				<h1 id="tile"><b>Currency Converter</b><span>. Made by </span><b><a href="http://zimonh.at">ZIMONH</a></b></h1>
				<br>
				<br>
				<div class="input-group hideatpageload maxwidther">
				  <input id="curencyfinder" type="text" class="form-control" placeholder="Search by Country or Currency.">
				  <span class="input-group-btn">
					<button id="scrollgo" class="btn btn-default btn-success" type="button">Go!</button>
				  </span>
				</div>
			</div>

			<div class="col-sm-6 col-xs-12">
				<div class="form-group" style="margin-top:10px; margin-bottom:0; ">
					<div class='input-group date hideatpageload maxwidther' id='datetimepicker1'>

						<span class="input-group-addon">
						<span class="glyphicon glyphicon-calendar"></span>
						</span>
						<input id="datetimepicker2" type='text' class="form-control" />
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-xs-12 hideatpageload">
				<div class="input-group maxwidther" style="margin-top:10px; ">
				  <span class="input-group-addon" id="basic-addon1"><span class="hidden-xs">Places after decimal</span><span class="hidden-lg hidden-md hidden-sm">Decimal Places</span></span>
				  <select class="form-control" id="selectdecim">
						<option>0</option>
						<option>1</option>
						<option selected>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
					</select>
				</div>
			</div>

			<div class="col-lg-12">
				<div class="loaderrropacity loaderrr">
					<div class="lds-css">
						<div class="lds-ellipsis">
							<div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
						</div>
					</div>
				</div>
			</div>

			<form class="form-inline" style="display:inline-block;" >
				<div class="centercurrency hideatpageload">

				<p class="hidden-lg hidden-md hidden-sm" style="color:white;">Click currency to move it to top</p>
				<div id="psP" class="nubeT"></div>
					
				<script src="currencies.js<?php echo $d;?>"></script>
				<script src="script.js<?php echo $d;?>"></script>

				<script integrity="sha256-Cjux44IGDGmZwm+qw4rtfj1swD9zdqmja4gaflupI8o=" crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js"></script>
				<script integrity="sha256-5YmaxAwMjIpMrVlK84Y/+NjCpKnFYa8bWWBbUHSBGfU=" crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>
				<link   integrity="sha256-yMjaV542P+q1RnH6XByCPDfUFhmOafWbeLPmqKh11zo=" crossorigin="anonymous" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css" rel="stylesheet"/>
			</div>
		</form>
		<br><br><br>
	</div>
</div>
<footer class="footer">
	<div class="container text-center">
		<span class="text-muted">&#9400; <a href="http://zimonh.at">ZIMONH</a> Exchange rates from <a href="http://fixer.io/">fixer.io</a></span>
	</div>
</footer>
<script src="https://www.zimonh.at/userTrack/tracker.js"></script>
</body>
</html>
