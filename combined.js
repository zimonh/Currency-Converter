$(document).ready(function() {
	$(".inputnronly").keydown(function(e) {
		//46 is del    8 backspace    9 is tab       27 is esc     13 enter
		if (
			$.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) !== -1 ||
			(e.keyCode == 65 && e.ctrlKey === !0) ||
			(e.keyCode == 67 && e.ctrlKey === !0) ||
			(e.keyCode == 86 && e.ctrlKey === !0) ||
			(e.keyCode >= 35 && e.keyCode <= 39)
		) { return }
		//48 is 1    57 is 9
		if (
			(e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
			(e.keyCode < 96 || e.keyCode > 105)
		) { e.preventDefault() }

	});
	$('.eur').val(1);
	moneyConvert0();
	$('.loaderrr').removeClass("loaderrropacity");
	$('.inputnronly').css("pointerEvents", "auto");
	$('.inputnronly').css("cursor", "auto");
	$('.hideatpageload').removeClass("hideatpageload");
	setTimeout(function() { call_others(last_active) }, 100)
});
$(function() { $('#psP').sortable({ helper: 'clone' }) })
$('.currencybutton').on('click', function() { $(this).parent().parent().parent().prepend($(this).parent().parent());
	$.notify({ message: $(this).html() + " Moved to the top." }, { type: 'success', placement: { from: "bottom", align: "center" }, position: null, offset: 60, });
	$(this).addClass("yourClass") });
var behindthecomma = 2;
last_active = "";
dateeeee = "latest?access_key=1f47ec7e6beadfec86dfbccdc0f731c7";

function restart0() { dateeeee = $('#datetimepicker1').data('date') }
endpoint = "";

function restart() { endpoint = 'http://data.fixer.io/' + dateeeee + '?access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint2 = 'http://data.fixer.io/' + dateeeee + '?base=USD&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint3 = 'http://data.fixer.io/' + dateeeee + '?base=CNY&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint4 = 'http://data.fixer.io/' + dateeeee + '?base=AUD&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint5 = 'http://data.fixer.io/' + dateeeee + '?base=BGN&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint6 = 'http://data.fixer.io/' + dateeeee + '?base=BRL&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint7 = 'http://data.fixer.io/' + dateeeee + '?base=CAD&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint8 = 'http://data.fixer.io/' + dateeeee + '?base=CHF&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint9 = 'http://data.fixer.io/' + dateeeee + '?base=CZK&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint10 = 'http://data.fixer.io/' + dateeeee + '?base=DKK&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint11 = 'http://data.fixer.io/' + dateeeee + '?base=GBP&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint12 = 'http://data.fixer.io/' + dateeeee + '?base=HKD&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint13 = 'http://data.fixer.io/' + dateeeee + '?base=HRK&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint14 = 'http://data.fixer.io/' + dateeeee + '?base=HUF&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint15 = 'http://data.fixer.io/' + dateeeee + '?base=IDR&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint16 = 'http://data.fixer.io/' + dateeeee + '?base=ILS&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint17 = 'http://data.fixer.io/' + dateeeee + '?base=INR&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint18 = 'http://data.fixer.io/' + dateeeee + '?base=JPY&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint19 = 'http://data.fixer.io/' + dateeeee + '?base=KRW&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint20 = 'http://data.fixer.io/' + dateeeee + '?base=MXN&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint21 = 'http://data.fixer.io/' + dateeeee + '?base=MYR&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint22 = 'http://data.fixer.io/' + dateeeee + '?base=NOK&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint23 = 'http://data.fixer.io/' + dateeeee + '?base=NZD&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint24 = 'http://data.fixer.io/' + dateeeee + '?base=PHP&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint25 = 'http://data.fixer.io/' + dateeeee + '?base=PLN&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint26 = 'http://data.fixer.io/' + dateeeee + '?base=RON&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint27 = 'http://data.fixer.io/' + dateeeee + '?base=RUB&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint28 = 'http://data.fixer.io/' + dateeeee + '?base=SEK&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint29 = 'http://data.fixer.io/' + dateeeee + '?base=SGD&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint30 = 'http://data.fixer.io/' + dateeeee + '?base=THB&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint31 = 'http://data.fixer.io/' + dateeeee + '?base=TRY&access_key=1f47ec7e6beadfec86dfbccdc0f731c7';
	endpoint32 = 'http://data.fixer.io/' + dateeeee + '?base=ZAR' };
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
fetch(endpoint).then(response => response.json())

