$(document).ready(function() {

    $(".inputnronly").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 )) {
            e.preventDefault();
        }
    });


	$('.eur').val( 1 );
	moneyConvert0();
		$('.loaderrr').removeClass( "loaderrropacity" );
		
		$('.inputnronly').css("pointerEvents","auto");
		$('.inputnronly').css("cursor","auto");	

	$('.hideatpageload').removeClass( "hideatpageload" );
	
	setTimeout(function(){
		//only calls the first itteration of the code wwhile it should be getting the lattest update after the new date.
		call_others(last_active);
	}, 100);

	
		
	
	
});


$(function(){ $('#psP').sortable({helper:'clone'}); })


$('.currencybutton').on('click', function() {

	$(this).parent().parent().parent().prepend($(this).parent().parent());
	
	
	$.notify({
		// options
		message:  $(this).html()  +" Moved to the top." 
	},{
		// settings
		type: 'success',placement: {
			from: "bottom",align: "center"
		},
		position: null,
		offset: 60,
	});
	
	$(this).addClass( "yourClass" );
});





	var behindthecomma = 2;	
	last_active = "";
	dateeeee = "latest";
	
	//this should be triggered on date change


	


			 
		
	function restart0(){dateeeee = $('#datetimepicker1').data('date');}
//need to find a way to allow these to be accesd when changing time maybe now a delay will work I can try  simpe update button
	endpoint  ="";
	
