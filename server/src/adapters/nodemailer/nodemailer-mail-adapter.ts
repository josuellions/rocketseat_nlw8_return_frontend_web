import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9f6261970426fb",
    pass: "be7d846be1527a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }:SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <email@teste.com',
      to: 'Josuel Lopes <josuellions@email.com>',
      subject,
      html: body
    })
  }
}