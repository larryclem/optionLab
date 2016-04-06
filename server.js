  var   express = require('express')
      , app = express()
      , bodyParser = require('body-parser')
      , cors = require('cors')
      , session = require ('express-session')
      , sessionConfig = require('./config/sessionConfig')
      , passport = require('passport')
      , LocalStrategy = require('passport-local').Strategy;
      , mongoose = require('mongoose')
      , port = 9333
      , mongoUri = 'mongodb://localhost:27017/option-lab';


  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(__dirname + '/public'));
  app.use(express.session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());

  mongoose.connect(mongoUri);
  mongoose.connection.once('open', function() {
      console.log('Connected to MongoDB at ' + mongoUri);
  });

  //user serialization/deserialization
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (user, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
  });

  //routes
  // require('./features/user/userRoutes')(app, passport);
  // require('./features/decision/decisionRoutes')(app, passport);

  //   app.post('/login',
  //   passport.authenticate('local', { successRedirect: '/',
  //                                    failureRedirect: '/login',
  //                                    failureFlash: true })
  // );

  app.listen(port, function() {
      console.log('Listening on ' + port);
  });