function restart(){ 
	
	endpoint   = 'https://api.fixer.io/' + dateeeee;
	endpoint2  = 'https://api.fixer.io/' + dateeeee + '?base=USD';
	endpoint3  = 'https://api.fixer.io/' + dateeeee + '?base=CNY';
	endpoint4  = 'https://api.fixer.io/' + dateeeee + '?base=AUD';
	endpoint5  = 'https://api.fixer.io/' + dateeeee + '?base=BGN';
	endpoint6  = 'https://api.fixer.io/' + dateeeee + '?base=BRL';
	endpoint7  = 'https://api.fixer.io/' + dateeeee + '?base=CAD';
	endpoint8  = 'https://api.fixer.io/' + dateeeee + '?base=CHF';
	endpoint9  = 'https://api.fixer.io/' + dateeeee + '?base=CZK';
	endpoint10 = 'https://api.fixer.io/' + dateeeee + '?base=DKK';
	endpoint11 = 'https://api.fixer.io/' + dateeeee + '?base=GBP';
	endpoint12 = 'https://api.fixer.io/' + dateeeee + '?base=HKD';
	endpoint13 = 'https://api.fixer.io/' + dateeeee + '?base=HRK';
	endpoint14 = 'https://api.fixer.io/' + dateeeee + '?base=HUF';	
	endpoint15 = 'https://api.fixer.io/' + dateeeee + '?base=IDR';
	endpoint16 = 'https://api.fixer.io/' + dateeeee + '?base=ILS';
	endpoint17 = 'https://api.fixer.io/' + dateeeee + '?base=INR';
	endpoint18 = 'https://api.fixer.io/' + dateeeee + '?base=JPY';
	endpoint19 = 'https://api.fixer.io/' + dateeeee + '?base=KRW';
	endpoint20 = 'https://api.fixer.io/' + dateeeee + '?base=MXN';
	endpoint21 = 'https://api.fixer.io/' + dateeeee + '?base=MYR';
	endpoint22 = 'https://api.fixer.io/' + dateeeee + '?base=NOK';
	endpoint23 = 'https://api.fixer.io/' + dateeeee + '?base=NZD';	
	endpoint24 = 'https://api.fixer.io/' + dateeeee + '?base=PHP';
	endpoint25 = 'https://api.fixer.io/' + dateeeee + '?base=PLN';	
	endpoint26 = 'https://api.fixer.io/' + dateeeee + '?base=RON';
	endpoint27 = 'https://api.fixer.io/' + dateeeee + '?base=RUB';
	endpoint28 = 'https://api.fixer.io/' + dateeeee + '?base=SEK';
	endpoint29 = 'https://api.fixer.io/' + dateeeee + '?base=SGD';
	endpoint30 = 'https://api.fixer.io/' + dateeeee + '?base=THB';
	endpoint31 = 'https://api.fixer.io/' + dateeeee + '?base=TRY';
	endpoint32 = 'https://api.fixer.io/' + dateeeee + '?base=ZAR';
	
	
	}; 
	
	



	var eurField = document.querySelector(".eur");
	var rmbField = document.querySelector(".rmb");
	var usdField = document.querySelector(".usd");	
	var AUDField = document.querySelector(".AUD");
	var BGNField = document.querySelector(".BGN");
	var BRLField = document.querySelector(".BRL");
	var CADField = document.querySelector(".CAD");
	var CHFField = document.querySelector(".CHF");
	var CZKField = document.querySelector(".CZK");
	var DKKField = document.querySelector(".DKK");
	var GBPField = document.querySelector(".GBP");
	var HKDField = document.querySelector(".HKD");
	var HRKField = document.querySelector(".HRK");
	var HUFField = document.querySelector(".HUF");
	var IDRField = document.querySelector(".IDR");
	var ILSField = document.querySelector(".ILS");
	var INRField = document.querySelector(".INR");
	var JPYField = document.querySelector(".JPY");
	var KRWField = document.querySelector(".KRW");
	var MXNField = document.querySelector(".MXN");
	var MYRField = document.querySelector(".MYR");
	var NOKField = document.querySelector(".NOK");
	var NZDField = document.querySelector(".NZD");
	var PHPField = document.querySelector(".PHP");
	var PLNField = document.querySelector(".PLN");
	var RONField = document.querySelector(".RON");
	var RUBField = document.querySelector(".RUB");
	var SEKField = document.querySelector(".SEK");
	var SGDField = document.querySelector(".SGD");
	var THBField = document.querySelector(".THB");
	var TRYField = document.querySelector(".TRY");
	var ZARField = document.querySelector(".ZAR");
	
	
	
	
	
	
	
	eurField.addEventListener("input", moneyConvert0);
	usdField.addEventListener("input", moneyConvert2);
	rmbField.addEventListener("input", moneyConvert3);
	AUDField.addEventListener("input", moneyConvert4);
	BGNField.addEventListener("input", moneyConvert5);
	BRLField.addEventListener("input", moneyConvert6);
	CADField.addEventListener("input", moneyConvert7);
	CHFField.addEventListener("input", moneyConvert8);
	CZKField.addEventListener("input", moneyConvert9);
	DKKField.addEventListener("input", moneyConvert10);
	GBPField.addEventListener("input", moneyConvert11);
	HKDField.addEventListener("input", moneyConvert12);
	HRKField.addEventListener("input", moneyConvert13);
	HUFField.addEventListener("input", moneyConvert14);
	IDRField.addEventListener("input", moneyConvert15);
	ILSField.addEventListener("input", moneyConvert16);
	INRField.addEventListener("input", moneyConvert17);
	JPYField.addEventListener("input", moneyConvert18);
	KRWField.addEventListener("input", moneyConvert19);
	MXNField.addEventListener("input", moneyConvert20);
	MYRField.addEventListener("input", moneyConvert21);
	NOKField.addEventListener("input", moneyConvert22);
	NZDField.addEventListener("input", moneyConvert23);
	PHPField.addEventListener("input", moneyConvert24);
	PLNField.addEventListener("input", moneyConvert25);
	RONField.addEventListener("input", moneyConvert26);
	RUBField.addEventListener("input", moneyConvert27);
	SEKField.addEventListener("input", moneyConvert28);
	SGDField.addEventListener("input", moneyConvert29);
	THBField.addEventListener("input", moneyConvert30);
	TRYField.addEventListener("input", moneyConvert31);
	ZARField.addEventListener("input", moneyConvert32);
	
	
	
	
	fetch(endpoint) 
	.then( response => response.json())

	
	
	
	
	
	
	
	
	

	function moneyConvert0(){
		last_active = 0;
		var behindthecomma = parseInt($('#selectdecim').val());	
		$('.inputnronly').addClass("loadingcurency");
		$('.loaderrr').addClass("loaderrropacity");
		$('.eur').removeClass("loadingcurency");
		
		fetch(endpoint) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var eur = eurField.value;
			
			//all fields but the one of this function
			
			
		    //var eur = (eur * convert0).toFixed(behindthecomma); eurField.value = eur;
			var rmb = (eur * convert1).toFixed(behindthecomma); rmbField.value = rmb;
			var usd = (eur * convert2).toFixed(behindthecomma); usdField.value = usd;
			var AUD = (eur * convert3).toFixed(behindthecomma); AUDField.value = AUD;
			var BGN = (eur * convert4).toFixed(behindthecomma); BGNField.value = BGN;
			var BRL = (eur * convert5).toFixed(behindthecomma); BRLField.value = BRL;
			var CAD = (eur * convert6).toFixed(behindthecomma); CADField.value = CAD;
			var CHF = (eur * convert7).toFixed(behindthecomma); CHFField.value = CHF;
			var CZK = (eur * convert8).toFixed(behindthecomma); CZKField.value = CZK;
			var DKK = (eur * convert9).toFixed(behindthecomma); DKKField.value = DKK;
			var GBP = (eur * convert10).toFixed(behindthecomma); GBPField.value = GBP;
			var HKD = (eur * convert11).toFixed(behindthecomma); HKDField.value = HKD;
			var HRK = (eur * convert12).toFixed(behindthecomma); HRKField.value = HRK;
			var HUF = (eur * convert13).toFixed(behindthecomma); HUFField.value = HUF;
			var IDR = (eur * convert14).toFixed(behindthecomma); IDRField.value = IDR;
			var ILS = (eur * convert15).toFixed(behindthecomma); ILSField.value = ILS;
			var INR = (eur * convert16).toFixed(behindthecomma); INRField.value = INR;
			var JPY = (eur * convert17).toFixed(behindthecomma); JPYField.value = JPY;
			var KRW = (eur * convert18).toFixed(behindthecomma); KRWField.value = KRW;
			var MXN = (eur * convert19).toFixed(behindthecomma); MXNField.value = MXN;
			var MYR = (eur * convert20).toFixed(behindthecomma); MYRField.value = MYR;
			var NOK = (eur * convert21).toFixed(behindthecomma); NOKField.value = NOK;
			var NZD = (eur * convert22).toFixed(behindthecomma); NZDField.value = NZD;
			var PHP = (eur * convert23).toFixed(behindthecomma); PHPField.value = PHP;
			var PLN = (eur * convert24).toFixed(behindthecomma); PLNField.value = PLN;
			var RON = (eur * convert25).toFixed(behindthecomma); RONField.value = RON;
			var RUB = (eur * convert26).toFixed(behindthecomma); RUBField.value = RUB;
			var SEK = (eur * convert27).toFixed(behindthecomma); SEKField.value = SEK;
			var SGD = (eur * convert28).toFixed(behindthecomma); SGDField.value = SGD;
			var THB = (eur * convert29).toFixed(behindthecomma); THBField.value = THB;
			var TRY = (eur * convert30).toFixed(behindthecomma); TRYField.value = TRY;
			var ZAR = (eur * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
			
				
			$('.inputnronly').removeClass("loadingcurency");
			$('.loaderrr').removeClass("loaderrropacity");
			
		});          
	}

	
	
	
	
	/*
	
	function moneyConvert2(){
	
		$('.inputnronly').addClass("loadingcurency");
		$('.loaderrr').addClass("loaderrropacity");
		$('.usd').removeClass("loadingcurency");
		
		fetch(endpoint2) 
		.then(response => response.json())
		.then(data => {
			var convert = data.rates.EUR;
			var convert2 = data.rates.CNY;	
			
			var usd = usdField.value;
			
			var eur = (usd * convert).toFixed(behindthecomma);
			eurField.value = eur;
			
			var rmb = (usd * convert2).toFixed(behindthecomma);
			rmbField.value = rmb;
			
			$('.inputnronly').removeClass("loadingcurency");
			$('.loaderrr').removeClass("loaderrropacity");
			
		});          
	}

	
	
	
	
	function moneyConvert3(){

		$('.inputnronly').addClass("loadingcurency");
		$('.loaderrr').addClass("loaderrropacity");
		$('.rmb').removeClass("loadingcurency");

		fetch(endpoint3) 
		.then(response => response.json())
		.then(data => {
			var convert = data.rates.EUR;
			var convert2 = data.rates.USD;	
			
			var rmb = rmbField.value;
			
			var eur = (rmb * convert).toFixed(behindthecomma);
			eurField.value = eur;
			
			var usd = (rmb * convert2).toFixed(behindthecomma);
			usdField.value = usd;
			
			$('.inputnronly').removeClass("loadingcurency");
			$('.loaderrr').removeClass("loaderrropacity");

		});        


	
	}*/
	
	
	
	
	
	
		
	
	
	function moneyConvert2(){
	last_active = 2;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.usd').removeClass("loadingcurency");
		
		fetch(endpoint2) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var usd = usdField.value;
                        
                        //all fields but the one of this function
                         var eur = (usd * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (usd * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        //var usd = (usd * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (usd * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (usd * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (usd * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (usd * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (usd * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (usd * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (usd * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (usd * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (usd * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (usd * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (usd * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (usd * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (usd * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (usd * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (usd * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (usd * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (usd * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (usd * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (usd * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (usd * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (usd * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (usd * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (usd * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (usd * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (usd * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (usd * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (usd * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (usd * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (usd * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
		
		
		
		
function moneyConvert3(){
last_active = 3;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.rmb').removeClass("loadingcurency");
		
		fetch(endpoint3) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var rmb = rmbField.value;
                        
                        //all fields but the one of this function
                         var eur = (rmb * convert0).toFixed(behindthecomma); eurField.value = eur;
                        //var rmb = (rmb * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (rmb * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (rmb * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (rmb * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (rmb * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (rmb * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (rmb * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (rmb * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (rmb * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (rmb * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (rmb * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (rmb * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (rmb * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (rmb * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (rmb * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (rmb * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (rmb * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (rmb * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (rmb * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (rmb * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (rmb * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (rmb * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (rmb * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (rmb * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (rmb * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (rmb * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (rmb * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (rmb * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (rmb * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (rmb * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (rmb * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert4(){
last_active = 4;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.AUD').removeClass("loadingcurency");
		
		fetch(endpoint4) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var AUD = AUDField.value;
                        
                        //all fields but the one of this function
                         var eur = (AUD * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (AUD * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (AUD * convert2).toFixed(behindthecomma); usdField.value = usd;
                        //var AUD = (AUD * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (AUD * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (AUD * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (AUD * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (AUD * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (AUD * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (AUD * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (AUD * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (AUD * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (AUD * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (AUD * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (AUD * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (AUD * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (AUD * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (AUD * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (AUD * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (AUD * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (AUD * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (AUD * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (AUD * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (AUD * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (AUD * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (AUD * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (AUD * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (AUD * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (AUD * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (AUD * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (AUD * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (AUD * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert5(){
last_active = 5;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.BGN').removeClass("loadingcurency");
		
		fetch(endpoint5) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var BGN = BGNField.value;
                        
                        //all fields but the one of this function
                         var eur = (BGN * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (BGN * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (BGN * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (BGN * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        //var BGN = (BGN * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (BGN * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (BGN * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (BGN * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (BGN * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (BGN * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (BGN * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (BGN * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (BGN * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (BGN * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (BGN * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (BGN * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (BGN * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (BGN * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (BGN * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (BGN * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (BGN * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (BGN * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (BGN * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (BGN * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (BGN * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (BGN * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (BGN * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (BGN * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (BGN * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (BGN * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (BGN * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (BGN * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert6(){
last_active = 6;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.BRL').removeClass("loadingcurency");
		
		fetch(endpoint6) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var BRL = BRLField.value;
                        
                        //all fields but the one of this function
                         var eur = (BRL * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (BRL * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (BRL * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (BRL * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (BRL * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        //var BRL = (BRL * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (BRL * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (BRL * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (BRL * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (BRL * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (BRL * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (BRL * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (BRL * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (BRL * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (BRL * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (BRL * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (BRL * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (BRL * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (BRL * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (BRL * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (BRL * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (BRL * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (BRL * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (BRL * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (BRL * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (BRL * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (BRL * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (BRL * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (BRL * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (BRL * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (BRL * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (BRL * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert7(){
last_active = 7;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.CAD').removeClass("loadingcurency");
		
		fetch(endpoint7) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var CAD = CADField.value;
                        
                        //all fields but the one of this function
                         var eur = (CAD * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (CAD * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (CAD * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (CAD * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (CAD * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (CAD * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        //var CAD = (CAD * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (CAD * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (CAD * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (CAD * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (CAD * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (CAD * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (CAD * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (CAD * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (CAD * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (CAD * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (CAD * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (CAD * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (CAD * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (CAD * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (CAD * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (CAD * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (CAD * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (CAD * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (CAD * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (CAD * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (CAD * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (CAD * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (CAD * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (CAD * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (CAD * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (CAD * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert8(){
last_active = 8;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.CHF').removeClass("loadingcurency");
		
		fetch(endpoint8) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var CHF = CHFField.value;
                        
                        //all fields but the one of this function
                         var eur = (CHF * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (CHF * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (CHF * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (CHF * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (CHF * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (CHF * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (CHF * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        //var CHF = (CHF * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (CHF * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (CHF * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (CHF * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (CHF * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (CHF * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (CHF * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (CHF * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (CHF * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (CHF * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (CHF * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (CHF * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (CHF * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (CHF * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (CHF * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (CHF * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (CHF * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (CHF * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (CHF * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (CHF * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (CHF * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (CHF * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (CHF * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (CHF * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (CHF * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert9(){
last_active = 9;
                var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.CZK').removeClass("loadingcurency");
		
		fetch(endpoint9) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var CZK = CZKField.value;
                        
                        //all fields but the one of this function
                         var eur = (CZK * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (CZK * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (CZK * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (CZK * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (CZK * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (CZK * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (CZK * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (CZK * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        //var CZK = (CZK * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (CZK * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (CZK * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (CZK * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (CZK * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (CZK * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (CZK * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (CZK * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (CZK * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (CZK * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (CZK * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (CZK * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (CZK * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (CZK * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (CZK * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (CZK * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (CZK * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (CZK * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (CZK * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (CZK * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (CZK * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (CZK * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (CZK * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (CZK * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert10(){last_active = 10; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.DKK').removeClass("loadingcurency");
		
		fetch(endpoint10) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var DKK = DKKField.value;
                        
                        //all fields but the one of this function
                         var eur = (DKK * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (DKK * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (DKK * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (DKK * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (DKK * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (DKK * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (DKK * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (DKK * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (DKK * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        //var DKK = (DKK * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (DKK * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (DKK * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (DKK * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (DKK * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (DKK * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (DKK * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (DKK * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (DKK * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (DKK * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (DKK * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (DKK * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (DKK * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (DKK * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (DKK * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (DKK * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (DKK * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (DKK * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (DKK * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (DKK * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (DKK * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (DKK * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (DKK * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert11(){last_active = 11; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.GBP').removeClass("loadingcurency");
		
		fetch(endpoint11) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var GBP = GBPField.value;
                        
                        //all fields but the one of this function
                         var eur = (GBP * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (GBP * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (GBP * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (GBP * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (GBP * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (GBP * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (GBP * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (GBP * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (GBP * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (GBP * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        //var GBP = (GBP * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (GBP * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (GBP * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (GBP * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (GBP * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (GBP * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (GBP * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (GBP * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (GBP * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (GBP * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (GBP * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (GBP * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (GBP * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (GBP * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (GBP * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (GBP * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (GBP * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (GBP * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (GBP * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (GBP * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (GBP * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (GBP * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert12(){last_active = 12; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.HKD').removeClass("loadingcurency");
		
		fetch(endpoint12) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var HKD = HKDField.value;
                        
                        //all fields but the one of this function
                         var eur = (HKD * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (HKD * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (HKD * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (HKD * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (HKD * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (HKD * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (HKD * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (HKD * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (HKD * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (HKD * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (HKD * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        //var HKD = (HKD * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (HKD * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (HKD * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (HKD * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (HKD * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (HKD * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (HKD * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (HKD * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (HKD * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (HKD * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (HKD * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (HKD * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (HKD * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (HKD * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (HKD * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (HKD * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (HKD * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (HKD * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (HKD * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (HKD * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (HKD * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert13(){last_active = 13; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.HRK').removeClass("loadingcurency");
		
		fetch(endpoint13) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var HRK = HRKField.value;
                        
                        //all fields but the one of this function
                         var eur = (HRK * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (HRK * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (HRK * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (HRK * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (HRK * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (HRK * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (HRK * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (HRK * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (HRK * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (HRK * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (HRK * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (HRK * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        //var HRK = (HRK * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (HRK * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (HRK * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (HRK * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (HRK * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (HRK * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (HRK * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (HRK * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (HRK * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (HRK * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (HRK * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (HRK * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (HRK * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (HRK * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (HRK * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (HRK * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (HRK * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (HRK * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (HRK * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (HRK * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert14(){last_active = 14; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.HUF').removeClass("loadingcurency");
		
		fetch(endpoint14) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var HUF = HUFField.value;
                        
                        //all fields but the one of this function
                         var eur = (HUF * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (HUF * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (HUF * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (HUF * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (HUF * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (HUF * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (HUF * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (HUF * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (HUF * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (HUF * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (HUF * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (HUF * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (HUF * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        //var HUF = (HUF * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (HUF * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (HUF * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (HUF * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (HUF * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (HUF * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (HUF * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (HUF * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (HUF * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (HUF * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (HUF * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (HUF * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (HUF * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (HUF * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (HUF * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (HUF * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (HUF * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (HUF * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (HUF * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert15(){last_active = 15; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.IDR').removeClass("loadingcurency");
		
		fetch(endpoint15) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var IDR = IDRField.value;
                        
                        //all fields but the one of this function
                         var eur = (IDR * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (IDR * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (IDR * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (IDR * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (IDR * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (IDR * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (IDR * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (IDR * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (IDR * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (IDR * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (IDR * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (IDR * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (IDR * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (IDR * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        //var IDR = (IDR * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (IDR * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (IDR * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (IDR * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (IDR * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (IDR * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (IDR * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (IDR * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (IDR * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (IDR * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (IDR * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (IDR * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (IDR * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (IDR * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (IDR * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (IDR * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (IDR * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (IDR * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert16(){last_active = 16; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.ILS').removeClass("loadingcurency");
		
		fetch(endpoint16) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var ILS = ILSField.value;
                        
                        //all fields but the one of this function
                         var eur = (ILS * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (ILS * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (ILS * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (ILS * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (ILS * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (ILS * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (ILS * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (ILS * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (ILS * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (ILS * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (ILS * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (ILS * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (ILS * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (ILS * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (ILS * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        //var ILS = (ILS * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (ILS * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (ILS * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (ILS * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (ILS * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (ILS * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (ILS * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (ILS * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (ILS * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (ILS * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (ILS * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (ILS * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (ILS * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (ILS * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (ILS * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (ILS * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (ILS * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert17(){last_active = 17; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.INR').removeClass("loadingcurency");
		
		fetch(endpoint17) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var INR = INRField.value;
                        
                        //all fields but the one of this function
                         var eur = (INR * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (INR * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (INR * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (INR * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (INR * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (INR * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (INR * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (INR * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (INR * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (INR * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (INR * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (INR * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (INR * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (INR * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (INR * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (INR * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        //var INR = (INR * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (INR * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (INR * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (INR * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (INR * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (INR * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (INR * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (INR * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (INR * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (INR * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (INR * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (INR * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (INR * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (INR * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (INR * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (INR * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert18(){last_active = 18; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.JPY').removeClass("loadingcurency");
		
		fetch(endpoint18) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var JPY = JPYField.value;
                        
                        //all fields but the one of this function
                         var eur = (JPY * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (JPY * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (JPY * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (JPY * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (JPY * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (JPY * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (JPY * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (JPY * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (JPY * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (JPY * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (JPY * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (JPY * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (JPY * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (JPY * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (JPY * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (JPY * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (JPY * convert16).toFixed(behindthecomma); INRField.value = INR;
                        //var JPY = (JPY * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (JPY * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (JPY * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (JPY * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (JPY * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (JPY * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (JPY * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (JPY * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (JPY * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (JPY * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (JPY * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (JPY * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (JPY * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (JPY * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (JPY * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert19(){last_active = 19; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.KRW').removeClass("loadingcurency");
		
		fetch(endpoint19) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var KRW = KRWField.value;
                        
                        //all fields but the one of this function
                         var eur = (KRW * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (KRW * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (KRW * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (KRW * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (KRW * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (KRW * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (KRW * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (KRW * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (KRW * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (KRW * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (KRW * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (KRW * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (KRW * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (KRW * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (KRW * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (KRW * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (KRW * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (KRW * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        //var KRW = (KRW * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (KRW * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (KRW * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (KRW * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (KRW * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (KRW * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (KRW * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (KRW * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (KRW * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (KRW * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (KRW * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (KRW * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (KRW * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (KRW * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert20(){last_active = 20; var behindthecomma = parseInt($('#selectdecim').val());	var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.MXN').removeClass("loadingcurency");
		
		fetch(endpoint20) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var MXN = MXNField.value;
                        
                        //all fields but the one of this function
                         var eur = (MXN * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (MXN * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (MXN * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (MXN * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (MXN * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (MXN * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (MXN * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (MXN * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (MXN * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (MXN * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (MXN * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (MXN * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (MXN * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (MXN * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (MXN * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (MXN * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (MXN * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (MXN * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (MXN * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        //var MXN = (MXN * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (MXN * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (MXN * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (MXN * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (MXN * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (MXN * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (MXN * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (MXN * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (MXN * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (MXN * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (MXN * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (MXN * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (MXN * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert21(){last_active = 21; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.MYR').removeClass("loadingcurency");
		
		fetch(endpoint21) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var MYR = MYRField.value;
                        
                        //all fields but the one of this function
                         var eur = (MYR * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (MYR * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (MYR * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (MYR * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (MYR * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (MYR * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (MYR * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (MYR * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (MYR * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (MYR * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (MYR * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (MYR * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (MYR * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (MYR * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (MYR * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (MYR * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (MYR * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (MYR * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (MYR * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (MYR * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        //var MYR = (MYR * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (MYR * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (MYR * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (MYR * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (MYR * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (MYR * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (MYR * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (MYR * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (MYR * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (MYR * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (MYR * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (MYR * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert22(){last_active = 22; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.NOK').removeClass("loadingcurency");
		
		fetch(endpoint22) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var NOK = NOKField.value;
                        
                        //all fields but the one of this function
                         var eur = (NOK * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (NOK * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (NOK * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (NOK * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (NOK * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (NOK * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (NOK * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (NOK * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (NOK * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (NOK * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (NOK * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (NOK * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (NOK * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (NOK * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (NOK * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (NOK * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (NOK * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (NOK * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (NOK * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (NOK * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (NOK * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        //var NOK = (NOK * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (NOK * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (NOK * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (NOK * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (NOK * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (NOK * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (NOK * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (NOK * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (NOK * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (NOK * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (NOK * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert23(){last_active = 23; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.NZD').removeClass("loadingcurency");
		
		fetch(endpoint23) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var NZD = NZDField.value;
                        
                        //all fields but the one of this function
                         var eur = (NZD * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (NZD * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (NZD * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (NZD * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (NZD * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (NZD * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (NZD * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (NZD * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (NZD * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (NZD * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (NZD * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (NZD * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (NZD * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (NZD * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (NZD * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (NZD * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (NZD * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (NZD * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (NZD * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (NZD * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (NZD * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (NZD * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        //var NZD = (NZD * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (NZD * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (NZD * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (NZD * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (NZD * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (NZD * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (NZD * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (NZD * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (NZD * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (NZD * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert24(){last_active = 24; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.PHP').removeClass("loadingcurency");
		
		fetch(endpoint24) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var PHP = PHPField.value;
                        
                        //all fields but the one of this function
                         var eur = (PHP * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (PHP * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (PHP * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (PHP * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (PHP * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (PHP * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (PHP * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (PHP * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (PHP * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (PHP * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (PHP * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (PHP * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (PHP * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (PHP * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (PHP * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (PHP * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (PHP * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (PHP * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (PHP * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (PHP * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (PHP * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (PHP * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (PHP * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        //var PHP = (PHP * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (PHP * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (PHP * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (PHP * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (PHP * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (PHP * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (PHP * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (PHP * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (PHP * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert25(){last_active = 25; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.PLN').removeClass("loadingcurency");
		
		fetch(endpoint25) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var PLN = PLNField.value;
                        
                        //all fields but the one of this function
                         var eur = (PLN * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (PLN * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (PLN * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (PLN * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (PLN * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (PLN * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (PLN * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (PLN * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (PLN * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (PLN * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (PLN * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (PLN * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (PLN * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (PLN * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (PLN * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (PLN * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (PLN * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (PLN * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (PLN * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (PLN * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (PLN * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (PLN * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (PLN * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (PLN * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        //var PLN = (PLN * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (PLN * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (PLN * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (PLN * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (PLN * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (PLN * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (PLN * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (PLN * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert26(){last_active = 26; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.RON').removeClass("loadingcurency");
		
		fetch(endpoint26) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var RON = RONField.value;
                        
                        //all fields but the one of this function
                         var eur = (RON * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (RON * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (RON * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (RON * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (RON * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (RON * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (RON * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (RON * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (RON * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (RON * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (RON * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (RON * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (RON * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (RON * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (RON * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (RON * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (RON * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (RON * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (RON * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (RON * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (RON * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (RON * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (RON * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (RON * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (RON * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        //var RON = (RON * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (RON * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (RON * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (RON * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (RON * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (RON * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (RON * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert27(){last_active = 27; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.RUB').removeClass("loadingcurency");
		
		fetch(endpoint27) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var RUB = RUBField.value;
                        
                        //all fields but the one of this function
                         var eur = (RUB * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (RUB * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (RUB * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (RUB * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (RUB * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (RUB * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (RUB * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (RUB * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (RUB * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (RUB * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (RUB * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (RUB * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (RUB * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (RUB * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (RUB * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (RUB * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (RUB * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (RUB * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (RUB * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (RUB * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (RUB * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (RUB * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (RUB * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (RUB * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (RUB * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (RUB * convert25).toFixed(behindthecomma); RONField.value = RON;
                        //var RUB = (RUB * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (RUB * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (RUB * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (RUB * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (RUB * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (RUB * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert28(){last_active = 28; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.SEK').removeClass("loadingcurency");
		
		fetch(endpoint28) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var SEK = SEKField.value;
                        
                        //all fields but the one of this function
                         var eur = (SEK * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (SEK * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (SEK * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (SEK * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (SEK * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (SEK * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (SEK * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (SEK * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (SEK * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (SEK * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (SEK * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (SEK * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (SEK * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (SEK * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (SEK * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (SEK * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (SEK * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (SEK * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (SEK * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (SEK * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (SEK * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (SEK * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (SEK * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (SEK * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (SEK * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (SEK * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (SEK * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        //var SEK = (SEK * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (SEK * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (SEK * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (SEK * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (SEK * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert29(){last_active = 29; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.SGD').removeClass("loadingcurency");
		
		fetch(endpoint29) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var SGD = SGDField.value;
                        
                        //all fields but the one of this function
                         var eur = (SGD * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (SGD * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (SGD * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (SGD * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (SGD * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (SGD * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (SGD * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (SGD * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (SGD * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (SGD * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (SGD * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (SGD * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (SGD * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (SGD * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (SGD * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (SGD * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (SGD * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (SGD * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (SGD * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (SGD * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (SGD * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (SGD * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (SGD * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (SGD * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (SGD * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (SGD * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (SGD * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (SGD * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        //var SGD = (SGD * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (SGD * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (SGD * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (SGD * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert30(){last_active = 30; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.THB').removeClass("loadingcurency");
		
		fetch(endpoint30) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var THB = THBField.value;
                        
                        //all fields but the one of this function
                         var eur = (THB * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (THB * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (THB * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (THB * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (THB * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (THB * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (THB * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (THB * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (THB * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (THB * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (THB * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (THB * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (THB * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (THB * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (THB * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (THB * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (THB * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (THB * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (THB * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (THB * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (THB * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (THB * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (THB * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (THB * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (THB * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (THB * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (THB * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (THB * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (THB * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        //var THB = (THB * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (THB * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (THB * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
function moneyConvert31(){last_active = 31; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.TRY').removeClass("loadingcurency");
		
		fetch(endpoint31) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var TRY = TRYField.value;
                        
                        //all fields but the one of this function
                         var eur = (TRY * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (TRY * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (TRY * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (TRY * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (TRY * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (TRY * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (TRY * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (TRY * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (TRY * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (TRY * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (TRY * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (TRY * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (TRY * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (TRY * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (TRY * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (TRY * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (TRY * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (TRY * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (TRY * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (TRY * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (TRY * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (TRY * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (TRY * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (TRY * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (TRY * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (TRY * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (TRY * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (TRY * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (TRY * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (TRY * convert29).toFixed(behindthecomma); THBField.value = THB;
                        //var TRY = (TRY * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        var ZAR = (TRY * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                        
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
		
		
	
function moneyConvert32(){last_active = 32; var behindthecomma = parseInt($('#selectdecim').val());	
                $('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
                $('.ZAR').removeClass("loadingcurency");
		
		fetch(endpoint32) 
		.then(response => response.json())
		.then(data => {
		
			var convert0 = data.rates.EUR;
			var convert1 = data.rates.CNY;
			var convert2 = data.rates.USD;
			var convert3 = data.rates.AUD;
			var convert4 = data.rates.BGN;
			var convert5 = data.rates.BRL;
			var convert6 = data.rates.CAD;
			var convert7 = data.rates.CHF;
			var convert8 = data.rates.CZK;
			var convert9 = data.rates.DKK;
			var convert10 = data.rates.GBP;
			var convert11 = data.rates.HKD;
			var convert12 = data.rates.HRK;
			var convert13 = data.rates.HUF;
			var convert14 = data.rates.IDR;
			var convert15 = data.rates.ILS;
			var convert16 = data.rates.INR;
			var convert17 = data.rates.JPY;
			var convert18 = data.rates.KRW;
			var convert19 = data.rates.MXN;
			var convert20 = data.rates.MYR;
			var convert21 = data.rates.NOK;
			var convert22 = data.rates.NZD;
			var convert23 = data.rates.PHP;
			var convert24 = data.rates.PLN;
			var convert25 = data.rates.RON;
			var convert26 = data.rates.RUB;
			var convert27 = data.rates.SEK;
			var convert28 = data.rates.SGD;
			var convert29 = data.rates.THB;
			var convert30 = data.rates.TRY;
			var convert31 = data.rates.ZAR;
			
			
			//this fields function
			var ZAR = ZARField.value;
                        
                        //all fields but the one of this function
                        var eur = (ZAR * convert0).toFixed(behindthecomma); eurField.value = eur;
                        var rmb = (ZAR * convert1).toFixed(behindthecomma); rmbField.value = rmb;
                        var usd = (ZAR * convert2).toFixed(behindthecomma); usdField.value = usd;
                        var AUD = (ZAR * convert3).toFixed(behindthecomma); AUDField.value = AUD;
                        var BGN = (ZAR * convert4).toFixed(behindthecomma); BGNField.value = BGN;
                        var BRL = (ZAR * convert5).toFixed(behindthecomma); BRLField.value = BRL;
                        var CAD = (ZAR * convert6).toFixed(behindthecomma); CADField.value = CAD;
                        var CHF = (ZAR * convert7).toFixed(behindthecomma); CHFField.value = CHF;
                        var CZK = (ZAR * convert8).toFixed(behindthecomma); CZKField.value = CZK;
                        var DKK = (ZAR * convert9).toFixed(behindthecomma); DKKField.value = DKK;
                        var GBP = (ZAR * convert10).toFixed(behindthecomma); GBPField.value = GBP;
                        var HKD = (ZAR * convert11).toFixed(behindthecomma); HKDField.value = HKD;
                        var HRK = (ZAR * convert12).toFixed(behindthecomma); HRKField.value = HRK;
                        var HUF = (ZAR * convert13).toFixed(behindthecomma); HUFField.value = HUF;
                        var IDR = (ZAR * convert14).toFixed(behindthecomma); IDRField.value = IDR;
                        var ILS = (ZAR * convert15).toFixed(behindthecomma); ILSField.value = ILS;
                        var INR = (ZAR * convert16).toFixed(behindthecomma); INRField.value = INR;
                        var JPY = (ZAR * convert17).toFixed(behindthecomma); JPYField.value = JPY;
                        var KRW = (ZAR * convert18).toFixed(behindthecomma); KRWField.value = KRW;
                        var MXN = (ZAR * convert19).toFixed(behindthecomma); MXNField.value = MXN;
                        var MYR = (ZAR * convert20).toFixed(behindthecomma); MYRField.value = MYR;
                        var NOK = (ZAR * convert21).toFixed(behindthecomma); NOKField.value = NOK;
                        var NZD = (ZAR * convert22).toFixed(behindthecomma); NZDField.value = NZD;
                        var PHP = (ZAR * convert23).toFixed(behindthecomma); PHPField.value = PHP;
                        var PLN = (ZAR * convert24).toFixed(behindthecomma); PLNField.value = PLN;
                        var RON = (ZAR * convert25).toFixed(behindthecomma); RONField.value = RON;
                        var RUB = (ZAR * convert26).toFixed(behindthecomma); RUBField.value = RUB;
                        var SEK = (ZAR * convert27).toFixed(behindthecomma); SEKField.value = SEK;
                        var SGD = (ZAR * convert28).toFixed(behindthecomma); SGDField.value = SGD;
                        var THB = (ZAR * convert29).toFixed(behindthecomma); THBField.value = THB;
                        var TRY = (ZAR * convert30).toFixed(behindthecomma); TRYField.value = TRY;
                        //var ZAR = (ZAR * convert31).toFixed(behindthecomma); ZARField.value = ZAR;
                                
                        $('.inputnronly').removeClass("loadingcurency");
                        $('.loaderrr').removeClass("loaderrropacity");
                        
                });          
        }
		
	
		
		
		restart();
		
		
		
$( "#datetimepicker1" ).change(function() { 
	restart0();
	restart(); 
	setTimeout(function(){ 
	$('.inputnronly').addClass("loadingcurency");
                $('.loaderrr').addClass("loaderrropacity");
		 call_others(last_active);
	
	}, 100);
	

});