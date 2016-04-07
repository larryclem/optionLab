  var   express = require('express')
      , app = express()
      , morgan = require('morgan')
      , bodyParser = require('body-parser')
      , cors = require('cors')
      , session = require ('express-session')
      , sessionConfig = require('./config/sessionConfig')
      , passport = require('passport')
      , flash = require('connect-flash')
      , mongoose = require('mongoose')
      , port = process.env.PORT || 9333
      , mongoUri = 'mongodb://localhost:27017/option-lab';

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(__dirname + '/public'));
  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  mongoose.connect(mongoUri);
  mongoose.connection.once('open', function() {
      console.log('Connected to MongoDB at ' + mongoUri);
  });

  //routes
  require('./features/user/userRoutes')(app passport);
  require('./features/decision/decisionRoutes')(app /*passport*/);

  //passport config
  require('./config/passport')(passport);

  app.listen(port, function() {
      console.log('Listening on ' + port);
  });
