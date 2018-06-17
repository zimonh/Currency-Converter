<img src="https://github.com/zimonh/CurrencyConverter/blob/master/OGcoverCur.jpg">

## Setup

1. Get a API key at fixer.io
2. If you can use PHP:

- Create a __fixer_api.ini__ outside of you public folder and link it to the __'grabber.php'__.
```
parse_ini_file
```
- Add the following line to the ini file.
```
access_key = 'your api key here'
```

3. If you can't use PHP
- Rename __'index.php'__ to __'index.html'__.
- Remove the '<?php code  ?>' from the __'index.html'__.
- Add your api key in the __script.js__ here:
```
access_key = '1f47ec7e6beadfec86dfbccdc0f731c7';
```
- In the __script.js__ change the:
```
https = true,
```
to:
```
https = false,
```
