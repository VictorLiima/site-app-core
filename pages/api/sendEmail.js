const SES = require("aws-sdk/clients/ses");
const dotenv = require("dotenv");

export default async function sendEmail(req, res) {
  try {
    dotenv.config();
    const remetente = `Contato pelo Site <${process.env.USER_EMAIL}>`;
    const destinatario = `<${process.env.USER_EMAIL}>`;
    const subject = req.body.subject ? req.body.subject : "Contato pelo Site";
    const bodyText = `${req.body.message}`;
    const bodyHtml = `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Document</title>
                            </head>
                            <body>
                              <b> De: ${req.body.email} </b> <br/>
                              Assunto: ${subject} <br/> 
                              Mensagem: ${bodyText}
                            </body>
                            </html>`;
    const charset = "UTF-8";

    // Load the AWS SDK for Node.js
    var AWS = require("aws-sdk");
    // Set the region
    AWS.config.update({ region: "REGION" });

    // Create sendEmail params
    var params = {
      Destination: {
        ToAddresses: [destinatario],
      },
      Message: {
        Body: {
          Html: {
            Charset: charset,
            Data: bodyHtml,
          },
          Text: {
            Charset: charset,
            Data: bodyText,
          },
        },
        Subject: {
          Charset: charset,
          Data: subject,
        },
      },
      Source: remetente,
      ReplyToAddresses: [remetente],
    };

    // Create the promise and SES service object
    const client = new SES({
      region: "us-east-1",
    });

    // Handle promise's fulfilled/rejected states
    client.sendEmail(params, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.status(200).send(data);
      }
    });

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
    res.status(400).json({ message: "Falha ao enviar Email" });
    console.error(error.message);
  }
}
