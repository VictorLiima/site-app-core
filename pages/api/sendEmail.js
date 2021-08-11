const dotenv = require("dotenv");
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

export default async function sendEmail(req, res) {
  try {
    dotenv.config();

    init("user_S4zj0meOb53N2b563hVeK");

    emailjs
      .sendForm(
        "service_wmrvxtn",
        "CONTACT_SITE_FORM",
        {
          to_name: "João Victor",
          name: req.body.name,
          message: req.body.message,
          reply_to: req.body.email,
          subject: req.body.subject
            ? req.body.subject
            : "Contato através do site",
        },
        "user_S4zj0meOb53N2b563hVeK"
      )
      .then((res) => {
        console.log(res);
        alert("deu boa");
        res.status(200).json({ message: "Email enviado com sucesso" });
      })
      .catch((err) => {
        console.log(err);
        alert("deu pau");
      });
    // const remetente = `Contato pelo Site <${process.env.USER_EMAIL}>`;
    // const destinatario = `<${process.env.USER_EMAIL}>`;
    // const subject = req.body.subject ? req.body.subject : "Contato pelo Site";
    // const bodyText = `${req.body.message}`;
    // const bodyHtml = `<!DOCTYPE html>
    //                         <html lang="en">
    //                         <head>
    //                             <meta charset="UTF-8">
    //                             <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //                             <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //                             <title>Document</title>
    //                         </head>
    //                         <body>
    //                           <b> De: ${req.body.email} </b> <br/>
    //                           Assunto: ${subject} <br/>
    //                           Mensagem: ${bodyText}
    //                         </body>
    //                         </html>`;
    // const charset = "UTF-8";
  } catch (error) {
    res.status(400).json({ message: "Falha ao enviar Email" });
    console.error(error.message);
  }
}
