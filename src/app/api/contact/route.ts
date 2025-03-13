import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("📧 EMAIL_USER:", process.env.EMAIL_USER);
  console.log(
    "🔑 EMAIL_PASS:",
    process.env.EMAIL_PASS ? "Loaded ✅" : "Not Loaded ❌"
  );

  try {
    const { name, email, message } = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing email credentials in .env.local");
      return NextResponse.json(
        { success: false, message: "Server email credentials missing" },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us!",
      text: `नमस्ते ${name},\n\nहमने आपका संदेश प्राप्त कर लिया है। हम जल्द ही आपसे संपर्क करेंगे।\n\nधन्यवाद!`,
    });

    return NextResponse.json(
      { success: true, message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
