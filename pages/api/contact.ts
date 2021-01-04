import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: email,
    to: 'vana.brajcic@gmail.com',
    subject: `New mail from Contact form`,
    text: `New message from ${email}: \n ${message}`,
    replyTo: email,
  };

  return new Promise<void>(resolve => {
    transporter.sendMail(mailOption, err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(`Error while sending mail: ${JSON.stringify(err)}`);
        res.status(500).json({ message: 'There was an error. Please try again!', status: 500 });
        resolve();
      } else {
        res.status(200).json({ message: 'Thanks for contacting us!', status: 200 });
        resolve();
      }
    });
  });
}
