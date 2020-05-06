module.exports = {

  bind: function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // Includes

    // Experiments
    require('./routes/v1.js')(app);
    require('./routes/v2.js')(app);
  }
}