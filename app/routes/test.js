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

  app.get('/test/list', (req, res, next) => {

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
        talkingandlistening: undefined,
        reading: undefined,
        mixingwithotherpeople: undefined,
        managingmoney: undefined,
        planningandfollowingajourney: undefined,
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
    if (req.query.talkingandlistening) {
      req.session.sectionStatus.talkingandlistening = req.query.talkingandlistening
    };
    if (req.query.reading) {
      req.session.sectionStatus.reading = req.query.reading
    };
    if (req.query.mixingwithotherpeople) {
      req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
    };
    if (req.query.managingmoney) {
      req.session.sectionStatus.managingmoney = req.query.managingmoney
    };
    if (req.query.planningandfollowingajourney) {
      req.session.sectionStatus.planningandfollowingajourney = req.query.planningandfollowingajourney
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

    res.render('test/list.html', {sectionStatus: req.session.sectionStatus});
  });

  // Clear data on the 'application cancelled' screen

  app.get('/*/clear-test', function (req, res) {
    req.session.destroy()
    res.render('test/application-cancelled')
  })


  // Routes

  app.get('/test/sign-in/answer-choice', function(req, res) {

    let question = req.session.data['question']

    if (question === 'pdf') {
        res.redirect('tactical-pdf')
      } else {
        res.redirect('intro-question')
      }
  });

  app.get('/test/sign-in/intro-question-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('intro')
      } else {
        res.redirect('sign-in')
      }
  });

  app.get('/test/about-your-health/another-answer', function(req, res) {

    let condition2 = req.session.data['condition2']

    if (condition2 === 'Yes') {
        res.redirect('condition-2')
      } else {
        res.redirect('check')
      }
  });

  app.get('/test/about-your-health/another-2-answer', function(req, res) {

    let question = req.session.data['condition3']

    if (question === 'Yes') {
        res.redirect('condition-3')
      } else {
        res.redirect('check')
      }
  });

  app.get('/test/about-your-health-professionals/q-health-professional-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('health-professional')
      } else {
        res.redirect('check')
      }
  });

  app.get('/test/about-your-health-professionals/another-answer', function(req, res) {

    let professional2 = req.session.data['professional2']

    if (professional2 === 'Yes') {
        res.redirect('health-professional-2')
      } else {
        res.redirect('check')
      }
  });

  app.get('/test/about-your-health-professionals/another-2-answer', function(req, res) {

    let professional3 = req.session.data['professional3']

    if (professional3 === 'Yes') {
        res.redirect('health-professional-3')
      } else {
        res.redirect('check')
      }
  });


  // Preparing food

  app.get('/test/preparing-food/index-answer', function(req, res) {

    let question = req.session.data['preparingfood-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Eating and drinking

  app.get('/test/eating-and-drinking/index-answer', function(req, res) {

    let question = req.session.data['eatinganddrinking-question']

    if (question === 'Yes') {
        res.redirect('feeding-tube')
      } else {
        res.redirect('check')
      }
  });

  // Managing treatments

  app.get('/test/managing-treatments/index-answer', function(req, res) {

    let question = req.session.data['managingtreatments-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Washing and bathing

  app.get('/test/washing-and-bathing/index-answer', function(req, res) {

    let question = req.session.data['washingandbathing-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Managing toilet needs

  app.get('/test/managing-toilet-needs/index-answer', function(req, res) {

    let question = req.session.data['managingtoiletneeds-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Dressing and undressing

  app.get('/test/dressing-and-undressing/index-answer', function(req, res) {

    let question = req.session.data['dressingandundressing-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Talking and listening

  app.get('/test/talking-and-listening/index-answer', function(req, res) {

    let question = req.session.data['talkingandlistening-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Reading

  app.get('/test/reading/index-answer', function(req, res) {

    let question = req.session.data['reading-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Mixing with other people

  app.get('/test/mixing-with-other-people/index-answer', function(req, res) {

    let question = req.session.data['mixingwithotherpeople-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Managing money

  app.get('/test/managing-money/index-answer', function(req, res) {

    let question = req.session.data['managingmoney-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Planning and following a journey

  app.get('/test/planning-and-following-a-journey/index-answer', function(req, res) {

    let question = req.session.data['planningandfollowingajourney-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Moving around

  app.get('/test/moving-around/index-answer', function(req, res) {

    let question = req.session.data['movingaround-question']

    if (question === 'Yes') {
        res.redirect('info')
      } else {
        res.redirect('check')
      }
  });

  // Additional information

  app.get('/test/additional-information/index-answer', function(req, res) {

    let question = req.session.data['additionalinformation-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Apply

  app.get('/test/apply/pdf-answer', function(req, res) {

    let question = req.session.data['download']

    if (question === 'yes') {
        res.redirect('download')
      } else {
        res.redirect('confirmation')
      }
  });



  // Supporting evidence

  app.get('/test/supporting-evidence/supporting-evidence-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('file-upload-help')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-1-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-2-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-3-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4')
      } else {
        res.redirect('../apply/declaration')
      }
  });


  // Uploading screens

  app.get('/test/supporting-evidence/uploading-supporting-evidence-1', function(req, res) {
    res.render('test/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1' });
  });

  app.get('/test/supporting-evidence/uploading-supporting-evidence-2', function(req, res) {
    res.render('test/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2' });
  });

  app.get('/test/supporting-evidence/uploading-supporting-evidence-3', function(req, res) {
    res.render('test/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3' });
  });





  // Check you answers variations

  app.get('/test/supporting-evidence/upload-cya', function(req, res) {
    res.render('test/supporting-evidence/upload', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/uploading-cya', function(req, res) {
    res.render('test/supporting-evidence/uploading', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/uploaded-1-cya', function(req, res) {
    res.render('test/supporting-evidence/uploaded-1', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('interruption-screen-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/test/supporting-evidence/interruption-screen-cya', function(req, res) {
    res.render('test/supporting-evidence/interruption-screen', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence-upload-2-cya', function(req, res) {
    res.render('test/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/uploading-supporting-evidence-1-cya', function(req, res) {
    res.render('test/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1', 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/uploading-supporting-evidence-2-cya', function(req, res) {
    res.render('test/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2', 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/uploading-supporting-evidence-3-cya', function(req, res) {
    res.render('test/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3', 'cya' : 'true' });
  });


  app.get('/test/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-upload-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-1-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-uploaded-1', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-2-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-uploaded-2', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-3-cya', function(req, res) {
    res.render('test/supporting-evidence/supporting-evidence-uploaded-3', { 'cya' : 'true' });
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-1-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-2-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/test/supporting-evidence/supporting-evidence-uploaded-3-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4-cya')
      } else {
        res.redirect('check')
      }
  });


  // END OF VERSION 1 ROUTES

}
