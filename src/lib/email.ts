import { resend, FROM_EMAIL } from "./resend";

export async function sendIndustryCallAdminNotification(buyerName: string, buyerEmail: string) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: process.env.ADMIN_EMAIL!,
    subject: `New Industry Call Booking — ${buyerName}`,
    html: `<p style="font-family:Arial,sans-serif;font-size:16px;">
      New <strong>1-on-1 industry call</strong> purchase on <strong>FIFO Ready</strong>.<br><br>
      <strong>Name:</strong> ${buyerName}<br>
      <strong>Email:</strong> ${buyerEmail}<br>
      <strong>Amount:</strong> $99.00 AUD<br><br>
      The student has been sent a Calendly link to book their slot.
    </p>`,
  });
}

export async function sendIndustryCallConfirmation(buyerName: string, buyerEmail: string, calendlyUrl: string) {
  const firstName = buyerName.split(" ")[0];
  await resend.emails.send({
    from: FROM_EMAIL,
    to: buyerEmail,
    replyTo: process.env.ADMIN_EMAIL!,
    subject: "Your 1-on-1 Industry Call is Confirmed — Book Your Slot",
    html: `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f9fafb;margin:0;padding:40px 20px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1);">
    <div style="background:#1C1917;padding:28px 32px;text-align:center;">
      <p style="color:#F59E0B;font-weight:bold;font-size:20px;margin:0;">⛏ FIFO Ready</p>
    </div>
    <div style="padding:32px;">
      <h1 style="font-size:22px;font-weight:bold;color:#111827;margin-top:0;">
        G'day ${firstName}, your call is confirmed!
      </h1>
      <p style="color:#4B5563;line-height:1.6;">
        Click below to choose a time that works for you:
      </p>
      <div style="text-align:center;margin:32px 0;">
        <a href="${calendlyUrl}" style="background:#F59E0B;color:#fff;font-weight:bold;font-size:16px;padding:14px 32px;border-radius:8px;text-decoration:none;display:inline-block;">
          Book Your Call →
        </a>
      </div>
      <p style="color:#4B5563;line-height:1.6;">On the call you can ask anything:</p>
      <ul style="color:#4B5563;line-height:2;padding-left:20px;">
        <li>How to get noticed by labour hire companies</li>
        <li>What the first week on site is actually like</li>
        <li>How to handle the pre-employment medical</li>
        <li>Which roles are easiest to break into with no experience</li>
        <li>Any questions about FIFO life, pay, rosters, or conditions</li>
      </ul>
      <p style="color:#4B5563;line-height:1.6;">— Will, FIFO Ready</p>
    </div>
    <div style="background:#F9FAFB;padding:20px 32px;border-top:1px solid #E5E7EB;">
      <p style="color:#9CA3AF;font-size:12px;margin:0;text-align:center;">
        fifoready.com.au
      </p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendResumeReviewAdminNotification(buyerName: string, buyerEmail: string) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: process.env.ADMIN_EMAIL!,
    subject: `New Resume Review Order — ${buyerName}`,
    html: `<p style="font-family:Arial,sans-serif;font-size:16px;">
      New <strong>resume review</strong> purchase on <strong>FIFO Ready</strong>.<br><br>
      <strong>Name:</strong> ${buyerName}<br>
      <strong>Email:</strong> ${buyerEmail}<br>
      <strong>Amount:</strong> $49.00 AUD<br><br>
      Please review their resume and reply within 48 hours.
    </p>`,
  });
}

export async function sendResumeReviewConfirmation(buyerName: string, buyerEmail: string) {
  const firstName = buyerName.split(" ")[0];
  await resend.emails.send({
    from: FROM_EMAIL,
    to: buyerEmail,
    replyTo: process.env.ADMIN_EMAIL!,
    subject: "Your Resume Review is Confirmed",
    html: `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f9fafb;margin:0;padding:40px 20px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1);">
    <div style="background:#1C1917;padding:28px 32px;text-align:center;">
      <p style="color:#F59E0B;font-weight:bold;font-size:20px;margin:0;">⛏ FIFO Ready</p>
    </div>
    <div style="padding:32px;">
      <h1 style="font-size:22px;font-weight:bold;color:#111827;margin-top:0;">
        G'day ${firstName}, your resume review is confirmed!
      </h1>
      <p style="color:#4B5563;line-height:1.6;">
        To get started, simply <strong>reply to this email</strong> with your resume attached (PDF or Word).
      </p>
      <p style="color:#4B5563;line-height:1.6;">
        We'll send you personalised feedback within <strong>48 hours</strong> — covering:
      </p>
      <ul style="color:#4B5563;line-height:2;padding-left:20px;">
        <li>Layout and formatting for FIFO applications</li>
        <li>How to highlight relevant experience (even without mining experience)</li>
        <li>Keywords and phrases FIFO employers look for</li>
        <li>Any gaps or red flags to address</li>
      </ul>
      <p style="color:#4B5563;line-height:1.6;">
        Just hit reply and attach your resume. We'll take it from there.
      </p>
      <p style="color:#4B5563;line-height:1.6;">— Will, FIFO Ready</p>
    </div>
    <div style="background:#F9FAFB;padding:20px 32px;border-top:1px solid #E5E7EB;">
      <p style="color:#9CA3AF;font-size:12px;margin:0;text-align:center;">
        fifoready.com.au
      </p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendPurchaseNotification(buyerEmail: string, amountAud: string) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: process.env.ADMIN_EMAIL!,
    subject: `💰 New sale — ${amountAud} AUD`,
    html: `<p style="font-family:Arial,sans-serif;font-size:16px;">
      New purchase on <strong>FIFO Ready</strong>.<br><br>
      <strong>Buyer:</strong> ${buyerEmail}<br>
      <strong>Amount:</strong> ${amountAud} AUD<br>
    </p>`,
  });
}

