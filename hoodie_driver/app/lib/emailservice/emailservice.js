 'use server'
 import nodemailer from 'nodemailer';
 import { productMessage, giftMessage } from '@/utils/createMessage';

const PASS = process.env.EMAIL_SERVICE_PASS;
const EMAIL = process.env.EMAIL_SERVICE;
const recipient = process.env.RECIPIENT_EMAIL;



 export const sendEmail = async(message)=> {

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



 export const sendOrderEmail = async(req, text)=> {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.ukr.net",
    auth: {
      user: EMAIL,
      pass: PASS,
    },
    secure: true,
  });


  try {
const cart = req?.data?.cart;

    const cartImages = cart.map((item) => ({
      filename: item?.image.split('/').pop(),
      path: item?.image,
    }));


    const customImages =cart.map((item) =>{if(item?.custom_logo){ return{
      filename: item?.custom_logo.split('/').pop(),
      path: item?.custom_logo,
    }} else return {}});

   

    const giftImage = req?.data?.gift?.imageURL? {
      filename: req?.data?.gift?.imageURL.split('/').pop(),
      path: req?.data?.gift?.imageURL,
    } : {};

    const attachments = [...cartImages, ...customImages,giftImage];

    const productsCaption = cart.map((item => productMessage(item)));

    const gift_caption = req?.data?.gift? giftMessage(req?.data?.gift) : null;

    const Message = [text, ...productsCaption,gift_caption].toString();
  
    const mailOptions = {
      from: EMAIL,
      to: recipient,
      subject: `ЗАМОВЛЕННЯ #${req?.id}`,
      html: Message,
      attachments: attachments
     
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  
  } catch (error) {
    console.log(error)
  }
 }