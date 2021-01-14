module.exports = function (app) {

  // Code supplied by Gary for dealing with query strings
  app.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // var path = require('path')

  // Code for the list screen

  app.get('/r2/list', (req, res, next) => {

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

    res.render('r2/list.html', {sectionStatus: req.session.sectionStatus});
  });

  // Clear data on the 'application cancelled' screen

  app.get('/*/clear-r2', function (req, res) {
    req.session.destroy()
    res.render('r2/application-cancelled')
  })


  // Routes

  app.get('/r2/sign-in/answer-choice', function(req, res) {

    let question = req.session.data['question']

    if (question === 'pdf') {
        res.redirect('tactical-pdf')
      } else {
        res.redirect('intro-question')
      }
  });

  app.get('/r2/sign-in/intro-question-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('intro')
      } else {
        res.redirect('sign-in')
      }
  });

  app.get('/r2/about-your-health/another-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('condition-2')
      } else {
        res.redirect('check')
      }
  });

  app.get('/r2/about-your-health-professionals/another-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('health-professional-2')
      } else {
        res.redirect('check')
      }
  });

  app.get('/r2/about-your-health-professionals/q-health-professional-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('health-professional')
      } else {
        res.redirect('check')
      }
  });

  // Additional information

  app.get('/r2/additional-information/index-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('additional-information')
      } else {
        res.redirect('check')
      }
  });

  // Apply

  app.get('/r2/apply/pdf-answer', function(req, res) {

    let question = req.session.data['download']

    if (question === 'yes') {
        res.redirect('download')
      } else {
        res.redirect('confirmation')
      }
  });



  // Supporting evidence

  app.get('/r2/supporting-evidence/supporting-evidence-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('file-upload-help')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-1-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-2-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-3-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4')
      } else {
        res.redirect('../apply/declaration')
      }
  });


  // Uploading screens

  app.get('/r2/supporting-evidence/uploading-supporting-evidence-1', function(req, res) {
    res.render('r2/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1' });
  });

  app.get('/r2/supporting-evidence/uploading-supporting-evidence-2', function(req, res) {
    res.render('r2/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2' });
  });

  app.get('/r2/supporting-evidence/uploading-supporting-evidence-3', function(req, res) {
    res.render('r2/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3' });
  });





  // Check you answers variations

  app.get('/r2/supporting-evidence/upload-cya', function(req, res) {
    res.render('r2/supporting-evidence/upload', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/uploading-cya', function(req, res) {
    res.render('r2/supporting-evidence/uploading', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/uploaded-1-cya', function(req, res) {
    res.render('r2/supporting-evidence/uploaded-1', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('interruption-screen-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/r2/supporting-evidence/interruption-screen-cya', function(req, res) {
    res.render('r2/supporting-evidence/interruption-screen', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence-upload-2-cya', function(req, res) {
    res.render('r2/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/uploading-supporting-evidence-1-cya', function(req, res) {
    res.render('r2/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1', 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/uploading-supporting-evidence-2-cya', function(req, res) {
    res.render('r2/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2', 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/uploading-supporting-evidence-3-cya', function(req, res) {
    res.render('r2/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3', 'cya' : 'true' });
  });


  app.get('/r2/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-upload-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-1-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-uploaded-1', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-2-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-uploaded-2', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-3-cya', function(req, res) {
    res.render('r2/supporting-evidence/supporting-evidence-uploaded-3', { 'cya' : 'true' });
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-1-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-2-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/r2/supporting-evidence/supporting-evidence-uploaded-3-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4-cya')
      } else {
        res.redirect('check')
      }
  });


  // END OF VERSION 1 ROUTES

}
