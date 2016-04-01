  var   express = require('express')
      , app = express()
      , bodyParser = require('body-parser')
      , cors = require('cors')
      , session = require ('express-session')
      , sessionConfig = require('./config/sessionConfig')
      , mongoose = require('mongoose')
      , port = 9333
      , mongoUri = 'mongodb://localhost:27017/option-lab';


  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(__dirname + '/public'));

  mongoose.connect(mongoUri);
  mongoose.connection.once('open', function() {
      console.log('Connected to MongoDB at ' + mongoUri);
  });

  //routes
  require('./features/user/userRoutes')(app);
  require('./features/decision/decisionRoutes')(app);

  app.listen(port, function() {
      console.log('Listening on ' + port);
  });
