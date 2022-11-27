import userData from "@constants/data";
import mailData from "@constants/mail";

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function(req, res) {

  const customerMessage = `
  ${mailData.mailThankYouMessage.description?.map((row, id) => (
    `<p id=${id}>${row}</p>`
  ))}
  `.replace(/,/g, '');

  return new Promise((resolve, reject) => {
    const researchString = "site_form_message_request"; // this is an util string to identify the email in gmail search
    const body = req.body;
    if (!body || (!body.email || !body.message)){
      console.warn("Error, no data found in form");
      res.status(400).json({ error: 'No body' });
      reject({ error: 'No body' });
      return;
    }

    const data = `
    <b>ResearchString</b>: ${researchString}\r\n
    <br></br>
    <b>Name:</b> ${body.name}\r\n
    <b>Email:</b> ${body.email}\r\n
    <b>Phone:</b> ${body.phone}\r\n
    <b>Service requested:</b> ${body.serviceName}\r\n
    <b>Message:</b><br></br> ${body.message.replace(/\n/g, '\r\n')}
    <b>Where did it found you:</b> ${body.reason}\r\n
    `;
    
    {/* My email */}
    try {
      mail.send({
        to: mailData.email,
        from: mailData.siteMail,
        subject: '[MB-Consulting] Contact Form Message from ' + body.name,
        text: data,
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>New message</title>
            <meta name="description" content="MB-Consulting-dev - New email message">
            <meta name="author" content="MB-Consulting">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            <link rel="stylesheet" href="css/styles.css?v=1.0">
          </head>
          <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>You've got a new message! </h3>
                  <div style="font-size: 16px;">
                    <p id="customer-message">${data.replace(/\r\n/g, '<br>')}</p>
                    <img src="https://mb-consulting.dev/static/logo.webp" class="logo-image" style="height: 104px;width: 156px;border-radius: 5px;overflow: hidden;">
                    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Best,<br>${userData.name}<br>${userData.role}<br>${mailData.email}</p>
                    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                      <a style="text-decoration: none;margin: 8px;color: #9CA3AF;">Craft, Automate, Secure, Innovate</a>
                    </div>
                  </div>
                </div>
              </div>
          </body>
        </html>`,
      }).then(response => {
        res.status(200).json("");
        resolve(response);
      }).catch(error => {
        res.status(error.statusCode).json(error);
        reject(error);
      });
      
      {/* Customer email */}
      mail.send({
        to: body.email,
        from: mailData.siteMail,
        subject: body.name + ' greetings from Matteo',
        text: data,
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>New message</title>
            <meta name="description" content="Matteo Bianchi - New email message">
            <meta name="author" content="Matteo Bianchi">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            <link rel="stylesheet" href="css/styles.css?v=1.0">
          </head>
          <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>Thanks for your email! </h3>
                  <div style="font-size: 16px;">
                    Dear ${body.name},<br>
                    ${customerMessage}
                    <img src="https://mb-consulting.dev/static/logo.webp" class="logo-image" style="height: 104px;width: 156px;border-radius: 5px;overflow: hidden;">
                    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">See you soon,<br>${userData.name}<br>${userData.role}<br>${mailData.email}</p>
                    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                      <a style="text-decoration: none;margin: 8px;color: #9CA3AF;">Explore more content, visit https://mb-consulting.dev/all-links</a>
                    </div>
                  </div>
                </div>
              </div>
          </body>
        </html>`,
      }).then(response => {
        res.status(200).json("");
        resolve(response);
      }).catch(error => {
        res.status(error.statusCode).json(error);
        reject(error);
      });

    }  catch (error) {
      console.warn("SendGrid Mail Error", error);
    }
  });
}