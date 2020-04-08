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
      preparingfood: undefined,
      eatinganddrinking: undefined,
      managingtreatments: undefined,
      washingandbathing: undefined,
      managingtoiletneeds: undefined,
      dressingandundressing: undefined,
      communicating: undefined,
      reading: undefined,
      mixingwithotherpeople: undefined,
      makingdecisionsaboutmoney: undefined,
      goingout: undefined,
      movingaround: undefined,
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
  if (req.query.eatinganddrinking) {
    req.session.sectionStatus.eatinganddrinking = req.query.eatinganddrinking
  };
  if (req.query.managingtreatments) {
    req.session.sectionStatus.managingtreatments = req.query.managingtreatments
  };
  if (req.query.washingandbathing) {
    req.session.sectionStatus.washingandbathing = req.query.washingandbathing
  };
  if (req.query.dressingandundressing) {
    req.session.sectionStatus.dressingandundressing = req.query.dressingandundressing
  };
  if (req.query.communicating) {
    req.session.sectionStatus.communicating = req.query.communicating
  };
  if (req.query.reading) {
    req.session.sectionStatus.reading = req.query.reading
  };
  if (req.query.mixingwithotherpeople) {
    req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
  };
  if (req.query.makingdecisionsaboutmoney) {
    req.session.sectionStatus.makingdecisionsaboutmoney = req.query.makingdecisionsaboutmoney
  };
  if (req.query.goingout) {
    req.session.sectionStatus.goingout = req.query.goingout
  };
  if (req.query.movingaround) {
    req.session.sectionStatus.movingaround = req.query.movingaround
  };

  res.render('v1/list.html', {sectionStatus: req.session.sectionStatus});
});

// Clear data on the 'application cancelled' screen

router.get('/*/clear-v1', function (req, res) {
  req.session.destroy()
  res.render('v1/application-cancelled')
})