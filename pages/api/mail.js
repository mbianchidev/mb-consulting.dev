import userData from "@constants/data";

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function(req, res) {
  return new Promise((resolve, reject) => {
    const researchString = "site_form_message_request"; // this is an util string to identify the email in gmail search
    const body = JSON.parse(req.body);
    const message = `
    ResearchString: ${researchString}\r\n
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;
    mail.send({
      to: userData.email,
      from: userData.siteMail,
      subject: '[MB-Consulting] Contact Form Message from ' + body.name,
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    }).then(response => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.end(JSON.stringify(response));
      resolve();
    }).catch(error => {
      console.log('error', error);
      reject(error);
    });
  });
}