function moneyConvert0() { last_active = 0; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.eur').removeClass("loadingcurency");
	fetch(endpoint).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var eur = eurField.value; var rmb = (eur * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (eur * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (eur * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (eur * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (eur * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (eur * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (eur * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (eur * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (eur * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (eur * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (eur * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (eur * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (eur * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (eur * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (eur * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (eur * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (eur * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (eur * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (eur * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (eur * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (eur * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (eur * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (eur * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (eur * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (eur * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (eur * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (eur * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (eur * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (eur * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (eur * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (eur * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert2() { last_active = 2; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.usd').removeClass("loadingcurency");
	fetch(endpoint2).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var usd = usdField.value; var eur = (usd * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (usd * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var AUD = (usd * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (usd * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (usd * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (usd * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (usd * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (usd * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (usd * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (usd * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (usd * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (usd * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (usd * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (usd * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (usd * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (usd * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (usd * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (usd * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (usd * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (usd * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (usd * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (usd * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (usd * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (usd * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (usd * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (usd * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (usd * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (usd * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (usd * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (usd * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (usd * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert3() { last_active = 3; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.rmb').removeClass("loadingcurency");
	fetch(endpoint3).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var rmb = rmbField.value; var eur = (rmb * convert0).toFixed(behindthecomma);
		eurField.value = eur; var usd = (rmb * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (rmb * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (rmb * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (rmb * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (rmb * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (rmb * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (rmb * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (rmb * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (rmb * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (rmb * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (rmb * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (rmb * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (rmb * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (rmb * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (rmb * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (rmb * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (rmb * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (rmb * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (rmb * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (rmb * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (rmb * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (rmb * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (rmb * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (rmb * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (rmb * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (rmb * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (rmb * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (rmb * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (rmb * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (rmb * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert4() { last_active = 4; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.AUD').removeClass("loadingcurency");
	fetch(endpoint4).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var AUD = AUDField.value; var eur = (AUD * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (AUD * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (AUD * convert2).toFixed(behindthecomma);
		usdField.value = usd; var BGN = (AUD * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (AUD * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (AUD * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (AUD * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (AUD * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (AUD * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (AUD * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (AUD * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (AUD * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (AUD * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (AUD * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (AUD * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (AUD * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (AUD * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (AUD * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (AUD * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (AUD * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (AUD * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (AUD * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (AUD * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (AUD * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (AUD * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (AUD * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (AUD * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (AUD * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (AUD * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (AUD * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (AUD * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert5() { last_active = 5; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.BGN').removeClass("loadingcurency");
	fetch(endpoint5).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var BGN = BGNField.value; var eur = (BGN * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (BGN * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (BGN * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (BGN * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BRL = (BGN * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (BGN * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (BGN * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (BGN * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (BGN * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (BGN * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (BGN * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (BGN * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (BGN * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (BGN * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (BGN * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (BGN * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (BGN * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (BGN * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (BGN * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (BGN * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (BGN * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (BGN * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (BGN * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (BGN * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (BGN * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (BGN * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (BGN * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (BGN * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (BGN * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (BGN * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (BGN * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert6() { last_active = 6; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.BRL').removeClass("loadingcurency");
	fetch(endpoint6).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var BRL = BRLField.value; var eur = (BRL * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (BRL * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (BRL * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (BRL * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (BRL * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var CAD = (BRL * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (BRL * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (BRL * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (BRL * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (BRL * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (BRL * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (BRL * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (BRL * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (BRL * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (BRL * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (BRL * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (BRL * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (BRL * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (BRL * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (BRL * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (BRL * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (BRL * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (BRL * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (BRL * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (BRL * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (BRL * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (BRL * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (BRL * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (BRL * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (BRL * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (BRL * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert7() { last_active = 7; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.CAD').removeClass("loadingcurency");
	fetch(endpoint7).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var CAD = CADField.value; var eur = (CAD * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (CAD * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (CAD * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (CAD * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (CAD * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (CAD * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CHF = (CAD * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (CAD * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (CAD * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (CAD * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (CAD * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (CAD * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (CAD * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (CAD * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (CAD * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (CAD * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (CAD * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (CAD * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (CAD * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (CAD * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (CAD * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (CAD * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (CAD * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (CAD * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (CAD * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (CAD * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (CAD * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (CAD * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (CAD * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (CAD * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (CAD * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert8() { last_active = 8; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.CHF').removeClass("loadingcurency");
	fetch(endpoint8).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var CHF = CHFField.value; var eur = (CHF * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (CHF * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (CHF * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (CHF * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (CHF * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (CHF * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (CHF * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CZK = (CHF * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (CHF * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (CHF * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (CHF * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (CHF * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (CHF * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (CHF * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (CHF * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (CHF * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (CHF * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (CHF * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (CHF * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (CHF * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (CHF * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (CHF * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (CHF * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (CHF * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (CHF * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (CHF * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (CHF * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (CHF * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (CHF * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (CHF * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (CHF * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert9() { last_active = 9; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.CZK').removeClass("loadingcurency");
	fetch(endpoint9).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var CZK = CZKField.value; var eur = (CZK * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (CZK * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (CZK * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (CZK * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (CZK * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (CZK * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (CZK * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (CZK * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var DKK = (CZK * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (CZK * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (CZK * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (CZK * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (CZK * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (CZK * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (CZK * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (CZK * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (CZK * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (CZK * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (CZK * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (CZK * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (CZK * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (CZK * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (CZK * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (CZK * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (CZK * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (CZK * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (CZK * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (CZK * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (CZK * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (CZK * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (CZK * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert10() { last_active = 10; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.DKK').removeClass("loadingcurency");
	fetch(endpoint10).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var DKK = DKKField.value; var eur = (DKK * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (DKK * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (DKK * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (DKK * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (DKK * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (DKK * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (DKK * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (DKK * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (DKK * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var GBP = (DKK * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (DKK * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (DKK * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (DKK * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (DKK * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (DKK * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (DKK * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (DKK * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (DKK * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (DKK * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (DKK * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (DKK * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (DKK * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (DKK * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (DKK * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (DKK * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (DKK * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (DKK * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (DKK * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (DKK * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (DKK * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (DKK * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert11() { last_active = 11; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.GBP').removeClass("loadingcurency");
	fetch(endpoint11).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var GBP = GBPField.value; var eur = (GBP * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (GBP * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (GBP * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (GBP * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (GBP * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (GBP * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (GBP * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (GBP * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (GBP * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (GBP * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var HKD = (GBP * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (GBP * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (GBP * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (GBP * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (GBP * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (GBP * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (GBP * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (GBP * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (GBP * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (GBP * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (GBP * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (GBP * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (GBP * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (GBP * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (GBP * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (GBP * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (GBP * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (GBP * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (GBP * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (GBP * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (GBP * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert12() { last_active = 12; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.HKD').removeClass("loadingcurency");
	fetch(endpoint12).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var HKD = HKDField.value; var eur = (HKD * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (HKD * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (HKD * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (HKD * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (HKD * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (HKD * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (HKD * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (HKD * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (HKD * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (HKD * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (HKD * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HRK = (HKD * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (HKD * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (HKD * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (HKD * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (HKD * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (HKD * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (HKD * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (HKD * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (HKD * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (HKD * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (HKD * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (HKD * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (HKD * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (HKD * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (HKD * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (HKD * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (HKD * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (HKD * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (HKD * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (HKD * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert13() { last_active = 13; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.HRK').removeClass("loadingcurency");
	fetch(endpoint13).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var HRK = HRKField.value; var eur = (HRK * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (HRK * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (HRK * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (HRK * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (HRK * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (HRK * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (HRK * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (HRK * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (HRK * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (HRK * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (HRK * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (HRK * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HUF = (HRK * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (HRK * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (HRK * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (HRK * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (HRK * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (HRK * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (HRK * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (HRK * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (HRK * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (HRK * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (HRK * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (HRK * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (HRK * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (HRK * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (HRK * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (HRK * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (HRK * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (HRK * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (HRK * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert14() { last_active = 14; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.HUF').removeClass("loadingcurency");
	fetch(endpoint14).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var HUF = HUFField.value; var eur = (HUF * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (HUF * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (HUF * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (HUF * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (HUF * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (HUF * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (HUF * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (HUF * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (HUF * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (HUF * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (HUF * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (HUF * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (HUF * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var IDR = (HUF * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (HUF * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (HUF * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (HUF * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (HUF * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (HUF * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (HUF * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (HUF * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (HUF * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (HUF * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (HUF * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (HUF * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (HUF * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (HUF * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (HUF * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (HUF * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (HUF * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (HUF * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert15() { last_active = 15; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.IDR').removeClass("loadingcurency");
	fetch(endpoint15).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var IDR = IDRField.value; var eur = (IDR * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (IDR * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (IDR * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (IDR * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (IDR * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (IDR * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (IDR * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (IDR * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (IDR * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (IDR * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (IDR * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (IDR * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (IDR * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (IDR * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var ILS = (IDR * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (IDR * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (IDR * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (IDR * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (IDR * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (IDR * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (IDR * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (IDR * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (IDR * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (IDR * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (IDR * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (IDR * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (IDR * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (IDR * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (IDR * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (IDR * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (IDR * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert16() { last_active = 16; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.ILS').removeClass("loadingcurency");
	fetch(endpoint16).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var ILS = ILSField.value; var eur = (ILS * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (ILS * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (ILS * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (ILS * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (ILS * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (ILS * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (ILS * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (ILS * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (ILS * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (ILS * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (ILS * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (ILS * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (ILS * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (ILS * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (ILS * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var INR = (ILS * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (ILS * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (ILS * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (ILS * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (ILS * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (ILS * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (ILS * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (ILS * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (ILS * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (ILS * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (ILS * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (ILS * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (ILS * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (ILS * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (ILS * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (ILS * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert17() { last_active = 17; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.INR').removeClass("loadingcurency");
	fetch(endpoint17).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var INR = INRField.value; var eur = (INR * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (INR * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (INR * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (INR * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (INR * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (INR * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (INR * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (INR * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (INR * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (INR * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (INR * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (INR * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (INR * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (INR * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (INR * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (INR * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var JPY = (INR * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (INR * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (INR * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (INR * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (INR * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (INR * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (INR * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (INR * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (INR * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (INR * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (INR * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (INR * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (INR * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (INR * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (INR * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert18() { last_active = 18; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.JPY').removeClass("loadingcurency");
	fetch(endpoint18).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var JPY = JPYField.value; var eur = (JPY * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (JPY * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (JPY * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (JPY * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (JPY * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (JPY * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (JPY * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (JPY * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (JPY * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (JPY * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (JPY * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (JPY * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (JPY * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (JPY * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (JPY * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (JPY * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (JPY * convert16).toFixed(behindthecomma);
		INRField.value = INR; var KRW = (JPY * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (JPY * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (JPY * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (JPY * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (JPY * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (JPY * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (JPY * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (JPY * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (JPY * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (JPY * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (JPY * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (JPY * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (JPY * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (JPY * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert19() { last_active = 19; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.KRW').removeClass("loadingcurency");
	fetch(endpoint19).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var KRW = KRWField.value; var eur = (KRW * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (KRW * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (KRW * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (KRW * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (KRW * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (KRW * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (KRW * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (KRW * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (KRW * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (KRW * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (KRW * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (KRW * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (KRW * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (KRW * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (KRW * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (KRW * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (KRW * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (KRW * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var MXN = (KRW * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (KRW * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (KRW * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (KRW * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (KRW * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (KRW * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (KRW * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (KRW * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (KRW * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (KRW * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (KRW * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (KRW * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (KRW * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert20() { last_active = 20; var behindthecomma = parseInt($('#selectdecim').val()); var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.MXN').removeClass("loadingcurency");
	fetch(endpoint20).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var MXN = MXNField.value; var eur = (MXN * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (MXN * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (MXN * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (MXN * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (MXN * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (MXN * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (MXN * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (MXN * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (MXN * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (MXN * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (MXN * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (MXN * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (MXN * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (MXN * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (MXN * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (MXN * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (MXN * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (MXN * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (MXN * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MYR = (MXN * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (MXN * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (MXN * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (MXN * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (MXN * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (MXN * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (MXN * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (MXN * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (MXN * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (MXN * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (MXN * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (MXN * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert21() { last_active = 21; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.MYR').removeClass("loadingcurency");
	fetch(endpoint21).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var MYR = MYRField.value; var eur = (MYR * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (MYR * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (MYR * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (MYR * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (MYR * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (MYR * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (MYR * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (MYR * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (MYR * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (MYR * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (MYR * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (MYR * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (MYR * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (MYR * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (MYR * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (MYR * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (MYR * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (MYR * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (MYR * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (MYR * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var NOK = (MYR * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (MYR * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (MYR * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (MYR * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (MYR * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (MYR * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (MYR * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (MYR * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (MYR * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (MYR * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (MYR * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert22() { last_active = 22; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.NOK').removeClass("loadingcurency");
	fetch(endpoint22).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var NOK = NOKField.value; var eur = (NOK * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (NOK * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (NOK * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (NOK * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (NOK * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (NOK * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (NOK * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (NOK * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (NOK * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (NOK * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (NOK * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (NOK * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (NOK * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (NOK * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (NOK * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (NOK * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (NOK * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (NOK * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (NOK * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (NOK * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (NOK * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NZD = (NOK * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (NOK * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (NOK * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (NOK * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (NOK * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (NOK * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (NOK * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (NOK * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (NOK * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (NOK * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert23() { last_active = 23; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.NZD').removeClass("loadingcurency");
	fetch(endpoint23).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var NZD = NZDField.value; var eur = (NZD * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (NZD * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (NZD * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (NZD * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (NZD * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (NZD * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (NZD * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (NZD * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (NZD * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (NZD * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (NZD * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (NZD * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (NZD * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (NZD * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (NZD * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (NZD * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (NZD * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (NZD * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (NZD * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (NZD * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (NZD * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (NZD * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var PHP = (NZD * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (NZD * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (NZD * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (NZD * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (NZD * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (NZD * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (NZD * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (NZD * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (NZD * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert24() { last_active = 24; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.PHP').removeClass("loadingcurency");
	fetch(endpoint24).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var PHP = PHPField.value; var eur = (PHP * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (PHP * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (PHP * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (PHP * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (PHP * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (PHP * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (PHP * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (PHP * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (PHP * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (PHP * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (PHP * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (PHP * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (PHP * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (PHP * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (PHP * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (PHP * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (PHP * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (PHP * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (PHP * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (PHP * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (PHP * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (PHP * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (PHP * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PLN = (PHP * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (PHP * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (PHP * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (PHP * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (PHP * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (PHP * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (PHP * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (PHP * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert25() { last_active = 25; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.PLN').removeClass("loadingcurency");
	fetch(endpoint25).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var PLN = PLNField.value; var eur = (PLN * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (PLN * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (PLN * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (PLN * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (PLN * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (PLN * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (PLN * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (PLN * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (PLN * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (PLN * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (PLN * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (PLN * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (PLN * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (PLN * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (PLN * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (PLN * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (PLN * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (PLN * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (PLN * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (PLN * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (PLN * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (PLN * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (PLN * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (PLN * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var RON = (PLN * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (PLN * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (PLN * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (PLN * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (PLN * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (PLN * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (PLN * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert26() { last_active = 26; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.RON').removeClass("loadingcurency");
	fetch(endpoint26).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var RON = RONField.value; var eur = (RON * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (RON * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (RON * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (RON * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (RON * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (RON * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (RON * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (RON * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (RON * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (RON * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (RON * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (RON * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (RON * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (RON * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (RON * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (RON * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (RON * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (RON * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (RON * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (RON * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (RON * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (RON * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (RON * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (RON * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (RON * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RUB = (RON * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (RON * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (RON * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (RON * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (RON * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (RON * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert27() { last_active = 27; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.RUB').removeClass("loadingcurency");
	fetch(endpoint27).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var RUB = RUBField.value; var eur = (RUB * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (RUB * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (RUB * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (RUB * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (RUB * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (RUB * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (RUB * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (RUB * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (RUB * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (RUB * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (RUB * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (RUB * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (RUB * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (RUB * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (RUB * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (RUB * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (RUB * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (RUB * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (RUB * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (RUB * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (RUB * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (RUB * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (RUB * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (RUB * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (RUB * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (RUB * convert25).toFixed(behindthecomma);
		RONField.value = RON; var SEK = (RUB * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (RUB * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (RUB * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (RUB * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (RUB * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert28() { last_active = 28; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.SEK').removeClass("loadingcurency");
	fetch(endpoint28).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var SEK = SEKField.value; var eur = (SEK * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (SEK * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (SEK * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (SEK * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (SEK * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (SEK * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (SEK * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (SEK * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (SEK * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (SEK * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (SEK * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (SEK * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (SEK * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (SEK * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (SEK * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (SEK * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (SEK * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (SEK * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (SEK * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (SEK * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (SEK * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (SEK * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (SEK * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (SEK * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (SEK * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (SEK * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (SEK * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SGD = (SEK * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (SEK * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (SEK * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (SEK * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert29() { last_active = 29; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.SGD').removeClass("loadingcurency");
	fetch(endpoint29).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var SGD = SGDField.value; var eur = (SGD * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (SGD * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (SGD * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (SGD * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (SGD * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (SGD * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (SGD * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (SGD * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (SGD * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (SGD * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (SGD * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (SGD * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (SGD * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (SGD * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (SGD * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (SGD * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (SGD * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (SGD * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (SGD * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (SGD * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (SGD * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (SGD * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (SGD * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (SGD * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (SGD * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (SGD * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (SGD * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (SGD * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var THB = (SGD * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (SGD * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (SGD * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert30() { last_active = 30; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.THB').removeClass("loadingcurency");
	fetch(endpoint30).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var THB = THBField.value; var eur = (THB * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (THB * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (THB * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (THB * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (THB * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (THB * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (THB * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (THB * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (THB * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (THB * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (THB * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (THB * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (THB * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (THB * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (THB * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (THB * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (THB * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (THB * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (THB * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (THB * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (THB * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (THB * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (THB * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (THB * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (THB * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (THB * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (THB * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (THB * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (THB * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var TRY = (THB * convert30).toFixed(behindthecomma);
		TRYField.value = TRY; var ZAR = (THB * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert31() { last_active = 31; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.TRY').removeClass("loadingcurency");
	fetch(endpoint31).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var TRY = TRYField.value; var eur = (TRY * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (TRY * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (TRY * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (TRY * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (TRY * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (TRY * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (TRY * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (TRY * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (TRY * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (TRY * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (TRY * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (TRY * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (TRY * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (TRY * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (TRY * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (TRY * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (TRY * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (TRY * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (TRY * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (TRY * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (TRY * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (TRY * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (TRY * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (TRY * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (TRY * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (TRY * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (TRY * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (TRY * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (TRY * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (TRY * convert29).toFixed(behindthecomma);
		THBField.value = THB; var ZAR = (TRY * convert31).toFixed(behindthecomma);
		ZARField.value = ZAR;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }

function moneyConvert32() { last_active = 32; var behindthecomma = parseInt($('#selectdecim').val());
	$('.inputnronly').addClass("loadingcurency");
	$('.loaderrr').addClass("loaderrropacity");
	$('.ZAR').removeClass("loadingcurency");
	fetch(endpoint32).then(response => response.json()).then(data => { var convert0 = data.rates.EUR; var convert1 = data.rates.CNY; var convert2 = data.rates.USD; var convert3 = data.rates.AUD; var convert4 = data.rates.BGN; var convert5 = data.rates.BRL; var convert6 = data.rates.CAD; var convert7 = data.rates.CHF; var convert8 = data.rates.CZK; var convert9 = data.rates.DKK; var convert10 = data.rates.GBP; var convert11 = data.rates.HKD; var convert12 = data.rates.HRK; var convert13 = data.rates.HUF; var convert14 = data.rates.IDR; var convert15 = data.rates.ILS; var convert16 = data.rates.INR; var convert17 = data.rates.JPY; var convert18 = data.rates.KRW; var convert19 = data.rates.MXN; var convert20 = data.rates.MYR; var convert21 = data.rates.NOK; var convert22 = data.rates.NZD; var convert23 = data.rates.PHP; var convert24 = data.rates.PLN; var convert25 = data.rates.RON; var convert26 = data.rates.RUB; var convert27 = data.rates.SEK; var convert28 = data.rates.SGD; var convert29 = data.rates.THB; var convert30 = data.rates.TRY; var convert31 = data.rates.ZAR; var ZAR = ZARField.value; var eur = (ZAR * convert0).toFixed(behindthecomma);
		eurField.value = eur; var rmb = (ZAR * convert1).toFixed(behindthecomma);
		rmbField.value = rmb; var usd = (ZAR * convert2).toFixed(behindthecomma);
		usdField.value = usd; var AUD = (ZAR * convert3).toFixed(behindthecomma);
		AUDField.value = AUD; var BGN = (ZAR * convert4).toFixed(behindthecomma);
		BGNField.value = BGN; var BRL = (ZAR * convert5).toFixed(behindthecomma);
		BRLField.value = BRL; var CAD = (ZAR * convert6).toFixed(behindthecomma);
		CADField.value = CAD; var CHF = (ZAR * convert7).toFixed(behindthecomma);
		CHFField.value = CHF; var CZK = (ZAR * convert8).toFixed(behindthecomma);
		CZKField.value = CZK; var DKK = (ZAR * convert9).toFixed(behindthecomma);
		DKKField.value = DKK; var GBP = (ZAR * convert10).toFixed(behindthecomma);
		GBPField.value = GBP; var HKD = (ZAR * convert11).toFixed(behindthecomma);
		HKDField.value = HKD; var HRK = (ZAR * convert12).toFixed(behindthecomma);
		HRKField.value = HRK; var HUF = (ZAR * convert13).toFixed(behindthecomma);
		HUFField.value = HUF; var IDR = (ZAR * convert14).toFixed(behindthecomma);
		IDRField.value = IDR; var ILS = (ZAR * convert15).toFixed(behindthecomma);
		ILSField.value = ILS; var INR = (ZAR * convert16).toFixed(behindthecomma);
		INRField.value = INR; var JPY = (ZAR * convert17).toFixed(behindthecomma);
		JPYField.value = JPY; var KRW = (ZAR * convert18).toFixed(behindthecomma);
		KRWField.value = KRW; var MXN = (ZAR * convert19).toFixed(behindthecomma);
		MXNField.value = MXN; var MYR = (ZAR * convert20).toFixed(behindthecomma);
		MYRField.value = MYR; var NOK = (ZAR * convert21).toFixed(behindthecomma);
		NOKField.value = NOK; var NZD = (ZAR * convert22).toFixed(behindthecomma);
		NZDField.value = NZD; var PHP = (ZAR * convert23).toFixed(behindthecomma);
		PHPField.value = PHP; var PLN = (ZAR * convert24).toFixed(behindthecomma);
		PLNField.value = PLN; var RON = (ZAR * convert25).toFixed(behindthecomma);
		RONField.value = RON; var RUB = (ZAR * convert26).toFixed(behindthecomma);
		RUBField.value = RUB; var SEK = (ZAR * convert27).toFixed(behindthecomma);
		SEKField.value = SEK; var SGD = (ZAR * convert28).toFixed(behindthecomma);
		SGDField.value = SGD; var THB = (ZAR * convert29).toFixed(behindthecomma);
		THBField.value = THB; var TRY = (ZAR * convert30).toFixed(behindthecomma);
		TRYField.value = TRY;
		$('.inputnronly').removeClass("loadingcurency");
		$('.loaderrr').removeClass("loaderrropacity") }) }
restart();
$("#datetimepicker1").change(function() { restart0();
		restart();
		setTimeout(function() { $('.inputnronly').addClass("loadingcurency");
			$('.loaderrr').addClass("loaderrropacity");
			call_others(last_active) }, 100) })




	// Project: Bootstrap Growl = v3.1.3 | Description: Turns standard Bootstrap alerts into "Growl-like" notifications. | Author: Mouse0270 aka Robert McIntosh | License: MIT License | Website: https://github.com/mouse0270/bootstrap-growl
	! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }(function(t) {
		function e(e, i, n) { var i = { content: { message: "object" == typeof i ? i.message : i, title: i.title ? i.title : "", icon: i.icon ? i.icon : "", url: i.url ? i.url : "#", target: i.target ? i.target : "-" } };
			n = t.extend(!0, {}, i, n), this.settings = t.extend(!0, {}, s, n), this._defaults = s, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }, "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }), this.init() } var s = { element: "body", position: null, type: "info", allow_dismiss: !0, newest_on_top: !1, showProgressbar: !1, placement: { from: "top", align: "right" }, offset: 20, spacing: 10, z_index: 1031, delay: 5e3, timer: 1e3, url_target: "_blank", mouse_over: null, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" }, onShow: null, onShown: null, onClose: null, onClosed: null, icon_type: "class", template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>' };
		String.format = function() { for (var t = arguments[0], e = 1; e < arguments.length; e++) t = t.replace(RegExp("\\{" + (e - 1) + "\\}", "gm"), arguments[e]); return t }, t.extend(e.prototype, { init: function() { var t = this;
				this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.placement(), this.bind(), this.notify = { $ele: this.$ele, update: function(e, s) { var i = {}; "string" == typeof e ? i[e] = s : i = e; for (var e in i) switch (e) {
							case "type":
								this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = i[e], this.$ele.addClass("alert-" + i[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[e]); break;
							case "icon":
								var n = this.$ele.find('[data-notify="icon"]'); "class" == t.settings.icon_type.toLowerCase() ? n.removeClass(t.settings.content.icon).addClass(i[e]) : (n.is("img") || n.find("img"), n.attr("src", i[e])); break;
							case "progress":
								var a = t.settings.delay - t.settings.delay * (i[e] / 100);
								this.$ele.data("notify-delay", a), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[e]).css("width", i[e] + "%"); break;
							case "url":
								this.$ele.find('[data-notify="url"]').attr("href", i[e]); break;
							case "target":
								this.$ele.find('[data-notify="url"]').attr("target", i[e]); break;
							default:
								this.$ele.find('[data-notify="' + e + '"]').html(i[e]) }
						var o = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
						t.reposition(o) }, close: function() { t.close() } } }, buildNotify: function() { var e = this.settings.content;
				this.$ele = t(String.format(this.settings.template, this.settings.type, e.title, e.message, e.url, e.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove() }, setIcon: function() { "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />') }, styleURL: function() { this.$ele.find('[data-notify="url"]').css({ backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)", height: "100%", left: "0px", position: "absolute", top: "0px", width: "100%", zIndex: this.settings.z_index + 1 }), this.$ele.find('[data-notify="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 }) }, placement: function() { var e = this,
					s = this.settings.offset.y,
					i = { display: "inline-block", margin: "0px auto", position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute", transition: "all .5s ease-in-out", zIndex: this.settings.z_index },
					n = !1,
					a = this.settings; switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() { return s = Math.max(s, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing)) }), 1 == this.settings.newest_on_top && (s = this.settings.offset.y), i[this.settings.placement.from] = s + "px", this.settings.placement.align) {
					case "left":
					case "right":
						i[this.settings.placement.align] = this.settings.offset.x + "px"; break;
					case "center":
						i.left = 0, i.right = 0 } this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit", "moz", "o", "ms", ""), function(t, s) { e.$ele[0].style[s + "AnimationIterationCount"] = 1 }), t(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (s = parseInt(s) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(s)), t.isFunction(e.settings.onShow) && e.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function() { n = !0 }).one(this.animations.end, function() { t.isFunction(e.settings.onShown) && e.settings.onShown.call(this) }), setTimeout(function() { n || t.isFunction(e.settings.onShown) && e.settings.onShown.call(this) }, 600) }, bind: function() { var e = this; if (this.$ele.find('[data-notify="dismiss"]').on("click", function() { e.close() }), this.$ele.mouseover(function() { t(this).data("data-hover", "true") }).mouseout(function() { t(this).data("data-hover", "false") }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) { e.$ele.data("notify-delay", e.settings.delay); var s = setInterval(function() { var t = parseInt(e.$ele.data("notify-delay")) - e.settings.timer; if ("false" === e.$ele.data("data-hover") && "pause" == e.settings.mouse_over || "pause" != e.settings.mouse_over) { var i = (e.settings.delay - t) / e.settings.delay * 100;
							e.$ele.data("notify-delay", t), e.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%") } t <= -e.settings.timer && (clearInterval(s), e.close()) }, e.settings.timer) } }, close: function() { var e = this,
					s = parseInt(this.$ele.css(this.settings.placement.from)),
					i = !1;
				this.$ele.data("closing", "true").addClass(this.settings.animate.exit), e.reposition(s), t.isFunction(e.settings.onClose) && e.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function() { i = !0 }).one(this.animations.end, function() { t(this).remove(), t.isFunction(e.settings.onClosed) && e.settings.onClosed.call(this) }), setTimeout(function() { i || (e.$ele.remove(), e.settings.onClosed && e.settings.onClosed(e.$ele)) }, 600) }, reposition: function(e) { var s = this,
					i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
					n = this.$ele.nextAll(i);
				1 == this.settings.newest_on_top && (n = this.$ele.prevAll(i)), n.each(function() { t(this).css(s.settings.placement.from, e), e = parseInt(e) + parseInt(s.settings.spacing) + t(this).outerHeight() }) } }), t.notify = function(t, s) { var i = new e(this, t, s); return i.notify }, t.notifyDefaults = function(e) { return s = t.extend(!0, {}, s, e) }, t.notifyClose = function(e) { "undefined" == typeof e || "all" == e ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + e + '"]').find('[data-notify="dismiss"]').trigger("click") } });




// moment.js
// version : 2.9.0
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
(function(a) {
	function b(a, b, c) { switch (arguments.length) {
			case 2:
				return null != a ? a : b;
			case 3:
				return null != a ? a : null != b ? b : c;
			default:
				throw new Error("Implement me") } }

	function c(a, b) { return Bb.call(a, b) }

	function d() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 } }

	function e(a) { vb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a) }

	function f(a, b) { var c = !0; return o(function() { return c && (e(a), c = !1), b.apply(this, arguments) }, b) }

	function g(a, b) { sc[a] || (e(b), sc[a] = !0) }

	function h(a, b) { return function(c) { return r(a.call(this, c), b) } }

	function i(a, b) { return function(c) { return this.localeData().ordinal(a.call(this, c), b) } }

	function j(a, b) { var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			f = a.clone().add(e, "months"); return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) }

	function k(a, b, c) { var d; return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b }

	function l() {}

	function m(a, b) { b !== !1 && H(a), p(this, a), this._d = new Date(+a._d), uc === !1 && (uc = !0, vb.updateOffset(this), uc = !1) }

	function n(a) { var b = A(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = vb.localeData(), this._bubble() }

	function o(a, b) { for (var d in b) c(b, d) && (a[d] = b[d]); return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a }

	function p(a, b) { var c, d, e; if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Kb.length > 0)
			for (c in Kb) d = Kb[c], e = b[d], "undefined" != typeof e && (a[d] = e); return a }

	function q(a) { return 0 > a ? Math.ceil(a) : Math.floor(a) }

	function r(a, b, c) { for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d; return (e ? c ? "+" : "" : "-") + d }

	function s(a, b) { var c = { milliseconds: 0, months: 0 }; return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c }

	function t(a, b) { var c; return b = M(b, a), a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c }

	function u(a, b) { return function(c, d) { var e, f; return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = vb.duration(c, d), v(this, e, a), this } }

	function v(a, b, c, d) { var e = b._milliseconds,
			f = b._days,
			g = b._months;
		d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && pb(a, "Date", ob(a, "Date") + f * c), g && nb(a, ob(a, "Month") + g * c), d && vb.updateOffset(a, f || g) }

	function w(a) { return "[object Array]" === Object.prototype.toString.call(a) }

	function x(a) { return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date }

	function y(a, b, c) { var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0; for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++; return g + f }

	function z(a) { if (a) { var b = a.toLowerCase().replace(/(.)s$/, "$1");
			a = lc[a] || mc[b] || b } return a }

	function A(a) { var b, d, e = {}; for (d in a) c(a, d) && (b = z(d), b && (e[b] = a[d])); return e }

	function B(b) { var c, d; if (0 === b.indexOf("week")) c = 7, d = "day";
		else { if (0 !== b.indexOf("month")) return;
			c = 12, d = "month" } vb[b] = function(e, f) { var g, h, i = vb._locale[b],
				j = []; if ("number" == typeof e && (f = e, e = a), h = function(a) { var b = vb().utc().set(d, a); return i.call(vb._locale, b, e || "") }, null != f) return h(f); for (g = 0; c > g; g++) j.push(h(g)); return j } }

	function C(a) { var b = +a,
			c = 0; return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c }

	function D(a, b) { return new Date(Date.UTC(a, b + 1, 0)).getUTCDate() }

	function E(a, b, c) { return jb(vb([a, 11, 31 + b - c]), b, c).week }

	function F(a) { return G(a) ? 366 : 365 }

	function G(a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 }

	function H(a) { var b;
		a._a && -2 === a._pf.overflow && (b = a._a[Db] < 0 || a._a[Db] > 11 ? Db : a._a[Eb] < 1 || a._a[Eb] > D(a._a[Cb], a._a[Db]) ? Eb : a._a[Fb] < 0 || a._a[Fb] > 24 || 24 === a._a[Fb] && (0 !== a._a[Gb] || 0 !== a._a[Hb] || 0 !== a._a[Ib]) ? Fb : a._a[Gb] < 0 || a._a[Gb] > 59 ? Gb : a._a[Hb] < 0 || a._a[Hb] > 59 ? Hb : a._a[Ib] < 0 || a._a[Ib] > 999 ? Ib : -1, a._pf._overflowDayOfYear && (Cb > b || b > Eb) && (b = Eb), a._pf.overflow = b) }

	function I(b) { return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid }

	function J(a) { return a ? a.toLowerCase().replace("_", "-") : a }

	function K(a) { for (var b, c, d, e, f = 0; f < a.length;) { for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) { if (d = L(e.slice(0, b).join("-"))) return d; if (c && c.length >= b && y(e, c, !0) >= b - 1) break;
				b-- } f++ } return null }

	function L(a) { var b = null; if (!Jb[a] && Lb) try { b = vb.locale(), require("./locale/" + a), vb.locale(b) } catch (c) {}
		return Jb[a] }

	function M(a, b) { var c, d; return b._isUTC ? (c = b.clone(), d = (vb.isMoment(a) || x(a) ? +a : +vb(a)) - +c, c._d.setTime(+c._d + d), vb.updateOffset(c, !1), c) : vb(a).local() }

	function N(a) { return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "") }

	function O(a) { var b, c, d = a.match(Pb); for (b = 0, c = d.length; c > b; b++) d[b] = rc[d[b]] ? rc[d[b]] : N(d[b]); return function(e) { var f = ""; for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b]; return f } }

	function P(a, b) { return a.isValid() ? (b = Q(b, a.localeData()), nc[b] || (nc[b] = O(b)), nc[b](a)) : a.localeData().invalidDate() }

	function Q(a, b) {
		function c(a) { return b.longDateFormat(a) || a } var d = 5; for (Qb.lastIndex = 0; d >= 0 && Qb.test(a);) a = a.replace(Qb, c), Qb.lastIndex = 0, d -= 1; return a }

	function R(a, b) { var c, d = b._strict; switch (a) {
			case "Q":
				return _b;
			case "DDDD":
				return bc;
			case "YYYY":
			case "GGGG":
			case "gggg":
				return d ? cc : Tb;
			case "Y":
			case "G":
			case "g":
				return ec;
			case "YYYYYY":
			case "YYYYY":
			case "GGGGG":
			case "ggggg":
				return d ? dc : Ub;
			case "S":
				if (d) return _b;
			case "SS":
				if (d) return ac;
			case "SSS":
				if (d) return bc;
			case "DDD":
				return Sb;
			case "MMM":
			case "MMMM":
			case "dd":
			case "ddd":
			case "dddd":
				return Wb;
			case "a":
			case "A":
				return b._locale._meridiemParse;
			case "x":
				return Zb;
			case "X":
				return $b;
			case "Z":
			case "ZZ":
				return Xb;
			case "T":
				return Yb;
			case "SSSS":
				return Vb;
			case "MM":
			case "DD":
			case "YY":
			case "GG":
			case "gg":
			case "HH":
			case "hh":
			case "mm":
			case "ss":
			case "ww":
			case "WW":
				return d ? ac : Rb;
			case "M":
			case "D":
			case "d":
			case "H":
			case "h":
			case "m":
			case "s":
			case "w":
			case "W":
			case "e":
			case "E":
				return Rb;
			case "Do":
				return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
			default:
				return c = new RegExp($(Z(a.replace("\\", "")), "i")) } }

	function S(a) { a = a || ""; var b = a.match(Xb) || [],
			c = b[b.length - 1] || [],
			d = (c + "").match(jc) || ["-", 0, 0],
			e = +(60 * d[1]) + C(d[2]); return "+" === d[0] ? e : -e }

	function T(a, b, c) { var d, e = c._a; switch (a) {
			case "Q":
				null != b && (e[Db] = 3 * (C(b) - 1)); break;
			case "M":
			case "MM":
				null != b && (e[Db] = C(b) - 1); break;
			case "MMM":
			case "MMMM":
				d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Db] = d : c._pf.invalidMonth = b; break;
			case "D":
			case "DD":
				null != b && (e[Eb] = C(b)); break;
			case "Do":
				null != b && (e[Eb] = C(parseInt(b.match(/\d{1,2}/)[0], 10))); break;
			case "DDD":
			case "DDDD":
				null != b && (c._dayOfYear = C(b)); break;
			case "YY":
				e[Cb] = vb.parseTwoDigitYear(b); break;
			case "YYYY":
			case "YYYYY":
			case "YYYYYY":
				e[Cb] = C(b); break;
			case "a":
			case "A":
				c._meridiem = b; break;
			case "h":
			case "hh":
				c._pf.bigHour = !0;
			case "H":
			case "HH":
				e[Fb] = C(b); break;
			case "m":
			case "mm":
				e[Gb] = C(b); break;
			case "s":
			case "ss":
				e[Hb] = C(b); break;
			case "S":
			case "SS":
			case "SSS":
			case "SSSS":
				e[Ib] = C(1e3 * ("0." + b)); break;
			case "x":
				c._d = new Date(C(b)); break;
			case "X":
				c._d = new Date(1e3 * parseFloat(b)); break;
			case "Z":
			case "ZZ":
				c._useUTC = !0, c._tzm = S(b); break;
			case "dd":
			case "ddd":
			case "dddd":
				d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b; break;
			case "w":
			case "ww":
			case "W":
			case "WW":
			case "d":
			case "e":
			case "E":
				a = a.substr(0, 1);
			case "gggg":
			case "GGGG":
			case "GGGGG":
				a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = C(b)); break;
			case "gg":
			case "GG":
				c._w = c._w || {}, c._w[a] = vb.parseTwoDigitYear(b) } }

	function U(a) { var c, d, e, f, g, h, i;
		c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Cb], jb(vb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Cb], jb(vb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = kb(d, e, f, h, g), a._a[Cb] = i.year, a._dayOfYear = i.dayOfYear }

	function V(a) { var c, d, e, f, g = []; if (!a._d) { for (e = X(a), a._w && null == a._a[Eb] && null == a._a[Db] && U(a), a._dayOfYear && (f = b(a._a[Cb], e[Cb]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), d = fb(f, 0, a._dayOfYear), a._a[Db] = d.getUTCMonth(), a._a[Eb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c]; for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
			24 === a._a[Fb] && 0 === a._a[Gb] && 0 === a._a[Hb] && 0 === a._a[Ib] && (a._nextDay = !0, a._a[Fb] = 0), a._d = (a._useUTC ? fb : eb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Fb] = 24) } }

	function W(a) { var b;
		a._d || (b = A(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], V(a)) }

	function X(a) { var b = new Date; return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()] }

	function Y(b) { if (b._f === vb.ISO_8601) return void ab(b);
		b._a = [], b._pf.empty = !0; var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			j = 0; for (e = Q(b._f, b._locale).match(Pb) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(R(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), rc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), T(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
		b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Fb] <= 12 && (b._pf.bigHour = a), b._a[Fb] = k(b._locale, b._a[Fb], b._meridiem), V(b), H(b) }

	function Z(a) { return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) { return b || c || d || e }) }

	function $(a) { return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

	function _(a) { var b, c, e, f, g; if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0)); for (f = 0; f < a._f.length; f++) g = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], Y(b), I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
		o(a, c || b) }

	function ab(a) { var b, c, d = a._i,
			e = fc.exec(d); if (e) { for (a._pf.iso = !0, b = 0, c = hc.length; c > b; b++)
				if (hc[b][1].exec(d)) { a._f = hc[b][0] + (e[6] || " "); break }
			for (b = 0, c = ic.length; c > b; b++)
				if (ic[b][1].exec(d)) { a._f += ic[b][0]; break }
			d.match(Xb) && (a._f += "Z"), Y(a) } else a._isValid = !1 }

	function bb(a) { ab(a), a._isValid === !1 && (delete a._isValid, vb.createFromInputFallback(a)) }

	function cb(a, b) { var c, d = []; for (c = 0; c < a.length; ++c) d.push(b(a[c], c)); return d }

	function db(b) { var c, d = b._i;
		d === a ? b._d = new Date : x(d) ? b._d = new Date(+d) : null !== (c = Mb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? bb(b) : w(d) ? (b._a = cb(d.slice(0), function(a) { return parseInt(a, 10) }), V(b)) : "object" == typeof d ? W(b) : "number" == typeof d ? b._d = new Date(d) : vb.createFromInputFallback(b) }

	function eb(a, b, c, d, e, f, g) { var h = new Date(a, b, c, d, e, f, g); return 1970 > a && h.setFullYear(a), h }

	function fb(a) { var b = new Date(Date.UTC.apply(null, arguments)); return 1970 > a && b.setUTCFullYear(a), b }

	function gb(a, b) { if ("string" == typeof a)
			if (isNaN(a)) { if (a = b.weekdaysParse(a), "number" != typeof a) return null } else a = parseInt(a, 10); return a }

	function hb(a, b, c, d, e) { return e.relativeTime(b || 1, !!c, a, d) }

	function ib(a, b, c) { var d = vb.duration(a).abs(),
			e = Ab(d.as("s")),
			f = Ab(d.as("m")),
			g = Ab(d.as("h")),
			h = Ab(d.as("d")),
			i = Ab(d.as("M")),
			j = Ab(d.as("y")),
			k = e < oc.s && ["s", e] || 1 === f && ["m"] || f < oc.m && ["mm", f] || 1 === g && ["h"] || g < oc.h && ["hh", g] || 1 === h && ["d"] || h < oc.d && ["dd", h] || 1 === i && ["M"] || i < oc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j]; return k[2] = b, k[3] = +a > 0, k[4] = c, hb.apply({}, k) }

	function jb(a, b, c) { var d, e = c - b,
			f = c - a.day(); return f > e && (f -= 7), e - 7 > f && (f += 7), d = vb(a).add(f, "d"), { week: Math.ceil(d.dayOfYear() / 7), year: d.year() } }

	function kb(a, b, c, d, e) { var f, g, h = fb(a, 0, 1).getUTCDay(); return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, { year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : F(a - 1) + g } }

	function lb(b) { var c, d = b._i,
			e = b._f; return b._locale = b._locale || vb.localeData(b._l), null === d || e === a && "" === d ? vb.invalid({ nullInput: !0 }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), vb.isMoment(d) ? new m(d, !0) : (e ? w(e) ? _(b) : Y(b) : db(b), c = new m(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c)) }

	function mb(a, b) { var c, d; if (1 === b.length && w(b[0]) && (b = b[0]), !b.length) return vb(); for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]); return c }

	function nb(a, b) { var c; return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) }

	function ob(a, b) { return a._d["get" + (a._isUTC ? "UTC" : "") + b]() }

	function pb(a, b, c) { return "Month" === b ? nb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c) }

	function qb(a, b) { return function(c) { return null != c ? (pb(this, a, c), vb.updateOffset(this, b), this) : ob(this, a) } }

	function rb(a) { return 400 * a / 146097 }

	function sb(a) { return 146097 * a / 400 }

	function tb(a) { vb.duration.fn[a] = function() { return this._data[a] } }

	function ub(a) { "undefined" == typeof ender && (wb = zb.moment, zb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vb) : vb) }
	for (var vb, wb, xb, yb = "2.9.0", zb = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Ab = Math.round, Bb = Object.prototype.hasOwnProperty, Cb = 0, Db = 1, Eb = 2, Fb = 3, Gb = 4, Hb = 5, Ib = 6, Jb = {}, Kb = [], Lb = "undefined" != typeof module && module && module.exports, Mb = /^\/?Date\((\-?\d+)/i, Nb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ob = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Pb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Qb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rb = /\d\d?/, Sb = /\d{1,3}/, Tb = /\d{1,4}/, Ub = /[+\-]?\d{1,6}/, Vb = /\d+/, Wb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xb = /Z|[\+\-]\d\d:?\d\d/gi, Yb = /T/i, Zb = /[\+\-]?\d+/, $b = /[\+\-]?\d+(\.\d{1,3})?/, _b = /\d/, ac = /\d\d/, bc = /\d{3}/, cc = /\d{4}/, dc = /[+-]?\d{6}/, ec = /[+-]?\d+/, fc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gc = "YYYY-MM-DDTHH:mm:ssZ", hc = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
			["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
			["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
			["GGGG-[W]WW", /\d{4}-W\d{2}/],
			["YYYY-DDD", /\d{4}-\d{3}/]
		], ic = [
			["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
			["HH:mm", /(T| )\d\d:\d\d/],
			["HH", /(T| )\d\d/]
		], jc = /([\+\-]|\d\d)/gi, kc = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), { Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6 }), lc = { ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear" }, mc = { dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear" }, nc = {}, oc = { s: 45, m: 45, h: 22, d: 26, M: 11 }, pc = "DDD w W M D d".split(" "), qc = "M D H h m s w W".split(" "), rc = { M: function() { return this.month() + 1 }, MMM: function(a) { return this.localeData().monthsShort(this, a) }, MMMM: function(a) { return this.localeData().months(this, a) }, D: function() { return this.date() }, DDD: function() { return this.dayOfYear() }, d: function() { return this.day() }, dd: function(a) { return this.localeData().weekdaysMin(this, a) }, ddd: function(a) { return this.localeData().weekdaysShort(this, a) }, dddd: function(a) { return this.localeData().weekdays(this, a) }, w: function() { return this.week() }, W: function() { return this.isoWeek() }, YY: function() { return r(this.year() % 100, 2) }, YYYY: function() { return r(this.year(), 4) }, YYYYY: function() { return r(this.year(), 5) }, YYYYYY: function() { var a = this.year(),
					b = a >= 0 ? "+" : "-"; return b + r(Math.abs(a), 6) }, gg: function() { return r(this.weekYear() % 100, 2) }, gggg: function() { return r(this.weekYear(), 4) }, ggggg: function() { return r(this.weekYear(), 5) }, GG: function() { return r(this.isoWeekYear() % 100, 2) }, GGGG: function() { return r(this.isoWeekYear(), 4) }, GGGGG: function() { return r(this.isoWeekYear(), 5) }, e: function() { return this.weekday() }, E: function() { return this.isoWeekday() }, a: function() { return this.localeData().meridiem(this.hours(), this.minutes(), !0) }, A: function() { return this.localeData().meridiem(this.hours(), this.minutes(), !1) }, H: function() { return this.hours() }, h: function() { return this.hours() % 12 || 12 }, m: function() { return this.minutes() }, s: function() { return this.seconds() }, S: function() { return C(this.milliseconds() / 100) }, SS: function() { return r(C(this.milliseconds() / 10), 2) }, SSS: function() { return r(this.milliseconds(), 3) }, SSSS: function() { return r(this.milliseconds(), 3) }, Z: function() { var a = this.utcOffset(),
					b = "+"; return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2) }, ZZ: function() { var a = this.utcOffset(),
					b = "+"; return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + r(C(a) % 60, 2) }, z: function() { return this.zoneAbbr() }, zz: function() { return this.zoneName() }, x: function() { return this.valueOf() }, X: function() { return this.unix() }, Q: function() { return this.quarter() } }, sc = {}, tc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], uc = !1; pc.length;) xb = pc.pop(), rc[xb + "o"] = i(rc[xb], xb);
	for (; qc.length;) xb = qc.pop(), rc[xb + xb] = h(rc[xb], 2);
	rc.DDDD = h(rc.DDD, 3), o(l.prototype, { set: function(a) { var b, c; for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
			this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source) }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function(a) { return this._months[a.month()] }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function(a) { return this._monthsShort[a.month()] }, monthsParse: function(a, b, c) { var d, e, f; for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) { if (e = vb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d; if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d; if (!c && this._monthsParse[d].test(a)) return d } }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function(a) { return this._weekdays[a.day()] }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function(a) { return this._weekdaysShort[a.day()] }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function(a) { return this._weekdaysMin[a.day()] }, weekdaysParse: function(a) { var b, c, d; for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
				if (this._weekdaysParse[b] || (c = vb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b }, _longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT" }, longDateFormat: function(a) { var b = this._longDateFormat[a]; return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) { return a.slice(1) }), this._longDateFormat[a] = b), b }, isPM: function(a) { return "p" === (a + "").toLowerCase().charAt(0) }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function(a, b, c) { return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM" }, _calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, calendar: function(a, b, c) { var d = this._calendar[a]; return "function" == typeof d ? d.apply(b, [c]) : d }, _relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, relativeTime: function(a, b, c, d) { var e = this._relativeTime[c]; return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a) }, pastFuture: function(a, b) { var c = this._relativeTime[a > 0 ? "future" : "past"]; return "function" == typeof c ? c(b) : c.replace(/%s/i, b) }, ordinal: function(a) { return this._ordinal.replace("%d", a) }, _ordinal: "%d", _ordinalParse: /\d{1,2}/, preparse: function(a) { return a }, postformat: function(a) { return a }, week: function(a) { return jb(a, this._week.dow, this._week.doy).week }, _week: { dow: 0, doy: 6 }, firstDayOfWeek: function() { return this._week.dow }, firstDayOfYear: function() { return this._week.doy }, _invalidDate: "Invalid date", invalidDate: function() { return this._invalidDate } }), vb = function(b, c, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), lb(g) }, vb.suppressDeprecationWarnings = !1, vb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) { a._d = new Date(a._i + (a._useUTC ? " UTC" : "")) }), vb.min = function() { var a = [].slice.call(arguments, 0); return mb("isBefore", a) }, vb.max = function() { var a = [].slice.call(arguments, 0); return mb("isAfter", a) }, vb.utc = function(b, c, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), lb(g).utc() }, vb.unix = function(a) { return vb(1e3 * a) }, vb.duration = function(a, b) { var d, e, f, g, h = a,
			i = null; return vb.isDuration(a) ? h = { ms: a._milliseconds, d: a._days, M: a._months } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Nb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = { y: 0, d: C(i[Eb]) * d, h: C(i[Fb]) * d, m: C(i[Gb]) * d, s: C(i[Hb]) * d, ms: C(i[Ib]) * d }) : (i = Ob.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function(a) { var b = a && parseFloat(a.replace(",", ".")); return (isNaN(b) ? 0 : b) * d }, h = { y: f(i[2]), M: f(i[3]), d: f(i[4]), h: f(i[5]), m: f(i[6]), s: f(i[7]), w: f(i[8]) }) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (g = t(vb(h.from), vb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new n(h), vb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e }, vb.version = yb, vb.defaultFormat = gc, vb.ISO_8601 = function() {}, vb.momentProperties = Kb, vb.updateOffset = function() {}, vb.relativeTimeThreshold = function(b, c) { return oc[b] === a ? !1 : c === a ? oc[b] : (oc[b] = c, !0) }, vb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function(a, b) { return vb.locale(a, b) }), vb.locale = function(a, b) { var c; return a && (c = "undefined" != typeof b ? vb.defineLocale(a, b) : vb.localeData(a), c && (vb.duration._locale = vb._locale = c)), vb._locale._abbr }, vb.defineLocale = function(a, b) { return null !== b ? (b.abbr = a, Jb[a] || (Jb[a] = new l), Jb[a].set(b), vb.locale(a), Jb[a]) : (delete Jb[a], null) }, vb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function(a) { return vb.localeData(a) }), vb.localeData = function(a) { var b; if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return vb._locale; if (!w(a)) { if (b = L(a)) return b;
			a = [a] } return K(a) }, vb.isMoment = function(a) { return a instanceof m || null != a && c(a, "_isAMomentObject") }, vb.isDuration = function(a) { return a instanceof n };
	for (xb = tc.length - 1; xb >= 0; --xb) B(tc[xb]);
	vb.normalizeUnits = function(a) { return z(a) }, vb.invalid = function(a) { var b = vb.utc(0 / 0); return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0, b }, vb.parseZone = function() { return vb.apply(null, arguments).parseZone() }, vb.parseTwoDigitYear = function(a) { return C(a) + (C(a) > 68 ? 1900 : 2e3) }, vb.isDate = x, o(vb.fn = m.prototype, { clone: function() { return vb(this) }, valueOf: function() { return +this._d - 6e4 * (this._offset || 0) }, unix: function() { return Math.floor(+this / 1e3) }, toString: function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, toDate: function() { return this._offset ? new Date(+this) : this._d }, toISOString: function() { var a = vb(this).utc(); return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }, toArray: function() { var a = this; return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()] }, isValid: function() { return I(this) }, isDSTShifted: function() { return this._a ? this.isValid() && y(this._a, (this._isUTC ? vb.utc(this._a) : vb(this._a)).toArray()) > 0 : !1 }, parsingFlags: function() { return o({}, this._pf) }, invalidAt: function() { return this._pf.overflow }, utc: function(a) { return this.utcOffset(0, a) }, local: function(a) { return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(this._dateUtcOffset(), "m")), this }, format: function(a) { var b = P(this, a || vb.defaultFormat); return this.localeData().postformat(b) }, add: u(1, "add"), subtract: u(-1, "subtract"), diff: function(a, b, c) { var d, e, f = M(a, this),
				g = 6e4 * (f.utcOffset() - this.utcOffset()); return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = j(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : q(e) }, from: function(a, b) { return vb.duration({ to: this, from: a }).locale(this.locale()).humanize(!b) }, fromNow: function(a) { return this.from(vb(), a) }, calendar: function(a) { var b = a || vb(),
				c = M(b, this).startOf("day"),
				d = this.diff(c, "days", !0),
				e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse"; return this.format(this.localeData().calendar(e, this, vb(b))) }, isLeapYear: function() { return G(this.year()) }, isDST: function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, day: function(a) { var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != a ? (a = gb(a, this.localeData()), this.add(a - b, "d")) : b }, month: qb("Month", !0), startOf: function(a) { switch (a = z(a)) {
				case "year":
					this.month(0);
				case "quarter":
				case "month":
					this.date(1);
				case "week":
				case "isoWeek":
				case "day":
					this.hours(0);
				case "hour":
					this.minutes(0);
				case "minute":
					this.seconds(0);
				case "second":
					this.milliseconds(0) } return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this }, endOf: function(b) { return b = z(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms") }, isAfter: function(a, b) { var c; return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this > +a) : (c = vb.isMoment(a) ? +a : +vb(a), c < +this.clone().startOf(b)) }, isBefore: function(a, b) { var c; return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +a > +this) : (c = vb.isMoment(a) ? +a : +vb(a), +this.clone().endOf(b) < c) }, isBetween: function(a, b, c) { return this.isAfter(a, c) && this.isBefore(b, c) }, isSame: function(a, b) { var c; return b = z(b || "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this === +a) : (c = +vb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b)) }, min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(a) { return a = vb.apply(null, arguments), this > a ? this : a }), max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(a) { return a = vb.apply(null, arguments), a > this ? this : a }), zone: f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(a, b) { return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset() }), utcOffset: function(a, b) { var c, d = this._offset || 0; return null != a ? ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateUtcOffset()), this._offset = a, this._isUTC = !0, null != c && this.add(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, vb.duration(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, vb.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? d : this._dateUtcOffset() }, isLocal: function() { return !this._isUTC }, isUtcOffset: function() { return this._isUTC }, isUtc: function() { return this._isUTC && 0 === this._offset }, zoneAbbr: function() { return this._isUTC ? "UTC" : "" }, zoneName: function() { return this._isUTC ? "Coordinated Universal Time" : "" }, parseZone: function() { return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(S(this._i)), this }, hasAlignedHourOffset: function(a) { return a = a ? vb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0 }, daysInMonth: function() { return D(this.year(), this.month()) }, dayOfYear: function(a) { var b = Ab((vb(this).startOf("day") - vb(this).startOf("year")) / 864e5) + 1; return null == a ? b : this.add(a - b, "d") }, quarter: function(a) { return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3) }, weekYear: function(a) { var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year; return null == a ? b : this.add(a - b, "y") }, isoWeekYear: function(a) { var b = jb(this, 1, 4).year; return null == a ? b : this.add(a - b, "y") }, week: function(a) { var b = this.localeData().week(this); return null == a ? b : this.add(7 * (a - b), "d") }, isoWeek: function(a) { var b = jb(this, 1, 4).week; return null == a ? b : this.add(7 * (a - b), "d") }, weekday: function(a) { var b = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == a ? b : this.add(a - b, "d") }, isoWeekday: function(a) { return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) }, isoWeeksInYear: function() { return E(this.year(), 1, 4) }, weeksInYear: function() { var a = this.localeData()._week; return E(this.year(), a.dow, a.doy) }, get: function(a) { return a = z(a), this[a]() }, set: function(a, b) { var c; if ("object" == typeof a)
				for (c in a) this.set(c, a[c]);
			else a = z(a), "function" == typeof this[a] && this[a](b); return this }, locale: function(b) { var c; return b === a ? this._locale._abbr : (c = vb.localeData(b), null != c && (this._locale = c), this) }, lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(b) { return b === a ? this.localeData() : this.locale(b) }), localeData: function() { return this._locale }, _dateUtcOffset: function() { return 15 * -Math.round(this._d.getTimezoneOffset() / 15) } }), vb.fn.millisecond = vb.fn.milliseconds = qb("Milliseconds", !1), vb.fn.second = vb.fn.seconds = qb("Seconds", !1), vb.fn.minute = vb.fn.minutes = qb("Minutes", !1), vb.fn.hour = vb.fn.hours = qb("Hours", !0), vb.fn.date = qb("Date", !0), vb.fn.dates = f("dates accessor is deprecated. Use date instead.", qb("Date", !0)), vb.fn.year = qb("FullYear", !0), vb.fn.years = f("years accessor is deprecated. Use year instead.", qb("FullYear", !0)), vb.fn.days = vb.fn.day, vb.fn.months = vb.fn.month, vb.fn.weeks = vb.fn.week, vb.fn.isoWeeks = vb.fn.isoWeek, vb.fn.quarters = vb.fn.quarter, vb.fn.toJSON = vb.fn.toISOString, vb.fn.isUTC = vb.fn.isUtc, o(vb.duration.fn = n.prototype, {
		_bubble: function() { var a, b, c, d = this._milliseconds,
				e = this._days,
				f = this._months,
				g = this._data,
				h = 0;
			g.milliseconds = d % 1e3, a = q(d / 1e3), g.seconds = a % 60, b = q(a / 60), g.minutes = b % 60, c = q(b / 60), g.hours = c % 24, e += q(c / 24), h = q(rb(e)), e -= q(sb(h)), f += q(e / 30), e %= 30, h += q(f / 12), f %= 12, g.days = e, g.months = f, g.years = h },
		abs: function() { return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this },
		weeks: function() { return q(this.days() / 7) },
		valueOf: function() {
			return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
		},
		humanize: function(a) { var b = ib(this, !a, this.localeData()); return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b) },
		add: function(a, b) { var c = vb.duration(a, b); return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this },
		subtract: function(a, b) { var c = vb.duration(a, b); return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this },
		get: function(a) { return a = z(a), this[a.toLowerCase() + "s"]() },
		as: function(a) { var b, c; if (a = z(a), "month" === a || "year" === a) return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * rb(b), "month" === a ? c : c / 12; switch (b = this._days + Math.round(sb(this._months / 12)), a) {
				case "week":
					return b / 7 + this._milliseconds / 6048e5;
				case "day":
					return b + this._milliseconds / 864e5;
				case "hour":
					return 24 * b + this._milliseconds / 36e5;
				case "minute":
					return 24 * b * 60 + this._milliseconds / 6e4;
				case "second":
					return 24 * b * 60 * 60 + this._milliseconds / 1e3;
				case "millisecond":
					return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
				default:
					throw new Error("Unknown unit " + a) } },
		lang: vb.fn.lang,
		locale: vb.fn.locale,
		toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() { return this.toISOString() }),
		toISOString: function() { var a = Math.abs(this.years()),
				b = Math.abs(this.months()),
				c = Math.abs(this.days()),
				d = Math.abs(this.hours()),
				e = Math.abs(this.minutes()),
				f = Math.abs(this.seconds() + this.milliseconds() / 1e3); return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D" },
		localeData: function() { return this._locale },
		toJSON: function() { return this.toISOString() }
	}), vb.duration.fn.toString = vb.duration.fn.toISOString;
	for (xb in kc) c(kc, xb) && tb(xb.toLowerCase());
	vb.duration.fn.asMilliseconds = function() { return this.as("ms") }, vb.duration.fn.asSeconds = function() { return this.as("s") }, vb.duration.fn.asMinutes = function() { return this.as("m") }, vb.duration.fn.asHours = function() { return this.as("h") }, vb.duration.fn.asDays = function() { return this.as("d") }, vb.duration.fn.asWeeks = function() { return this.as("weeks") }, vb.duration.fn.asMonths = function() { return this.as("M") }, vb.duration.fn.asYears = function() { return this.as("y") }, vb.locale("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(a) { var b = a % 10,
					c = 1 === C(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c } }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(a) { return /^nm$/i.test(a) }, meridiem: function(a, b, c) { return 12 > a ? c ? "vm" : "VM" : c ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
				c = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }; return a.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, meridiemParse: /ص|م/, isPM: function(a) { return "م" === a }, meridiem: function(a) { return 12 > a ? "ص" : "م" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function(a) { return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(a) { return c[a] }).replace(/،/g, ",") }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
				c = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
				d = function(a) { return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5 },
				e = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
				f = function(a) { return function(b, c) { var f = d(b),
							g = e[a][d(b)]; return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b) } },
				g = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"]; return a.defineLocale("ar", { months: g, monthsShort: g, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, meridiemParse: /ص|م/, isPM: function(a) { return "م" === a }, meridiem: function(a) { return 12 > a ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: f("s"), m: f("m"), mm: f("m"), h: f("h"), hh: f("h"), d: f("d"), dd: f("d"), M: f("M"), MM: f("M"), y: f("y"), yy: f("y") }, preparse: function(a) { return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(a) { return c[a] }).replace(/،/g, ",") }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" }; return a.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function(a) { return /^(gündüz|axşam)$/.test(a) }, meridiem: function(a) { return 4 > a ? "gecə" : 12 > a ? "səhər" : 17 > a ? "gündüz" : "axşam" }, ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function(a) { if (0 === a) return a + "-ıncı"; var c = a % 10,
						d = a % 100 - c,
						e = a >= 100 ? 100 : null; return a + (b[c] || b[d] || b[e]) }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2] }

			function c(a, c, d) { var e = { mm: c ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: c ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }; return "m" === d ? c ? "хвіліна" : "хвіліну" : "h" === d ? c ? "гадзіна" : "гадзіну" : a + " " + b(e[d], +a) }

			function d(a, b) { var c = { nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"), accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_") },
					d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] }

			function e(a, b) { var c = { nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_") },
					d = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(b) ? "accusative" : "nominative"; return c[d][a.day()] } return a.defineLocale("be", { months: d, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: e, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function() { return "[У] dddd [ў] LT" }, lastWeek: function() { switch (this.day()) {
							case 0:
							case 3:
							case 5:
							case 6:
								return "[У мінулую] dddd [ў] LT";
							case 1:
							case 2:
							case 4:
								return "[У мінулы] dddd [ў] LT" } }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: c, mm: c, h: c, hh: c, d: "дзень", dd: c, M: "месяц", MM: c, y: "год", yy: c }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function(a) { return /^(дня|вечара)$/.test(a) }, meridiem: function(a) { return 4 > a ? "ночы" : 12 > a ? "раніцы" : 17 > a ? "дня" : "вечара" }, ordinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function(a, b) { switch (b) {
						case "M":
						case "d":
						case "DDD":
						case "w":
						case "W":
							return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і";
						case "D":
							return a + "-га";
						default:
							return a } }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function() { switch (this.day()) {
							case 0:
							case 3:
							case 6:
								return "[В изминалата] dddd [в] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[В изминалия] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function(a) { var b = a % 10,
						c = a % 100; return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти" }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
				c = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }; return a.defineLocale("bn", { months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"), weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কএক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function(a) { return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function(a) { return c[a] }) }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }) }, meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/, isPM: function(a) { return /^(দুপুর|বিকেল|রাত)$/.test(a) }, meridiem: function(a) { return 4 > a ? "রাত" : 10 > a ? "শকাল" : 17 > a ? "দুপুর" : 20 > a ? "বিকেল" : "রাত" }, week: { dow: 0, doy: 6 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
				c = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" }; return a.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function(a) { return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(a) { return c[a] }) }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }) }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, isPM: function(a) { return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(a) }, meridiem: function(a) { return 4 > a ? "མཚན་མོ" : 10 > a ? "ཞོགས་ཀས" : 17 > a ? "ཉིན་གུང" : 20 > a ? "དགོང་དག" : "མཚན་མོ" }, week: { dow: 0, doy: 6 } }) }),
		function(a) { a(vb) }(function(b) {
			function c(a, b, c) { var d = { mm: "munutenn", MM: "miz", dd: "devezh" }; return a + " " + f(d[c], a) }

			function d(a) { switch (e(a)) {
					case 1:
					case 3:
					case 4:
					case 5:
					case 9:
						return a + " bloaz";
					default:
						return a + " vloaz" } }

			function e(a) { return a > 9 ? e(a % 10) : a }

			function f(a, b) { return 2 === b ? g(a) : a }

			function g(b) { var c = { m: "v", b: "v", d: "z" }; return c[b.charAt(0)] === a ? b : c[b.charAt(0)] + b.substring(1) } return b.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY LT", LLLL: "dddd, D [a viz] MMMM YYYY LT" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: c, h: "un eur", hh: "%d eur", d: "un devezh", dd: c, M: "ur miz", MM: c, y: "ur bloaz", yy: d }, ordinalParse: /\d{1,2}(añ|vet)/, ordinal: function(a) { var b = 1 === a ? "añ" : "vet"; return a + b }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = a + " "; switch (c) {
					case "m":
						return b ? "jedna minuta" : "jedne minute";
					case "mm":
						return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
					case "h":
						return b ? "jedan sat" : "jednog sata";
					case "hh":
						return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
					case "dd":
						return d += 1 === a ? "dan" : "dana";
					case "MM":
						return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
					case "yy":
						return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina" } } return a.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
							case 0:
								return "[u] [nedjelju] [u] LT";
							case 3:
								return "[u] [srijedu] [u] LT";
							case 6:
								return "[u] [subotu] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function() { switch (this.day()) {
							case 0:
							case 3:
								return "[prošlu] dddd [u] LT";
							case 6:
								return "[prošle] [subote] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ca", { months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"), weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function(a, b) { var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è"; return ("w" === b || "W" === b) && (c = "a"), a + c }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a) { return a > 1 && 5 > a && 1 !== ~~(a / 10) }

			function c(a, c, d, e) { var f = a + " "; switch (d) {
					case "s":
						return c || e ? "pár sekund" : "pár sekundami";
					case "m":
						return c ? "minuta" : e ? "minutu" : "minutou";
					case "mm":
						return c || e ? f + (b(a) ? "minuty" : "minut") : f + "minutami"; break;
					case "h":
						return c ? "hodina" : e ? "hodinu" : "hodinou";
					case "hh":
						return c || e ? f + (b(a) ? "hodiny" : "hodin") : f + "hodinami"; break;
					case "d":
						return c || e ? "den" : "dnem";
					case "dd":
						return c || e ? f + (b(a) ? "dny" : "dní") : f + "dny"; break;
					case "M":
						return c || e ? "měsíc" : "měsícem";
					case "MM":
						return c || e ? f + (b(a) ? "měsíce" : "měsíců") : f + "měsíci"; break;
					case "y":
						return c || e ? "rok" : "rokem";
					case "yy":
						return c || e ? f + (b(a) ? "roky" : "let") : f + "lety" } } var d = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
				e = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"); return a.defineLocale("cs", { months: d, monthsShort: e, monthsParse: function(a, b) { var c, d = []; for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i"); return d }(d, e), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function() { switch (this.day()) {
							case 0:
								return "[v neděli v] LT";
							case 1:
							case 2:
								return "[v] dddd [v] LT";
							case 3:
								return "[ve středu v] LT";
							case 4:
								return "[ve čtvrtek v] LT";
							case 5:
								return "[v pátek v] LT";
							case 6:
								return "[v sobotu v] LT" } }, lastDay: "[včera v] LT", lastWeek: function() { switch (this.day()) {
							case 0:
								return "[minulou neděli v] LT";
							case 1:
							case 2:
								return "[minulé] dddd [v] LT";
							case 3:
								return "[minulou středu v] LT";
							case 4:
							case 5:
								return "[minulý] dddd [v] LT";
							case 6:
								return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("cv", { months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"), monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]", LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT", LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ĕнер] LT [сехетре]", nextWeek: "[Çитес] dddd LT [сехетре]", lastWeek: "[Иртнĕ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function(a) { var b = /сехет$/i.exec(a) ? "рен" : /çул$/i.exec(a) ? "тан" : "ран"; return a + b }, past: "%s каялла", s: "пĕр-ик çеккунт", m: "пĕр минут", mm: "%d минут", h: "пĕр сехет", hh: "%d сехет", d: "пĕр кун", dd: "%d кун", M: "пĕр уйăх", MM: "%d уйăх", y: "пĕр çул", yy: "%d çул" }, ordinalParse: /\d{1,2}-мĕш/, ordinal: "%d-мĕш", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(a) { var b = a,
						c = "",
						d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"]; return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd [d.] D. MMMM YYYY LT" }, calendar: { sameDay: "[I dag kl.] LT", nextDay: "[I morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[I går kl.] LT", lastWeek: "[sidste] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] }; return b ? d[c][0] : d[c][1] } return a.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Heute um] LT [Uhr]", sameElse: "L", nextDay: "[Morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[Gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: b, mm: "%d Minuten", h: b, hh: "%d Stunden", d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] }; return b ? d[c][0] : d[c][1] } return a.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Heute um] LT [Uhr]", sameElse: "L", nextDay: "[Morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[Gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: b, mm: "%d Minuten", h: b, hh: "%d Stunden", d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function(a, b) { return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function(a, b, c) { return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ" }, isPM: function(a) { return "μ" === (a + "").toLowerCase()[0] }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function() { switch (this.day()) {
							case 6:
								return "[το προηγούμενο] dddd [{}] LT";
							default:
								return "[την προηγούμενη] dddd [{}] LT" } }, sameElse: "L" }, calendar: function(a, b) { var c = this._calendarEl[a],
						d = b && b.hours(); return "function" == typeof c && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις") }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, ordinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(a) { var b = a % 10,
						c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			return a.defineLocale("en-ca", {
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "D MMMM, YYYY", LLL: "D MMMM, YYYY LT", LLLL: "dddd, D MMMM, YYYY LT" },
				calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
				relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
				ordinalParse: /\d{1,2}(st|nd|rd|th)/,
				ordinal: function(a) {
					var b = a % 10,
						c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
					return a + c
				}
			})
		}),
		function(a) { a(vb) }(function(a) { return a.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(a) { var b = a % 10,
						c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"), weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D[-an de] MMMM, YYYY", LLL: "D[-an de] MMMM, YYYY LT", LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(a) { return "p" === a.charAt(0).toLowerCase() }, meridiem: function(a, b, c) { return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "je %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, ordinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { var b = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
				c = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"); return a.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(a, d) { return /-MMM-/.test(d) ? c[a.month()] : b[a.month()] }, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c, d) { var e = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [a + " minuti", a + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [a + " tunni", a + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [a + " kuu", a + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [a + " aasta", a + " aastat"] }; return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1] } return a.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: "%d päeva", M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] LT", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] LT", llll: "ddd, YYYY[ko] MMM D[a] LT" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
				c = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" }; return a.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function(a) { return /بعد از ظهر/.test(a) }, meridiem: function(a) { return 12 > a ? "قبل از ظهر" : "بعد از ظهر" }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چندین ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function(a) { return a.replace(/[۰-۹]/g, function(a) { return c[a] }).replace(/،/g, ",") }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }).replace(/,/g, "،") }, ordinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, d, e) { var f = ""; switch (d) {
					case "s":
						return e ? "muutaman sekunnin" : "muutama sekunti";
					case "m":
						return e ? "minuutin" : "minuutti";
					case "mm":
						f = e ? "minuutin" : "minuuttia"; break;
					case "h":
						return e ? "tunnin" : "tunti";
					case "hh":
						f = e ? "tunnin" : "tuntia"; break;
					case "d":
						return e ? "päivän" : "päivä";
					case "dd":
						f = e ? "päivän" : "päivää"; break;
					case "M":
						return e ? "kuukauden" : "kuukausi";
					case "MM":
						f = e ? "kuukauden" : "kuukautta"; break;
					case "y":
						return e ? "vuoden" : "vuosi";
					case "yy":
						f = e ? "vuoden" : "vuotta" } return f = c(a, e) + " " + f }

			function c(a, b) { return 10 > a ? b ? e[a] : d[a] : a } var d = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
				e = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", d[7], d[8], d[9]]; return a.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] LT", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] LT", llll: "ddd, Do MMM YYYY, [klo] LT" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D. MMMM, YYYY LT" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function(a) { return a + (1 === a ? "er" : "") } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function(a) { return a + (1 === a ? "er" : "") }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { var b = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
				c = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"); return a.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(a, d) { return /-MMM-/.test(d) ? c[a.month()] : b[a.month()] }, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("gl", { months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"), monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"), weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"), weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"), weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextDay: function() { return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(a) { return "uns segundos" === a ? "nuns segundos" : "en " + a }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY LT", LLLL: "dddd, D [ב]MMMM YYYY LT", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function(a) { return 2 === a ? "שעתיים" : a + " שעות" }, d: "יום", dd: function(a) { return 2 === a ? "יומיים" : a + " ימים" }, M: "חודש", MM: function(a) { return 2 === a ? "חודשיים" : a + " חודשים" }, y: "שנה", yy: function(a) { return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים" } } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
				c = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; return a.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function(a) { return a.replace(/[१२३४५६७८९०]/g, function(a) { return c[a] }) }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }) }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function(a, b) { return 12 === a && (a = 0), "रात" === b ? 4 > a ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0 }, meridiem: function(a) { return 4 > a ? "रात" : 10 > a ? "सुबह" : 17 > a ? "दोपहर" : 20 > a ? "शाम" : "रात" }, week: { dow: 0, doy: 6 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = a + " "; switch (c) {
					case "m":
						return b ? "jedna minuta" : "jedne minute";
					case "mm":
						return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
					case "h":
						return b ? "jedan sat" : "jednog sata";
					case "hh":
						return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
					case "dd":
						return d += 1 === a ? "dan" : "dana";
					case "MM":
						return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
					case "yy":
						return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina" } } return a.defineLocale("hr", { months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
							case 0:
								return "[u] [nedjelju] [u] LT";
							case 3:
								return "[u] [srijedu] [u] LT";
							case 6:
								return "[u] [subotu] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function() { switch (this.day()) {
							case 0:
							case 3:
								return "[prošlu] dddd [u] LT";
							case 6:
								return "[prošle] [subote] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c, d) { var e = a; switch (c) {
					case "s":
						return d || b ? "néhány másodperc" : "néhány másodperce";
					case "m":
						return "egy" + (d || b ? " perc" : " perce");
					case "mm":
						return e + (d || b ? " perc" : " perce");
					case "h":
						return "egy" + (d || b ? " óra" : " órája");
					case "hh":
						return e + (d || b ? " óra" : " órája");
					case "d":
						return "egy" + (d || b ? " nap" : " napja");
					case "dd":
						return e + (d || b ? " nap" : " napja");
					case "M":
						return "egy" + (d || b ? " hónap" : " hónapja");
					case "MM":
						return e + (d || b ? " hónap" : " hónapja");
					case "y":
						return "egy" + (d || b ? " év" : " éve");
					case "yy":
						return e + (d || b ? " év" : " éve") } return "" }

			function c(a) { return (a ? "" : "[múlt] ") + "[" + d[this.day()] + "] LT[-kor]" } var d = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "); return a.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D., LT", LLLL: "YYYY. MMMM D., dddd LT" }, meridiemParse: /de|du/i, isPM: function(a) { return "u" === a.charAt(1).toLowerCase() }, meridiem: function(a, b, c) { return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() { return c.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() { return c.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b) { var c = { nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"), accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_") },
					d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] }

			function c(a) { var b = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"); return b[a.month()] }

			function d(a) { var b = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"); return b[a.day()] } return a.defineLocale("hy-am", { months: b, monthsShort: c, weekdays: d, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., LT", LLLL: "dddd, D MMMM YYYY թ., LT" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function() { return "dddd [օրը ժամը] LT" }, lastWeek: function() { return "[անցած] dddd [օրը ժամը] LT" }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function(a) { return /^(ցերեկվա|երեկոյան)$/.test(a) }, meridiem: function(a) { return 4 > a ? "գիշերվա" : 12 > a ? "առավոտվա" : 17 > a ? "ցերեկվա" : "երեկոյան" }, ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function(a, b) { switch (b) {
						case "DDD":
						case "w":
						case "W":
						case "DDDo":
							return 1 === a ? a + "-ին" : a + "-րդ";
						default:
							return a } }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "LT.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(a, b) { return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0 }, meridiem: function(a) { return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a) { return a % 100 === 11 ? !0 : a % 10 === 1 ? !1 : !0 }

			function c(a, c, d, e) { var f = a + " "; switch (d) {
					case "s":
						return c || e ? "nokkrar sekúndur" : "nokkrum sekúndum";
					case "m":
						return c ? "mínúta" : "mínútu";
					case "mm":
						return b(a) ? f + (c || e ? "mínútur" : "mínútum") : c ? f + "mínúta" : f + "mínútu";
					case "hh":
						return b(a) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
					case "d":
						return c ? "dagur" : e ? "dag" : "degi";
					case "dd":
						return b(a) ? c ? f + "dagar" : f + (e ? "daga" : "dögum") : c ? f + "dagur" : f + (e ? "dag" : "degi");
					case "M":
						return c ? "mánuður" : e ? "mánuð" : "mánuði";
					case "MM":
						return b(a) ? c ? f + "mánuðir" : f + (e ? "mánuði" : "mánuðum") : c ? f + "mánuður" : f + (e ? "mánuð" : "mánuði");
					case "y":
						return c || e ? "ár" : "ári";
					case "yy":
						return b(a) ? f + (c || e ? "ár" : "árum") : f + (c || e ? "ár" : "ári") } } return a.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd, D. MMMM YYYY [kl.] LT" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: c, m: c, mm: c, h: "klukkustund", hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"), weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"), weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() { switch (this.day()) {
							case 0:
								return "[la scorsa] dddd [alle] LT";
							default:
								return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(a) { return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "Ah時m分", LTS: "LTs秒", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日LT", LLLL: "YYYY年M月D日LT dddd" }, meridiemParse: /午前|午後/i, isPM: function(a) { return "午後" === a }, meridiem: function(a) { return 12 > a ? "午前" : "午後" }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b) { var c = { nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") },
					d = /D[oD] *MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] }

			function c(a, b) { var c = { nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_") },
					d = /(წინა|შემდეგ)/.test(b) ? "accusative" : "nominative"; return c[d][a.day()] } return a.defineLocale("ka", { months: b, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: c, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function(a) { return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში" }, past: function(a) { return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის წინ") : void 0 }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function(a) { return 0 === a ? a : 1 === a ? a + "-ლი" : 20 > a || 100 >= a && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე" }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("km", { months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[ថ្ងៃនៈ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h시 m분", LTS: "A h시 m분 s초", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 LT", LLLL: "YYYY년 MMMM D일 dddd LT" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇초", ss: "%d초", m: "일분", mm: "%d분", h: "한시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한달", MM: "%d달", y: "일년", yy: "%d년" }, ordinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function(a) { return "오후" === a }, meridiem: function(a) { return 12 > a ? "오전" : "오후" } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return b ? d[c][0] : d[c][1] }

			function c(a) { var b = a.substr(0, a.indexOf(" ")); return e(b) ? "a " + a : "an " + a }

			function d(a) { var b = a.substr(0, a.indexOf(" ")); return e(b) ? "viru " + a : "virun " + a }

			function e(a) { if (a = parseInt(a, 10), isNaN(a)) return !1; if (0 > a) return !0; if (10 > a) return a >= 4 && 7 >= a ? !0 : !1; if (100 > a) { var b = a % 10,
						c = a / 10; return e(0 === b ? c : b) } if (1e4 > a) { for (; a >= 10;) a /= 10; return e(a) } return a /= 1e3, e(a) } return a.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function() { switch (this.day()) {
							case 2:
							case 4:
								return "[Leschten] dddd [um] LT";
							default:
								return "[Leschte] dddd [um] LT" } } }, relativeTime: { future: c, past: d, s: "e puer Sekonnen", m: b, mm: "%d Minutten", h: b, hh: "%d Stonnen", d: b, dd: "%d Deeg", M: b, MM: "%d Méint", y: b, yy: "%d Joer" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c, d) { return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes" }

			function c(a, b, c, d) {
				return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]
			}

			function d(a) { return a % 10 === 0 || a > 10 && 20 > a }

			function e(a) { return h[a].split("_") }

			function f(a, b, f, g) { var h = a + " "; return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2]) }

			function g(a, b) { var c = -1 === b.indexOf("dddd HH:mm"),
					d = i[a.day()]; return c ? d : d.substring(0, d.length - 2) + "į" }
			var h = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" },
				i = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
			return a.defineLocale("lt", { months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: g, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], LT [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], LT [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: b, m: c, mm: f, h: c, hh: f, d: c, dd: f, M: c, MM: f, y: c, yy: f }, ordinalParse: /\d{1,2}-oji/, ordinal: function(a) { return a + "-oji" }, week: { dow: 1, doy: 4 } })
		}),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = a.split("_"); return c ? b % 10 === 1 && 11 !== b ? d[2] : d[3] : b % 10 === 1 && 11 !== b ? d[0] : d[1] }

			function c(a, c, e) { return a + " " + b(d[e], a, c) } var d = { mm: "minūti_minūtes_minūte_minūtes", hh: "stundu_stundas_stunda_stundas", dd: "dienu_dienas_diena_dienas", MM: "mēnesi_mēnešus_mēnesis_mēneši", yy: "gadu_gadus_gads_gadi" }; return a.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, LT", LLLL: "YYYY. [gada] D. MMMM, dddd, LT" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "%s vēlāk", past: "%s agrāk", s: "dažas sekundes", m: "minūti", mm: c, h: "stundu", hh: c, d: "dienu", dd: c, M: "mēnesi", MM: c, y: "gadu", yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function() { switch (this.day()) {
							case 0:
							case 3:
							case 6:
								return "[Во изминатата] dddd [во] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[Во изминатиот] dddd [во] LT" } }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function(a) { var b = a % 10,
						c = a % 100; return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти" }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, isPM: function(a) { return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(a) }, meridiem: function(a) { return 4 > a ? "രാത്രി" : 12 > a ? "രാവിലെ" : 17 > a ? "ഉച്ച കഴിഞ്ഞ്" : 20 > a ? "വൈകുന്നേരം" : "രാത്രി" } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
				c = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; return a.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s नंतर", past: "%s पूर्वी", s: "सेकंद", m: "एक मिनिट", mm: "%d मिनिटे", h: "एक तास", hh: "%d तास", d: "एक दिवस", dd: "%d दिवस", M: "एक महिना", MM: "%d महिने", y: "एक वर्ष", yy: "%d वर्षे" }, preparse: function(a) { return a.replace(/[१२३४५६७८९०]/g, function(a) { return c[a] }) }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }) }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function(a, b) { return 12 === a && (a = 0), "रात्री" === b ? 4 > a ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0 }, meridiem: function(a) { return 4 > a ? "रात्री" : 10 > a ? "सकाळी" : 17 > a ? "दुपारी" : 20 > a ? "सायंकाळी" : "रात्री" }, week: { dow: 0, doy: 6 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "LT.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(a, b) { return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0 }, meridiem: function(a) { return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
				c = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" }; return a.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function(a) { return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(a) { return c[a] }) }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }) }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "H.mm", LTS: "LT.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd D. MMMM YYYY [kl.] LT" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
				c = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; return a.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"), longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, preparse: function(a) { return a.replace(/[१२३४५६७८९०]/g, function(a) { return c[a] }) }, postformat: function(a) { return a.replace(/\d/g, function(a) { return b[a] }) }, meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/, meridiemHour: function(a, b) { return 12 === a && (a = 0), "राती" === b ? 3 > a ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "बेलुका" === b || "साँझ" === b ? a + 12 : void 0 }, meridiem: function(a) { return 3 > a ? "राती" : 10 > a ? "बिहान" : 15 > a ? "दिउँसो" : 18 > a ? "बेलुका" : 20 > a ? "साँझ" : "राती" }, calendar: { sameDay: "[आज] LT", nextDay: "[भोली] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडी", s: "केही समय", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
				c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"); return a.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(a, d) { return /-MMM-/.test(d) ? c[a.month()] : b[a.month()] }, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function(a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a) { return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1 }

			function c(a, c, d) { var e = a + " "; switch (d) {
					case "m":
						return c ? "minuta" : "minutę";
					case "mm":
						return e + (b(a) ? "minuty" : "minut");
					case "h":
						return c ? "godzina" : "godzinę";
					case "hh":
						return e + (b(a) ? "godziny" : "godzin");
					case "MM":
						return e + (b(a) ? "miesiące" : "miesięcy");
					case "yy":
						return e + (b(a) ? "lata" : "lat") } } var d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
				e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"); return a.defineLocale("pl", { months: function(a, b) { return /D MMMM/.test(b) ? e[a.month()] : d[a.month()] }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"), weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function() { switch (this.day()) {
							case 0:
								return "[W zeszłą niedzielę o] LT";
							case 3:
								return "[W zeszłą środę o] LT";
							case 6:
								return "[W zeszłą sobotę o] LT";
							default:
								return "[W zeszły] dddd [o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: c, mm: c, h: c, hh: c, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: c, y: "rok", yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("pt-br", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] LT", LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº" }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("pt", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" },
					e = " "; return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c] } return a.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: b, h: "o oră", hh: b, d: "o zi", dd: b, M: "o lună", MM: b, y: "un an", yy: b }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2] }

			function c(a, c, d) { var e = { mm: c ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }; return "m" === d ? c ? "минута" : "минуту" : a + " " + b(e[d], +a) }

			function d(a, b) { var c = { nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_") },
					d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] }

			function e(a, b) { var c = { nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_") },
					d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] }

			function f(a, b) { var c = { nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_") },
					d = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(b) ? "accusative" : "nominative"; return c[d][a.day()] } return a.defineLocale("ru", { months: d, monthsShort: e, weekdays: f, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i], longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function() { return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT" }, lastWeek: function(a) { if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"; switch (this.day()) {
							case 0:
								return "[В прошлое] dddd [в] LT";
							case 1:
							case 2:
							case 4:
								return "[В прошлый] dddd [в] LT";
							case 3:
							case 5:
							case 6:
								return "[В прошлую] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: c, mm: c, h: "час", hh: c, d: "день", dd: c, M: "месяц", MM: c, y: "год", yy: c }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function(a) { return /^(дня|вечера)$/.test(a) }, meridiem: function(a) { return 4 > a ? "ночи" : 12 > a ? "утра" : 17 > a ? "дня" : "вечера" }, ordinalParse: /\d{1,2}-(й|го|я)/, ordinal: function(a, b) { switch (b) {
						case "M":
						case "d":
						case "DDD":
							return a + "-й";
						case "D":
							return a + "-го";
						case "w":
						case "W":
							return a + "-я";
						default:
							return a } }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a) { return a > 1 && 5 > a }

			function c(a, c, d, e) { var f = a + " "; switch (d) {
					case "s":
						return c || e ? "pár sekúnd" : "pár sekundami";
					case "m":
						return c ? "minúta" : e ? "minútu" : "minútou";
					case "mm":
						return c || e ? f + (b(a) ? "minúty" : "minút") : f + "minútami"; break;
					case "h":
						return c ? "hodina" : e ? "hodinu" : "hodinou";
					case "hh":
						return c || e ? f + (b(a) ? "hodiny" : "hodín") : f + "hodinami"; break;
					case "d":
						return c || e ? "deň" : "dňom";
					case "dd":
						return c || e ? f + (b(a) ? "dni" : "dní") : f + "dňami"; break;
					case "M":
						return c || e ? "mesiac" : "mesiacom";
					case "MM":
						return c || e ? f + (b(a) ? "mesiace" : "mesiacov") : f + "mesiacmi"; break;
					case "y":
						return c || e ? "rok" : "rokom";
					case "yy":
						return c || e ? f + (b(a) ? "roky" : "rokov") : f + "rokmi" } } var d = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
				e = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"); return a.defineLocale("sk", { months: d, monthsShort: e, monthsParse: function(a, b) { var c, d = []; for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i"); return d }(d, e), weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function() { switch (this.day()) {
							case 0:
								return "[v nedeľu o] LT";
							case 1:
							case 2:
								return "[v] dddd [o] LT";
							case 3:
								return "[v stredu o] LT";
							case 4:
								return "[vo štvrtok o] LT";
							case 5:
								return "[v piatok o] LT";
							case 6:
								return "[v sobotu o] LT" } }, lastDay: "[včera o] LT", lastWeek: function() { switch (this.day()) {
							case 0:
								return "[minulú nedeľu o] LT";
							case 1:
							case 2:
								return "[minulý] dddd [o] LT";
							case 3:
								return "[minulú stredu o] LT";
							case 4:
							case 5:
								return "[minulý] dddd [o] LT";
							case 6:
								return "[minulú sobotu o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b, c) { var d = a + " "; switch (c) {
					case "m":
						return b ? "ena minuta" : "eno minuto";
					case "mm":
						return d += 1 === a ? "minuta" : 2 === a ? "minuti" : 3 === a || 4 === a ? "minute" : "minut";
					case "h":
						return b ? "ena ura" : "eno uro";
					case "hh":
						return d += 1 === a ? "ura" : 2 === a ? "uri" : 3 === a || 4 === a ? "ure" : "ur";
					case "dd":
						return d += 1 === a ? "dan" : "dni";
					case "MM":
						return d += 1 === a ? "mesec" : 2 === a ? "meseca" : 3 === a || 4 === a ? "mesece" : "mesecev";
					case "yy":
						return d += 1 === a ? "leto" : 2 === a ? "leti" : 3 === a || 4 === a ? "leta" : "let" } } return a.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function() { switch (this.day()) {
							case 0:
								return "[v] [nedeljo] [ob] LT";
							case 3:
								return "[v] [sredo] [ob] LT";
							case 6:
								return "[v] [soboto] [ob] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[v] dddd [ob] LT" } }, lastDay: "[včeraj ob] LT", lastWeek: function() { switch (this.day()) {
							case 0:
							case 3:
							case 6:
								return "[prejšnja] dddd [ob] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[prejšnji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "%s nazaj", s: "nekaj sekund", m: b, mm: b, h: b, hh: b, d: "en dan", dd: b, M: "en mesec", MM: b, y: "eno leto", yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), meridiemParse: /PD|MD/, isPM: function(a) { return "M" === a.charAt(0) }, meridiem: function(a) { return 12 > a ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { var b = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function(a, b) { return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2] }, translate: function(a, c, d) { var e = b.words[d]; return 1 === d.length ? c ? e[0] : e[1] : a + " " + b.correctGrammaticalCase(a, e) } }; return a.defineLocale("sr-cyrl", { months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."], weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."], weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"], longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function() { switch (this.day()) {
							case 0:
								return "[у] [недељу] [у] LT";
							case 3:
								return "[у] [среду] [у] LT";
							case 6:
								return "[у] [суботу] [у] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[у] dddd [у] LT" } }, lastDay: "[јуче у] LT", lastWeek: function() { var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"]; return a[this.day()] }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: b.translate, mm: b.translate, h: b.translate, hh: b.translate, d: "дан", dd: b.translate, M: "месец", MM: b.translate, y: "годину", yy: b.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { var b = { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(a, b) { return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2] }, translate: function(a, c, d) { var e = b.words[d]; return 1 === d.length ? c ? e[0] : e[1] : a + " " + b.correctGrammaticalCase(a, e) } }; return a.defineLocale("sr", { months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."], weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."], weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"], longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
							case 0:
								return "[u] [nedelju] [u] LT";
							case 3:
								return "[u] [sredu] [u] LT";
							case 6:
								return "[u] [subotu] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT" } }, lastDay: "[juče u] LT", lastWeek: function() { var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"]; return a[this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: b.translate, mm: b.translate, h: b.translate, hh: b.translate, d: "dan", dd: b.translate, M: "mesec", MM: b.translate, y: "godinu", yy: b.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "dddd LT", lastWeek: "[Förra] dddd[en] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}(e|a)/, ordinal: function(a) { var b = a % 10,
						c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e"; return a + c }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, ordinalParse: /\d{1,2}வது/, ordinal: function(a) { return a + "வது" }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function(a) { return 2 > a ? " யாமம்" : 6 > a ? " வைகறை" : 10 > a ? " காலை" : 14 > a ? " நண்பகல்" : 18 > a ? " எற்பாடு" : 22 > a ? " மாலை" : " யாமம்" }, meridiemHour: function(a, b) { return 12 === a && (a = 0), "யாமம்" === b ? 2 > a ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12 }, week: { dow: 0, doy: 6 } }) }),
		function(a) { a(vb) }(function(a) {
			return a.defineLocale("th", {
				months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
				monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
				weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
				weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
				weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
				longDateFormat: { LT: "H นาฬิกา m นาที", LTS: "LT s วินาที", L: "YYYY/MM/DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา LT", LLLL: "วันddddที่ D MMMM YYYY เวลา LT" },
				meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
				isPM: function(a) {
					return "หลังเที่ยง" === a
				},
				meridiem: function(a) { return 12 > a ? "ก่อนเที่ยง" : "หลังเที่ยง" },
				calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" },
				relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }
			})
		}),
		function(a) { a(vb) }(function(a) { return a.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM DD, YYYY LT" }, calendar: { sameDay: "[Ngayon sa] LT", nextDay: "[Bukas sa] LT", nextWeek: "dddd [sa] LT", lastDay: "[Kahapon sa] LT", lastWeek: "dddd [huling linggo] LT", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, ordinalParse: /\d{1,2}/, ordinal: function(a) { return a }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { var b = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" }; return a.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function(a) { if (0 === a) return a + "'ıncı"; var c = a % 10,
						d = a % 100 - c,
						e = a >= 100 ? 100 : null; return a + (b[c] || b[d] || b[e]) }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } }) }),
		function(a) { a(vb) }(function(a) {
			function b(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2] }

			function c(a, c, d) { var e = { mm: "хвилина_хвилини_хвилин", hh: "година_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }; return "m" === d ? c ? "хвилина" : "хвилину" : "h" === d ? c ? "година" : "годину" : a + " " + b(e[d], +a) }

			function d(a, b) { var c = { nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_") },
					d = /D[oD]? *MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] }

			function e(a, b) { var c = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") },
					d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative"; return c[d][a.day()] }

			function f(a) { return function() { return a + "о" + (11 === this.hours() ? "б" : "") + "] LT" } } return a.defineLocale("uk", { months: d, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: e, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., LT", LLLL: "dddd, D MMMM YYYY р., LT" }, calendar: { sameDay: f("[Сьогодні "), nextDay: f("[Завтра "), lastDay: f("[Вчора "), nextWeek: f("[У] dddd ["), lastWeek: function() { switch (this.day()) {
							case 0:
							case 3:
							case 5:
							case 6:
								return f("[Минулої] dddd [").call(this);
							case 1:
							case 2:
							case 4:
								return f("[Минулого] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: c, mm: c, h: "годину", hh: c, d: "день", dd: c, M: "місяць", MM: c, y: "рік", yy: c }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function(a) { return /^(дня|вечора)$/.test(a) }, meridiem: function(a) { return 4 > a ? "ночі" : 12 > a ? "ранку" : 17 > a ? "дня" : "вечора" }, ordinalParse: /\d{1,2}-(й|го)/, ordinal: function(a, b) { switch (b) {
						case "M":
						case "d":
						case "DDD":
						case "w":
						case "W":
							return a + "-й";
						case "D":
							return a + "-го";
						default:
							return a } }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("uz", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "D MMMM YYYY, dddd LT" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY LT", LLLL: "dddd, D MMMM [năm] YYYY LT", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, ordinalParse: /\d{1,2}/, ordinal: function(a) { return a }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah点mm", LTS: "Ah点m分s秒", L: "YYYY-MM-DD", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日LT", LLLL: "YYYY年MMMD日ddddLT", l: "YYYY-MM-DD", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日LT", llll: "YYYY年MMMD日ddddLT" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function(a, b) { return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12 }, meridiem: function(a, b) { var c = 100 * a + b; return 600 > c ? "凌晨" : 900 > c ? "早上" : 1130 > c ? "上午" : 1230 > c ? "中午" : 1800 > c ? "下午" : "晚上" }, calendar: { sameDay: function() { return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT" }, nextDay: function() { return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT" }, lastDay: function() { return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT" }, nextWeek: function() { var b, c; return b = a().startOf("week"), c = this.unix() - b.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm" }, lastWeek: function() { var b, c; return b = a().startOf("week"), c = this.unix() < b.unix() ? "[上]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm" }, sameElse: "LL" }, ordinalParse: /\d{1,2}(日|月|周)/, ordinal: function(a, b) { switch (b) {
						case "d":
						case "D":
						case "DDD":
							return a + "日";
						case "M":
							return a + "月";
						case "w":
						case "W":
							return a + "周";
						default:
							return a } }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1分钟", mm: "%d分钟", h: "1小时", hh: "%d小时", d: "1天", dd: "%d天", M: "1个月", MM: "%d个月", y: "1年", yy: "%d年" }, week: { dow: 1, doy: 4 } }) }),
		function(a) { a(vb) }(function(a) { return a.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah點mm", LTS: "Ah點m分s秒", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日LT", LLLL: "YYYY年MMMD日ddddLT", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日LT", llll: "YYYY年MMMD日ddddLT" }, meridiemParse: /早上|上午|中午|下午|晚上/, meridiemHour: function(a, b) { return 12 === a && (a = 0), "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0 }, meridiem: function(a, b) { var c = 100 * a + b; return 900 > c ? "早上" : 1130 > c ? "上午" : 1230 > c ? "中午" : 1800 > c ? "下午" : "晚上" }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, ordinalParse: /\d{1,2}(日|月|週)/, ordinal: function(a, b) { switch (b) {
						case "d":
						case "D":
						case "DDD":
							return a + "日";
						case "M":
							return a + "月";
						case "w":
						case "W":
							return a + "週";
						default:
							return a } }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d分鐘", h: "一小時", hh: "%d小時", d: "一天", dd: "%d天", M: "一個月", MM: "%d個月", y: "一年", yy: "%d年" } }) }), vb.locale("en"), Lb ? module.exports = vb : "function" == typeof define && define.amd ? (define(function(a, b, c) { return c.config && c.config() && c.config().noGlobal === !0 && (zb.moment = wb), vb }), ub(!0)) : ub()
}).call(this);











! function(a, b) { "use strict"; if ("function" == typeof define && define.amd) define(["jquery", "moment"], b);
	else if ("object" == typeof exports) b(require("jquery"), require("moment"));
	else { if (!jQuery) throw new Error("bootstrap-datetimepicker requires jQuery to be loaded first"); if (!moment) throw new Error("bootstrap-datetimepicker requires moment.js to be loaded first");
		b(a.jQuery, moment) } }(this, function(a, b) { "use strict"; if ("undefined" == typeof b) throw new Error("momentjs is required"); var c = 0,
		d = function(d, e) { var f, g = a.fn.datetimepicker.defaults,
				h = { time: "glyphicon glyphicon-time", date: "glyphicon glyphicon-calendar", up: "glyphicon glyphicon-chevron-up", down: "glyphicon glyphicon-chevron-down" },
				i = this,
				j = !1,
				k = function() { var f, j, k = !1; if (i.options = a.extend({}, g, e), i.options.icons = a.extend({}, h, i.options.icons), i.element = a(d), m(), !i.options.pickTime && !i.options.pickDate) throw new Error("Must choose at least one picker"); if (i.id = c++, b.locale(i.options.language), i.date = b(), i.unset = !1, i.isInput = i.element.is("input"), i.component = !1, i.element.hasClass("input-group") && (i.component = i.element.find(0 === i.element.find(".datepickerbutton").size() ? '[class^="input-group-"]' : ".datepickerbutton")), i.format = i.options.format, f = b().localeData(), i.format || (i.format = i.options.pickDate ? f.longDateFormat("L") : "", i.options.pickDate && i.options.pickTime && (i.format += " "), i.format += i.options.pickTime ? f.longDateFormat("LT") : "", i.options.useSeconds && (-1 !== f.longDateFormat("LT").indexOf(" A") ? i.format = i.format.split(" A")[0] + ":ss A" : i.format += ":ss")), i.use24hours = i.format.toLowerCase().indexOf("a") < 0 && i.format.indexOf("h") < 0, i.component && (k = i.component.find("span")), i.options.pickTime && k && k.addClass(i.options.icons.time), i.options.pickDate && k && (k.removeClass(i.options.icons.time), k.addClass(i.options.icons.date)), i.options.widgetParent = "string" == typeof i.options.widgetParent && i.options.widgetParent || i.element.parents().filter(function() { return "scroll" === a(this).css("overflow-y") }).get(0) || "body", i.widget = a(Q()).appendTo(i.options.widgetParent), i.minViewMode = i.options.minViewMode || 0, "string" == typeof i.minViewMode) switch (i.minViewMode) {
						case "months":
							i.minViewMode = 1; break;
						case "years":
							i.minViewMode = 2; break;
						default:
							i.minViewMode = 0 }
					if (i.viewMode = i.options.viewMode || 0, "string" == typeof i.viewMode) switch (i.viewMode) {
						case "months":
							i.viewMode = 1; break;
						case "years":
							i.viewMode = 2; break;
						default:
							i.viewMode = 0 } i.viewMode = Math.max(i.viewMode, i.minViewMode), i.options.disabledDates = O(i.options.disabledDates), i.options.enabledDates = O(i.options.enabledDates), i.startViewMode = i.viewMode, i.setMinDate(i.options.minDate), i.setMaxDate(i.options.maxDate), r(), s(), u(), v(), w(), q(), E(), l().prop("disabled") || F(), "" !== i.options.defaultDate && "" === l().val() && i.setValue(i.options.defaultDate), 1 !== i.options.minuteStepping && (j = i.options.minuteStepping, i.date.minutes(Math.round(i.date.minutes() / j) * j % 60).seconds(0)) },
				l = function() { var a; if (i.isInput) return i.element; if (a = i.element.find(".datepickerinput"), 0 === a.size()) a = i.element.find("input");
					else if (!a.is("input")) throw new Error('CSS class "datepickerinput" cannot be applied to non input element'); return a },
				m = function() { var a;
					a = i.element.is("input") ? i.element.data() : i.element.find("input").data(), void 0 !== a.dateFormat && (i.options.format = a.dateFormat), void 0 !== a.datePickdate && (i.options.pickDate = a.datePickdate), void 0 !== a.datePicktime && (i.options.pickTime = a.datePicktime), void 0 !== a.dateUseminutes && (i.options.useMinutes = a.dateUseminutes), void 0 !== a.dateUseseconds && (i.options.useSeconds = a.dateUseseconds), void 0 !== a.dateUsecurrent && (i.options.useCurrent = a.dateUsecurrent), void 0 !== a.calendarWeeks && (i.options.calendarWeeks = a.calendarWeeks), void 0 !== a.dateMinutestepping && (i.options.minuteStepping = a.dateMinutestepping), void 0 !== a.dateMindate && (i.options.minDate = a.dateMindate), void 0 !== a.dateMaxdate && (i.options.maxDate = a.dateMaxdate), void 0 !== a.dateShowtoday && (i.options.showToday = a.dateShowtoday), void 0 !== a.dateCollapse && (i.options.collapse = a.dateCollapse), void 0 !== a.dateLanguage && (i.options.language = a.dateLanguage), void 0 !== a.dateDefaultdate && (i.options.defaultDate = a.dateDefaultdate), void 0 !== a.dateDisableddates && (i.options.disabledDates = a.dateDisableddates), void 0 !== a.dateEnableddates && (i.options.enabledDates = a.dateEnableddates), void 0 !== a.dateIcons && (i.options.icons = a.dateIcons), void 0 !== a.dateUsestrict && (i.options.useStrict = a.dateUsestrict), void 0 !== a.dateDirection && (i.options.direction = a.dateDirection), void 0 !== a.dateSidebyside && (i.options.sideBySide = a.dateSidebyside), void 0 !== a.dateDaysofweekdisabled && (i.options.daysOfWeekDisabled = a.dateDaysofweekdisabled) },
				n = function() { var b, c = "absolute",
						d = i.component ? i.component.offset() : i.element.offset(),
						e = a(window);
					i.width = i.component ? i.component.outerWidth() : i.element.outerWidth(), d.top = d.top + i.element.outerHeight(), "up" === i.options.direction ? b = "top" : "bottom" === i.options.direction ? b = "bottom" : "auto" === i.options.direction && (b = d.top + i.widget.height() > e.height() + e.scrollTop() && i.widget.height() + i.element.outerHeight() < d.top ? "top" : "bottom"), "top" === b ? (d.bottom = e.height() - d.top + i.element.outerHeight() + 3, i.widget.addClass("top").removeClass("bottom")) : (d.top += 1, i.widget.addClass("bottom").removeClass("top")), void 0 !== i.options.width && i.widget.width(i.options.width), "left" === i.options.orientation && (i.widget.addClass("left-oriented"), d.left = d.left - i.widget.width() + 20), J() && (c = "fixed", d.top -= e.scrollTop(), d.left -= e.scrollLeft()), e.width() < d.left + i.widget.outerWidth() ? (d.right = e.width() - d.left - i.width, d.left = "auto", i.widget.addClass("pull-right")) : (d.right = "auto", i.widget.removeClass("pull-right")), i.widget.css("top" === b ? { position: c, bottom: d.bottom, top: "auto", left: d.left, right: d.right } : { position: c, top: d.top, bottom: "auto", left: d.left, right: d.right }) },
				o = function(a, c) {
					(!b(i.date).isSame(b(a)) || j) && (j = !1, i.element.trigger({ type: "dp.change", date: b(i.date), oldDate: b(a) }), "change" !== c && i.element.change()) },
				p = function(a) { j = !0, i.element.trigger({ type: "dp.error", date: b(a, i.format, i.options.useStrict) }) },
				q = function(a) { b.locale(i.options.language); var c = a;
					c || (c = l().val(), c && (i.date = b(c, i.format, i.options.useStrict)), i.date || (i.date = b())), i.viewDate = b(i.date).startOf("month"), t(), x() },
				r = function() { b.locale(i.options.language); var c, d = a("<tr>"),
						e = b.weekdaysMin(); if (i.options.calendarWeeks === !0 && d.append('<th class="cw">#</th>'), 0 === b().localeData()._week.dow)
						for (c = 0; 7 > c; c++) d.append('<th class="dow">' + e[c] + "</th>");
					else
						for (c = 1; 8 > c; c++) d.append(7 === c ? '<th class="dow">' + e[0] + "</th>" : '<th class="dow">' + e[c] + "</th>");
					i.widget.find(".datepicker-days thead").append(d) },
				s = function() { b.locale(i.options.language); var a, c = "",
						d = b.monthsShort(); for (a = 0; 12 > a; a++) c += '<span class="month">' + d[a] + "</span>";
					i.widget.find(".datepicker-months td").append(c) },
				t = function() { if (i.options.pickDate) { b.locale(i.options.language); var c, d, e, f, g, h, j, k, l, m = i.viewDate.year(),
							n = i.viewDate.month(),
							o = i.options.minDate.year(),
							p = i.options.minDate.month(),
							q = i.options.maxDate.year(),
							r = i.options.maxDate.month(),
							s = [],
							t = b.months(); for (i.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), i.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), i.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), i.widget.find(".datepicker-days th:eq(1)").text(t[n] + " " + m), d = b(i.viewDate, i.format, i.options.useStrict).subtract(1, "months"), j = d.daysInMonth(), d.date(j).startOf("week"), (m === o && p >= n || o > m) && i.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (m === q && n >= r || m > q) && i.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), e = b(d).add(42, "d"); d.isBefore(e);) { if (d.weekday() === b().startOf("week").weekday() && (f = a("<tr>"), s.push(f), i.options.calendarWeeks === !0 && f.append('<td class="cw">' + d.week() + "</td>")), g = "", d.year() < m || d.year() === m && d.month() < n ? g += " old" : (d.year() > m || d.year() === m && d.month() > n) && (g += " new"), d.isSame(b({ y: i.date.year(), M: i.date.month(), d: i.date.date() })) && (g += " active"), (M(d, "day") || !N(d)) && (g += " disabled"), i.options.showToday === !0 && d.isSame(b(), "day") && (g += " today"), i.options.daysOfWeekDisabled)
								for (h = 0; h < i.options.daysOfWeekDisabled.length; h++)
									if (d.day() === i.options.daysOfWeekDisabled[h]) { g += " disabled"; break }
							f.append('<td class="day' + g + '">' + d.date() + "</td>"), c = d.date(), d.add(1, "d"), c === d.date() && d.add(1, "d") } for (i.widget.find(".datepicker-days tbody").empty().append(s), l = i.date.year(), t = i.widget.find(".datepicker-months").find("th:eq(1)").text(m).end().find("span").removeClass("active"), l === m && t.eq(i.date.month()).addClass("active"), o > m - 1 && i.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), m + 1 > q && i.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), h = 0; 12 > h; h++) m === o && p > h || o > m ? a(t[h]).addClass("disabled") : (m === q && h > r || m > q) && a(t[h]).addClass("disabled"); for (s = "", m = 10 * parseInt(m / 10, 10), k = i.widget.find(".datepicker-years").find("th:eq(1)").text(m + "-" + (m + 9)).parents("table").find("td"), i.widget.find(".datepicker-years").find("th").removeClass("disabled"), o > m && i.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), m + 9 > q && i.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), m -= 1, h = -1; 11 > h; h++) s += '<span class="year' + (-1 === h || 10 === h ? " old" : "") + (l === m ? " active" : "") + (o > m || m > q ? " disabled" : "") + '">' + m + "</span>", m += 1;
						k.html(s) } },
				u = function() { b.locale(i.options.language); var a, c, d, e = i.widget.find(".timepicker .timepicker-hours table"),
						f = ""; if (e.parent().hide(), i.use24hours)
						for (a = 0, c = 0; 6 > c; c += 1) { for (f += "<tr>", d = 0; 4 > d; d += 1) f += '<td class="hour">' + P(a.toString()) + "</td>", a++;
							f += "</tr>" } else
							for (a = 1, c = 0; 3 > c; c += 1) { for (f += "<tr>", d = 0; 4 > d; d += 1) f += '<td class="hour">' + P(a.toString()) + "</td>", a++;
								f += "</tr>" } e.html(f) },
				v = function() { var a, b, c = i.widget.find(".timepicker .timepicker-minutes table"),
						d = "",
						e = 0,
						f = i.options.minuteStepping; for (c.parent().hide(), 1 === f && (f = 5), a = 0; a < Math.ceil(60 / f / 4); a++) { for (d += "<tr>", b = 0; 4 > b; b += 1) 60 > e ? (d += '<td class="minute">' + P(e.toString()) + "</td>", e += f) : d += "<td></td>";
						d += "</tr>" } c.html(d) },
				w = function() { var a, b, c = i.widget.find(".timepicker .timepicker-seconds table"),
						d = "",
						e = 0; for (c.parent().hide(), a = 0; 3 > a; a++) { for (d += "<tr>", b = 0; 4 > b; b += 1) d += '<td class="second">' + P(e.toString()) + "</td>", e += 5;
						d += "</tr>" } c.html(d) },
				x = function() { if (i.date) { var a = i.widget.find(".timepicker span[data-time-component]"),
							b = i.date.hours(),
							c = i.date.format("A");
						i.use24hours || (0 === b ? b = 12 : 12 !== b && (b %= 12), i.widget.find(".timepicker [data-action=togglePeriod]").text(c)), a.filter("[data-time-component=hours]").text(P(b)), a.filter("[data-time-component=minutes]").text(P(i.date.minutes())), a.filter("[data-time-component=seconds]").text(P(i.date.second())) } },
				y = function(c) { c.stopPropagation(), c.preventDefault(), i.unset = !1; var d, e, f, g, h = a(c.target).closest("span, td, th"),
						j = b(i.date); if (1 === h.length && !h.is(".disabled")) switch (h[0].nodeName.toLowerCase()) {
						case "th":
							switch (h[0].className) {
								case "picker-switch":
									E(1); break;
								case "prev":
								case "next":
									f = R.modes[i.viewMode].navStep, "prev" === h[0].className && (f = -1 * f), i.viewDate.add(f, R.modes[i.viewMode].navFnc), t() } break;
						case "span":
							h.is(".month") ? (d = h.parent().find("span").index(h), i.viewDate.month(d)) : (e = parseInt(h.text(), 10) || 0, i.viewDate.year(e)), i.viewMode === i.minViewMode && (i.date = b({ y: i.viewDate.year(), M: i.viewDate.month(), d: i.viewDate.date(), h: i.date.hours(), m: i.date.minutes(), s: i.date.seconds() }), K(), o(j, c.type)), E(-1), t(); break;
						case "td":
							h.is(".day") && (g = parseInt(h.text(), 10) || 1, d = i.viewDate.month(), e = i.viewDate.year(), h.is(".old") ? 0 === d ? (d = 11, e -= 1) : d -= 1 : h.is(".new") && (11 === d ? (d = 0, e += 1) : d += 1), i.date = b({ y: e, M: d, d: g, h: i.date.hours(), m: i.date.minutes(), s: i.date.seconds() }), i.viewDate = b({ y: e, M: d, d: Math.min(28, g) }), t(), K(), o(j, c.type)) } },
				z = { incrementHours: function() { L("add", "hours", 1) }, incrementMinutes: function() { L("add", "minutes", i.options.minuteStepping) }, incrementSeconds: function() { L("add", "seconds", 1) }, decrementHours: function() { L("subtract", "hours", 1) }, decrementMinutes: function() { L("subtract", "minutes", i.options.minuteStepping) }, decrementSeconds: function() { L("subtract", "seconds", 1) }, togglePeriod: function() { var a = i.date.hours();
						a >= 12 ? a -= 12 : a += 12, i.date.hours(a) }, showPicker: function() { i.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), i.widget.find(".timepicker .timepicker-picker").show() }, showHours: function() { i.widget.find(".timepicker .timepicker-picker").hide(), i.widget.find(".timepicker .timepicker-hours").show() }, showMinutes: function() { i.widget.find(".timepicker .timepicker-picker").hide(), i.widget.find(".timepicker .timepicker-minutes").show() }, showSeconds: function() { i.widget.find(".timepicker .timepicker-picker").hide(), i.widget.find(".timepicker .timepicker-seconds").show() }, selectHour: function(b) { var c = parseInt(a(b.target).text(), 10);
						i.use24hours || (i.date.hours() >= 12 ? 12 !== c && (c += 12) : 12 === c && (c = 0)), i.date.hours(c), z.showPicker.call(i) }, selectMinute: function(b) { i.date.minutes(parseInt(a(b.target).text(), 10)), z.showPicker.call(i) }, selectSecond: function(b) { i.date.seconds(parseInt(a(b.target).text(), 10)), z.showPicker.call(i) } },
				A = function(c) { var d = b(i.date),
						e = a(c.currentTarget).data("action"),
						f = z[e].apply(i, arguments); return B(c), i.date || (i.date = b({ y: 1970 })), K(), x(), o(d, c.type), f },
				B = function(a) { a.stopPropagation(), a.preventDefault() },
				C = function(a) { 27 === a.keyCode && i.hide() },
				D = function(c) { b.locale(i.options.language); var d = a(c.target),
						e = b(i.date),
						f = b(d.val(), i.format, i.options.useStrict);
					f.isValid() && !M(f) && N(f) ? (q(), i.setValue(f), o(e, c.type), K()) : (i.viewDate = e, i.unset = !0, o(e, c.type), p(f)) },
				E = function(a) { a && (i.viewMode = Math.max(i.minViewMode, Math.min(2, i.viewMode + a))), i.widget.find(".datepicker > div").hide().filter(".datepicker-" + R.modes[i.viewMode].clsName).show() },
				F = function() { var b, c, d, e, f;
					i.widget.on("click", ".datepicker *", a.proxy(y, this)), i.widget.on("click", "[data-action]", a.proxy(A, this)), i.widget.on("mousedown", a.proxy(B, this)), i.element.on("keydown", a.proxy(C, this)), i.options.pickDate && i.options.pickTime && i.widget.on("click.togglePicker", ".accordion-toggle", function(g) { if (g.stopPropagation(), b = a(this), c = b.closest("ul"), d = c.find(".in"), e = c.find(".collapse:not(.in)"), d && d.length) { if (f = d.data("collapse"), f && f.transitioning) return;
							d.collapse("hide"), e.collapse("show"), b.find("span").toggleClass(i.options.icons.time + " " + i.options.icons.date), i.component && i.component.find("span").toggleClass(i.options.icons.time + " " + i.options.icons.date) } }), i.isInput ? i.element.on({ click: a.proxy(i.show, this), focus: a.proxy(i.show, this), change: a.proxy(D, this), blur: a.proxy(i.hide, this) }) : (i.element.on({ change: a.proxy(D, this) }, "input"), i.component ? (i.component.on("click", a.proxy(i.show, this)), i.component.on("mousedown", a.proxy(B, this))) : i.element.on("click", a.proxy(i.show, this))) },
				G = function() { a(window).on("resize.datetimepicker" + i.id, a.proxy(n, this)), i.isInput || a(document).on("mousedown.datetimepicker" + i.id, a.proxy(i.hide, this)) },
				H = function() { i.widget.off("click", ".datepicker *", i.click), i.widget.off("click", "[data-action]"), i.widget.off("mousedown", i.stopEvent), i.options.pickDate && i.options.pickTime && i.widget.off("click.togglePicker"), i.isInput ? i.element.off({ focus: i.show, change: D, click: i.show, blur: i.hide }) : (i.element.off({ change: D }, "input"), i.component ? (i.component.off("click", i.show), i.component.off("mousedown", i.stopEvent)) : i.element.off("click", i.show)) },
				I = function() { a(window).off("resize.datetimepicker" + i.id), i.isInput || a(document).off("mousedown.datetimepicker" + i.id) },
				J = function() { if (i.element) { var b, c = i.element.parents(),
							d = !1; for (b = 0; b < c.length; b++)
							if ("fixed" === a(c[b]).css("position")) { d = !0; break }
						return d } return !1 },
				K = function() { b.locale(i.options.language); var a = "";
					i.unset || (a = b(i.date).format(i.format)), l().val(a), i.element.data("date", a), i.options.pickTime || i.hide() },
				L = function(a, c, d) { b.locale(i.options.language); var e; return "add" === a ? (e = b(i.date), 23 === e.hours() && e.add(d, c), e.add(d, c)) : e = b(i.date).subtract(d, c), M(b(e.subtract(d, c))) || M(e) ? void p(e.format(i.format)) : ("add" === a ? i.date.add(d, c) : i.date.subtract(d, c), void(i.unset = !1)) },
				M = function(a, c) { b.locale(i.options.language); var d = b(i.options.maxDate, i.format, i.options.useStrict),
						e = b(i.options.minDate, i.format, i.options.useStrict); return c && (d = d.endOf(c), e = e.startOf(c)), a.isAfter(d) || a.isBefore(e) ? !0 : i.options.disabledDates === !1 ? !1 : i.options.disabledDates[a.format("YYYY-MM-DD")] === !0 },
				N = function(a) { return b.locale(i.options.language), i.options.enabledDates === !1 ? !0 : i.options.enabledDates[a.format("YYYY-MM-DD")] === !0 },
				O = function(a) { var c, d = {},
						e = 0; for (c = 0; c < a.length; c++) f = b.isMoment(a[c]) || a[c] instanceof Date ? b(a[c]) : b(a[c], i.format, i.options.useStrict), f.isValid() && (d[f.format("YYYY-MM-DD")] = !0, e++); return e > 0 ? d : !1 },
				P = function(a) { return a = a.toString(), a.length >= 2 ? a : "0" + a },
				Q = function() { var a = '<thead><tr><th class="prev">&lsaquo;</th><th colspan="' + (i.options.calendarWeeks ? "6" : "5") + '" class="picker-switch"></th><th class="next">&rsaquo;</th></tr></thead>',
						b = '<tbody><tr><td colspan="' + (i.options.calendarWeeks ? "8" : "7") + '"></td></tr></tbody>',
						c = '<div class="datepicker-days"><table class="table-condensed">' + a + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + a + b + '</table></div><div class="datepicker-years"><table class="table-condensed">' + a + b + "</table></div>",
						d = ""; return i.options.pickDate && i.options.pickTime ? (d = '<div class="bootstrap-datetimepicker-widget' + (i.options.sideBySide ? " timepicker-sbs" : "") + (i.use24hours ? " usetwentyfour" : "") + ' dropdown-menu" style="z-index:9999 !important;">', d += i.options.sideBySide ? '<div class="row"><div class="col-sm-6 datepicker">' + c + '</div><div class="col-sm-6 timepicker">' + S.getTemplate() + "</div></div>" : '<ul class="list-unstyled"><li' + (i.options.collapse ? ' class="collapse in"' : "") + '><div class="datepicker">' + c + '</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + i.options.icons.time + '"></span></a></li><li' + (i.options.collapse ? ' class="collapse"' : "") + '><div class="timepicker">' + S.getTemplate() + "</div></li></ul>", d += "</div>") : i.options.pickTime ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + S.getTemplate() + "</div></div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + c + "</div></div>" },
				R = { modes: [{ clsName: "days", navFnc: "month", navStep: 1 }, { clsName: "months", navFnc: "year", navStep: 1 }, { clsName: "years", navFnc: "year", navStep: 10 }] },
				S = { hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>', minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>', secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>' };
			S.getTemplate = function() { return '<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + i.options.icons.up + '"></span></a></td><td class="separator"></td><td>' + (i.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + i.options.icons.up + '"></span></a>' : "") + "</td>" + (i.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + i.options.icons.up + '"></span></a></td>' : "") + (i.use24hours ? "" : '<td class="separator"></td>') + "</tr><tr><td>" + S.hourTemplate + '</td> <td class="separator">:</td><td>' + (i.options.useMinutes ? S.minuteTemplate : '<span class="timepicker-minute">00</span>') + "</td> " + (i.options.useSeconds ? '<td class="separator">:</td><td>' + S.secondTemplate + "</td>" : "") + (i.use24hours ? "" : '<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') + '</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + i.options.icons.down + '"></span></a></td><td class="separator"></td><td>' + (i.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + i.options.icons.down + '"></span></a>' : "") + "</td>" + (i.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + i.options.icons.down + '"></span></a></td>' : "") + (i.use24hours ? "" : '<td class="separator"></td>') + '</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>' + (i.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : "") }, i.destroy = function() { H(), I(), i.widget.remove(), i.element.removeData("DateTimePicker"), i.component && i.component.removeData("DateTimePicker") }, i.show = function(a) { if (!l().prop("disabled")) { if (i.options.useCurrent && "" === l().val()) { if (1 !== i.options.minuteStepping) { var c = b(),
								d = i.options.minuteStepping;
							c.minutes(Math.round(c.minutes() / d) * d % 60).seconds(0), i.setValue(c.format(i.format)) } else i.setValue(b().format(i.format));
						o("", a.type) } a && "click" === a.type && i.isInput && i.widget.hasClass("picker-open") || (i.widget.hasClass("picker-open") ? (i.widget.hide(), i.widget.removeClass("picker-open")) : (i.widget.show(), i.widget.addClass("picker-open")), i.height = i.component ? i.component.outerHeight() : i.element.outerHeight(), n(), i.element.trigger({ type: "dp.show", date: b(i.date) }), G(), a && B(a)) } }, i.disable = function() { var a = l();
				a.prop("disabled") || (a.prop("disabled", !0), H()) }, i.enable = function() { var a = l();
				a.prop("disabled") && (a.prop("disabled", !1), F()) }, i.hide = function() { var a, c, d = i.widget.find(".collapse"); for (a = 0; a < d.length; a++)
					if (c = d.eq(a).data("collapse"), c && c.transitioning) return;
				i.widget.hide(), i.widget.removeClass("picker-open"), i.viewMode = i.startViewMode, E(), i.element.trigger({ type: "dp.hide", date: b(i.date) }), I() }, i.setValue = function(a) { b.locale(i.options.language), a ? i.unset = !1 : (i.unset = !0, K()), a = b.isMoment(a) ? a.locale(i.options.language) : a instanceof Date ? b(a) : b(a, i.format, i.options.useStrict), a.isValid() ? (i.date = a, K(), i.viewDate = b({ y: i.date.year(), M: i.date.month() }), t(), x()) : p(a) }, i.getDate = function() { return i.unset ? null : b(i.date) }, i.setDate = function(a) { var c = b(i.date);
				i.setValue(a ? a : null), o(c, "function") }, i.setDisabledDates = function(a) { i.options.disabledDates = O(a), i.viewDate && q() }, i.setEnabledDates = function(a) { i.options.enabledDates = O(a), i.viewDate && q() }, i.setMaxDate = function(a) { void 0 !== a && (i.options.maxDate = b.isMoment(a) || a instanceof Date ? b(a) : b(a, i.format, i.options.useStrict), i.viewDate && q()) }, i.setMinDate = function(a) { void 0 !== a && (i.options.minDate = b.isMoment(a) || a instanceof Date ? b(a) : b(a, i.format, i.options.useStrict), i.viewDate && q()) }, k() };
	a.fn.datetimepicker = function(b) { return this.each(function() { var c = a(this),
				e = c.data("DateTimePicker");
			e || c.data("DateTimePicker", new d(this, b)) }) }, a.fn.datetimepicker.defaults = { format: !1, pickDate: !0, pickTime: !0, useMinutes: !0, useSeconds: !1, useCurrent: !0, calendarWeeks: !1, minuteStepping: 1, minDate: b({ y: 1900 }), maxDate: b().add(100, "y"), showToday: !0, collapse: !0, language: b.locale(), defaultDate: "", disabledDates: !1, enabledDates: !1, icons: {}, useStrict: !1, direction: "auto", sideBySide: !1, daysOfWeekDisabled: [], widgetParent: !1 } });




$('#selectdecim, #datetimepicker2').change(function() { call_others(last_active); });

function call_others(function_name) { window["moneyConvert" + function_name](); }