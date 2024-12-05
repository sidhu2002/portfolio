import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a test account using Ethereal Email
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: 'marjolaine.koss@ethereal.email',
    pass: 'TKpxQv9RFgjKJpMFYF'
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Send email
    await transporter.sendMail({
      from: email,
      to: "k.siddeshwarreddy@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
} 