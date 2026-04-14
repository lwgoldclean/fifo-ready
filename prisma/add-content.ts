import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// ── DOCUMENTS ────────────────────────────────────────────────────────────────

const documents = [
  {
    title: "Your Step-by-Step Roadmap to Landing Your First FIFO Job",
    description: "A clear, no-fluff guide through every step from deciding to go FIFO to completing your first swing on site.",
    category: "Getting In",
    order: 8,
    published: true,
    content: `
<h2>The Path Is Clearer Than You Think</h2>
<p>Thousands of Australians land their first FIFO job every year — most with zero mining experience. What separates the ones who get there quickly from those who spin their wheels for months is having a clear roadmap. This guide gives you that roadmap, step by step.</p>

<h2>Step 1: Confirm You Meet the Baseline Requirements</h2>
<p>Before you invest time and money in tickets, make sure you can actually work FIFO. The non-negotiables are:</p>
<ul>
  <li><strong>Age:</strong> 18+ (most employers, some require 21+ for certain roles)</li>
  <li><strong>Right to work in Australia:</strong> Australian citizen, permanent resident, or valid work visa</li>
  <li><strong>Physical fitness:</strong> You need to be able to perform physical work for 10-12 hour shifts in heat</li>
  <li><strong>Clean (or manageable) criminal history:</strong> A background check is standard. Minor offences are often fine; serious convictions may disqualify you — check with employers</li>
  <li><strong>No unmanaged medical conditions:</strong> Certain conditions can limit site access — your pre-employment medical will assess this</li>
</ul>
<blockquote><strong>Important:</strong> You do not need mining experience, trade qualifications, or a degree for most entry-level FIFO roles. Attitude, reliability, and physical fitness matter more at this stage.</blockquote>

<h2>Step 2: Get Your White Card (Do This First)</h2>
<p>The <strong>White Card</strong> (unit: CPCCWHS1001) is a nationally recognised safety induction card that is legally required before you can work on any construction or mine site in Australia. It is your most important ticket and should be your first step.</p>
<ul>
  <li><strong>Cost:</strong> $60–$120 depending on provider and state</li>
  <li><strong>Time:</strong> Half day to 1 day (online + in-person options available)</li>
  <li><strong>Valid:</strong> For life once issued</li>
  <li><strong>Where:</strong> Search "White Card course [your city]" — look for a Registered Training Organisation (RTO)</li>
</ul>
<p>Without a White Card, no labour hire company or mine will consider your application. Get this done before anything else.</p>

<h2>Step 3: Get Your First Aid Certificate</h2>
<p>A current First Aid certificate (<strong>HLTAID011 – Provide First Aid</strong>, formerly HLTAID003) is required or strongly preferred by most FIFO employers. It costs around $100–$150, takes one day, and is valid for 3 years (CPR component requires annual refresh).</p>
<p>Many RTOs offer White Card + First Aid as a combined course — this is a cost-effective option.</p>

<h2>Step 4: Get Additional Tickets If You Can</h2>
<p>Having more tickets increases the number of roles you're eligible for and makes you more competitive. The most practical next tickets for entry-level FIFO candidates are:</p>
<ul>
  <li><strong>Forklift Licence (LF class):</strong> Opens up warehousing, parts store, and camp support roles</li>
  <li><strong>EWP – Boom Type (BT class):</strong> Useful for maintenance and civils roles</li>
  <li><strong>HR Driver's Licence:</strong> Useful but not essential for camp services roles</li>
</ul>
<p>You don't need all of these before applying — the White Card and First Aid are the priority. Additional tickets can be added over time or funded by your employer once you're placed.</p>

<h2>Step 5: Build a Mining-Ready Resume</h2>
<p>Your resume needs to communicate reliability, physical capability, and safety awareness — even if you've never set foot on a mine site.</p>
<ul>
  <li>Lead with your tickets section — list every current certification with its expiry date</li>
  <li>Emphasise any physical or outdoor work: labouring, trades assistance, construction, agriculture, warehouse work</li>
  <li>Highlight teamwork, punctuality, and following procedures</li>
  <li>Include at least 2 referee contacts — former employers or supervisors preferred</li>
  <li>Keep it to 2 pages maximum</li>
</ul>
<p>See the document "<strong>Writing a Mining Resume That Gets Noticed</strong>" for detailed guidance and examples.</p>

<h2>Step 6: Register with Labour Hire Companies</h2>
<p>The majority of entry-level FIFO workers get on site through <strong>labour hire companies</strong>, not direct mine operator applications. These companies have long-term supply contracts with BHP, Rio Tinto, Fortescue, and other miners, and they fill roles on request.</p>
<p>Key companies to register with:</p>
<ul>
  <li>WorkPac</li>
  <li>Programmed (now part of Ventia)</li>
  <li>Chandler Macleod</li>
  <li>Hays Mining</li>
  <li>Adecco</li>
  <li>NRL (National Resources Labour)</li>
</ul>
<p>Register with <strong>all of them</strong> — not just one. Upload a complete profile, all ticket documents, and a current resume. Set your location as flexible across states for maximum opportunities.</p>

<h2>Step 7: Apply and Follow Up</h2>
<p>Once registered, apply to any roles that match your skills and follow up with a phone call within 2-3 business days. Recruiters deal with hundreds of candidates — those who follow up professionally stand out.</p>
<ul>
  <li>Apply on SEEK, Indeed, and each company's internal portal</li>
  <li>Call the recruiter: "Hi, my name is [Name], I applied for the [Role] position yesterday and wanted to introduce myself and confirm my application came through."</li>
  <li>Be flexible on start dates and rosters — saying "I'm available immediately" helps</li>
</ul>

<h2>Step 8: Nail the Phone Screen and Interview</h2>
<p>Most FIFO initial interviews are a 10–20 minute phone screen followed by a face-to-face or video interview. You will be asked about your availability, why you want FIFO work, your relevant experience, and your attitude toward safety.</p>
<p>Key rules: be honest, be enthusiastic, and have a specific answer ready for "Why do you want to work FIFO?" that isn't just "for the money."</p>
<p>See the document "<strong>The FIFO Interview: Common Questions and How to Answer Them</strong>" for full interview prep.</p>

<h2>Step 9: Complete Your Pre-Employment Medical</h2>
<p>Once you're shortlisted or offered a role, you'll be sent to a medical provider for a <strong>Pre-Employment Medical (PEM)</strong>. This assesses whether you are fit to perform the physical requirements of the role.</p>
<p>The PEM typically covers: hearing, vision, lung function, musculoskeletal assessment, blood pressure, and a urine drug screen. Most are conducted by Sonic Health Plus clinics around Australia.</p>
<p>You usually don't pay for the PEM — the employer or labour hire company covers it once you've been offered a placement.</p>

<h2>Step 10: Complete Site Induction and Your First Swing</h2>
<p>After passing your PEM and background check, you'll receive a start date. Before working on site, you'll complete a site-specific induction — usually 1-2 days — covering site rules, emergency procedures, hazards, and access protocols.</p>
<p>Then: first swing. Show up early, be helpful, don't complain, ask questions, and follow the lead of experienced workers. Your goal on the first swing is to demonstrate that you're reliable, safe, and worth calling back. Everything else can be learned.</p>

<h2>Realistic Timeframe</h2>
<table>
  <thead><tr><th>Step</th><th>Timeframe</th></tr></thead>
  <tbody>
    <tr><td>White Card + First Aid</td><td>1-2 days to complete</td></tr>
    <tr><td>Resume ready</td><td>2-3 days</td></tr>
    <tr><td>Registered with labour hire companies</td><td>1 week</td></tr>
    <tr><td>First phone screen / interview</td><td>1-4 weeks after registering</td></tr>
    <tr><td>Pre-employment medical</td><td>Within 1 week of offer</td></tr>
    <tr><td>First day on site</td><td>4-12 weeks from starting this roadmap</td></tr>
  </tbody>
</table>
<p>Many people land their first FIFO role within 6 weeks of starting this process. Some take 3 months. The biggest variable is how proactive you are with follow-ups and how flexible you are with location and role type.</p>
`,
  },
  {
    title: "Tickets & Certifications: What You Need and How to Get Them",
    description: "A complete guide to every ticket and certification relevant to FIFO mining work — what each is for, how long it takes, what it costs, and where to get it.",
    category: "Getting In",
    order: 9,
    published: true,
    content: `
<h2>Why Tickets Matter</h2>
<p>In the Australian resources sector, <strong>tickets</strong> (licences and certifications) are your currency. They determine which roles you can fill, which sites will accept you, and how quickly labour hire companies can place you. Some tickets are mandatory for everyone on site; others open up specific higher-paying roles.</p>
<p>This guide covers every ticket relevant to FIFO work — what it is, who needs it, how long it takes, what it costs, and where to get it.</p>

<h2>The Mandatory Baseline: White Card</h2>
<table>
  <thead><tr><th>Detail</th><th>Info</th></tr></thead>
  <tbody>
    <tr><td><strong>Full name</strong></td><td>General Construction Induction Card</td></tr>
    <tr><td><strong>Unit code</strong></td><td>CPCCWHS1001</td></tr>
    <tr><td><strong>Who needs it</strong></td><td>Everyone who works on a construction or mine site — no exceptions</td></tr>
    <tr><td><strong>Cost</strong></td><td>$60–$120</td></tr>
    <tr><td><strong>Time to complete</strong></td><td>Half day to 1 full day</td></tr>
    <tr><td><strong>Validity</strong></td><td>Lifetime — does not expire</td></tr>
    <tr><td><strong>Delivery</strong></td><td>In-person (preferred), online, or blended</td></tr>
    <tr><td><strong>Where to get it</strong></td><td>Any Registered Training Organisation (RTO) — search "White Card [your city]"</td></tr>
  </tbody>
</table>
<blockquote><strong>Do this first.</strong> No labour hire company will process your application without a White Card on file.</blockquote>

<h2>First Aid Certificate</h2>
<table>
  <thead><tr><th>Detail</th><th>Info</th></tr></thead>
  <tbody>
    <tr><td><strong>Unit code</strong></td><td>HLTAID011 – Provide First Aid (includes CPR: HLTAID009)</td></tr>
    <tr><td><strong>Who needs it</strong></td><td>Required or strongly preferred by most FIFO employers</td></tr>
    <tr><td><strong>Cost</strong></td><td>$100–$160</td></tr>
    <tr><td><strong>Time to complete</strong></td><td>1 day</td></tr>
    <tr><td><strong>Validity</strong></td><td>3 years (CPR component must be renewed annually)</td></tr>
    <tr><td><strong>Where to get it</strong></td><td>St John Ambulance, Red Cross, any RTO offering health units</td></tr>
  </tbody>
</table>

<h2>Forklift Licence (LF Class)</h2>
<table>
  <thead><tr><th>Detail</th><th>Info</th></tr></thead>
  <tbody>
    <tr><td><strong>Licence class</strong></td><td>LF – Forklift Truck</td></tr>
    <tr><td><strong>Who needs it</strong></td><td>Anyone operating a forklift — common in warehousing, maintenance, and parts store roles</td></tr>
    <tr><td><strong>Cost</strong></td><td>$400–$700</td></tr>
    <tr><td><strong>Time to complete</strong></td><td>1–3 days practical training + assessment</td></tr>
    <tr><td><strong>Validity</strong></td><td>Lifetime (attached to your driver's licence)</td></tr>
    <tr><td><strong>Where to get it</strong></td><td>RTOs with forklift facilities — TAFE, private training centres</td></tr>
  </tbody>
</table>

<h2>Elevated Work Platform – Boom Type (BT Class)</h2>
<table>
  <thead><tr><th>Detail</th><th>Info</th></tr></thead>
  <tbody>
    <tr><td><strong>Licence class</strong></td><td>BT – Boom-type Elevated Work Platform (&gt;11 metres)</td></tr>
    <tr><td><strong>Who needs it</strong></td><td>Workers operating boom lifts / cherry pickers — useful for maintenance and civils</td></tr>
    <tr><td><strong>Cost</strong></td><td>$350–$600</td></tr>
    <tr><td><strong>Time to complete</strong></td><td>1–2 days</td></tr>
    <tr><td><strong>Validity</strong></td><td>Lifetime (attached to driver's licence)</td></tr>
    <tr><td><strong>Where to get it</strong></td><td>RTOs with EWP equipment — check local training providers</td></tr>
  </tbody>
</table>

<h2>Dogging Licence (DG Class)</h2>
<table>
  <thead><tr><th>Detail</th><th>Info</th></tr></thead>
  <tbody>
    <tr><td><strong>Licence class</strong></td><td>DG – Dogging</td></tr>
    <tr><td><strong>What it allows</strong></td><td>Directing crane operations, slinging and securing loads for lifting</td></tr>
    <tr><td><strong>Who needs it</strong></td><td>Trades assistants, riggers, maintenance workers</td></tr>
    <tr><td><strong>Cost</strong></td><td>$800–$1,400</td></tr>
    <tr><td><strong>Time to complete</strong></td><td>5 days</td></tr>
    <tr><td><strong>Validity</strong></td><td>Lifetime licence</td></tr>
    <tr><td><strong>Prerequisite</strong></td><td>White Card</td></tr>
    <tr><td><strong>Where to get it</strong></td><td>RTOs specialising in rigging and lifting — search "Dogging course [your state]"</td></tr>
  </tbody>
</table>

<h2>Rigging Licences (RA / RB / RI Classes)</h2>
<p>Rigging licences cover the rigging and securing of loads, and there are three levels:</p>
<table>
  <thead><tr><th>Class</th><th>Scope</th><th>Cost</th><th>Duration</th></tr></thead>
  <tbody>
    <tr><td><strong>RI – Basic Rigging</strong></td><td>Basic rigging tasks — mast climbing, gin wheels, static lines</td><td>$1,000–$1,500</td><td>5 days</td></tr>
    <tr><td><strong>RB – Intermediate Rigging</strong></td><td>Rigging with crane, hoist and suspended scaffolding</td><td>$1,200–$1,800</td><td>5 days</td></tr>
    <tr><td><strong>RA – Advanced Rigging</strong></td><td>Full scope including complex crane work and rigging engineering</td><td>$2,000–$3,000</td><td>10 days</td></tr>
  </tbody>
</table>
<p>For most entry-level roles, rigging is not required. It becomes valuable once you're on site and looking to move into maintenance or civils.</p>

<h2>Heavy Rigid (HR) Driver's Licence</h2>
<p>An <strong>HR licence</strong> authorises you to drive vehicles over 8 tonnes (single rear axle). It is useful for haul truck driving, water truck, and other site vehicle roles — though most heavy haul truck training is done on site by the employer.</p>
<ul>
  <li><strong>Cost:</strong> $800–$1,500 including lessons and testing</li>
  <li><strong>Requirement:</strong> Must hold a C (car) licence for at least 1 year first</li>
  <li><strong>Timeframe:</strong> Typically 1–3 days lessons + a practical test</li>
</ul>

<h2>Confined Space Entry</h2>
<p>A confined space entry competency (<strong>RIIWHS202E</strong>) is required for anyone entering confined spaces such as tanks, vessels, or enclosed plant areas. It's a 1-day course costing around $300–$500. Many sites require this regardless of role.</p>

<h2>Gas Testing / Atmosphere Monitoring</h2>
<p>The <strong>RIIWHS205E</strong> unit covers the use of gas detection equipment before confined space entry. Often taken alongside the confined space entry course. Cost: $300–$500, half to 1 day.</p>

<h2>Site-Specific Inductions (Once Employed)</h2>
<p>These are not tickets you get beforehand — they are conducted by the mine operator at the start of employment and cover:</p>
<ul>
  <li>Site-specific emergency procedures and muster points</li>
  <li>Site rules (alcohol, mobile phones, speed limits)</li>
  <li>Specific hazards present on that site</li>
  <li>Access and egress routes</li>
  <li>Reporting procedures</li>
</ul>
<p>You'll complete a site induction every time you start at a new site, even if you've worked FIFO before.</p>

<h2>Recommended Ticket Order for New Entrants</h2>
<ol>
  <li><strong>White Card</strong> — do this first, no exceptions</li>
  <li><strong>First Aid (HLTAID011)</strong> — do this second, often the same week</li>
  <li><strong>Forklift LF</strong> — if you want broader role options quickly</li>
  <li><strong>EWP BT</strong> — pairs well with forklift for maintenance support roles</li>
  <li><strong>HR Licence</strong> — if you're targeting driving or operator roles</li>
  <li><strong>Dogging / Rigging</strong> — invest in these once you're on site and know your direction</li>
</ol>
<blockquote>Many employers will fund additional tickets once you're placed on site. You don't need to spend thousands before your first role — the White Card and First Aid will get you through the door.</blockquote>
`,
  },
  {
    title: "The FIFO Pre-Employment Medical: What to Expect and How to Pass",
    description: "Everything you need to know about the FIFO pre-employment medical — what's tested, what the standards are, what can disqualify you, and how to give yourself the best chance.",
    category: "Getting In",
    order: 10,
    published: true,
    content: `
<h2>What Is a Pre-Employment Medical?</h2>
<p>A <strong>Pre-Employment Medical (PEM)</strong> is a structured health assessment that determines whether you are physically and medically fit to perform the duties of a specific FIFO role. It is a standard part of the hiring process for almost all mine site positions in Australia.</p>
<p>The PEM is not a punishment or a hurdle designed to catch people out — it exists to protect both you and your workmates. Mine sites are physically demanding environments, and unmanaged health conditions can create serious safety risks.</p>
<blockquote><strong>Who pays?</strong> In the vast majority of cases, the employer or labour hire company pays for your PEM once a conditional job offer has been made. You should not be asked to pay for it upfront.</blockquote>

<h2>Where PEMs Are Conducted</h2>
<p>The most common provider of FIFO pre-employment medicals in Australia is <strong>Sonic Health Plus</strong>, which has clinics in every major city and most regional areas. Other providers include:</p>
<ul>
  <li>Medibank Health Solutions</li>
  <li>Site-specific arrangements through the mine's medical team</li>
  <li>Some specialist occupational health clinics</li>
</ul>
<p>You will typically be given a referral form by your employer or labour hire company and sent to their nominated clinic.</p>

<h2>What Is Tested in a Standard FIFO PEM</h2>

<h3>1. Audiometry (Hearing Test)</h3>
<p>You will sit in a soundproof booth and press a button when you hear tones at different frequencies. Mining environments involve significant noise exposure, and a baseline hearing test is required for all workers. Hearing aids or mild hearing loss generally do not disqualify you — the test establishes a baseline for ongoing monitoring.</p>

<h3>2. Spirometry (Lung Function)</h3>
<p>You'll breathe into a tube device to measure your lung capacity and airflow rate. This detects conditions like asthma or COPD. Mild controlled asthma with appropriate medication is usually fine; uncontrolled or severe respiratory conditions may require further review.</p>

<h3>3. Vision Assessment</h3>
<p>A standard visual acuity test. Corrected vision (glasses or contact lenses) is generally acceptable for most roles. Colour blindness assessments may be included for certain roles involving colour-coded equipment or wiring.</p>

<h3>4. Musculoskeletal Assessment</h3>
<p>A physiotherapist or nurse will assess your range of motion, joint health, and physical capability. You may be asked to perform tasks like bending, squatting, gripping, and lifting. This is role-dependent — a camp services cleaner has different physical requirements than a production operator running heavy machinery.</p>
<p>Declare any previous injuries, surgeries, or chronic pain. Hiding conditions and then being injured on site creates serious legal and insurance complications.</p>

<h3>5. Cardiovascular Assessment</h3>
<p>Blood pressure is measured, and your heart rate may be checked. A resting blood pressure of 140/90 mmHg or above (Stage 1 hypertension) will typically trigger further review. If your blood pressure is elevated, it may be worth visiting your GP before the PEM to manage it.</p>

<h3>6. Blood Tests</h3>
<p>A fasting or non-fasting blood test is taken to check glucose levels (diabetes screening), cholesterol, kidney function, and full blood count. Unmanaged Type 2 diabetes with poor blood glucose control can be a concern for remote site work — but well-managed conditions with medical documentation are usually accommodated.</p>

<h3>7. Drug and Alcohol Screen</h3>
<p>A urine drug screen is conducted as part of the PEM. This is non-negotiable — a positive result will result in immediate disqualification. The substances tested for include:</p>
<table>
  <thead><tr><th>Substance</th><th>Typical Detection Window</th></tr></thead>
  <tbody>
    <tr><td>Cannabis (THC)</td><td>3–7 days (casual); up to 30 days (heavy/daily user)</td></tr>
    <tr><td>Methamphetamine / Amphetamines</td><td>2–4 days</td></tr>
    <tr><td>Cocaine</td><td>2–4 days</td></tr>
    <tr><td>Opiates (heroin, codeine)</td><td>2–4 days</td></tr>
    <tr><td>Benzodiazepines</td><td>3–7 days (therapeutic); up to 30 days (heavy use)</td></tr>
    <tr><td>Alcohol (BAC)</td><td>12–24 hours</td></tr>
  </tbody>
</table>
<blockquote><strong>Cannabis is the most common cause of a failed drug screen.</strong> If you use cannabis recreationally, you need to stop well in advance of your PEM. THC is fat-soluble and can remain detectable in urine for weeks in regular users.</blockquote>

<h2>What Common Results Mean</h2>
<table>
  <thead><tr><th>Result</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Fit for duty</td><td>You pass — placement proceeds</td></tr>
    <tr><td>Fit with restrictions</td><td>You can work but with specific limitations (e.g., no work at heights)</td></tr>
    <tr><td>Further review required</td><td>Additional tests or specialist review needed — placement on hold</td></tr>
    <tr><td>Unfit for duty</td><td>You do not meet the requirements for this role</td></tr>
  </tbody>
</table>
<p>An "unfit" result for one role does not necessarily mean unfit for all FIFO work — it depends on the specific role's demands. A sedentary camp role has far lower physical demands than an underground operator role.</p>

<h2>Conditions That Often Require Medical Documentation (But Don't Automatically Disqualify)</h2>
<ul>
  <li>Well-controlled asthma with a management plan</li>
  <li>Type 2 diabetes (well-managed with HbA1c in target range)</li>
  <li>Hypertension controlled with medication</li>
  <li>Previous surgery or injuries (with clearance from treating doctor)</li>
  <li>Mental health conditions being actively treated</li>
</ul>
<p>In these cases, bring your medical management plan, a letter from your GP or specialist, and current test results to the PEM. Being organised and transparent significantly improves your outcome.</p>

<h2>How to Prepare for Your PEM</h2>
<ol>
  <li><strong>Stop all cannabis use immediately</strong> — the earlier the better</li>
  <li><strong>Avoid alcohol for at least 48 hours</strong> before the test</li>
  <li><strong>Drink plenty of water</strong> in the days leading up — stay hydrated</li>
  <li><strong>Get 7–8 hours of sleep</strong> the night before — this affects blood pressure readings</li>
  <li><strong>Exercise regularly</strong> in the weeks before — improves cardiovascular and musculoskeletal results</li>
  <li><strong>Manage your blood pressure</strong> — if yours runs high, visit your GP and reduce sodium intake and stress</li>
  <li><strong>Bring your prescription medications and a management plan</strong> if you have any chronic conditions</li>
  <li><strong>Be honest</strong> — declare injuries and conditions. Non-disclosure and then injury on site creates serious consequences</li>
</ol>

<h2>How Long Does a PEM Take?</h2>
<p>A standard PEM takes between 1.5 and 3 hours depending on the role and the number of tests required. Results are typically provided within 24–48 hours, though some blood test results may take 3–5 days.</p>
`,
  },
  {
    title: "Labour Hire Companies: How to Register and Get Picked",
    description: "The major labour hire companies in Australian mining, how to register with them effectively, and the strategies that get candidates placed faster.",
    category: "Getting In",
    order: 11,
    published: true,
    content: `
<h2>Why Labour Hire Is the Main Entry Point</h2>
<p>The vast majority of FIFO workers — especially those starting out — get their first site placement through a <strong>labour hire company</strong>. Direct employment by a mine operator (BHP, Rio Tinto, Fortescue) is competitive and usually reserved for experienced workers or specialist roles.</p>
<p>Labour hire companies hold long-term contracts with mine operators to supply workers on demand. When a mine needs another 10 cleaners for a shutdown, they call WorkPac. When they need 20 process operators for a ramp-up, they call Programmed. Your job is to be on those companies' books, profile complete, tickets current — ready to go when the call comes.</p>

<h2>The Major Labour Hire Companies in Australian Mining</h2>

<h3>WorkPac</h3>
<p>Australia's largest mining labour hire company. Offices in every major mining hub: Perth, Brisbane, Mackay, Kalgoorlie, Newman, Karratha. Has supply agreements with most major miners in WA and QLD.</p>
<ul>
  <li><strong>Register:</strong> workpac.com → Candidates → Register</li>
  <li><strong>Strength:</strong> Volume — more vacancies than anyone else</li>
  <li><strong>Best for:</strong> Production, maintenance, camp services, trades</li>
</ul>

<h3>Programmed (Ventia)</h3>
<p>One of Australia's largest workforce solutions companies, now part of the Ventia group. Strong presence in WA iron ore and gold operations.</p>
<ul>
  <li><strong>Register:</strong> programmed.com.au → Job Seekers</li>
  <li><strong>Strength:</strong> Strong relationships with major WA operators</li>
  <li><strong>Best for:</strong> Maintenance, electrical, camp services</li>
</ul>

<h3>Chandler Macleod</h3>
<p>A subsidiary of the Recruit Holdings group. Strong in both mining and civil construction labour hire nationally.</p>
<ul>
  <li><strong>Register:</strong> chandlermacleod.com → Job Seekers</li>
  <li><strong>Strength:</strong> Good relationships with QLD coal operations</li>
  <li><strong>Best for:</strong> Trades, production, clerical support roles</li>
</ul>

<h3>Hays Mining</h3>
<p>A specialist division of the global Hays recruitment group. Particularly strong in technical, engineering, and mid-senior level roles — but also places entry-level workers.</p>
<ul>
  <li><strong>Register:</strong> hays.com.au → Mining &amp; Resources</li>
  <li><strong>Strength:</strong> More personalised service, good for follow-up</li>
</ul>

<h3>Adecco</h3>
<p>Global staffing company with strong mining industry presence in Australia, particularly in WA.</p>
<ul>
  <li><strong>Register:</strong> adecco.com.au → Job Seekers</li>
  <li><strong>Strength:</strong> Large company with diverse role types</li>
</ul>

<h3>NRL (National Resources Labour)</h3>
<p>An Australian-owned specialist mining and resources labour hire company. Particularly active in the Pilbara and Goldfields regions of WA.</p>
<ul>
  <li><strong>Register:</strong> nrl.com.au → Job Seekers</li>
  <li><strong>Strength:</strong> WA specialist, good regional coverage</li>
  <li><strong>Best for:</strong> Entry-level candidates willing to work regional WA</li>
</ul>

<h3>MACA</h3>
<p>A mining services company that also operates as a labour hire provider. Strong presence in WA contractor mining operations.</p>

<h2>How the Labour Hire Registration Process Works</h2>
<ol>
  <li><strong>Online application:</strong> Fill out a registration form on the company's website. Include your contact details, availability, preferred location, and role type.</li>
  <li><strong>Resume upload:</strong> Upload a current mining-ready resume (see our resume guide).</li>
  <li><strong>Ticket documents upload:</strong> Scan or photograph each certificate and upload them. Include White Card, First Aid, any other tickets. Ensure they are clear and legible.</li>
  <li><strong>Reference check:</strong> You'll be asked for 2–3 professional references. Ensure your referees are expecting calls.</li>
  <li><strong>Profile review:</strong> A recruiter reviews your profile and may call for a brief phone screen.</li>
  <li><strong>Candidate pool:</strong> You're added to their database. When a matching vacancy comes up, you get a call.</li>
</ol>

<h2>How to Make Your Profile Stand Out</h2>

<h3>Complete Every Section</h3>
<p>Incomplete profiles get skipped. Fill out every field, even if it feels unnecessary. Upload a professional photo if the platform allows it.</p>

<h3>Upload Current Tickets Immediately</h3>
<p>A profile without ticket documents attached is effectively invisible. When a recruiter is trying to fill 10 spots by Friday, they will only contact candidates whose paperwork is already on file and verified.</p>

<h3>Set Your Location as Flexible</h3>
<p>If you're only willing to work in one city, your options are limited. Candidates who mark themselves as "willing to work anywhere in Australia" get far more calls, especially early in their career. You can always turn roles down once you're established.</p>

<h3>Be Available Immediately</h3>
<p>If asked "when can you start?", the answer that gets you placed fastest is "immediately" or "within one week." Candidates who need 4 weeks notice from a current employer often get passed over for urgent placements.</p>

<h3>Register With Multiple Companies</h3>
<p>This is the most important strategy. Register with every company on this list. Each one has different client contracts. A role that WorkPac doesn't have, Programmed might. Casting a wide net dramatically increases your placement speed.</p>

<h3>Follow Up Weekly</h3>
<p>After registering, call your assigned recruiter once a week. Keep it short: "Hi [name], just checking in to see if anything has come up that matches my profile. I'm still fully available." This keeps you at the top of their mind and demonstrates initiative.</p>

<h2>What Labour Hire Companies Actually Look For</h2>
<table>
  <thead><tr><th>Quality</th><th>Why It Matters</th></tr></thead>
  <tbody>
    <tr><td><strong>Reliability</strong></td><td>If you don't show up, the recruiter loses a client relationship. They need to know you'll be there.</td></tr>
    <tr><td><strong>Flexibility</strong></td><td>Willing to go where the work is, at short notice</td></tr>
    <tr><td><strong>Safety awareness</strong></td><td>Their client (the mine) will not tolerate safety risks</td></tr>
    <tr><td><strong>Current paperwork</strong></td><td>Expired tickets = not deployable = not useful to them</td></tr>
    <tr><td><strong>Professional communication</strong></td><td>You'll be representing them on site</td></tr>
  </tbody>
</table>

<h2>What to Do After Your First Placement</h2>
<p>Your first placement is the most important one. Show up on time, work hard, don't complain, follow safety rules to the letter, and build relationships. At the end of your swing, your performance feedback goes back to the labour hire company.</p>
<p>Workers who get good feedback get called first next time. Workers who get poor feedback — or worse, who abandon a swing early — may not get called again.</p>
<p>Once you've completed two or three successful swings, you can be more selective: choose rosters, negotiate pay, and transition toward direct employment if that's your goal.</p>
`,
  },
  {
    title: "Entry-Level FIFO Roles: How to Get In With No Experience",
    description: "The specific roles that don't require mining experience, what they involve day-to-day, what they pay, and how they lead to better-paying positions.",
    category: "Getting In",
    order: 12,
    published: true,
    content: `
<h2>The Myth of 'Mining Experience Required'</h2>
<p>One of the biggest misconceptions among new FIFO candidates is that you need prior mining experience to get started. This is simply not true. The Australian resources sector has entire departments built on entry-level workers who learn on the job — and there are defined pathways from those entry roles to highly paid positions.</p>
<p>What employers do require: reliability, physical fitness, a safety-first mindset, and the right attitude. Experience can be trained. Attitude cannot.</p>

<h2>Camp Services / Site Cleaner</h2>
<h3>What the Role Involves</h3>
<p>Camp services workers maintain the cleanliness and order of the site's accommodation, common areas, recreation rooms, and amenities. Shifts are typically 12 hours and cover all areas of the camp.</p>
<ul>
  <li>Cleaning rooms, bathrooms, corridors, kitchens, and recreation areas</li>
  <li>Laundry and linen service</li>
  <li>Waste management</li>
  <li>Some camp maintenance tasks</li>
</ul>
<h3>Requirements</h3>
<ul>
  <li>White Card</li>
  <li>Physical fitness for 12-hour shifts</li>
  <li>No prior experience required</li>
</ul>
<h3>Pay</h3>
<p><strong>$65,000 – $80,000 per year</strong> (FIFO allowances and roster loading included). Higher than the same role in hospitality or domestic cleaning because of the FIFO structure.</p>
<h3>Pathway</h3>
<p>Camp services → Senior camp services → Camp supervisor → Facilities coordinator. Some camp services workers transition into other departments (production, maintenance assistance) after demonstrating reliability and initiative.</p>

<h2>Kitchenhand / Food Service Attendant</h2>
<h3>What the Role Involves</h3>
<p>Mine site catering is a 24-hour operation feeding hundreds or thousands of workers. Kitchenhands assist qualified chefs with food prep, service, cleaning, and stock management.</p>
<ul>
  <li>Food preparation (chopping, prepping, portioning)</li>
  <li>Serving food in the mess hall (wet mess / dining room)</li>
  <li>Dish washing and kitchen cleaning</li>
  <li>Restocking service areas</li>
</ul>
<h3>Requirements</h3>
<ul>
  <li>White Card</li>
  <li>Food Handler Certificate (1-day online course, ~$30 — highly recommended)</li>
  <li>No prior experience required (kitchen experience is a plus)</li>
</ul>
<h3>Pay</h3>
<p><strong>$65,000 – $78,000 per year</strong></p>
<h3>Pathway</h3>
<p>Kitchenhand → Cook (if you gain cooking skills or qualifications) → Sous chef → Head chef. Catering roles on FIFO sites pay significantly more than equivalent city hospitality roles due to roster loading.</p>

<h2>Laundry Attendant</h2>
<h3>What the Role Involves</h3>
<p>Industrial laundry operations on large mine sites are significant — processing hundreds of kilograms of linen and work clothing per shift. Laundry attendants operate washing machines, dryers, and pressing equipment, and manage inventory of linen.</p>
<h3>Requirements</h3>
<ul>
  <li>White Card</li>
  <li>No prior experience required</li>
  <li>Physical fitness (moving heavy linen carts)</li>
</ul>
<h3>Pay</h3>
<p><strong>$65,000 – $75,000 per year</strong></p>

<h2>Crib Attendant</h2>
<h3>What the Role Involves</h3>
<p>A crib attendant delivers food, drinks, and snacks directly to workers in the field — at crusher stations, pit edges, or maintenance areas — during their crib (lunch) break. This role provides exposure to production areas of the site and can be a stepping stone to operational roles.</p>
<ul>
  <li>Driving a crib vehicle or ute around the site</li>
  <li>Serving prepared food and drinks to workers in the field</li>
  <li>Maintaining food safety standards in the field</li>
  <li>Interacting daily with production and maintenance teams</li>
</ul>
<h3>Requirements</h3>
<ul>
  <li>White Card</li>
  <li>Driver's licence (C class minimum)</li>
  <li>Food Handler Certificate (recommended)</li>
</ul>
<h3>Pay</h3>
<p><strong>$70,000 – $82,000 per year</strong></p>
<h3>Why It's a Smart Entry Role</h3>
<p>Crib attendants see the whole site, meet everyone, and are well-positioned to express interest in production roles. Many successful operators started as crib attendants and got their break by being noticed by a shift supervisor.</p>

<h2>Trainee / Greenhand Operator</h2>
<h3>What the Role Involves</h3>
<p>Some mining companies (particularly in gold and iron ore) run <strong>Greenhand programs</strong> — structured trainee pathways for people with no mining experience. Trainees rotate through different parts of the operation (crushing, screening, conveying, loading) under supervision before being signed off on individual tasks.</p>
<h3>Requirements</h3>
<ul>
  <li>White Card + First Aid</li>
  <li>Physical fitness</li>
  <li>Clean driving record (HR licence is an advantage)</li>
  <li>Willingness to work any shift and any task</li>
</ul>
<h3>Pay</h3>
<p><strong>$80,000 – $100,000 per year</strong> (trainees start lower and increase as competencies are signed off)</p>
<h3>Pathway</h3>
<p>Trainee operator → Process operator → Senior operator → Shift supervisor → Superintendent. This is one of the most direct pathways to a $130,000+ income with no trade or degree required.</p>

<h2>Process Operator / Production Operator</h2>
<h3>What the Role Involves</h3>
<p>Process operators run the equipment that takes ore from the ground and turns it into saleable product — crushing, screening, grinding, flotation, and loadout. It is a technical, high-responsibility role with excellent career progression.</p>
<ul>
  <li>Starting, stopping, and monitoring processing equipment</li>
  <li>Responding to alarms and resolving process upsets</li>
  <li>Recording process data and completing shift reports</li>
  <li>Maintaining equipment in operational condition</li>
</ul>
<h3>Requirements</h3>
<ul>
  <li>White Card + First Aid</li>
  <li>Often: a Greenhand or trainee program first</li>
  <li>Certificate III in Process Plant Operations is an advantage</li>
</ul>
<h3>Pay</h3>
<p><strong>$100,000 – $130,000 per year</strong> on an EBA roster</p>

<h2>Trades Assistant</h2>
<h3>What the Role Involves</h3>
<p>Trades assistants work alongside qualified tradespeople (electricians, fitters, boilermakers) on maintenance tasks. It requires no trade qualifications but is ideal for people who have done labouring, manufacturing, or semi-skilled work before.</p>
<ul>
  <li>Cleaning and preparing work areas</li>
  <li>Moving materials and equipment</li>
  <li>Assisting with tasks under supervision</li>
  <li>Tool management and housekeeping</li>
</ul>
<h3>Requirements</h3>
<ul>
  <li>White Card + First Aid</li>
  <li>Dogging licence is a significant advantage</li>
  <li>Some prior physical work experience preferred</li>
</ul>
<h3>Pay</h3>
<p><strong>$85,000 – $110,000 per year</strong></p>
<h3>Pathway</h3>
<p>Trades assistant → Complete a relevant apprenticeship (many mines offer adult apprenticeships) → Qualified tradesperson. Fitters and electricians with mining experience earn $130,000–$180,000+ per year.</p>

<h2>Summary: Entry-Level Role Comparison</h2>
<table>
  <thead><tr><th>Role</th><th>Experience Needed</th><th>Typical Pay</th><th>Career Pathway</th></tr></thead>
  <tbody>
    <tr><td>Camp services</td><td>None</td><td>$65k–$80k</td><td>Camp supervisor, other departments</td></tr>
    <tr><td>Kitchenhand</td><td>None</td><td>$65k–$78k</td><td>Cook, head chef</td></tr>
    <tr><td>Crib attendant</td><td>None + driver's licence</td><td>$70k–$82k</td><td>Production, operations</td></tr>
    <tr><td>Greenhand / Trainee operator</td><td>None</td><td>$80k–$100k</td><td>Process operator, supervisor</td></tr>
    <tr><td>Trades assistant</td><td>Some labouring preferred</td><td>$85k–$110k</td><td>Apprenticeship, qualified trade</td></tr>
    <tr><td>Process operator</td><td>Trainee program first</td><td>$100k–$130k</td><td>Senior operator, superintendent</td></tr>
  </tbody>
</table>
`,
  },
  {
    title: "The FIFO Interview: Common Questions and How to Answer Them",
    description: "How FIFO interviews work, what recruiters are really looking for, common questions with example answers, and the red flags that get candidates rejected.",
    category: "Getting In",
    order: 13,
    published: true,
    content: `
<h2>How FIFO Interviews Are Structured</h2>
<p>FIFO job interviews typically happen in two stages:</p>
<ol>
  <li><strong>Phone screen:</strong> A 10–20 minute call to confirm your availability, check your attitude, and assess your basic communication. This is usually done by a labour hire recruiter.</li>
  <li><strong>Formal interview:</strong> A 30–60 minute face-to-face or video interview, sometimes with a panel. For entry-level roles, this is usually just with the recruiter. For direct employment or supervisory roles, it may involve the site's HR team or department manager.</li>
</ol>
<p>For most entry-level FIFO roles through labour hire, the phone screen is the most important step — if you pass that, you're often 80% of the way there.</p>

<h2>The STAR Method</h2>
<p>Most behavioural interview questions ask you to describe a past experience. The best way to answer these is with the <strong>STAR method</strong>:</p>
<table>
  <thead><tr><th>Letter</th><th>Stands For</th><th>What to Cover</th></tr></thead>
  <tbody>
    <tr><td><strong>S</strong></td><td>Situation</td><td>What was the context? Where were you, what was happening?</td></tr>
    <tr><td><strong>T</strong></td><td>Task</td><td>What was your responsibility or the challenge you faced?</td></tr>
    <tr><td><strong>A</strong></td><td>Action</td><td>What specific steps did YOU take? (Use "I" not "we")</td></tr>
    <tr><td><strong>R</strong></td><td>Result</td><td>What was the outcome? Quantify if possible.</td></tr>
  </tbody>
</table>
<blockquote>Practise your STAR stories before the interview. Have 4–5 examples ready from previous work covering: teamwork, conflict resolution, following safety rules, dealing with pressure, and showing initiative.</blockquote>

<h2>The Most Common FIFO Interview Questions — With Example Answers</h2>

<h3>"Why do you want to work FIFO?"</h3>
<p><strong>What they're assessing:</strong> Whether you've thought it through and understand the lifestyle — not just chasing money.</p>
<p><strong>Weak answer:</strong> "For the money. I heard it pays well."</p>
<p><strong>Strong answer:</strong> "I've done a lot of research into the industry and I'm attracted to the combination of structured time off and intensive work periods. I work well in team environments and I'm comfortable being away from home for blocks of time — I see it as a real career, not just a paycheque. I'm particularly interested in progressing into operations over time."</p>

<h3>"Tell me about a time you worked in a team to achieve something."</h3>
<p><strong>Strong answer (STAR):</strong> "In my last role at [Company], we were behind on a large warehouse stocktake before the end of financial year. [S] My task was to coordinate two other staff members to complete our section by the deadline. [T] I split the stock into sections, communicated clearly about who was doing what, and checked in every hour. When one team member fell behind, I moved to assist while keeping the other on track. [A] We finished our section 2 hours early and helped another team complete theirs. [R]"</p>

<h3>"How do you handle working in extreme heat or physically demanding conditions?"</h3>
<p><strong>Strong answer:</strong> "I've worked [outdoor/labour/physical job] for [X] years and I'm comfortable in physical roles. I understand hydration and heat management are critical on site — I take that seriously. I keep myself fit outside of work as well, which helps with the physical demands of a 12-hour shift."</p>

<h3>"Tell me about a time you followed a safety procedure even when it was inconvenient."</h3>
<p><strong>Strong answer:</strong> "At my previous job, I noticed a colleague was about to skip the lockout-tagout process on a machine because we were running behind schedule. I stopped him, completed the full LOTO procedure myself, and notified the supervisor. It cost us 15 minutes but the machine turned out to have a live electrical fault that wasn't visible. The supervisor acknowledged that the procedure prevented a serious injury."</p>

<h3>"Are you comfortable with the [roster]?"</h3>
<p><strong>Strong answer:</strong> "Yes, I've researched the 2:1 roster thoroughly and I've spoken with people who work it. I've prepared for it — I've spoken to my family, sorted out any commitments at home, and I understand it requires commitment and adjustment. I'm genuinely comfortable with it."</p>
<p><strong>Weak answer:</strong> "I think so, yeah" — this sounds uncertain. Be confident and show you've thought it through.</p>

<h3>"What would you do if you witnessed a workmate taking a shortcut on a safety procedure?"</h3>
<p><strong>Strong answer:</strong> "I'd speak to them directly and in a non-confrontational way — something like 'Hey, are we sure we've done [procedure] properly?' Most of the time that's enough. If they ignored me or it was a serious risk, I'd report it to the supervisor. Shortcuts on safety are how people get hurt or killed. It's not about dobbing — it's about making sure everyone goes home."</p>

<h3>"Tell me about a time you dealt with a difficult person at work."</h3>
<p><strong>Strong answer:</strong> "I had a supervisor who was quite aggressive in their communication style. Rather than avoid them, I made a point of understanding what outcome they were after and tried to get ahead of their expectations. Over a few weeks, the relationship improved significantly. I've learned that most conflict at work comes from unclear expectations, not personality."</p>

<h2>Questions You Should Ask the Interviewer</h2>
<p>Always have 2–3 questions ready. This shows genuine interest and preparation.</p>
<ul>
  <li>"What does a typical induction process look like for this role?"</li>
  <li>"What does career progression look like for someone who performs well in this position?"</li>
  <li>"What are the most important qualities in a candidate who does well in this role?"</li>
  <li>"How long has this role been available, and what is the intended start date?"</li>
</ul>
<p>Avoid asking about pay or rosters in a first interview unless the interviewer raises it — it can signal that your priorities are wrong.</p>

<h2>Interview Red Flags That Get Candidates Rejected</h2>
<table>
  <thead><tr><th>Red Flag</th><th>Why It Kills Your Chances</th></tr></thead>
  <tbody>
    <tr><td>Badmouthing a previous employer</td><td>Signals you'll do the same to them</td></tr>
    <tr><td>Vague answers about availability ("it depends")</td><td>They need certainty — uncertainty means they'll move to the next candidate</td></tr>
    <tr><td>Dismissiveness about safety</td><td>"Yeah I'm pretty safe" — no specifics. Safety is their legal liability.</td></tr>
    <tr><td>Asking about money in the first 5 minutes</td><td>Signals you care more about pay than fit</td></tr>
    <tr><td>No questions at the end</td><td>Looks disinterested and unprepared</td></tr>
    <tr><td>Being late for a video or phone interview</td><td>If you're late for an interview, you're late for a swing. Instant disqualification.</td></tr>
    <tr><td>Unstable work history with no explanation</td><td>Prepare a brief, positive explanation for gaps or frequent job changes</td></tr>
  </tbody>
</table>

<h2>Phone Screen Tips</h2>
<ul>
  <li>Answer in a quiet place — not in your car or a noisy environment</li>
  <li>Have your resume in front of you</li>
  <li>Stand up while you talk — it makes you sound more confident</li>
  <li>Have your availability dates ready: "I am available to start from [date]"</li>
  <li>If you miss the call, call back within 2 hours and apologise for missing it</li>
</ul>

<h2>Video Interview Tips</h2>
<ul>
  <li>Test your camera and microphone before the interview</li>
  <li>Sit in front of a clean, neutral background — not your bedroom or a busy room</li>
  <li>Dress smart casual — shirt and collar minimum for men; professional for women</li>
  <li>Look at the camera, not the screen — this mimics eye contact</li>
  <li>Have water nearby</li>
</ul>

<h2>After the Interview</h2>
<p>Send a brief follow-up email or message thanking the interviewer and reconfirming your interest. This is a small touch that very few candidates bother with — and recruiters notice it.</p>
<blockquote>"Hi [Name], just wanted to thank you for your time today. I'm genuinely excited about the opportunity and I'm available from [date]. Looking forward to hearing from you."</blockquote>
`,
  },
];

