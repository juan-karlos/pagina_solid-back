const nodemailer =require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'soliditconsultoria@gmail.com',
    pass: 'fgrz edbt imms fteo'
  }
});


transporter.verify().then(()=>{
    console.log('ready for send emails');
});

module.exports = transporter;
