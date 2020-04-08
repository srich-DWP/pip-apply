const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Code supplied by Gary for dealing with query strings
router.use(function(req, res, next){
  Object.assign(res.locals,{
    postData: (req.body ? req.body : false)
  });

  Object.assign(res.locals,{
    getData: (req.query ? req.query : false)
  });

  next();
});


var path = require('path')

// Code for the list screen

router.get('/v1/list', (req, res, next) => {

  if (!req.session.sectionStatus){
    // console.log('no session');
    req.session.sectionStatus = {
      // cwyn: 'complete',
      aboutyou: undefined,
      aboutyourhealth: undefined,
      preparingfood: undefined
    }
  }
  
  if (req.query.aboutyou) {
    req.session.sectionStatus.aboutyou = req.query.aboutyou
  };
  if (req.query.aboutyourhealth) {
    req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
  };
  if (req.query.preparingfood) {
    req.session.sectionStatus.preparingfood = req.query.preparingfood
  };

  res.render('v1/list.html', {sectionStatus: req.session.sectionStatus});
});

// Clear data on the 'application cancelled' screen

router.get('/*/clear-v1', function (req, res) {
  req.session.destroy()
  res.render('v1/application-cancelled')
})