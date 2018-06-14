const
	https = true,
   	access_key = '1f47ec7e6beadfec86dfbccdc0f731c7',


	countries	=
	[{title: 'Euro',
	search: 'Andorra Austria Belgium Cyprus Estonia Finland France Germany Greece Ireland Italy Kosovo Latvia Luxembourg Malta Monaco Montenegro Netherlands Portugal San Marino Slovakia Slovenia Spain Vatican City',
	button: '€ EUR',
	name: 'EUR'},

	{title: 'United States Dollar',
	search: 'Commonwealth of Puerto Rico Ecuador Republic of El Salvador Republic of Zimbabwe Guam US and British Virgin Islands Democratic Republic of Timor-Leste American Samoa Commonwealth of the Northern Mariana Islands Federated States of Micronesia Republic of Palau',
	button: '$ USD',
	name: 'USD'},

	{title: 'China Yuan Renminbi',
	search: 'People\'s Republic of China',
	button: '￥ RMB',
	name: 'CNY'},

	{title: 'Australia Dollar',
	search: 'Australia Kiribati Naura Papua New Guinea Tonga Tuvalu',
	button: '$ AUD',
	name: 'AUD'},

	{title: 'Bulgarian Lev',
	search: 'Bulgaria',
	button: 'лв BGN',
	name: 'BGN'},

	{title: 'Brazilian Real',
	search: 'Brazil',
	button: 'R$ BRL',
	name: 'BRL'},

	{title: 'Canadian Dollar',
	search: '$ CAD Canada',
	button: '$ CAD',
	name: 'CAD'},

	{title: 'Swiss franc',
	search: 'CHF Switzerland Liechtenstein Campione d\'Italia',
	button: 'CHF',
	name: 'CHF'},

	{title: 'Czech koruna',
	search: 'Czech Republic',
	button: 'Kč CZK',
	name: 'CZK'},

	{title: 'Danish krone',
	search: 'Denmark Greenland Faroe Islands',
	button: 'kr DKK',
	name: 'DKK'},

	{title: 'Pound sterling',
	search: 'UK United Kingdom Guernsey Isle of Man Jersey',
	button: '£ GBP',
	name: 'GBP'},

	{title: 'Hong Kong dollar',
	search: 'Hong Kong',
	button: '$ HKD',
	name: 'HKD'},

	{title: 'Croatian kuna',
	search: 'Croatia',
	button: 'kn HRK',
	name: 'HRK'},

	{title: 'Hungarian forint',
	search: 'Hungary',
	button: 'Ft HUF',
	name: 'HUF'},

	{title: 'Indonesian rupiah',
	search: 'Indonesia',
	button: 'Rp IDR',
	name: 'IDR'},

	{title: 'Israeli new shekel',
	search: 'Israel Palestinian Authority',
	button: '₪ ILS',
	name: 'ILS'},

	{title: 'Indian rupee',
	search: 'India',
	button: 'INR',
	name: 'INR'},

	{title: 'Japanese yen',
	search: 'Japan',
	button: '¥ JPY',
	name: 'JPY'},

	{title: 'South Korean won',
	search: 'South Korea',
	button: '₩ KRW',
	name: 'KRW'},

	{title: 'Mexican peso',
	search: 'Mexico',
	button: '$ MXN',
	name: 'MXN'},

	{title: 'Malaysia ringgit',
	search: 'Malaysia',
	button: 'RM MYR',
	name: 'MYR'},

	{title: 'Norwegian krone',
	search: 'Norway',
	button: 'kr NOK',
	name: 'NOK'},

	{title: 'New Zealand Dollar',
	search: 'New Zealand',
	button: '$ NZD',
	name: 'NZD'},

	{title: 'Philippine peso',
	search: 'Philippines',
	button: '₱ PHP',
	name: 'PHP'},

	{title: 'Polish złoty',
	search: 'Poland',
	button: 'zł PLN',
	name: 'PLN'},

	{title: 'Romanian leu',
	search: 'Romania',
	button: 'lei RON',
	name: 'RON'},

	{title: 'Russian ruble',
	search: 'Russia',
	button: '₽ RUB',
	name: 'RUB'},

	{title: 'Swedish krona',
	search: 'Sweden',
	button: 'kr SEK',
	name: 'SEK'},

	{title: 'Singapore dollar',
	search: 'Singapore Brunei',
	button: '$ SGD',
	name: 'SGD'},

	{title: 'Thai baht',
	search: 'Thailand',
	button: '฿ THB',
	name: 'THB'},

	{title: 'Turkish lira',
	search: 'Turkey Northern Cyprus',
	button: '₺ TRY',
	name: 'TRY'},

	{title: 'South African rand',
	search: 'South Africa Lesotho Namibia Swaziland',
	button: 'R ZAR',
	name: 'ZAR'}];

let elements = '';

countries.map((v)=>{
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
	if(https === true){	url = '/grabber.php?!='+encodeURIComponent('data.fixer.io/' + date + '?base=EUR&access_key=' + access_key);
	}else{				url = 'http://data.fixer.io/' + date + '?base=EUR&access_key=' + access_key;}

	fetch(url)
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


	$('#curencyfinder').keyup(function() {

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
		$(".date").datetimepicker({
		format:'YYYY-MM-DD',
			icons: {
				time: "fa fa-clock-o",
				date: "fa fa-calendar",
				up: "fa fa-arrow-up",
				down: "fa fa-arrow-down"
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