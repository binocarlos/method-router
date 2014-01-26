method-router
=============

Return a filter function for http-requests for get,post,put,delete - works well with routes-router

## usage

```
var methods = require('method-router');

var get = methods.post(function(req, res, next){
	// this will only happen for a get request
})

var post = methods.post(function(req, res, next){
	// this will only happen for a post request
})

```

## installation

```
$ npm install method-router
```

## license

MIT