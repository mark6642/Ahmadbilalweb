import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      companyOrUrl,
      selectedServices = [],
      revenue = "Not specified",
      timeline = "Immediate",
      message = "No additional notes provided",
    } = body;

    // Basic Validation: Name & Email are required
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your Name and Email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const recipientEmail =
      process.env.PROPOSAL_RECEIVER_EMAIL || smtpUser || "aisalesmarketinga@gmail.com";

    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "short",
    });

    const servicesList = Array.isArray(selectedServices) && selectedServices.length > 0
      ? selectedServices.join(", ")
      : "General Inquiry";

    // DEV MODE FALLBACK: If SMTP is not yet configured, log to console gracefully
    if (!smtpUser || !smtpPass) {
      console.log("\n========================================================");
      console.log("📬 [PROPOSAL RECEIVED - DEV MODE (No SMTP configured)]");
      console.log("--------------------------------------------------------");
      console.log(`👤 Name:      ${name}`);
      console.log(`📧 Email:     ${email}`);
      console.log(`🌐 Company:   ${companyOrUrl}`);
      console.log(`🎯 Services:  ${servicesList}`);
      console.log(`💰 Revenue:   ${revenue}`);
      console.log(`⏱ Timeline:  ${timeline}`);
      console.log(`📝 Bottleneck/Notes:\n${message}`);
      console.log("--------------------------------------------------------");
      console.log("💡 Tip: Add SMTP_USER and SMTP_PASS to .env.local to receive live emails in your inbox.");
      console.log("========================================================\n");

      return NextResponse.json({
        success: true,
        isDev: true,
        message: "Proposal successfully received in local development mode! Set SMTP credentials in .env.local to deliver to your live email inbox.",
      });
    }

    // PRODUCTION SMTP CONFIGURATION
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587 or other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Executive HTML Email to Ahmad Bilal / Agency Owner
    const adminMailOptions = {
      from: `"Ahmad Bilal Pipeline" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `🎯 New Discovery Proposal: ${name} (${companyOrUrl})`,
      text: `New Proposal from ${name} (${email})\nCompany: ${companyOrUrl}\nServices: ${servicesList}\nRevenue: ${revenue}\nTimeline: ${timeline}\nNotes:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
            .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08); }
            .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 28px; text-align: left; }
            .header-tag { display: inline-block; background: rgba(37, 99, 235, 0.25); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.4); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 999px; margin-bottom: 12px; }
            .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; tracking: -0.5px; }
            .content { padding: 28px; }
            .section-title { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 12px; }
            .grid { display: table; width: 100%; border-collapse: separate; border-spacing: 8px; margin-bottom: 20px; }
            .cell { display: table-cell; background: #f8fafc; padding: 14px 16px; border-radius: 10px; border: 1px solid #e2e8f0; vertical-align: top; width: 50%; }
            .cell-full { display: block; width: 100%; background: #f8fafc; padding: 14px 16px; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 12px; box-sizing: border-box; }
            .label { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .val { font-size: 14px; color: #0f172a; font-weight: 700; word-break: break-all; }
            .badge { display: inline-block; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; font-size: 12px; font-weight: 600; padding: 4px 8px; border-radius: 6px; margin: 2px; }
            .message-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px 10px 10px 4px; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 24px; white-space: pre-wrap; }
            .actions { text-align: center; padding-top: 10px; }
            .reply-btn { display: inline-block; background: #2563eb; color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); }
            .footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="header-tag">✦ Inbound High-Ticket Proposal</div>
              <h1>New Client Discovery Request</h1>
            </div>
            <div class="content">
              <div class="section-title">Client Information</div>
              <div class="cell-full">
                <div class="label">Full Name</div>
                <div class="val">${name}</div>
              </div>
              <div class="cell-full">
                <div class="label">Work Email (Click to Reply)</div>
                <div class="val"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>
              <div class="cell-full">
                <div class="label">Company / Website</div>
                <div class="val">${companyOrUrl}</div>
              </div>

              <div class="section-title" style="margin-top: 20px;">Project & Growth Profile</div>
              <div class="cell-full">
                <div class="label">Focus Pillars Requested</div>
                <div class="val" style="margin-top: 4px;">
                  ${selectedServices.map((s: string) => `<span class="badge">${s}</span>`).join(" ")}
                </div>
              </div>
              <div class="cell-full">
                <div class="label">Monthly Revenue / Scale Target</div>
                <div class="val">${revenue}</div>
              </div>
              <div class="cell-full">
                <div class="label">Preferred Timeline</div>
                <div class="val">${timeline}</div>
              </div>

              <div class="section-title" style="margin-top: 20px;">Primary Bottleneck / Project Goals</div>
              <div class="message-box">${message}</div>

              <div class="actions">
                <a href="mailto:${email}?subject=Re:%20Discovery%20Call%20with%20Ahmad%20Bilal" class="reply-btn">
                  Reply Directly to ${name} →
                </a>
              </div>
            </div>
            <div class="footer">
              Received via Ahmad Bilal AI Agency Booking System • ${submissionTime} UTC
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Elegant Auto-Confirmation Email to the Prospective Client
    const clientConfirmationMail = {
      from: `"Ahmad Bilal" <${smtpUser}>`,
      to: email,
      subject: `Received: Discovery Request for ${companyOrUrl} — Ahmad Bilal`,
      text: `Hi ${name},\n\nThank you for reaching out to Ahmad Bilal Agency. We have received your discovery brief for ${companyOrUrl}.\n\nOur team is reviewing your project requirements and target pipeline. Ahmad will follow up directly within 4–12 business hours with calendar scheduling options and initial strategic notes.\n\nBest regards,\nAhmad Bilal\nFounder & AI Systems Architect\nahmadbilal.agency`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
            .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 32px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.05); }
            .badge { display: inline-block; background: #eff6ff; color: #2563eb; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 5px 12px; border-radius: 999px; margin-bottom: 16px; }
            h2 { font-size: 22px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 12px; }
            p { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 16px; }
            .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin: 20px 0; }
            .box-title { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
            .highlight { color: #0f172a; font-weight: 700; }
            .signoff { margin-top: 28px; border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 14px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="badge">✦ Request Received</div>
            <h2>We have received your strategy brief, ${name}.</h2>
            <p>Thank you for submitting your discovery request. I personally review every technical and growth brief to ensure our team can deliver measurable ROI.</p>
            
            <div class="box">
              <div class="box-title">Overview Summary</div>
              <p style="margin: 0; font-size: 14px; color: #334155;">
                <strong>Company:</strong> ${companyOrUrl}<br>
                <strong>Focus Areas:</strong> ${servicesList}<br>
                <strong>Revenue Target:</strong> ${revenue}
              </p>
            </div>

            <p><strong>Next Step:</strong> You will receive a direct email within <strong>4 to 12 business hours</strong> with available 15-minute strategy calendar slots and initial audit observations.</p>

            <div class="signoff">
              <strong>Ahmad Bilal</strong><br>
              Founder & AI Systems Architect<br>
              <span style="color: #94a3b8; font-size: 13px;">High-Converting Web Systems & B2B Pipeline Automation</span>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send notifications
    await transporter.sendMail(adminMailOptions);

    // Optionally send client confirmation (fail-safe so admin still gets lead if client bounce occurs)
    try {
      await transporter.sendMail(clientConfirmationMail);
    } catch (clientMailErr) {
      console.warn("Client confirmation email could not be sent:", clientMailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Proposal successfully sent! We will reach out shortly.",
    });
  } catch (err: unknown) {
    console.error("Error in /api/send-proposal:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      {
        success: false,
        error: `Could not send proposal email: ${errorMessage}. Please check your SMTP settings or try again.`,
      },
      { status: 500 }
    );
  }
}
