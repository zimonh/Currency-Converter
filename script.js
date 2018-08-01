/* by: ZIMONH src: https://github.com/zimonh/randArray.js
License: https://creativecommons.org/licenses/by-nc-sa/4.0/ */
const	https = true,
   	access_key = '1234123imoim09k09k0923f2f09k';

let elements = '';

countries.map(v=>{
	elements += `
	<div class="sortable col-lg-4 col-md-6 col-xs-12">
		<div class="input-group">
			<span class="input-group-addon label"></span><span class="input-group-addon currencybutton" title="${v.title}" data-searchterm="${v.search}">${v.button}</span>
			<div class="input-group-lg"><input type="text" min="0" name="${v.name}" class="form-control inputnronly" placeholder="" step="1"/></div>
		</div>
	</div>`;});

$('#psP').html(elements);

let behindthecomma = 2, date, rates, inputs, url;

const convert = (countrycode = 'EUR')=>{
	//this is the input being filled. countrycode
	const value = inputs[countrycode].value,
		  euro  = value / rates[countrycode];
	//take the euro value and multiply it by the exchange rate
	for(let fields of inputs){

		const name = fields.name;
		if(name !== countrycode){
			const rate = rates[name],
				  product = euro * rate;
			inputs[name].value = product.toFixed(behindthecomma);
		}
	}
};


const exchange_rates = (recal, date = 'latest')=> {
	if(https === true){	url = '/grabber.php?!='+encodeURIComponent('data.fixer.io/' + date + '?base=EUR&access_key=');
	}else{				url = 'http://data.fixer.io/' + date + '?base=EUR&access_key=' + access_key;}

	fetch(url,{credentials: 'same-origin'})
	.then(response => response.json())
	.then(data => {
		rates = data.rates;
		if(recal) inputs.EUR.value = 1;
		convert();
	});


};

$(document).ready(function() {

	inputs = $('.inputnronly');

	for(let fields of inputs){
		const name = fields.name;
		inputs[name] = fields;}

	//First load
	exchange_rates(true);

	//set default
	$('#selectdecim').val(2);

	$('.loaderrr').removeClass("loaderrropacity");
	$('.inputnronly').css("pointerEvents", "auto");
	$('.inputnronly').css("cursor", "auto");
	$('.hideatpageload').removeClass("hideatpageload");
	$(function() { $('#psP').sortable({ helper: 'clone' });});


	$("#scrollgo").click(function(){$('html, body').animate({scrollTop: $('#searchgo').offset().top-30},1000);});


	$('#curencyfinder').keyup(function(){

		$('span.currencybutton').removeClass( "myClass" );
		$('span.currencybutton').removeAttr('id', 'searchgo');

		const find = $('#curencyfinder').val();

		if(find !== ""){
			const re =  RegExp(find ,"i");

			$('span[title]').filter(function(){
			   return re.test(this.title);
			}).each(function(){
				$(this).addClass( "myClass" );
				$(this).attr('id', 'searchgo');
			});

			$('span[data-searchterm]').filter(function(){
			   return re.test(this.getAttribute('data-searchterm'));
			}).each(function(){
				$(this).addClass( "myClass" );
				$(this).attr('id', 'searchgo');
			});
		}
	});


	const bindDatePicker = ()=>{
		const f = "fa fa-";
		$(".date").datetimepicker({
		format:'YYYY-MM-DD',
			icons: {
				time: f+"clock-o",
				date: f+"calendar",
				up:   f+"arrow-up",
				down: f+"arrow-down"
			}
		}).find('input:first').on("blur",function () {
			// check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
			// update the format if it's yyyy-mm-dd
			let date = parseDate($(this).val());

			//create date based on momentjs (we have that)
			if(!isValidDate(date)) date = moment().format('YYYY-MM-DD');

			$(this).val(date);
		});
	};

	const isValidDate = (value, format)=>{
		format = format || false;
		// lets parse the date to the best of our knowledge
		if(format) value = parseDate(value);
		return isNaN(Date.parse(value)) === false;
	};

	const parseDate = value=>{
		const m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
		if (m) value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);
		return value;
	};

	bindDatePicker();


	/********************************** Triggers **************************************/
	$('.inputnronly').on('input', function() {
		const cur = $(this).attr('name');
		convert(cur);
	});

	$(".inputnronly").keydown(function(e) {
		//46 is del    8 backspace    9 is tab       27 is esc     13 enter
		if(
			$.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			(e.keyCode == 65 && e.ctrlKey === !0) ||
			(e.keyCode == 67 && e.ctrlKey === !0) ||
			(e.keyCode == 86 && e.ctrlKey === !0) ||
			(e.keyCode >= 35 && e.keyCode <= 39)
		){ return;}
		//48 is 1  57 is 9
		if((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)){
			e.preventDefault();}
	});

	$('.currencybutton').on('click', function() {
		$(this).parent().parent().parent().prepend($(this).parent().parent());
		$(this).addClass("yourClass");
	});
	$('#selectdecim').change(function() {
		//console.log('comma value changed');
		behindthecomma = $('#selectdecim').val();
		convert();
	});
	$('#datetimepicker1').on('dp.change', function(e) {
		//console.log('Date changed');
		date = $('#datetimepicker1').data('date');
		exchange_rates(false,date);
	});
});
