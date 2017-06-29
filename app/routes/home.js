const base64url = require('base64url');
const multer = require('multer');
const fs = require('fs');
const pictures = multer({});

module.exports = {

    // =====================================
    index: (req, res)=> {

        res.render('home/index.ejs');
   },


};

function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
