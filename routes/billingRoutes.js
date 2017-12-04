const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount:1000,
      currency: 'usd',
      description:' Please pay 10 USD for 1 hour',
      source: req.body.id
    })
    req.user.credits+=10;
    const user = await req.user.save();
    res.send(user);
  });

};
