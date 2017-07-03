const base64url = require('base64url');
const multer = require('multer');
const fs = require('fs');
const pictures = multer({});
const express        = require('express');
const router         = express.Router();
const homeRoutes     = require('./home');

var upload = multer({ dest: 'uploads/' });

module.exports = (app)=> {

/*=====================================================
     Home Routes
  =====================================================*/
app.get('/', homeRoutes.index);
app.get('/about', homeRoutes.about);

/*=====================================================
     Admin Routes
  =====================================================*/

/*=====================================================
     Auth Routes
  =====================================================*/

}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
    req.session.returnTo;
}
