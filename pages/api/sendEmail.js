const nodemailer = require('nodemailer')
require('dotenv').config()

export default  async function sendEmail(req, res){
    let transporter = nodemailer.createTransport(
        {
            host: process.env.HOST,
            port: process.env.PORT,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD
            }
        }
    )
    
    
    await transporter.sendMail({
        from: `${req.body.name} <${req.body.email}>`,
        to: process.env.USER_EMAIL,
        replyTo: req.body.email,
        subject: 'CONTATO PELO SITE',
        text: req.body.message,
        html: `<b>${req.body.name}</b><br/> ${req.body.message}`
    }).then((response)=>{
        console.log("deu certo");
        res.send(response)
    })
      .catch((error)=>{
          console.error(error);
          res.send(error);
      })
}