var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET users listing. */
router.post('/', function (req, res) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport({
      service:'Gmail',
      auth: {
          user: "fynnegansmailer@gmail.com",
          pass: "mailingpassword"
      }
  });
  //Mail options
  console.dir(req.body);
  mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'fynnegans@gmail.com',
      subject: 'Website Signup form',
      text: " Name: " + req.body.name + ", Email: " + req.body.email + ", Pass: " + req.body.password
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          console.dir(error);
          res.render('index',{msg:'oh Shite'});
      }
      //Yay!! Email sent
      else {
        console.dir('sucess!');
          res.render('index', {msg:'nice your all set'});
      }
  });
});

module.exports = router;
