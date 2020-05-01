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
      aboutyourhealthprofessionals: undefined,
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
      additionalinformation: undefined,
      supportingevidence: undefined,
    }
  }
  
  if (req.query.aboutyou) {
    req.session.sectionStatus.aboutyou = req.query.aboutyou
  };
  if (req.query.aboutyourhealth) {
    req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
  };
  if (req.query.aboutyourhealthprofessionals) {
    req.session.sectionStatus.aboutyourhealthprofessionals = req.query.aboutyourhealthprofessionals
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
  if (req.query.managingtoiletneeds) {
    req.session.sectionStatus.managingtoiletneeds = req.query.managingtoiletneeds
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
  if (req.query.additionalinformation) {
    req.session.sectionStatus.additionalinformation = req.query.additionalinformation
  };
  if (req.query.supportingevidence) {
    req.session.sectionStatus.supportingevidence = req.query.supportingevidence
  };

  res.render('v1/list.html', {sectionStatus: req.session.sectionStatus});
});

// Clear data on the 'application cancelled' screen

router.get('/*/clear-v1', function (req, res) {
  req.session.destroy()
  res.render('v1/application-cancelled')
})


// Routes

router.get('/v1/about-your-health-professionals/another-answer', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('health-professional')
    } else {
      res.redirect('check')
    }
});

router.get('/v1/about-your-health-professionals/q-health-professional-answer', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('health-professional')
    } else {
      res.redirect('check')
    }
});


// Supporting evidence

router.get('/v1/supporting-evidence/supporting-evidence-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('interruption-screen')
    } else {
      res.redirect('../list?supportingevidence=completed')
    }
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-1-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-2')
    } else {
      res.redirect('../list?supportingevidence=completed')
    }
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-2-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-3')
    } else {
      res.redirect('../list?supportingevidence=completed')
    }
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-3-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-4')
    } else {
      res.redirect('../list?supportingevidence=completed')
    }
});


// Uploading screens

router.get('/v1/supporting-evidence/uploading-supporting-evidence-1', function(req, res) {
  res.render('v1/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1' });
});

router.get('/v1/supporting-evidence/uploading-supporting-evidence-2', function(req, res) {
  res.render('v1/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2' });
});

router.get('/v1/supporting-evidence/uploading-supporting-evidence-3', function(req, res) {
  res.render('v1/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3' });
});





// Check you answers variations

router.get('/v1/supporting-evidence/upload-cya', function(req, res) {
  res.render('v1/supporting-evidence/upload', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/uploading-cya', function(req, res) {
  res.render('v1/supporting-evidence/uploading', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/uploaded-1-cya', function(req, res) {
  res.render('v1/supporting-evidence/uploaded-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('interruption-screen-cya')
    } else {
      res.redirect('check')
    }
});

router.get('/v1/supporting-evidence/interruption-screen-cya', function(req, res) {
  res.render('v1/supporting-evidence/interruption-screen', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-upload-2-cya', function(req, res) {
  res.render('v1/supporting-evidence-upload-2', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/uploading-supporting-evidence-1-cya', function(req, res) {
  res.render('v1/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1', 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/uploading-supporting-evidence-2-cya', function(req, res) {
  res.render('v1/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2', 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/uploading-supporting-evidence-3-cya', function(req, res) {
  res.render('v1/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3', 'cya' : 'true' });
});


router.get('/v1/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-upload-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-upload-2', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-1-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-uploaded-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-2-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-uploaded-2', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-3-cya', function(req, res) {
  res.render('v1/supporting-evidence/supporting-evidence-uploaded-3', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-1-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-2-cya')
    } else {
      res.redirect('check')
    }
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-2-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-3-cya')
    } else {
      res.redirect('check')
    }
});

router.get('/v1/supporting-evidence/supporting-evidence-uploaded-3-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-4-cya')
    } else {
      res.redirect('check')
    }
});