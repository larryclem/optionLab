var User = require('../features/user/User');
var LocalStrategy   = require('passport-local').Strategy;

module.exports = function(passport){

//user serialization/deserialization
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  User.findById(user.id, function (err, user) {
      done(err, user);
  });
});

//configure local signup strategy
passport.use('local-signup', new LocalStrategy({
       passReqToCallback : true
   },
   function(req, username, password, done) {

       // asynchronous
       // User.findOne wont fire unless data is sent back
       process.nextTick(function() {

       // find a user whose username is the same as the forms username
       // we are checking to see if the user trying to login already exists
       User.findOne({ 'local.username' :  username }, function(err, user) {
           // if there are any errors, return the error
           if (err)
               return done(err);

           // check to see if theres already a user with that email
           if (user) {
               return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
           } else {

               // if there is no user with that email
               // create the user
               var newUser = new User();

               // set the user's local credentials
               newUser.local.username   = username;
               newUser.local.password = newUser.generateHash(password);

               // save the user
               newUser.save(function(err) {
                   if (err)
                       throw err;
                   return done(null, newUser);
               });
           }

       });

       });

   }));


//configure local login strategy
passport.use('local-login', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.username' :  username }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);
        });

    }));

};
