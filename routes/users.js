var userService = require('../service/userService');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  userService.allUserQueryService().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/search',function(req,res,next){
  if(req.query.searchbyemail){
    userService.userSearchService(req.query.searchbyemail)
    .then(function(data){
       res.json(data);
    })
    .catch(function(err){
      res.json(err);
    });
  }
});

router.post('/add',function(req,res,next){
    if(req.body){
      userService.addUserService(req.body)
      .then(function(data){
       res.json(data);
    })
    .catch(function(err){
      res.json(err);
    });
    }
});

module.exports = router;
