import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_G2RxDQBY_HhFy17JrEJ2ECku5NXuHHFMP");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`, // Appears to come from the sender
      to: ["aspasiakounelaki@gmail.com"], // Your email (must match Resend account)
      replyTo: email, // Allow direct reply to the customer
      subject: `${subject} - From ${name}`,
      text: `
New Message from ${name}

Email: ${email}
${phone ? `Phone: ${phone}` : ""}
Subject: ${subject}

Message:
${message}

Reply to: ${email}

--
Petras Car Rental - Sitia, Crete, Greece
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          
          <h2>New Message from ${name}</h2>
          
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Subject:</strong> ${subject}</p>
          
          <h3>Message:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          
          <hr>
          
          <p><strong>Reply to:</strong> <a href="mailto:${email}">${email}</a></p>
          
          <p style="font-size: 12px;">Petras Car Rental - Sitia, Crete, Greece</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({
      message: "Email sent successfully",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
