import { resend, FROM_EMAIL } from "./resend";

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
