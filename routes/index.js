var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




var json = [{
  "name": "andrew",
  "lastName": "Bird",
  "instrument": "violin"
  },
  {
  "name": "fiona",
  "lastName": "apple",
  "instrument": "singer"
  }
]

router.get('/jsonData', function(req, res, next){

  res.json(json)
})



module.exports = router;
