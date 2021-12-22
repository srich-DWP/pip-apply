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

  app.get('/p5/list', (req, res, next) => {

    if (!req.session.sectionStatus){
      // console.log('no session');
      req.session.sectionStatus = {
        // cwyn: 'complete',

// ukspf variables
        nameandteam: undefined,
        description: undefined,
        timeline: undefined,
        projectmanagement: undefined,
        compliance: undefined,
        annualincome: undefined,
        costbreakdown: undefined,
        financemanagement: undefined,
        evidence: undefined,
        falseinformation: undefined,
        gdpr: undefined,
        approval: undefined,
        organisations: undefined,
        contributors: undefined,
      }
    }

    if (!req.session.sectionCount){
      req.session.sectionCount = 0;
    }

    // organisations
    if (req.query.organisations == 'completed') {
      if (req.session.sectionStatus.organisations != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.organisations = req.query.organisations
    };
    if (req.query.organisations == 'inprogress') {
      req.session.sectionStatus.organisations = req.query.organisations
    };

    // contributors
    if (req.query.contributors == 'completed') {
      if (req.session.sectionStatus.contributors != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.contributors = req.query.contributors
    };
    if (req.query.contributors == 'inprogress') {
      req.session.sectionStatus.contributors = req.query.contributors
    };

    // nameandteam
    if (req.query.nameandteam == 'completed') {
      if (req.session.sectionStatus.nameandteam != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.nameandteam = req.query.nameandteam
    };
    if (req.query.nameandteam == 'inprogress') {
      req.session.sectionStatus.nameandteam = req.query.nameandteam
    };

    // description
    if (req.query.description == 'completed') {
      if (req.session.sectionStatus.description != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.description = req.query.description
    };
    if (req.query.description == 'inprogress') {
      req.session.sectionStatus.description = req.query.description
    };

    // timeline
    if (req.query.timeline == 'completed') {
      if (req.session.sectionStatus.timeline != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.timeline = req.query.timeline
    };
    if (req.query.timeline == 'inprogress') {
      req.session.sectionStatus.timeline = req.query.timeline
    };

    // milestones
    if (req.query.milestones == 'completed') {
      if (req.session.sectionStatus.timeline != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.timeline = req.query.timeline
    };
    if (req.query.timeline == 'inprogress') {
      req.session.sectionStatus.timeline = req.query.timeline
    };

    // outcomes
    if (req.query.outcomes == 'completed') {
      if (req.session.sectionStatus.timeline != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.timeline = req.query.timeline
    };
    if (req.query.timeline == 'inprogress') {
      req.session.sectionStatus.timeline = req.query.timeline
    };

    // projectmanagement
    if (req.query.projectmanagement == 'completed') {
      if (req.session.sectionStatus.projectmanagement != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.projectmanagement = req.query.projectmanagement
    };
    if (req.query.projectmanagement == 'inprogress') {
      req.session.sectionStatus.projectmanagement = req.query.projectmanagement
    };

    // compliance
    if (req.query.compliance == 'completed') {
      if (req.session.sectionStatus.compliance != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.compliance = req.query.compliance
    };
    if (req.query.compliance == 'inprogress') {
      req.session.sectionStatus.compliance = req.query.compliance
    };

    // annualincome
    if (req.query.annualincome == 'completed') {
      if (req.session.sectionStatus.annualincome != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.annualincome = req.query.annualincome
    };
    if (req.query.annualincome == 'inprogress') {
      req.session.sectionStatus.annualincome = req.query.annualincome
    };

    // costbreakdown
    if (req.query.costbreakdown == 'completed') {
      if (req.session.sectionStatus.costbreakdown != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.costbreakdown = req.query.costbreakdown
    };
    if (req.query.costbreakdown == 'inprogress') {
      req.session.sectionStatus.costbreakdown = req.query.costbreakdown
    };

    // financemanagement
    if (req.query.financemanagement == 'completed') {
      if (req.session.sectionStatus.financemanagement != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.financemanagement = req.query.financemanagement
    };
    if (req.query.financemanagement == 'inprogress') {
      req.session.sectionStatus.financemanagement = req.query.financemanagement
    };

    // evidence
    if (req.query.evidence == 'completed') {
      if (req.session.sectionStatus.evidence != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.evidence = req.query.evidence
    };
    if (req.query.evidence == 'inprogress') {
      req.session.sectionStatus.evidence = req.query.evidence
    };

    // falseinformation
    if (req.query.falseinformation == 'completed') {
      if (req.session.sectionStatus.falseinformation != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.falseinformation = req.query.falseinformation
    };
    if (req.query.falseinformation == 'inprogress') {
      req.session.sectionStatus.falseinformation = req.query.falseinformation
    };

    // gdpr
    if (req.query.gdpr == 'completed') {
      if (req.session.sectionStatus.gdpr != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.gdpr = req.query.gdpr
    };
    if (req.query.gdpr == 'inprogress') {
      req.session.sectionStatus.gdpr = req.query.gdpr
    };

    // approval
    if (req.query.approval == 'completed') {
      if (req.session.sectionStatus.approval != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.approval = req.query.approval
    };
    if (req.query.approval == 'inprogress') {
      req.session.sectionStatus.approval = req.query.approval
    };


    // if (req.query.supportingevidence) {
    //   if (req.session.sectionStatus.supportingevidence == undefined) {
    //     req.session.sectionCount = (req.session.sectionCount + 1)
    //   }
    //   req.session.sectionStatus.supportingevidence = req.query.supportingevidence
    // };

    res.render('p5/list.html', {sectionStatus: req.session.sectionStatus, sectionCount: req.session.sectionCount});
  });

  // Clear data on the 'application cancelled' screen

  app.get('/*/clear-p5', function (req, res) {
    req.session.destroy()
    res.render('p5/application-cancelled')
  })

  // Routes

  // Organisations
  app.get('/application-team/organisations/index-answer', function(req, res) {
        res.redirect('/application-team/organisations/check')
  });

  // Contributors
  app.get('/application-team/contributors/index-answer', function(req, res) {
        res.redirect('/application-team/contributors/check')
  });


  // Name and team
  app.get('/project-details/name-and-team/index-answer', function(req, res) {
        res.redirect('/project-details/name-and-team/check')
  });

  // Timeline
  app.get('/project-details/timeline/index-answer', function(req, res) {
        res.redirect('/project-details/milestones')
  });

  // Project management
  app.get('/project-details/management/index-answer', function(req, res) {
        res.redirect('/project-details/management/project-management-page-2')
  });

  // Compliance
  app.get('/project-details/compliance/index-answer', function(req, res) {
        res.redirect('/project-details/compliance/check')
  });

  // Annual income
  app.get('/finance-details/annual-income/index-answer', function(req, res) {
        res.redirect('/finance-details/annual-income/check')
  });

  // Cost breakdown
  app.get('/finance-details/cost-breakdown/index-answer', function(req, res) {
        res.redirect('/finance-details/cost-breakdown/check')
  });

  // Finance Management
  app.get('/finance-details/management/index-answer', function(req, res) {
        res.redirect('/finance-details/management/check')
  });

  // Milestones
  app.get('/project-details/milestones/index-answer', function(req, res) {
        res.redirect('/project-details/outcomes')
  });

  // Outcomes
  app.get('/project-details/outcomes/index-answer', function(req, res) {
        res.redirect('/project-details/outcomes/check')
  });

  // Description
  app.get('/project-details/description/index-answer', function(req, res) {
        res.redirect('/project-details/description/check')
  });

  // Evidence
  app.get('/declarations/evidence/index-answer', function(req, res) {
        res.redirect('/declarations/false-information')
  });

  // False information
  app.get('/declarations/false-information/index-answer', function(req, res) {
        res.redirect('/declarations/gdpr')
  });

  // gdpr
  app.get('/declarations/gdpr/index-answer', function(req, res) {
        res.redirect('/declarations/gdpr/check')
  });

  // Approval
  app.get('/approval/index-answer', function(req, res) {
        res.redirect('/approval/check')
  });

  // Additional information

  app.get('/p5/additional-information/index-answer', function(req, res) {

    let question = req.session.data['additionalinformation-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Apply

  app.get('/p5/apply/pdf-answer', function(req, res) {

    let question = req.session.data['download']

    if (question === 'yes') {
        res.redirect('download')
      } else {
        res.redirect('confirmation')
      }
  });


  // Supporting evidence

  app.get('/p5/supporting-evidence/supporting-evidence-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('file-upload-help')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-1-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-2-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3')
      } else {
        res.redirect('../apply/declaration')
      }
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-3-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4')
      } else {
        res.redirect('../apply/declaration')
      }
  });


  // Uploading screens

  app.get('/p5/supporting-evidence/uploading-supporting-evidence-1', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1' });
  });

  app.get('/p5/supporting-evidence/uploading-supporting-evidence-2', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2' });
  });

  app.get('/p5/supporting-evidence/uploading-supporting-evidence-3', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3' });
  });

// // Coming back uploading evidence

//   app.get('/p5/coming-back/supporting-evidence-uploaded-1', function(req, res) {

//     let question = req.session.data['question']

//     if (question === 'yes') {
//         res.redirect('/p5/coming-back/supporting-evidence-upload-2')
//       } else {
//         res.redirect('/p5/coming-back/confirmation-returning')
//       }
//   });




  // Check you answers variations

  app.get('/p5/supporting-evidence/upload-cya', function(req, res) {
    res.render('p5/supporting-evidence/upload', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/uploading-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/uploaded-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploaded-1', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('interruption-screen-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/p5/supporting-evidence/interruption-screen-cya', function(req, res) {
    res.render('p5/supporting-evidence/interruption-screen', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence-upload-2-cya', function(req, res) {
    res.render('p5/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/uploading-supporting-evidence-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1', 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/uploading-supporting-evidence-2-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2', 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/uploading-supporting-evidence-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3', 'cya' : 'true' });
  });


  app.get('/p5/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-upload-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-uploaded-1', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-2-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-uploaded-2', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-uploaded-3', { 'cya' : 'true' });
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-1-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-2-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/p5/supporting-evidence/supporting-evidence-uploaded-3-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4-cya')
      } else {
        res.redirect('check')
      }
  });


  // END OF VERSION 1 ROUTES

}
