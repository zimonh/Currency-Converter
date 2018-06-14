<img src="https://github.com/zimonh/CurrencyConverter/blob/master/OGcoverCur.jpg">

## Setup

Get a API key at fixer.io
and in the __script.js__ change the:
```
access_key = '1f47ec7e6beadfec86dfbccdc0f731c7';
```

To run in __https__ you need __PHP__. It uses the __grabber.php__ to change the url into a secure one. 
If you dont have PHP or do not care about __https__ change the:
```
const fixerio = '/grabber.php?!=data.fixer.io/',
```
to:
```
const fixerio = 'http://data.fixer.io/',
```
