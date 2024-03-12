
let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eldrago5827@gmail.com",
    pass: "xghw doxp zkot odit",
  },
});
let options = {
  from: "eldrago5827@gmail.com",
  to: "postbox@gmail.com",
  subject: "github username",
  text: "github notifications",
};
//alert("2nd");
transporter.sendMail(options, (err, data) => {
  if (err) console.log(err);
  else {
    console.log("mail sent successfullyhhh");
  }
});
