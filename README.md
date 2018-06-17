<img src="https://github.com/zimonh/CurrencyConverter/blob/master/OGcoverCur.jpg">

## Setup

1. Get a API key at fixer.io
2. If you can use PHP create a __fixer_api.ini__ outside of you public folder and link it to the __'grabber.php'__.
```
parse_ini_file
```
3. Add the following line to the ini file.
```
access_key = 'your api key here'
```

4. If you can't use PHP
Add your api key in the __script.js__ here:
```
access_key = '1f47ec7e6beadfec86dfbccdc0f731c7';
```

5. To run in __https__ you need __PHP__. It uses the __grabber.php__ to change the url into a secure one. 
6. So if you dont use PHP in the __script.js__ change the:
```
https = true,
```
to:
```
https = false,
```
