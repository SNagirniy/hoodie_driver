 import nodemailer from 'nodemailer';

const PASS = '5ML7tPYCsGSrQkLt';
const EMAIL = 'hoodie_driver@ukr.net';
const resEmail = 'hoodiedriver24@gmail.com';



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
        to: resEmail,
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