import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function summerCamp(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Not found', status: 404 });
  }

  const { name, phone, email, fieldOfInterest, cv, motivationLetter } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: `Profico Web <${email}>`,
    to: 'careers@profico.hr',
    subject: `New summer camp apply from Profico web`,
    text: `FROM: ${email}`,
    html: `<h2>Summer Camp Apply</h2><p><strong>From: </strong> <a href="mailto:${email}">${email}</a></p><p><strong>Name: </strong>${name}</p><p><strong>Phone: </strong>${phone}</p><p><strong>Field of interest: </strong>${fieldOfInterest}</p>`,
    attachments: [
      {
        path: cv,
      },
      {
        path: motivationLetter,
      },
    ],
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
        res.status(200).json({ message: 'Thanks for applying for this job!', status: 200 });
        resolve();
      }
    });
  });
}
