"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1727312250@qq.com', // generated ethereal user
      pass: 'pmsvfnunbyqjdeeb' // generated ethereal password
    }
  });

  // send mail with defined transport object
  

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);


// "QQ": {
//     "domains": ["qq.com"],
//     "host": "smtp.qq.com",
//     "port": 465,
//     "secure": true
// },

function send(mail,code){
    let mailobj={
        from: '"哈哈" <1727312250@qq.com>', // sender address
        to: mail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "验证码"+code, // plain text body
        // html: "<b>Hello world?</b>" // html body
     }
     return new Promise((reslove,reject)=>{
       transporter.sendMail(mailobj,(err,data)=>{
         console.log(err)
         console.log(data)
       });
      })
}

module.exports={send}