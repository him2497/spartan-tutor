const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});

passport.use('student',
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/student/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id, name: profile.displayName});
        if (existingUser) {
          // we already have a record with the given profile ID
          return done(null, existingUser);
        } // we don't have a user record with this ID, make a new record!
        const user = await new User({ googleId: profile.id, name: profile.displayName, type: "Student"}).save()
        done(null, user);
      }
  )
);

passport.use('tutor',
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/tutor/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingTutor = await User.findOne({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value });
        if (existingTutor) {
          // we already have a record with the given profile ID
          return done(null, existingTutor);
        } // we don't have a user record with this ID, make a new record!
        const tutor = await new User({ googleId: profile.id, name: profile.displayName, type: "Tutor", email: profile.emails[0].value}).save()
        done(null, tutor);
      }
  )
);
