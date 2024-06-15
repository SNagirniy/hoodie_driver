 import nodemailer from 'nodemailer';

const PASS = process.env.EMAIL_SERVICE_PASS;
const EMAIL = process.env.EMAIL_SERVICE;
const recipient = process.env.RECIPIENT_EMAIL;



 const sendEmail = async(message)=> {

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.ukr.net",
        auth: {
          user: EMAIL,
          pass: PASS,
        },
        secure: true,
      });

      const mailData = {
        from: EMAIL,
        to: recipient,
        subject: `Message From ${EMAIL}`,
        text: message,
        html: `<div>${message}</div><p>Sent from:
        ${EMAIL}</p>`
      };

  

    try {
      const res = await transporter.sendMail(mailData);
      return res;
      } catch (error) {
        throw error;
      }
 };

 export default sendEmail;