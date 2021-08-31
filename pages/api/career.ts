import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function career(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Not found', status: 404 });
  }

  const { name, phone, email, repo, message, cv, position } = req.body;

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
    subject: `New career application from Profico web`,
    text: `FROM: ${email} MESSAGE: ${message}`,
    html: `<h2>Career Application</h2><p><strong>From: </strong> <a href="mailto:${email}">${email}</a></p><p><strong>Name: </strong>${name}</p><p><strong>Position: </strong>${position}</p><p><strong>Phone: </strong>${phone}</p><p><strong>Links to your Website/Github/Bitbucket: </strong>${repo}</p><p><strong>Tell us something about yourself: </strong>${message}</p>`,
    attachments: [
      {
        path: cv,
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '7mb',
    },
  },
};