export async function sendContactNotification(
  studentName: string,
  studentEmail: string,
  subject: string,
  message: string
) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: process.env.ADMIN_EMAIL!,
    replyTo: studentEmail,
    subject: `Student message: ${subject} — ${studentName}`,
    html: `<p style="font-family:Arial,sans-serif;font-size:16px;">
      Message from a student on <strong>FIFO Ready</strong>.<br><br>
      <strong>Name:</strong> ${studentName}<br>
      <strong>Email:</strong> ${studentEmail}<br>
      <strong>Subject:</strong> ${subject}<br><br>
      <strong>Message:</strong><br>
      ${message.replace(/\n/g, "<br>")}
    </p>`,
  });
}

export async function sendContactConfirmation(
  studentName: string,
  studentEmail: string,
  subject: string
) {
  const firstName = studentName.split(" ")[0];
  await resend.emails.send({
    from: FROM_EMAIL,
    to: studentEmail,
    replyTo: process.env.ADMIN_EMAIL!,
    subject: "Got your message — FIFO Ready",
    html: `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f9fafb;margin:0;padding:40px 20px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1);">
    <div style="background:#1C1917;padding:28px 32px;text-align:center;">
      <p style="color:#F59E0B;font-weight:bold;font-size:20px;margin:0;">⛏ FIFO Ready</p>
    </div>
    <div style="padding:32px;">
      <h1 style="font-size:22px;font-weight:bold;color:#111827;margin-top:0;">
        G'day ${firstName}, message received!
      </h1>
      <p style="color:#4B5563;line-height:1.6;">
        Thanks for reaching out. I've received your message about <strong>${subject}</strong> and will get back to you within 24–48 hours.
      </p>
      <p style="color:#4B5563;line-height:1.6;">
        You can reply directly to this email if you have anything to add.
      </p>
      <p style="color:#4B5563;line-height:1.6;">— Will, FIFO Ready</p>
    </div>
    <div style="background:#F9FAFB;padding:20px 32px;border-top:1px solid #E5E7EB;">
      <p style="color:#9CA3AF;font-size:12px;margin:0;text-align:center;">
        fifoready.com.au
      </p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendLeadEmail(
  to: string,
  firstName: string,
  guideUrl: string
) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: "Your Free FIFO Fast-Track Guide is here 🎯",
    html: buildLeadEmail(firstName, guideUrl),
  });
}

function buildLeadEmail(firstName: string, guideUrl: string): string {
  return `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f9fafb;margin:0;padding:40px 20px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1);">
    <div style="background:#1C1917;padding:28px 32px;text-align:center;">
      <p style="color:#F59E0B;font-weight:bold;font-size:20px;margin:0;">⛏ FIFO Ready</p>
    </div>
    <div style="padding:32px;">
      <h1 style="font-size:22px;font-weight:bold;color:#111827;margin-top:0;">
        G'day ${firstName}, your guide is ready 🎯
      </h1>
      <p style="color:#4B5563;line-height:1.6;">
        Here's your copy of the <strong>FIFO Fast-Track Guide</strong> — the exact 5-step process
        2,400+ Aussies have used to land their first mining role.
      </p>
      <p style="color:#4B5563;line-height:1.6;">Inside you'll find:</p>
      <ul style="color:#4B5563;line-height:2;padding-left:20px;">
        <li>The certifications you actually need (and the ones that are a waste of money)</li>
        <li>The 8 documents every FIFO employer will ask for</li>
        <li>How to prepare for your pre-employment medical</li>
        <li>The 12 companies actively hiring entry-level workers right now</li>
        <li>The 3 interview questions every hiring manager asks — with sample answers</li>
      </ul>
      <div style="text-align:center;margin:32px 0;">
        <a href="${guideUrl}" style="background:#F59E0B;color:#fff;font-weight:bold;font-size:16px;padding:14px 32px;border-radius:8px;text-decoration:none;display:inline-block;">
          Read Your Free Guide →
        </a>
      </div>
      <div style="border-top:1px solid #E5E7EB;padding-top:24px;margin-top:24px;">
        <p style="color:#6B7280;font-size:14px;line-height:1.6;">
          <strong style="color:#111827;">Want the full toolkit?</strong>
          The guide gives you the roadmap.
          <a href="https://fifoready.com.au" style="color:#F59E0B;">FIFO Ready</a>
          gives you every document template, medical prep guide, interview question bank,
          and resource to execute each step — all for a one-time $4.99 AUD.
        </p>
      </div>
    </div>
    <div style="background:#F9FAFB;padding:20px 32px;border-top:1px solid #E5E7EB;">
      <p style="color:#9CA3AF;font-size:12px;margin:0;text-align:center;">
        You're receiving this because you requested the FIFO Fast-Track Guide from fifoready.com.au.
      </p>
    </div>
  </div>
</body>
</html>`;
}
