import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Not found', status: 404 });
  }

  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailOption = {
    from: `Profico Web <${email}>`,
    to: 'info@profico.hr',
    subject: `New inquiry from Profico web`,
    text: `FROM: ${email} MESSAGE: ${message}`,
    html: `<h2>Mail From Contact Form</h2><p>From: <a href="mailto:${email}">${email}</a></p><p>${message}</p>`,
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
