"use server";
import { ContactFormValues } from "@/shared/forms/ContactFormValues";
import nodemailer from "nodemailer";

export const sendContactMail = async (data: ContactFormValues) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: data.email,
    to: process.env.NODEMAILER_EMAIL,
    subject: "Formularz kontaktowy Portfolio!",
    text: `
      Ktoś próbuje się z Tobą skontaktować!

      Dane:
      Imię: ${data.firstName}
      Nazwisko: ${data.lastName}
      Email: ${data.email}
      Telefon: ${data.phone}
      Serwis: ${data.service}

      Wiadomość: ${data.message}
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      throw new Error("Error while sending an email.");
    } else {
      console.log("Your Email Sent.");
      return true;
    }
  });
};
