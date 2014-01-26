var methodrouter = require('../');

describe('methodrouter', function(){


	
  it('should be a object', function () {
    ('' + typeof(methodrouter)).should.equal('object');
  })

  it('should filter a post request', function (done) {
    
    var nexthit = false;
    var handler = methodrouter.get(function(req, res, next){
      res.send();
    })

    var req = {
      method:'POST'
    }

    var res = {
      send:function(val){

      }
    }

    var next = function(){
      done();
    }

    handler(req, res, next);
  })

  it('should hit a post request', function (done) {
    
    var nexthit = false;
    var handler = methodrouter.post(function(req, res, next){
      res.send('hello');
    })

    var req = {
      method:'POST'
    }

    var res = {
      send:function(val){
        val.should.equal('hello');
        done();
      }
    }

    handler(req, res, function(){
      throw new Error('should not happen');
    });
  })

  it('should return 404 if there is no next function', function (done) {
    
    var nexthit = false;
    var handler = methodrouter.get(function(req, res, next){
      
    })

    var req = {
      url:'/apples',
      method:'POST'
    }

    var res = {
      send:function(val){
        this.statusCode.should.equal(404);
        val.should.equal('/apples not found');
        done();
      }
    }

    handler(req, res);
  })

})


