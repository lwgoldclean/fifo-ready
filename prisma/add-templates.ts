import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const templates = [
  {
    title: "FIFO Mining Resume Template",
    description: "A ready-to-use resume template structured for FIFO mining roles. Open this page, click 'Save as PDF', and use it as your guide when building your resume.",
    category: "Templates",
    order: 14,
    published: true,
    content: `
<p style="background:#fff3cd;padding:12px 16px;border-left:4px solid #f59e0b;border-radius:4px;margin-bottom:24px;font-size:14px;color:#78350f;">
  <strong>How to use this template:</strong> Read through the structure below and use it as a guide to write your own resume. Replace everything in <em>[brackets]</em> with your own information. Click <strong>Save as PDF</strong> to download a copy for reference, or copy the structure into a Word document.
</p>

<hr />

<h2 style="text-align:center;font-size:22px;letter-spacing:1px;">[YOUR FULL NAME]</h2>
<p style="text-align:center;color:#555;margin-top:-8px;">[City, State] &nbsp;|&nbsp; [Phone Number] &nbsp;|&nbsp; [Email Address] &nbsp;|&nbsp; [LinkedIn URL — optional]</p>

<hr />

<h2>Professional Summary</h2>
<p><em>Write 2–3 sentences that describe who you are, what you bring, and what you're looking for. Mention your availability for FIFO work and any relevant background.</em></p>
<p>Example: "Physically fit and reliable worker with [X] years of experience in [relevant field: labouring / construction / manufacturing / hospitality]. Holds current White Card and First Aid certificate. Seeking an entry-level FIFO position and committed to building a long-term career in the Australian resources sector."</p>

<hr />

<h2>Tickets &amp; Certifications</h2>
<p><em>List every current ticket with its expiry date. This is the most important section for FIFO applications — put it near the top.</em></p>
<table>
  <thead>
    <tr><th>Certification</th><th>Issuing Body / RTO</th><th>Date Issued</th><th>Expiry</th></tr>
  </thead>
  <tbody>
    <tr><td>White Card (CPCCWHS1001)</td><td>[RTO Name]</td><td>[Month Year]</td><td>No expiry</td></tr>
    <tr><td>First Aid — HLTAID011</td><td>[St John / Red Cross / RTO]</td><td>[Month Year]</td><td>[Month Year]</td></tr>
    <tr><td>CPR — HLTAID009</td><td>[RTO Name]</td><td>[Month Year]</td><td>[Month Year]</td></tr>
    <tr><td>[Forklift Licence LF — if applicable]</td><td>[RTO Name]</td><td>[Month Year]</td><td>No expiry</td></tr>
    <tr><td>[EWP BT — if applicable]</td><td>[RTO Name]</td><td>[Month Year]</td><td>No expiry</td></tr>
    <tr><td>[Any other tickets]</td><td>[RTO Name]</td><td>[Month Year]</td><td>[Expiry]</td></tr>
  </tbody>
</table>

<hr />

<h2>Work Experience</h2>
<p><em>List your most recent roles first. Focus on physical work, teamwork, safety, and any skills transferable to mining. You do not need mining experience.</em></p>

<h3>[Job Title] — [Company Name], [City, State]</h3>
<p><em>[Start Month Year] – [End Month Year / Present]</em></p>
<ul>
  <li>Describe your main responsibilities — focus on physical tasks, safety compliance, and teamwork</li>
  <li>Include anything involving equipment, machinery, or working outdoors</li>
  <li>Mention any safety procedures or protocols you followed</li>
  <li>Quantify where possible: "Managed stockroom inventory of 500+ SKUs"</li>
</ul>

<h3>[Previous Job Title] — [Company Name], [City, State]</h3>
<p><em>[Start Month Year] – [End Month Year]</em></p>
<ul>
  <li>[Responsibility or achievement]</li>
  <li>[Responsibility or achievement]</li>
</ul>

<hr />

<h2>Skills</h2>
<p><em>Include both hard skills (equipment, software, physical capabilities) and soft skills (teamwork, communication, work ethic). Tailor to the role you're applying for.</em></p>
<ul>
  <li>Physical fitness — comfortable working 12-hour shifts in outdoor / industrial environments</li>
  <li>Safety awareness — understanding of WHS procedures, hazard identification, and PPE use</li>
  <li>[Equipment or machinery you can operate]</li>
  <li>[Driver's licence class — C, HR, etc.]</li>
  <li>Team-oriented — experienced working in crews and following instructions from supervisors</li>
  <li>[Any other relevant skills]</li>
</ul>

<hr />

<h2>Education</h2>
<p><em>List your highest qualification and any relevant training. If you completed Year 12, list it. Trade certificates, TAFE diplomas, and apprenticeships are all relevant.</em></p>
<table>
  <thead><tr><th>Qualification</th><th>Institution</th><th>Year Completed</th></tr></thead>
  <tbody>
    <tr><td>[e.g. Year 12 / HSC / Senior Certificate]</td><td>[School Name]</td><td>[Year]</td></tr>
    <tr><td>[Any TAFE or trade qualification]</td><td>[Institution]</td><td>[Year]</td></tr>
  </tbody>
</table>

<hr />

<h2>References</h2>
<p><em>Include 2–3 professional references. Ideally former employers or supervisors. Always contact your referees before listing them — they should be expecting a call.</em></p>
<table>
  <thead><tr><th>Name</th><th>Role</th><th>Company</th><th>Phone</th><th>Email</th></tr></thead>
  <tbody>
    <tr><td>[Name]</td><td>[Their Job Title]</td><td>[Company]</td><td>[Phone]</td><td>[Email]</td></tr>
    <tr><td>[Name]</td><td>[Their Job Title]</td><td>[Company]</td><td>[Phone]</td><td>[Email]</td></tr>
  </tbody>
</table>

<hr />

<h2>Resume Tips</h2>
<ul>
  <li><strong>Keep it to 2 pages maximum</strong> — recruiters scan quickly</li>
  <li><strong>Put your tickets section near the top</strong> — it's what labour hire recruiters check first</li>
  <li><strong>No photo required</strong> — Australian resumes don't typically include one</li>
  <li><strong>Use a clean, simple font</strong> (Arial, Calibri, or similar) at 10–11pt</li>
  <li><strong>Save as a PDF</strong> before sending — formatting stays intact across all devices</li>
  <li><strong>Tailor your summary</strong> for each role type you apply for (camp services vs. production vs. trades assistant)</li>
  <li><strong>Proofread everything</strong> — spelling errors are a common reason for rejection at the shortlisting stage</li>
</ul>
`,
  },
  {
    title: "FIFO Job Readiness Checklist",
    description: "A printable checklist of everything you need to have sorted before you can start your first FIFO role. Work through each section to see where you stand.",
    category: "Templates",
    order: 15,
    published: true,
    content: `
<p style="background:#fff3cd;padding:12px 16px;border-left:4px solid #f59e0b;border-radius:4px;margin-bottom:24px;font-size:14px;color:#78350f;">
  <strong>How to use this checklist:</strong> Print this page (click <strong>Save as PDF</strong> above) and tick off each item as you complete it. Once all boxes are ticked, you are ready to apply and accept a FIFO placement.
</p>

<h2>1. Mandatory Tickets</h2>
<p>These must be complete before any labour hire company will process your application.</p>
<table>
  <thead><tr><th style="width:40px;">Done</th><th>Item</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>&#9744;</td><td><strong>White Card (CPCCWHS1001)</strong></td><td>Nationally recognised, lifetime validity. ~$60–$120 at any RTO.</td></tr>
    <tr><td>&#9744;</td><td><strong>First Aid Certificate (HLTAID011)</strong></td><td>Valid 3 years. ~$100–$160. Get CPR refreshed annually.</td></tr>
  </tbody>
</table>

<h2>2. Recommended Tickets</h2>
<p>Not always mandatory but significantly improve your chances of placement.</p>
<table>
  <thead><tr><th style="width:40px;">Done</th><th>Item</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>&#9744;</td><td>Forklift Licence (LF class)</td><td>~$400–$700, 1–3 days. Opens up warehousing and parts store roles.</td></tr>
    <tr><td>&#9744;</td><td>EWP Boom Type (BT class)</td><td>~$350–$600, 1–2 days. Useful for maintenance support roles.</td></tr>
    <tr><td>&#9744;</td><td>Food Handler Certificate</td><td>~$30, half day online. Needed for kitchenhand / crib attendant roles.</td></tr>
    <tr><td>&#9744;</td><td>HR Driver's Licence</td><td>Required for some driving or heavy plant roles.</td></tr>
  </tbody>
</table>

<h2>3. Documents &amp; Administration</h2>
<table>
  <thead><tr><th style="width:40px;">Done</th><th>Item</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>&#9744;</td><td><strong>Resume updated and tailored for mining</strong></td><td>2 pages max. Tickets section near the top. Saved as PDF.</td></tr>
    <tr><td>&#9744;</td><td><strong>All ticket certificates scanned / photographed</strong></td><td>Clear, legible images. Uploaded to each labour hire portal.</td></tr>
    <tr><td>&#9744;</td><td><strong>2–3 professional references confirmed</strong></td><td>Former employers or supervisors. Warn them calls are coming.</td></tr>
    <tr><td>&#9744;</td><td>100 points of ID ready</td><td>Passport or birth certificate + driver's licence + Medicare card.</td></tr>
    <tr><td>&#9744;</td><td>Tax File Number confirmed</td><td>Needed for payroll setup when placed.</td></tr>
    <tr><td>&#9744;</td><td>Superannuation fund chosen / account open</td><td>You'll need fund details for employment paperwork.</td></tr>
    <tr><td>&#9744;</td><td>Bank account details ready</td><td>BSB and account number for wage payments.</td></tr>
  </tbody>
</table>

<h2>4. Labour Hire Registrations</h2>
<table>
  <thead><tr><th style="width:40px;">Done</th><th>Item</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>&#9744;</td><td>Registered with WorkPac</td><td>workpac.com — Australia's largest mining labour hire company</td></tr>
    <tr><td>&#9744;</td><td>Registered with Programmed / Ventia</td><td>programmed.com.au</td></tr>
    <tr><td>&#9744;</td><td>Registered with Chandler Macleod</td><td>chandlermacleod.com</td></tr>
    <tr><td>&#9744;</td><td>Registered with Hays Mining</td><td>hays.com.au — Mining &amp; Resources division</td></tr>
    <tr><td>&#9744;</td><td>Registered with NRL</td><td>nrl.com.au — WA specialist, good for Pilbara and Goldfields</td></tr>
    <tr><td>&#9744;</td><td>Applied to relevant roles on SEEK and Indeed</td><td>Search: "FIFO entry level", "camp services", "greenhand operator"</td></tr>
  </tbody>
</table>

<h2>5. Physical &amp; Medical Readiness</h2>
<table>
  <thead><tr><th style="width:40px;">Done</th><th>Item</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>&#9744;</td><td>Comfortable working 12-hour physical shifts</td><td>Start exercising regularly now — don't wait until you're placed.</td></tr>
    <tr><td>&#9744;</td><td>Blood pressure in healthy range (&lt;140/90)</td><td>Visit your GP if it's been a while. High BP can delay your PEM.</td></tr>
    <tr><td>&#9744;</td><td>Not using cannabis or other substances</td><td>THC can be detected for up to 30 days in heavy users.</td></tr>
    <tr><td>&#9744;</td><td>Any existing medical conditions documented</td><td>Get a letter from your GP or specialist confirming management plan.</td></tr>
    <tr><td>&#9744;</td><td>Prescription medications and history ready</td><td>Bring to your PEM with prescriptions and management documentation.</td></tr>
  </tbody>
</table>

<h2>6. Practical &amp; Logistical Prep</h2>
<table>
  <thead><tr><th style="width:40px;">Done</th><th>Item</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>&#9744;</td><td>Luggage suitable for a swing (soft bag, 20–23kg)</td><td>Hard-sided suitcases are harder to handle. Airlines prefer 23kg soft bags.</td></tr>
    <tr><td>&#9744;</td><td>PPE (steel-cap boots, hi-vis shirts)</td><td>Some employers provide it; others expect you to arrive with your own basics.</td></tr>
    <tr><td>&#9744;</td><td>Roster and time-away arrangements made at home</td><td>Family / partner aware and prepared. Pets / bills / commitments sorted.</td></tr>
    <tr><td>&#9744;</td><td>Mobile phone plan checked</td><td>Some remote sites have limited or no coverage. Notify family/employer of your communication plan.</td></tr>
    <tr><td>&#9744;</td><td>Airport transport arranged for your first departure</td><td>Check your fly-out location (Perth, Brisbane, etc.) and arrange parking or a lift.</td></tr>
  </tbody>
</table>

<h2>7. Mindset &amp; Knowledge</h2>
<table>
  <thead><tr><th style="width:40px;">Done</th><th>Item</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>&#9744;</td><td>Read all FIFO Ready course documents</td><td>Especially the "Getting In" category — know the process before you apply.</td></tr>
    <tr><td>&#9744;</td><td>Passed all course quizzes (70%+)</td><td>Demonstrates you understand the industry and can talk confidently in interviews.</td></tr>
    <tr><td>&#9744;</td><td>Prepared answers for common interview questions</td><td>Practise your STAR stories. See our FIFO Interview guide.</td></tr>
    <tr><td>&#9744;</td><td>Know your preferred roster and location</td><td>Be ready to answer: "Are you flexible on location?" and "When can you start?"</td></tr>
  </tbody>
</table>

<hr />

<p style="background:#f0fdf4;padding:12px 16px;border-left:4px solid #22c55e;border-radius:4px;font-size:14px;color:#14532d;">
  <strong>All boxes ticked?</strong> You're ready. Go get it.
</p>
`,
  },
];

async function main() {
  console.log("Adding template documents...\n");

  for (const doc of templates) {
    const created = await db.document.create({ data: doc });
    console.log(`✓ Document: "${created.title}"`);
  }

  console.log("\nDone! Added 2 template documents.");
  console.log("Go to /documents to see them.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
