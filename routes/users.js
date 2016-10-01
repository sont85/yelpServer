var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


var Yelp = require('yelp');


var yelp = new Yelp({
  consumer_key: 'f3QUycQWRm4VNcndvgot5A',
  consumer_secret: 'YlGH2jwxCOz2lTnVTxXO2iG_1Cs',
  token: 'omHR98Y6bidVzZ1gZEtDiPS1b6JdPILB',
  token_secret: 'ImSEHGZ_8mYg895YgrL2uhSMpyA',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business('yelp-san-francisco')
  .then(console.log)
  .catch(console.error);

yelp.phoneSearch({ phone: '+15555555555' })
  .then(console.log)
  .catch(console.error);

// A callback based API is also available:
yelp.business('yelp-san-francisco', function(err, data) {
  if (err) return console.log(error);
  console.log(data);
});
