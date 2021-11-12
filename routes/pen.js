var express = require('express');
const pen_controlers= require('../controllers/pen');
var router = express.Router();

/* GET pen */

router.get('/', pen_controlers.pen_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pen', { title: 'Search for best pens' });
});

module.exports = router;

// GET request for one pen. 
router.get('/pen/:id', pen_controlers.pen_detail); 
 
