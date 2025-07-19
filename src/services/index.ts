"use server";
import nodemailer from "nodemailer";

export async function sendEmail({
  firstName,
  lastName,
  email,
  phone,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.AUTH_EMAIL,
    to: "sales@cyberpilot.sa" as string,
    subject: `Code Pilot: New message from ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #111;">New message from Code Pilot</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${message}</p>
      </div>
    `,
  });

  await transporter.sendMail({
    from: process.env.AUTH_EMAIL,
    to: email as string,
    subject: `Thank you for contacting us, ${firstName}!`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #111;">Thank you for contacting us!</h2>
        <p>We received you message, will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${message}</p>
      </div>
    `,
  });
}
