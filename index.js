function factory(method, handler){
  return function(req, res, next){
    if(req.method.toLowerCase()!=method){
      if(next){
        return next();  
      }
      else{
        res.statusCode = 404;
        return res.send(req.url + ' not found');
      }
      
    }
    handler(req, res, next);
  }
}

module.exports = {
  get:function(handler){
    return factory('get', handler);
  },
  post:function(handler){
    return factory('post', handler);
  },
  put:function(handler){
    return factory('put', handler);
  },
  del:function(handler){
    return factory('delete', handler);
  }
}