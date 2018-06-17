<img src="https://github.com/zimonh/CurrencyConverter/blob/master/OGcoverCur.jpg">

## Setup
Get a API key at fixer.io
### If you can use PHP:
1. Create a __fixer_api.ini__ outside of you public folder and link it to the __'grabber.php'__.
```
parse_ini_file
```
2. Add the following line to the ini file.
```
access_key = 'your api key here'
```

### If you can't use PHP
1. Rename __'index.php'__ to __'index.html'__.
2. Remove the '<?php code  ?>' from the __'index.html'__.
3. Add your api key in the __script.js__ here:
```
access_key = '1f47ec7e6beadfec86dfbccdc0f731c7';
```
4. In the __script.js__ change the:
```
https = true,
```
to:
```
https = false,
```
