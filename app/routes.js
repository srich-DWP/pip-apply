module.exports = {

  bind: function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // Includes

    // Prototypes and exploration
    require('./routes/p1.js')(app);
    require('./routes/p2.js')(app);
    require('./routes/p3.js')(app);
    require('./routes/p4.js')(app);
    require('./routes/p4-ni.js')(app);
    require('./routes/p4-ru.js')(app);
    require('./routes/test.js')(app);
    // Reference screens
    require('./routes/r1.js')(app);
  }
}
