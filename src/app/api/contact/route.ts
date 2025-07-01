import { contactFormSchema } from "@/app/contact/schema/formSchema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = contactFormSchema.parse(body);

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.RECEIVER_EMAIL
    ) {
      console.error("❌ Missing environment variables");
      return NextResponse.json(
        { success: false, message: "Server email credentials missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dev Aarti Sangrah" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Dev Aarti Contact Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Dev Aarti Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Dev Aarti Sangrah" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Us!",
      text: `नमस्ते ${name},\n\nहमने आपका संदेश प्राप्त कर लिया है। हम जल्द ही आपसे संपर्क करेंगे।\n\nधन्यवाद!`,
    });

    return NextResponse.json(
      { success: true, message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input",
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error("❌ Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
