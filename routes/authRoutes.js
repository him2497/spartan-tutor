const passport = require('passport');

module.exports = (app) => {
  app.get('/student/auth/google', passport.authenticate('student', {
    scope: ['profile', 'email']
  }));

  app.get('/tutor/auth/google', passport.authenticate('tutor', {
    scope: ['profile', 'email']
  }));

  app.get('/student/auth/google/callback', passport.authenticate('student'), (req, res) => {
    res.redirect('/student/dashboard');
  });

  app.get('/tutor/auth/google/callback', passport.authenticate('tutor'), (req, res) => {
    res.redirect('/tutor/dashboard');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/student', async (req,res) => {
    // console.log(req.user.type);
    // res.send(req.user.type = "2")
    const user = await req.user.save();
    res.send(user);
  })
};
