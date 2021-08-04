//const nodemailer = require('nodemailer')
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.API_KEY_SENDGRID)
require('dotenv').config()

export default async function sendEmail(req, res){
    try {

        let auxSubject = `Contato pelo site`;
        
        if(req.body.subject != ""){
            auxSubject = `Contato pelo site - ${req.body.subject}`
        }

        let data = {
            to: process.env.USER_EMAIL,
            from: process.env.USER_EMAIL,
            subject: auxSubject,
            text: req.body.message,
            html: `<b>${req.body.name}</b><br/> 
                    Contato : ${req.body.email}<br/>
                    Assunto : ${auxSubject}<br/>
                    Mensagem : ${req.body.message}`
        }

        await mail.send(data).then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
          })

        res.status(200).json({message : 'Email enviado com Sucesso'})
    // NODEMAILER IRÁ ENTRAR QUANDO TIVERMOS EMAIL
    //    let transporter = nodemailer.createTransport(
    //         {
    //             host: process.env.HOST,
    //             port: process.env.PORT,
    //             auth: {
    //                 user: process.env.USER_EMAIL,
    //                 pass: process.env.USER_PASSWORD
    //             }
    //         }
    //     )

    //     let auxSubject = `Contato pelo site`;
        
    //     if(req.body.subject != ""){
    //         auxSubject = `Contato pelo site - ${req.body.subject}`
    //     }
        
    //     await transporter.sendMail({
    //         from: `${req.body.name} <${req.body.email}>`,
    //         to: process.env.USER_EMAIL,
    //         replyTo: req.body.email,
    //         subject: auxSubject,
    //         text: req.body.message,
    //         html: `<b>${req.body.name}</b><br/> ${req.body.message}`
    //     })
    } catch (error) {
        res.status(400).json({message : 'Falha ao enviar Email'})
        console.error(error.message);
    }
}