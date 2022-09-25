import userData from "@constants/data";

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function(req, res) {
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
    ResearchString: ${researchString}\r\n
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Service requested: ${body.serviceName}\r\n
    Message: ${body.message.replace(/\n/g, '\r\n')}
    `;
    
    {/* My email */}
    try {
      mail.send({
        to: userData.email,
        from: userData.siteMail,
        subject: '[MB-Consulting] Contact Form Message from ' + body.name,
        text: data,
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>New message</title>
            <meta name="description" content="MB-Consulting-dev - New email message">
            <meta name="author" content="Matteo Bianchi">
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
                    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Have a nice one,<br>${userData.name}<br>${userData.role}<br>${userData.email}</p>
                    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                      <a href="https://mb-consulting.dev/all-links" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Explore more content</a>
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
        // cc: userData.email,
        from: userData.siteMail,
        subject: body.name + ' greetings from MB-Consulting',
        text: data,
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>New message</title>
            <meta name="description" content="MB-Consulting-dev - New email message">
            <meta name="author" content="Matteo Bianchi">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            <link rel="stylesheet" href="css/styles.css?v=1.0">
          </head>
          <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>Thanks for your email! </h3>
                  <div style="font-size: 16px;">
                    <p id="customer-message">${userData.mailThankYouMessage}</p>
                    <img src="https://mb-consulting.dev/static/logo.webp" class="logo-image" style="height: 104px;width: 156px;border-radius: 5px;overflow: hidden;">
                    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">See you soon,<br>${userData.name}<br>${userData.role}<br>${userData.email}</p>
                    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                      <a href="https://google.com" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Explore more content, visit https://mb-consulting.dev/all-links</a>
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