// ── QUIZZES ──────────────────────────────────────────────────────────────────

const quizzes = [
  {
    title: "Tickets & Certifications",
    description: "Test your knowledge of the licences and certifications you need to work FIFO — what they're called, who needs them, and how to get them.",
    category: "Getting In",
    order: 6,
    passMark: 70,
    published: true,
    questions: [
      {
        question: "Which ticket is legally required before you can set foot on any Australian construction or mine site?",
        options: ["Forklift Licence (LF class)", "White Card (CPCCWHS1001)", "First Aid Certificate (HLTAID011)", "Heavy Rigid (HR) Driver's Licence"],
        answer: 1,
        order: 1,
      },
      {
        question: "How long is a White Card valid once issued?",
        options: ["1 year", "3 years", "5 years", "For life — it does not expire"],
        answer: 3,
        order: 2,
      },
      {
        question: "What is the approximate cost of completing a White Card course in Australia?",
        options: ["$60–$120", "$250–$400", "$600–$900", "It is free through Centrelink"],
        answer: 0,
        order: 3,
      },
      {
        question: "Which licence class covers operating a forklift in Australia?",
        options: ["LB", "LR", "LF", "LE"],
        answer: 2,
        order: 4,
      },
      {
        question: "What does EWP stand for in the context of work licences?",
        options: ["Emergency Work Protocol", "Elevated Work Platform", "Electrical Work Permit", "Equipment Work Procedure"],
        answer: 1,
        order: 5,
      },
      {
        question: "A dogging licence (DG class) authorises you to:",
        options: ["Operate a bulldozer on mine sites", "Direct crane operations and sling loads for lifting", "Operate underground drilling equipment", "Drive a grader or motor scraper"],
        answer: 1,
        order: 6,
      },
      {
        question: "How long does a standard dogging licence course take to complete?",
        options: ["Half a day", "1 day", "3 days", "5 days"],
        answer: 3,
        order: 7,
      },
      {
        question: "The First Aid certificate HLTAID011 is valid for how long?",
        options: ["1 year", "2 years", "3 years", "5 years"],
        answer: 2,
        order: 8,
      },
      {
        question: "Which ticket is the most practical first addition after your White Card and First Aid, for broadening your entry-level FIFO role options?",
        options: ["Advanced rigging licence (RA class)", "Explosives shotfirer licence", "Forklift licence (LF class)", "Crane operator licence"],
        answer: 2,
        order: 9,
      },
      {
        question: "Which of the following is NOT something you typically get before starting your first FIFO role — rather, it is completed when you arrive at a new site?",
        options: ["White Card", "First Aid Certificate", "Site-specific induction", "Forklift licence"],
        answer: 2,
        order: 10,
      },
    ],
  },
  {
    title: "Your FIFO Job Application",
    description: "Test your understanding of the FIFO job application process — from labour hire registration to follow-up strategies that get you placed faster.",
    category: "Getting In",
    order: 7,
    passMark: 70,
    published: true,
    questions: [
      {
        question: "What type of company places most entry-level workers into FIFO roles on mine sites?",
        options: ["The mine operators directly (e.g. BHP, Rio Tinto)", "Labour hire companies", "Government employment agencies", "Trade unions"],
        answer: 1,
        order: 1,
      },
      {
        question: "Which of the following is a major labour hire company in the Australian mining industry?",
        options: ["Telstra", "BHP", "WorkPac", "Woolworths"],
        answer: 2,
        order: 2,
      },
      {
        question: "When registering with labour hire companies, what is the single most important thing to do to be deployable quickly?",
        options: ["Phone every recruiter every day", "Upload current ticket documents and a complete profile", "Register with only the largest company", "Request a specific salary before any interview"],
        answer: 1,
        order: 3,
      },
      {
        question: "How many labour hire companies should you register with when starting your FIFO job search?",
        options: ["Just one — to keep things simple", "Two at most", "All of them — multiple registrations maximise opportunities", "Only the one closest to your city"],
        answer: 2,
        order: 4,
      },
      {
        question: "After registering with a labour hire company, what is the best follow-up strategy?",
        options: ["Wait for them to contact you — following up looks desperate", "Call once a week to check in and confirm your availability", "Email every recruiter twice a day", "Only contact them when you see a vacancy advertised"],
        answer: 1,
        order: 5,
      },
      {
        question: "Which of the following best describes what 'labour-on-hire' means?",
        options: ["You work directly for the mine operator", "You are employed by the labour hire company but placed at the mine's site", "You are on a government-subsidised apprenticeship", "You are a volunteer gaining experience"],
        answer: 1,
        order: 6,
      },
      {
        question: "What is typically the first stage in the FIFO interview process for a labour hire placement?",
        options: ["A site visit and physical test", "A written exam on mining knowledge", "A 10–20 minute phone screen", "A formal panel interview at the mine"],
        answer: 2,
        order: 7,
      },
      {
        question: "When asked 'when can you start?' during a FIFO application, which answer gives you the best chance of placement?",
        options: ["'I need at least 3 months notice from my current job'", "'Immediately, or within one week'", "'I'd prefer to start after the school holidays'", "'It depends on what roster you're offering'"],
        answer: 1,
        order: 8,
      },
      {
        question: "On a FIFO resume with no mining experience, what should you most emphasise?",
        options: ["Your university degree and academic achievements", "Transferable skills: teamwork, physical work, reliability, safety awareness", "Your social media presence and online profile", "Hobbies and sporting interests"],
        answer: 1,
        order: 9,
      },
      {
        question: "Which of the following is most likely to disqualify a candidate from a FIFO position during a background check?",
        options: ["Having no prior mining experience", "A serious criminal conviction relevant to the role", "Being over 35 years old", "Not owning a 4WD vehicle"],
        answer: 1,
        order: 10,
      },
    ],
  },
  {
    title: "Pre-Employment Medical & Fitness",
    description: "How well do you understand the FIFO pre-employment medical process? Test your knowledge of what's tested, what standards apply, and how to prepare.",
    category: "Getting In",
    order: 8,
    passMark: 70,
    published: true,
    questions: [
      {
        question: "What does PEM stand for in the FIFO hiring process?",
        options: ["Personal Equipment Management", "Pre-Employment Medical", "Physical Endurance Measurement", "Professional Employment Module"],
        answer: 1,
        order: 1,
      },
      {
        question: "Who typically pays for a FIFO pre-employment medical?",
        options: ["The candidate pays upfront and claims it back from Medicare", "Always the candidate — it is a personal responsibility", "The employer or labour hire company, once a conditional offer has been made", "The government covers it under occupational health funding"],
        answer: 2,
        order: 2,
      },
      {
        question: "Which organisation is the most common provider of FIFO pre-employment medicals across Australia?",
        options: ["Your local GP", "Sonic Health Plus", "The mine operator's own medical team", "Centrelink"],
        answer: 1,
        order: 3,
      },
      {
        question: "What does spirometry measure during a pre-employment medical?",
        options: ["Blood pressure and heart rate", "Lung function and airflow", "Hearing and audiometric baseline", "Vision and colour perception"],
        answer: 1,
        order: 4,
      },
      {
        question: "A urine drug test at a FIFO pre-employment medical detects cannabis (THC) in a heavy daily user for up to approximately how long?",
        options: ["1–2 days", "3–5 days", "Up to 30 days", "Up to 3 months"],
        answer: 2,
        order: 5,
      },
      {
        question: "Which of the following is most likely to lead to a 'fit with restrictions' or 'further review' result rather than an outright fail?",
        options: ["A positive drug test result", "Well-controlled asthma with a current management plan and medication", "Refusing to complete part of the medical", "A blood alcohol content above the legal limit"],
        answer: 1,
        order: 6,
      },
      {
        question: "What resting blood pressure reading typically triggers further review during a FIFO PEM?",
        options: ["110/70 mmHg", "120/80 mmHg", "130/85 mmHg", "140/90 mmHg or above"],
        answer: 3,
        order: 7,
      },
      {
        question: "Which of the following is the best preparation strategy in the week before your pre-employment medical?",
        options: ["Avoid all exercise to rest your body", "Eat high-sodium foods to boost energy", "Stay hydrated, sleep well, avoid alcohol, and exercise moderately", "Take energy supplements to improve your results"],
        answer: 2,
        order: 8,
      },
      {
        question: "What should you do if you have a pre-existing medical condition (e.g. managed diabetes) before attending your PEM?",
        options: ["Don't mention it — it will only cause problems", "Bring documentation from your GP or specialist showing it is well-managed", "Cancel the PEM and apply for a different type of work", "Ask to skip the relevant part of the medical"],
        answer: 1,
        order: 9,
      },
      {
        question: "Which component of the FIFO PEM specifically tests your joints, range of motion, and ability to perform the physical requirements of the role?",
        options: ["Audiometry", "Spirometry", "Cardiovascular assessment", "Musculoskeletal assessment"],
        answer: 3,
        order: 10,
      },
    ],
  },
  {
    title: "Entry-Level FIFO Roles",
    description: "Test your knowledge of the roles available to workers with no mining experience — what each role involves, what's required, and where each one leads.",
    category: "Getting In",
    order: 9,
    passMark: 70,
    published: true,
    questions: [
      {
        question: "Which of the following entry-level FIFO roles requires absolutely no prior experience?",
        options: ["Underground miner", "Camp services / site cleaner", "Electrical apprentice", "Drill and blast technician"],
        answer: 1,
        order: 1,
      },
      {
        question: "What is a 'crib attendant' on a mine site?",
        options: ["A safety officer who facilitates toolbox talks", "A worker who delivers food and drinks to workers in the field during their break", "A nurse working in the site medical centre", "A crane operator in the maintenance department"],
        answer: 1,
        order: 2,
      },
      {
        question: "Why is a crib attendant role considered a smart entry point for FIFO work?",
        options: ["It pays the most of all entry-level roles", "It requires the most qualifications", "It provides daily exposure to the whole site and opportunities to be noticed by production supervisors", "It is the easiest role physically"],
        answer: 2,
        order: 3,
      },
      {
        question: "What additional low-cost certificate is highly recommended before applying for kitchenhand or crib attendant roles?",
        options: ["Certificate III in Mining Operations", "Food Handler Certificate", "Dogging Licence", "Certificate IV in Work Health and Safety"],
        answer: 1,
        order: 4,
      },
      {
        question: "What is a 'Greenhand' or 'Trainee Operator' program in FIFO mining?",
        options: ["A government-funded apprenticeship for school leavers only", "A structured trainee pathway for people with no mining experience who rotate through operational areas", "A volunteer program to gain work experience", "A training course for environmental compliance"],
        answer: 1,
        order: 5,
      },
      {
        question: "What is the typical career pathway from a Trainee / Greenhand Operator role?",
        options: ["Trainee → Camp supervisor → Mine manager", "Trainee → Process operator → Senior operator → Shift supervisor", "Trainee → Kitchenhand → Head chef", "Trainee → HR manager → CEO"],
        answer: 1,
        order: 6,
      },
      {
        question: "What does a process operator (or production operator) primarily do on site?",
        options: ["Cleans and maintains camp accommodation", "Operates and monitors ore processing equipment like crushers, conveyors, and screens", "Drives heavy haul trucks in the open pit", "Conducts all medical assessments for incoming workers"],
        answer: 1,
        order: 7,
      },
      {
        question: "A trades assistant role is best suited to someone who:",
        options: ["Has a university degree in engineering", "Has some physical work or labouring experience and wants to work alongside tradespeople", "Has never worked before and wants the highest paying first role", "Is qualified as a registered nurse"],
        answer: 1,
        order: 8,
      },
      {
        question: "What is the typical annual earnings range for a camp services / cleaner role on a FIFO roster?",
        options: ["$30,000–$45,000", "$50,000–$60,000", "$65,000–$80,000", "$120,000–$150,000"],
        answer: 2,
        order: 9,
      },
      {
        question: "Above all other qualities, what do FIFO employers most consistently look for in entry-level candidates?",
        options: ["A university degree or TAFE qualification", "Prior mining site experience", "Reliability, safety mindset, and the right attitude to work", "Age under 30"],
        answer: 2,
        order: 10,
      },
    ],
  },
  {
    title: "FIFO Interview Preparation",
    description: "How ready are you for a FIFO job interview? Test your knowledge of the process, common questions, the STAR method, and the red flags that get candidates rejected.",
    category: "Getting In",
    order: 10,
    passMark: 70,
    published: true,
    questions: [
      {
        question: "What does the STAR method stand for when answering behavioural interview questions?",
        options: ["Skills, Training, Achievements, Results", "Situation, Task, Action, Result", "Strategy, Teamwork, Attitude, Reliability", "Safety, Training, Awareness, Readiness"],
        answer: 1,
        order: 1,
      },
      {
        question: "Which answer to 'Why do you want to work FIFO?' is most likely to impress a recruiter?",
        options: ['"I just need a job and the money sounds good."', '"I heard BHP pays heaps."', '"I\'ve researched the industry, I work well in team environments, I\'m comfortable being away from home, and I see it as a genuine long-term career."', '"My mate works FIFO and he said it\'s easy money."'],
        answer: 2,
        order: 2,
      },
      {
        question: "What is a phone screen in the FIFO recruitment process?",
        options: ["A background check using your phone number", "A short 10–20 minute call to assess your communication and basic suitability before a formal interview", "A drug test conducted remotely via your phone's camera", "A written test you complete on your smartphone"],
        answer: 1,
        order: 3,
      },
      {
        question: "Which of the following is a major red flag that commonly gets FIFO candidates rejected?",
        options: ["Being well-prepared and asking good questions", "Badmouthing a previous employer during the interview", "Asking about career progression", "Being enthusiastic about safety procedures"],
        answer: 1,
        order: 4,
      },
      {
        question: "When answering a behavioural question using the STAR method, which word should you emphasise to show individual contribution?",
        options: ["'We' — to show you are a team player", "'I' — to show your specific actions and decisions", "'They' — to credit your team", "'Management' — to show you follow direction"],
        answer: 1,
        order: 5,
      },
      {
        question: "What should you always do at the end of a FIFO interview?",
        options: ["Ask immediately about the salary package", "Ask no questions — it saves time for both parties", "Have 2–3 thoughtful questions ready to ask the interviewer", "Ask when you can expect a formal offer in writing"],
        answer: 2,
        order: 6,
      },
      {
        question: "What is the best way to answer 'What would you do if you saw a workmate taking a safety shortcut?'",
        options: ["'I'd mind my own business — not my problem.'", "'I'd report them immediately to management without talking to them first.'", "'I'd speak to them directly first, and escalate to a supervisor if they ignored me — safety is non-negotiable.'", "'I'd help them finish faster so the shortcut doesn't matter.'"],
        answer: 2,
        order: 7,
      },
      {
        question: "For a video interview, where should you look to simulate proper eye contact?",
        options: ["At your own face in the preview window", "At the camera lens, not the screen", "Down at your notes", "At the interviewer's eyes on the screen"],
        answer: 1,
        order: 8,
      },
      {
        question: "How many professional references should you have ready when applying for a FIFO role?",
        options: ["None — they just search LinkedIn", "1 character reference from a friend", "2–3 professional references from former employers or supervisors", "10 or more to show broad credibility"],
        answer: 2,
        order: 9,
      },
      {
        question: "After a successful FIFO interview, what typically happens next before you start on site?",
        options: ["You start the following Monday", "You receive a formal written offer on the spot", "You are referred for a pre-employment medical and background check", "You negotiate your salary directly with the mine manager"],
        answer: 2,
        order: 10,
      },
    ],
  },
];

// ── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Adding new 'Getting In' content...\n");

  for (const doc of documents) {
    const created = await db.document.create({ data: doc });
    console.log(`✓ Document: "${created.title}"`);
  }

  for (const quiz of quizzes) {
    const { questions, ...quizData } = quiz;
    const created = await db.quiz.create({
      data: {
        ...quizData,
        questions: {
          create: questions,
        },
      },
    });
    console.log(`✓ Quiz: "${created.title}" (${questions.length} questions)`);
  }

  console.log("\nDone! Added 6 documents and 5 quizzes.");
  console.log("Go to /admin/documents and /admin/quizzes to review and publish.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
