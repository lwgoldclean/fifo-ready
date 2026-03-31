import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const documents = [
  // ── GETTING STARTED ──────────────────────────────────────────────────────
  {
    title: "What Is FIFO? A Complete Introduction",
    description: "Understand what Fly-In Fly-Out work is, how it operates across Australia, and what to expect from life on a mine site.",
    category: "Getting Started",
    order: 1,
    content: `
<h2>What Is FIFO?</h2>
<p>FIFO stands for <strong>Fly-In Fly-Out</strong> — a work arrangement where employees fly to remote mine sites for their roster period, then fly home for their days off. It is one of the most common employment models in Australia's resources sector.</p>
<p>DIDO (Drive-In Drive-Out) is a similar arrangement but workers drive rather than fly. BIBO (Bus-In Bus-Out) is used on some sites where workers are bussed from a nearby town.</p>

<h2>Why Do Mining Companies Use FIFO?</h2>
<ul>
  <li>Mine sites are often located in remote areas of WA, QLD, NT and SA — hundreds of kilometres from the nearest major town</li>
  <li>It allows companies to access a larger national workforce rather than being limited to local populations</li>
  <li>Workers are housed in on-site accommodation (camps/villages), reducing the need for permanent towns</li>
  <li>It can be more cost-effective than constructing permanent residential communities</li>
</ul>

<h2>Common FIFO Roster Patterns</h2>
<p>Your roster defines how many days on-site you work, and how many days off you receive at home.</p>
<table>
  <thead><tr><th>Roster</th><th>Days On</th><th>Days Off</th><th>Common In</th></tr></thead>
  <tbody>
    <tr><td>2:1</td><td>14</td><td>7</td><td>WA iron ore, gold</td></tr>
    <tr><td>8:6</td><td>8</td><td>6</td><td>QLD coal</td></tr>
    <tr><td>20:10</td><td>20</td><td>10</td><td>Remote projects</td></tr>
    <tr><td>4:1</td><td>28</td><td>7</td><td>Shutdown work</td></tr>
    <tr><td>9:5</td><td>9</td><td>5</td><td>Various</td></tr>
    <tr><td>5:2</td><td>5</td><td>2</td><td>Site-based office roles</td></tr>
  </tbody>
</table>
<p>The 2:1 roster (2 weeks on, 1 week off) is the most common in Western Australia. Day and night shifts are typically 12 hours each.</p>

<h2>Key Mining Regions in Australia</h2>
<ul>
  <li><strong>Pilbara, WA</strong> — Iron ore, gold. Home to BHP, Rio Tinto, Fortescue. Hubs: Karratha, Port Hedland, Newman</li>
  <li><strong>Goldfields, WA</strong> — Gold, nickel. Home to Northern Star, Evolution Mining. Hub: Kalgoorlie</li>
  <li><strong>Bowen Basin, QLD</strong> — Metallurgical coal. Home to BHP Mitsubishi Alliance, Glencore. Hub: Mackay</li>
  <li><strong>Hunter Valley, NSW</strong> — Thermal coal. Often DIDO rather than FIFO</li>
  <li><strong>Northern Territory</strong> — Uranium, bauxite, manganese. Hub: Darwin</li>
  <li><strong>South Australia</strong> — Copper, uranium (Olympic Dam). Hub: Adelaide</li>
</ul>

<h2>What Life Is Like On Site</h2>
<ul>
  <li>You live in a <strong>camp or village</strong> — shared accommodation with single or twin-share rooms</li>
  <li>All meals are provided in a <strong>wet mess</strong> (dining hall) — breakfast, lunch, dinner and often a midnight meal for night shift</li>
  <li>Sites typically have a gym, recreation room, TV/movie lounge, and sometimes a pool</li>
  <li>No alcohol is permitted on most sites (dry sites)</li>
  <li>Mobile phone coverage varies — some remote sites have limited or no mobile service</li>
  <li>Wi-Fi is available in accommodation areas on most modern sites</li>
  <li>Most sites have a small shop/canteen for snacks and personal items</li>
</ul>

<h2>Advantages of FIFO Work</h2>
<ul>
  <li>Significantly higher pay than equivalent roles in urban areas</li>
  <li>All accommodation, meals and flights are provided at employer expense</li>
  <li>Extended blocks of time off — some workers use their R&amp;R to travel or pursue other income</li>
  <li>Career progression opportunities are strong in a growing industry</li>
  <li>Opportunity to save quickly with minimal living expenses on site</li>
</ul>

<h2>Challenges of FIFO Work</h2>
<ul>
  <li>Extended time away from family, partners and friends</li>
  <li>Fatigue from 12-hour shifts, especially on extended rosters</li>
  <li>Mental health challenges — isolation, loneliness, relationship strain</li>
  <li>Dry sites mean no alcohol — a significant lifestyle adjustment for some</li>
  <li>Physical demands — most roles are physically intense in harsh environments</li>
  <li>Relationship and family stress is common — open communication is essential</li>
</ul>

<h2>Is FIFO Right for You?</h2>
<p>FIFO suits people who are self-disciplined, comfortable with physical work, financially motivated, and can manage extended periods away from home. It is not suited to everyone — be honest with yourself about the lifestyle impact before committing.</p>
    `.trim(),
  },

  {
    title: "Pre-Employment Requirements: What You Actually Need",
    description: "A full breakdown of medicals, tickets, licences and background checks required before starting a FIFO role.",
    category: "Getting Started",
    order: 2,
    content: `
<h2>Pre-Employment Medical (PEM)</h2>
<p>A Pre-Employment Medical is <strong>mandatory</strong> for virtually every FIFO and mine site role in Australia. The company arranges and pays for this after you receive a job offer.</p>
<h3>What a PEM involves:</h3>
<ul>
  <li>Full physical examination by a doctor</li>
  <li>Vision and hearing tests</li>
  <li>Blood pressure and cardiovascular assessment</li>
  <li>Lung function (spirometry) test</li>
  <li>Urine and blood tests (including baseline drug screening)</li>
  <li>Audiometry (hearing) baseline test</li>
  <li>Musculoskeletal assessment — back, knees, joints</li>
  <li>Chest X-ray (for roles with dust exposure)</li>
  <li>Sometimes an ECG and sleep apnoea screening</li>
</ul>
<p>The doctor assesses your fitness against the specific demands of your role. Declare all pre-existing conditions honestly — failure to disclose can void your employment contract and workers compensation coverage.</p>

<h2>Drug and Alcohol Testing</h2>
<p>All mine sites in Australia conduct drug and alcohol testing. Testing occurs:</p>
<ul>
  <li>Pre-employment (as part of the PEM or on first day on-site)</li>
  <li>Random on-site testing at any time during your roster</li>
  <li>Post-incident (after any workplace incident or near-miss)</li>
  <li>For-cause testing (if behaviour suggests impairment)</li>
</ul>
<p>Most sites use <strong>urine testing</strong> for drugs and <strong>breathalyser</strong> for alcohol. Some sites now use oral fluid (saliva) testing. A positive result will result in immediate stand-down and likely termination. There is zero tolerance on most sites.</p>
<p><strong>Detection windows (approximate):</strong> Cannabis can remain detectable for 2–4 weeks in urine for regular users. Amphetamines 2–4 days. Opioids 2–4 days. Cocaine 2–4 days.</p>

<h2>National Police Check</h2>
<p>Most major employers require a <strong>National Police Check</strong> (also called a criminal history check). This covers all states and territories. You apply through the Australian Criminal Intelligence Commission (ACIC) or an accredited body online. Results are typically returned within 1–5 business days. Some convictions (particularly theft, fraud, or violence) may affect your application, but each case is assessed individually.</p>

<h2>Tickets and Certifications</h2>
<p>Depending on your role, you may need some or all of the following:</p>
<table>
  <thead><tr><th>Ticket / Cert</th><th>Required For</th><th>Issuing Body</th></tr></thead>
  <tbody>
    <tr><td>White Card (Construction Induction)</td><td>Most site entry</td><td>Registered RTOs — nationally recognised</td></tr>
    <tr><td>First Aid Certificate (HLTAID011)</td><td>Many roles</td><td>St John, Red Cross, registered RTOs</td></tr>
    <tr><td>Senior First Aid + CPR</td><td>Supervisory roles</td><td>Registered RTOs</td></tr>
    <tr><td>HR Truck Licence</td><td>Haul truck, water cart</td><td>State licensing authority</td></tr>
    <tr><td>Forklift Licence (LF)</td><td>Warehouse, laydown yard</td><td>Registered RTOs</td></tr>
    <tr><td>Elevated Work Platform (WP)</td><td>Working at height</td><td>Registered RTOs</td></tr>
    <tr><td>Dogman Licence</td><td>Crane operations</td><td>WorkSafe / SafeWork</td></tr>
    <tr><td>Rigging Licence (Basic/Intermediate)</td><td>Rigging operations</td><td>WorkSafe / SafeWork</td></tr>
    <tr><td>Electrical Licence</td><td>Electrician roles</td><td>State electrical safety office</td></tr>
    <tr><td>Gas Test Atmosphere / Confined Space</td><td>Confined space work</td><td>Registered RTOs</td></tr>
    <tr><td>Working at Heights</td><td>Any elevated work</td><td>Registered RTOs</td></tr>
  </tbody>
</table>
<p><strong>The White Card is your most critical first step.</strong> Without it, you cannot enter most construction or mining sites in Australia. It takes 1–2 days to complete online or face-to-face through a registered RTO.</p>

<h2>Drivers Licence</h2>
<p>A current Australian drivers licence is required for most roles — even if the work itself doesn't involve driving. An MR (Medium Rigid) or HR (Heavy Rigid) licence significantly increases your employment opportunities.</p>

<h2>Right to Work in Australia</h2>
<p>You must have the right to work in Australia. If you are on a visa, ensure your visa subclass allows full-time employment. Employers will verify your work rights via the VEVO (Visa Entitlement Verification Online) system.</p>

<h2>Preparation Timeline</h2>
<ol>
  <li><strong>Now:</strong> Obtain your White Card and First Aid Certificate</li>
  <li><strong>Now:</strong> Apply for your National Police Check</li>
  <li><strong>On offer:</strong> Complete the PEM as directed by the employer</li>
  <li><strong>If required:</strong> Obtain any additional licences for your specific role</li>
</ol>
    `.trim(),
  },

  // ── SAFETY ───────────────────────────────────────────────────────────────
  {
    title: "Site Safety Fundamentals",
    description: "Core safety principles, hazard management, emergency procedures and your legal rights and obligations on Australian mine sites.",
    category: "Safety",
    order: 3,
    content: `
<h2>Your Safety Obligations Under Australian Law</h2>
<p>Australian mine sites are governed by state-based Work Health and Safety (WHS) legislation. Key obligations for every worker:</p>
<ul>
  <li>Take reasonable care for your own health and safety</li>
  <li>Take reasonable care that your acts or omissions do not adversely affect the health and safety of others</li>
  <li>Comply with lawful instructions given by your employer or site management</li>
  <li>Report hazards, near-misses and incidents immediately</li>
  <li>Use personal protective equipment (PPE) as required</li>
  <li>Do not intentionally or recklessly interfere with or misuse safety equipment</li>
</ul>
<p><strong>You have the right to stop work if you reasonably believe it creates an immediate risk to your health or safety.</strong> This is your legal right — use it.</p>

<h2>The Hierarchy of Controls</h2>
<p>When managing hazards, controls are applied in order of effectiveness:</p>
<ol>
  <li><strong>Elimination</strong> — Remove the hazard entirely (most effective)</li>
  <li><strong>Substitution</strong> — Replace with something less hazardous</li>
  <li><strong>Isolation</strong> — Separate the hazard from people</li>
  <li><strong>Engineering controls</strong> — Physical guards, ventilation, barriers</li>
  <li><strong>Administrative controls</strong> — Procedures, training, signage, permits</li>
  <li><strong>PPE</strong> — Protect the individual (least effective, last resort)</li>
</ol>

<h2>Hazard Identification (HAZID)</h2>
<p>Before starting any task, you must identify hazards using a process such as:</p>
<ul>
  <li><strong>Take 5</strong> — A simple 5-step pre-task check used widely across Australian mine sites</li>
  <li><strong>JSA (Job Safety Analysis)</strong> — A documented step-by-step breakdown of a task and its risks</li>
  <li><strong>SWMS (Safe Work Method Statement)</strong> — Required for high-risk construction work</li>
</ul>

<h3>The Take 5 Process:</h3>
<ol>
  <li><strong>Stop</strong> — Pause before starting the task</li>
  <li><strong>Look</strong> — Look for hazards around you</li>
  <li><strong>Assess</strong> — Assess the risk of those hazards</li>
  <li><strong>Control</strong> — Put controls in place</li>
  <li><strong>Monitor</strong> — Monitor your controls throughout the task</li>
</ol>

<h2>Permit to Work (PTW) Systems</h2>
<p>High-risk activities require a formal permit before work can start. Common permits include:</p>
<ul>
  <li><strong>Hot Work Permit</strong> — Any work producing heat, sparks or flame (welding, grinding)</li>
  <li><strong>Confined Space Entry Permit</strong> — Entry into tanks, vessels, pits</li>
  <li><strong>Isolation/LOTO Permit</strong> — Lockout/Tagout for energy isolation</li>
  <li><strong>Excavation Permit</strong> — Any dig work near underground services</li>
  <li><strong>Working at Heights Permit</strong> — Work above 2 metres</li>
  <li><strong>Radiography Permit</strong> — Use of radiation sources</li>
</ul>

<h2>Isolation and Lockout/Tagout (LOTO)</h2>
<p>Isolation is one of the most critical safety processes on mine sites. It involves physically de-energising and isolating equipment before maintenance or work begins.</p>
<ul>
  <li>Every worker must apply their <strong>personal lock</strong> to the isolation point</li>
  <li>Never remove someone else's lock — this can result in immediate dismissal</li>
  <li>Verify isolation by testing before touching equipment</li>
  <li>Energy sources include: electrical, hydraulic, pneumatic, gravitational, thermal, chemical</li>
</ul>

<h2>Emergency Procedures</h2>
<p>On your first day on any site, locate the following:</p>
<ul>
  <li>Muster points (emergency assembly areas)</li>
  <li>Emergency exits from your work area</li>
  <li>Location of first aid kit and AED (defibrillator)</li>
  <li>Emergency contact numbers (site emergency number, ambulance, poisons hotline)</li>
  <li>Fire extinguisher locations and types</li>
</ul>
<h3>In an Emergency:</h3>
<ol>
  <li><strong>STOP</strong> — Do not put yourself at further risk</li>
  <li><strong>CALL</strong> — Call the site emergency number immediately</li>
  <li><strong>AID</strong> — Provide first aid if trained and safe to do so</li>
  <li><strong>MUSTER</strong> — Move to the designated muster point</li>
  <li><strong>REPORT</strong> — Do not leave site without reporting to emergency coordinator</li>
</ol>

<h2>Incident Reporting</h2>
<p>All incidents, near-misses and hazards must be reported — even if no one was hurt. This is a legal requirement and a key part of a safe workplace culture.</p>
<ul>
  <li><strong>Near-miss:</strong> An event that could have caused injury but didn't</li>
  <li><strong>Hazard:</strong> A condition or situation that has the potential to cause harm</li>
  <li><strong>Incident:</strong> An event resulting in or having the potential for injury, illness or damage</li>
</ul>
<p>Never underreport out of fear of blame. Sites that report more near-misses generally have better safety records — it's a sign of a healthy safety culture.</p>

<h2>Fatigue Management</h2>
<p>Fatigue is one of the most significant risks in the mining industry. Working 12-hour shifts on a 2:1 roster with travel days creates cumulative fatigue.</p>
<ul>
  <li>Most sites have a fatigue management policy — know it</li>
  <li>You have a duty to arrive at work fit — not just sober, but rested</li>
  <li>If you are too fatigued to work safely, report this to your supervisor</li>
  <li>Sleep 7–9 hours per night; use blackout curtains on night shift</li>
  <li>Avoid caffeine within 6 hours of sleeping</li>
  <li>Exercise, hydration and nutrition all significantly affect fatigue levels</li>
</ul>
    `.trim(),
  },

  {
    title: "Personal Protective Equipment (PPE) Guide",
    description: "What PPE is required on Australian mine sites, how to use it correctly, and your legal obligations.",
    category: "Safety",
    order: 4,
    content: `
<h2>What Is PPE?</h2>
<p>Personal Protective Equipment (PPE) is protective clothing, helmets, goggles and other garments or equipment designed to protect the wearer from injury or infection. On mine sites, PPE is the last line of defence — not a substitute for eliminating hazards.</p>

<h2>Standard Site PPE Requirements</h2>
<p>The following PPE is required on virtually every Australian mine site at all times in operational areas:</p>
<ul>
  <li><strong>Hard Hat (Safety Helmet)</strong> — Must comply with AS/NZS 1801. Replace after any significant impact, or every 3 years</li>
  <li><strong>High-Visibility Clothing</strong> — Class D/N (day and night rated) long-sleeve shirt and trousers in orange or yellow. Must comply with AS/NZS 4602</li>
  <li><strong>Safety Boots</strong> — Steel-capped, ankle-height minimum. Must comply with AS/NZS 2210. Laces must be tucked in</li>
  <li><strong>Safety Glasses</strong> — Clear or tinted depending on conditions. Must comply with AS/NZS 1337</li>
  <li><strong>Gloves</strong> — Type depends on task (cut-resistant, chemical resistant, welding etc)</li>
  <li><strong>Sun Protection</strong> — SPF 50+ sunscreen, long sleeves, broad-brim hat where hard hat not required</li>
</ul>

<h2>Task-Specific PPE</h2>
<table>
  <thead><tr><th>Task</th><th>Additional PPE Required</th></tr></thead>
  <tbody>
    <tr><td>Grinding / Cutting</td><td>Face shield, hearing protection, leather gloves</td></tr>
    <tr><td>Welding</td><td>Welding helmet, leather welding gloves, flame-resistant clothing</td></tr>
    <tr><td>Chemical handling</td><td>Chemical splash goggles, nitrile gloves, face shield, chemical suit</td></tr>
    <tr><td>Working at heights</td><td>Full body harness, lanyard, anchor points</td></tr>
    <tr><td>Noise zones (&gt;85 dBA)</td><td>Earplugs (Class 4) or earmuffs (Class 5)</td></tr>
    <tr><td>Confined spaces</td><td>Breathing apparatus (BA), harness, gas detector</td></tr>
    <tr><td>Drilling / blasting</td><td>Dust P2 mask, hearing protection, safety glasses</td></tr>
    <tr><td>Crushing / screening</td><td>P2 respirator (silica dust), hearing protection</td></tr>
  </tbody>
</table>

<h2>Hearing Protection Classes (Australian Standard)</h2>
<ul>
  <li><strong>Class 1</strong> — 10–13 dB attenuation (low noise environments)</li>
  <li><strong>Class 2</strong> — 14–17 dB attenuation</li>
  <li><strong>Class 3</strong> — 18–21 dB attenuation</li>
  <li><strong>Class 4</strong> — 22–25 dB attenuation (recommended for most mine site work)</li>
  <li><strong>Class 5</strong> — 26+ dB attenuation (extreme noise: rock drills, blasting areas)</li>
</ul>

<h2>Respiratory Protection</h2>
<p>Silica dust is one of the most serious long-term health hazards in Australian mining. Breathing crystalline silica can cause silicosis — an incurable and potentially fatal lung disease.</p>
<ul>
  <li><strong>P1 filter</strong> — Non-toxic dust only</li>
  <li><strong>P2 filter</strong> — Silica dust, fine particulates, biological hazards. <strong>Use P2 whenever crushing, drilling or grinding silica-bearing rock</strong></li>
  <li><strong>P3 filter</strong> — Highly toxic particulates (asbestos, highly toxic dusts)</li>
</ul>
<p>Disposable P2 masks must be properly fitted — pinch the nose wire to your face and check the seal by cupping your hands and breathing.</p>

<h2>Fall Protection</h2>
<p>Falls from height are one of the leading causes of fatalities in mining and construction.</p>
<ul>
  <li>A full body harness must be worn when working at heights above 2 metres where there is no guardrail protection</li>
  <li>Always attach your lanyard before moving into the work area</li>
  <li>Use 100% tie-off — always connected to at least one anchor point</li>
  <li>Inspect your harness before each use — check for cuts, fraying, corroded buckles</li>
  <li>Never use a harness that has been involved in a fall arrest — it must be removed from service immediately</li>
</ul>

<h2>PPE Inspection and Maintenance</h2>
<ul>
  <li>Inspect PPE before each use</li>
  <li>Report damaged or worn PPE to your supervisor immediately</li>
  <li>Never use PPE that is damaged, expired, or does not fit correctly</li>
  <li>PPE is provided by the employer at no cost — you must not be charged for standard PPE</li>
  <li>PPE that has been involved in a significant impact (e.g. dropped hard hat, fall-arrested harness) must be taken out of service and replaced</li>
</ul>

<h2>PPE and the Law</h2>
<p>Under Australian WHS legislation, your employer must provide suitable PPE, maintain it in good condition, ensure workers are trained in its use, and enforce its use. You are legally required to use PPE as instructed. Failure to wear required PPE is a disciplinary matter that can result in site removal or termination.</p>
    `.trim(),
  },

  // ── EMPLOYMENT ────────────────────────────────────────────────────────────
  {
    title: "Understanding Your FIFO Employment Contract",
    description: "A plain-English guide to FIFO contracts, EBAs, pay rates, conditions, and what to look out for before you sign.",
    category: "Employment",
    order: 5,
    content: `
<h2>Types of FIFO Employment</h2>
<h3>Direct (Staff) Employment</h3>
<p>You are employed directly by the mining company (e.g. BHP, Rio Tinto, Fortescue). Generally offers:</p>
<ul>
  <li>Higher base pay and superior conditions</li>
  <li>Better job security</li>
  <li>Company EBA (Enterprise Bargaining Agreement) coverage</li>
  <li>Access to company benefits (share schemes, bonuses)</li>
</ul>

<h3>Labour Hire</h3>
<p>You are employed by a labour hire company and placed at a mining site. Common providers include Programmed, Chandler Macleod, MACA, and WorkPac. Generally:</p>
<ul>
  <li>Easier to get initial entry-level FIFO work</li>
  <li>Pay may be lower than direct employment</li>
  <li>Less job security — your engagement can end at short notice</li>
  <li>Good pathway to direct employment</li>
</ul>

<h3>Contractor / Sub-contractor</h3>
<p>You or your company is contracted to provide services. If you are classified as a contractor, you are responsible for your own superannuation, tax and insurance.</p>

<h2>Enterprise Bargaining Agreements (EBAs)</h2>
<p>Many mine sites operate under an EBA — a legally binding agreement between the employer and employees (often represented by a union) that sets pay rates and conditions above the national minimum.</p>
<p>Key things to check in an EBA:</p>
<ul>
  <li>Base pay rate and allowances</li>
  <li>Roster and shift arrangements</li>
  <li>Overtime rates</li>
  <li>Leave entitlements (annual leave, personal leave)</li>
  <li>Travel time payment</li>
  <li>Allowances (site, tool, leading hand)</li>
</ul>

<h2>Key Contract Terms to Understand</h2>
<table>
  <thead><tr><th>Term</th><th>What It Means</th></tr></thead>
  <tbody>
    <tr><td>All-in rate</td><td>A single rate that includes base pay + allowances. Check what is included</td></tr>
    <tr><td>TOIL (Time Off In Lieu)</td><td>Instead of overtime pay, you receive additional time off</td></tr>
    <tr><td>R&amp;R (Rest and Recreation)</td><td>Your days off at home. Confirmed in your roster agreement</td></tr>
    <tr><td>Fly-in/fly-out travel</td><td>Employer pays for flights — confirm the departure gateway city (e.g. Perth, Brisbane)</td></tr>
    <tr><td>Accommodation</td><td>On-site accommodation and meals provided at employer cost</td></tr>
    <tr><td>Casual vs permanent</td><td>Permanent offers more security; casual offers higher hourly rate but no guaranteed hours</td></tr>
    <tr><td>Probationary period</td><td>Typically 3–6 months — your employment can be terminated more easily in this period</td></tr>
  </tbody>
</table>

<h2>Typical FIFO Pay Rates (2024)</h2>
<p>Pay rates vary by role, company, and whether covered by an EBA. Approximate annual salaries:</p>
<ul>
  <li><strong>General Labourer / Site Assistant:</strong> $80,000 – $100,000</li>
  <li><strong>Haul Truck Operator:</strong> $100,000 – $130,000</li>
  <li><strong>Drill and Blast Technician:</strong> $110,000 – $140,000</li>
  <li><strong>Trade Electrician (Maintenance):</strong> $120,000 – $160,000</li>
  <li><strong>Trade Fitter (Maintenance):</strong> $115,000 – $150,000</li>
  <li><strong>Boilermaker:</strong> $110,000 – $145,000</li>
  <li><strong>Site Supervisor / Foreman:</strong> $140,000 – $190,000</li>
  <li><strong>Mine Geologist:</strong> $100,000 – $140,000</li>
</ul>
<p>Note: These figures are all-in rates including site and FIFO allowances. Living costs on site are near zero — this is largely take-home income.</p>

<h2>Superannuation</h2>
<p>Your employer must pay the Superannuation Guarantee — currently <strong>11.5% (2024–25)</strong> of your ordinary time earnings into your nominated superannuation fund. Check your payslip to ensure this is being paid correctly.</p>

<h2>Leave Entitlements</h2>
<ul>
  <li><strong>Annual Leave:</strong> 4 weeks per year (plus loading of 17.5% on annual leave pay for most awards)</li>
  <li><strong>Personal/Carer's Leave:</strong> 10 days per year (paid)</li>
  <li><strong>Long Service Leave:</strong> Typically 8.67 weeks after 10 years of continuous service (varies by state)</li>
  <li><strong>Parental Leave:</strong> Unpaid leave plus government paid parental leave scheme applies</li>
</ul>
<p>Note: Many FIFO EBAs treat your roster days off (R&amp;R) as rostered days off — not annual leave. Annual leave is taken on top of your normal time off.</p>

<h2>Before You Sign: Checklist</h2>
<ul>
  <li>Confirm whether it is direct employment or labour hire</li>
  <li>Confirm the exact roster and shift times</li>
  <li>Confirm the fly-in gateway airport (is it your city or do you have to travel?)</li>
  <li>Confirm whether an EBA applies and get a copy</li>
  <li>Confirm what allowances are included in the stated rate</li>
  <li>Check the notice period on both sides</li>
  <li>Confirm probationary period length and conditions</li>
  <li>Check whether you are casual or permanent</li>
</ul>
    `.trim(),
  },

  {
    title: "Writing a Mining Resume That Gets Noticed",
    description: "How to write a resume specifically tailored for FIFO and mining roles — what to include, what to leave out, and how recruiters screen applications.",
    category: "Employment",
    order: 6,
    content: `
<h2>How Mining Recruiters Screen Resumes</h2>
<p>Mining recruiters typically review hundreds of applications for a single role. A resume that doesn't immediately communicate relevance is discarded in under 30 seconds. Your resume must answer two questions immediately:</p>
<ol>
  <li>Does this person have the right tickets and qualifications?</li>
  <li>Do they have relevant experience?</li>
</ol>

<h2>Resume Structure for Mining Roles</h2>
<h3>1. Contact Information</h3>
<p>Full name, phone number, email, suburb and state (city not required), LinkedIn (optional). Do not include date of birth, photo, or marital status.</p>

<h3>2. Professional Summary (3–4 lines)</h3>
<p>A brief, punchy summary of who you are and what you bring. Example:</p>
<blockquote>
  Experienced diesel fitter with 6 years in heavy mobile equipment maintenance including CAT 793 haul trucks and Komatsu D475 dozers. Currently hold HR licence, EWP ticket, First Aid and White Card. Available for immediate start on 2:1 FIFO roster.
</blockquote>

<h3>3. Tickets and Licences (Critical — List Near the Top)</h3>
<p>Create a dedicated section listing all current tickets:</p>
<ul>
  <li>White Card (Construction Induction) — [State] — [Expiry if applicable]</li>
  <li>First Aid Certificate (HLTAID011) — [Provider] — [Expiry]</li>
  <li>HR Drivers Licence — [State]</li>
  <li>Forklift Licence (LF) — [Expiry]</li>
  <li>Working at Heights — [Provider] — [Expiry]</li>
</ul>

<h3>4. Work Experience</h3>
<p>List in reverse chronological order (most recent first). For each role include:</p>
<ul>
  <li>Job title, company, location, dates</li>
  <li>2–5 dot points describing your key responsibilities and achievements</li>
  <li>Use specific equipment names, tonnages, scale of operation</li>
  <li>Include roster if it was FIFO (e.g. "2:1 FIFO roster, Pilbara WA")</li>
</ul>
<p><strong>Example bullet point (weak):</strong> Operated heavy machinery on site.</p>
<p><strong>Example bullet point (strong):</strong> Operated CAT 789C haul trucks (240t payload) in open cut iron ore operations, completing 10–12 loads per 12-hour shift with a zero-incident record over 18 months.</p>

<h3>5. Education and Training</h3>
<p>List your trade qualification, school leaving certificate, or relevant courses. For a trade: Certificate III in [Trade] — [RTO/TAFE] — [Year].</p>

<h3>6. References</h3>
<p>"References available on request" is acceptable. Have 2–3 professional references ready — ideally supervisors or site managers from recent roles.</p>

<h2>Key Do's and Don'ts</h2>
<table>
  <thead><tr><th>Do</th><th>Don't</th></tr></thead>
  <tbody>
    <tr><td>Use a clean, simple font (Arial, Calibri, size 11)</td><td>Use fancy graphics or columns — these confuse applicant tracking systems</td></tr>
    <tr><td>Name specific equipment (CAT, Komatsu, Liebherr, Sandvik)</td><td>Use vague terms like "heavy machinery"</td></tr>
    <tr><td>Include all current tickets, even if you think they're obvious</td><td>Leave out expiry dates for tickets — recruiters will assume they're expired</td></tr>
    <tr><td>Tailor your summary to each role type</td><td>Submit a generic resume to every job</td></tr>
    <tr><td>Keep it to 2–3 pages</td><td>Write more than 4 pages</td></tr>
    <tr><td>State your roster availability clearly</td><td>Leave availability ambiguous</td></tr>
  </tbody>
</table>

<h2>Cover Letter for Mining Roles</h2>
<p>Most mining applications don't require a formal cover letter, but when one is requested:</p>
<ul>
  <li>Keep it to one page</li>
  <li>First paragraph: which role and where you saw it advertised</li>
  <li>Second paragraph: why you are suitable — reference your key tickets and relevant experience</li>
  <li>Third paragraph: your availability, roster preference, fly-in gateway</li>
  <li>Close professionally</li>
</ul>

<h2>Where to Apply</h2>
<ul>
  <li><strong>Seek.com.au</strong> — Largest job board in Australia for mining roles</li>
  <li><strong>Indeed.com.au</strong> — Strong mining presence</li>
  <li><strong>Mining People International</strong> — Specialist mining recruiter</li>
  <li><strong>NES Fircroft</strong> — Technical and engineering roles</li>
  <li><strong>Direct company career pages</strong> — BHP, Rio Tinto, Fortescue, Newcrest, Glencore</li>
  <li><strong>Labour hire agencies</strong> — WorkPac, Programmed, Chandler Macleod for entry-level roles</li>
  <li><strong>LinkedIn</strong> — Build a profile and connect with mining recruiters directly</li>
</ul>
    `.trim(),
  },

  // ── CAMP LIFE ─────────────────────────────────────────────────────────────
  {
    title: "Camp Life and On-Site Accommodation",
    description: "Everything you need to know about living in a mine site camp — what to bring, camp rules, meals, facilities and making the most of your time away.",
    category: "Camp Life",
    order: 7,
    content: `
<h2>Types of On-Site Accommodation</h2>
<ul>
  <li><strong>Camp / Village</strong> — The most common term. A purpose-built residential facility adjacent to or near the mine</li>
  <li><strong>Dongas</strong> — Individual demountable rooms. Older camps use these; newer sites have permanent-construction rooms</li>
  <li><strong>Single room</strong> — Your own room with a bed, wardrobe, small desk, and usually an ensuite bathroom. Standard on most modern sites</li>
  <li><strong>Twin share</strong> — Sharing with one other person. More common on smaller or older sites</li>
</ul>

<h2>What Is Typically Provided In Your Room</h2>
<ul>
  <li>Bed, linen and towels (changed weekly or fortnightly)</li>
  <li>Wardrobe and storage</li>
  <li>TV (often with Foxtel or streaming)</li>
  <li>Air conditioning</li>
  <li>Ensuite bathroom (on most modern sites)</li>
  <li>Wi-Fi (usually limited data or throttled speed)</li>
  <li>Mini fridge (on some sites)</li>
</ul>

<h2>What to Pack for a FIFO Swing</h2>
<h3>Work Gear (confirm what's supplied by employer)</h3>
<ul>
  <li>Steel-capped boots (broken in — never wear new boots on first day)</li>
  <li>High-vis shirts and trousers (check if employer supplies)</li>
  <li>Hard hat and safety glasses (usually supplied on site)</li>
  <li>Work gloves</li>
  <li>Sunscreen SPF 50+</li>
</ul>
<h3>Personal Items</h3>
<ul>
  <li>Enough clothes for your swing (not all camps have accessible laundry daily)</li>
  <li>Comfortable casual clothes and slides/thongs for camp</li>
  <li>Toiletries (often available at camp canteen but bring your own to be safe)</li>
  <li>Medication and any supplements — enough for your full swing plus extra</li>
  <li>Phone charger and a portable power bank</li>
  <li>Laptop or tablet for entertainment</li>
  <li>Headphones (noise-cancelling recommended for sleep)</li>
  <li>Snacks for your room</li>
  <li>A good book or downloaded content — remote sites have limited internet</li>
  <li>Earplugs and eye mask for sleeping, especially if on night shift</li>
</ul>

<h2>Meals and Catering</h2>
<p>All meals are provided in the wet mess (dining hall) at no cost to you. Typical meal schedule:</p>
<ul>
  <li><strong>Breakfast:</strong> ~5:00–6:30am (hot and cold options)</li>
  <li><strong>Lunch:</strong> ~12:00–1:00pm (often provided as a packed crib box for those working away from camp)</li>
  <li><strong>Dinner:</strong> ~5:30–7:30pm</li>
  <li><strong>Midnight meal:</strong> Available for night shift workers</li>
</ul>
<p>Modern mining camps have significantly improved their catering — most offer a range of hot meals, salad bars, desserts and fresh fruit. Dietary requirements (vegetarian, gluten-free, halal) are accommodated with advance notice.</p>
<p>A canteen or small shop is available on most sites for purchasing snacks, drinks, and personal care items. Prices are typically at retail or slightly above.</p>

<h2>Camp Rules</h2>
<p>Breaking camp rules can result in site removal. Common rules include:</p>
<ul>
  <li><strong>No alcohol or illicit drugs</strong> — Most sites are completely dry. Bringing alcohol on site is immediate termination grounds</li>
  <li><strong>No visitors</strong> — Non-employees are not permitted in residential areas without authorisation</li>
  <li><strong>Noise curfew</strong> — Typically 10pm–6am. Night shift workers need to sleep during the day — be respectful</li>
  <li><strong>No smoking in rooms or common areas</strong> — Designated smoking areas are provided</li>
  <li><strong>Respect for others' property</strong> — Theft is a termination offence</li>
  <li><strong>Keep your room tidy</strong> — Rooms are inspected periodically</li>
</ul>

<h2>Managing Your Mental Health On Site</h2>
<p>Being away from home for extended periods is one of the hardest parts of FIFO life. Take it seriously:</p>
<ul>
  <li>Establish a routine — meal times, gym, sleep schedule</li>
  <li>Use the gym or recreation facilities — physical activity significantly impacts mood</li>
  <li>Communicate regularly with family and friends back home</li>
  <li>Build positive relationships with workmates — your social network on site matters</li>
  <li>Limit alcohol use during your R&amp;R — it disrupts sleep patterns before return</li>
  <li>Know the signs of depression and anxiety — resources are available through your employer's EAP (Employee Assistance Program)</li>
  <li>Seek help early — most sites have an EAP counsellor accessible confidentially by phone</li>
</ul>
<p>The FIFO Workers Health Study found that FIFO workers experience significantly higher rates of psychological distress than the general population. This is not a weakness — it's a known occupational risk. Addressing it proactively is a sign of strength.</p>
    `.trim(),
  },

  // ── INDUSTRY KNOWLEDGE ───────────────────────────────────────────────────
  {
    title: "Australian Mining Industry Overview",
    description: "The major commodities, companies, and regions that make up Australia's resources sector — and how they create FIFO employment opportunities.",
    category: "Industry Knowledge",
    order: 8,
    content: `
<h2>Australia's Resources Sector</h2>
<p>Australia is one of the world's largest and most important mining nations. The resources sector contributes approximately <strong>$450 billion annually</strong> to the Australian economy and employs over 260,000 people directly, with hundreds of thousands more in indirect roles.</p>

<h2>Key Commodities and Their Significance</h2>
<table>
  <thead><tr><th>Commodity</th><th>Global Rank</th><th>Key Regions</th><th>Major Employers</th></tr></thead>
  <tbody>
    <tr><td>Iron Ore</td><td>#1 exporter</td><td>Pilbara, WA</td><td>BHP, Rio Tinto, Fortescue</td></tr>
    <tr><td>Lithium</td><td>#1 producer</td><td>WA (Greenbushes, Pilgangoora)</td><td>Pilbara Minerals, Albemarle, Liontown</td></tr>
    <tr><td>Gold</td><td>#2 producer</td><td>WA Goldfields, QLD, NT</td><td>Northern Star, Newmont, Evolution</td></tr>
    <tr><td>Metallurgical Coal</td><td>#1 exporter</td><td>Bowen Basin, QLD</td><td>BHP Mitsubishi Alliance, Glencore, Anglo American</td></tr>
    <tr><td>Nickel</td><td>#5 producer</td><td>WA (Kambalda, Kalgoorlie)</td><td>IGO, BHP Nickel West</td></tr>
    <tr><td>Copper</td><td>#6 producer</td><td>SA (Olympic Dam), QLD, NT</td><td>BHP, Oz Minerals (now BHP), Sandfire</td></tr>
    <tr><td>Uranium</td><td>#3 producer</td><td>SA, NT</td><td>BHP (Olympic Dam), Energy Resources of Australia</td></tr>
    <tr><td>Bauxite / Alumina</td><td>#1 producer</td><td>WA, NT, QLD</td><td>Alcoa, South32, Rio Tinto</td></tr>
  </tbody>
</table>

<h2>Major Mining Companies in Australia</h2>
<h3>BHP</h3>
<p>Australia's largest mining company. Operations span iron ore (Pilbara), coal (QLD), copper (SA, WA), and nickel. Employs tens of thousands directly and through contractors. Known for strong EBA conditions and career development programs.</p>

<h3>Rio Tinto</h3>
<p>Major iron ore operations in the Pilbara (Tom Price, Paraburdoo, Hope Downs, Brockman). Also aluminium and copper operations. Known for significant investment in automation (autonomous haul trucks at several sites).</p>

<h3>Fortescue Metals Group (FMG)</h3>
<p>Pilbara iron ore. Fastest growing of the big three iron ore producers. Strong culture and reputation for promoting from within. Major presence for FIFO workers in WA.</p>

<h3>Newmont</h3>
<p>World's largest gold producer. Operations in WA (Boddington, Tanami) and QLD. Significant FIFO workforce on 2:1 rosters.</p>

<h3>Northern Star Resources</h3>
<p>Major Australian gold producer. Operations in WA (Kalgoorlie, Jundee) and Alaska. Strong reputation as employer.</p>

<h3>Glencore</h3>
<p>Coal operations in QLD Bowen Basin (Collinsville, Oaky Creek, McArthur River). Also copper and zinc. Large FIFO workforce on QLD 8:6 rosters.</td></tr>

<h3>South32</h3>
<p>Spun out of BHP in 2015. Manganese, coal, aluminium, nickel and zinc operations across Australia. Significant presence in QLD and WA.</p>

<h2>The Mining Commodity Cycle</h2>
<p>Mining employment is cyclical — it closely follows commodity prices. When iron ore, gold or coal prices are high, companies hire aggressively and pay well. When prices fall, they reduce workforces through contractor reductions first.</p>
<p>Understanding this protects your career:</p>
<ul>
  <li>Build savings during high-employment periods</li>
  <li>Consider permanent employment over labour hire for stability</li>
  <li>Diversify your skills and tickets to work across multiple commodities</li>
  <li>Network within the industry — FIFO is a small world</li>
</ul>

<h2>The Future of FIFO</h2>
<ul>
  <li><strong>Automation:</strong> Autonomous haul trucks, drilling rigs and trains are being deployed. This creates new technology roles and reduces some operator positions</li>
  <li><strong>Critical minerals:</strong> The global transition to clean energy is driving demand for lithium, nickel, cobalt and copper — creating new long-term employment opportunities</li>
  <li><strong>Remote operations centres:</strong> Some operations are increasingly controlled from Perth or other cities — potentially changing the FIFO model for some roles</li>
  <li><strong>Mental health focus:</strong> Significant industry-wide attention to the mental health impacts of FIFO is leading to better support programs and, on some sites, changing roster patterns</li>
</ul>
    `.trim(),
  },

  {
    title: "Mining Terminology Glossary",
    description: "Essential terms, abbreviations and jargon used on Australian mine sites — know the language before you arrive.",
    category: "Industry Knowledge",
    order: 9,
    content: `
<h2>Essential Mining Terminology</h2>
<p>Walking onto a mine site and not knowing the terminology makes you look unprepared. Here are the terms you need to know.</p>

<h2>Operations Terms</h2>
<table>
  <thead><tr><th>Term</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td>Open Cut / Open Pit</td><td>Surface mining where ore or rock is extracted from an open pit. The most common form of Australian hard rock mining</td></tr>
    <tr><td>Underground (UG)</td><td>Mining conducted below the surface through shafts, drives and levels</td></tr>
    <tr><td>Decline</td><td>A ramp or tunnel that provides access to underground workings</td></tr>
    <tr><td>Drive</td><td>A horizontal underground tunnel</td></tr>
    <tr><td>Stope</td><td>An excavated underground area from which ore has been extracted</td></tr>
    <tr><td>Bench</td><td>A horizontal shelf in an open pit, creating the stepped appearance</td></tr>
    <tr><td>Berm</td><td>A flat ledge at the crest or toe of a pit wall, used as a safety catch or haul road</td></tr>
    <tr><td>Ore</td><td>Rock containing valuable minerals in sufficient quantity to be profitably mined</td></tr>
    <tr><td>Waste</td><td>Rock removed to access ore, with no commercial value</td></tr>
    <tr><td>Run of Mine (ROM)</td><td>Ore as it comes from the mine, before processing</td></tr>
    <tr><td>Overburden</td><td>Waste material above an ore body that must be removed</td></tr>
    <tr><td>Stripping Ratio</td><td>The ratio of waste tonnes to ore tonnes — e.g. 4:1 means 4t waste per 1t ore</td></tr>
    <tr><td>Grade</td><td>The concentration of valuable mineral in the ore (e.g. 62% Fe iron ore, 2 g/t gold)</td></tr>
    <tr><td>Cut-off Grade</td><td>The minimum ore grade that is economically worth mining</td></tr>
    <tr><td>Ore Reserve</td><td>The economically mineable portion of the measured and indicated mineral resource</td></tr>
  </tbody>
</table>

<h2>Equipment Terms</h2>
<table>
  <thead><tr><th>Term</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td>Haul Truck</td><td>Large dump truck used to transport ore or waste. Common models: CAT 793, 797; Komatsu 830E, 930E</td></tr>
    <tr><td>Shovel / Excavator</td><td>Loads haul trucks with ore or waste. Electric cable shovels (P&amp;H, Bucyrus) or hydraulic excavators (CAT 6060, Liebherr R 9800)</td></tr>
    <tr><td>Dozer (Bulldozer)</td><td>Used for pushing material, road maintenance and rehabilitation. Common: CAT D11, Komatsu D475</td></tr>
    <tr><td>Grader</td><td>Road maintenance machine that levels and grades haul roads</td></tr>
    <tr><td>Water Cart</td><td>Truck that sprays water on haul roads to suppress dust</td></tr>
    <tr><td>Blast Hole Drill</td><td>Large drill rig used to drill holes for blasting. Common: Sandvik, Atlas Copco, Epiroc</td></tr>
    <tr><td>In-Pit Crusher</td><td>A crusher located within the open pit that reduces rock size for conveying</td></tr>
    <tr><td>Conveyor</td><td>Belt system used to transport crushed ore from the pit or plant</td></tr>
    <tr><td>Light Vehicle (LV)</td><td>Standard utility (ute), 4WD or bus used on site</td></tr>
    <tr><td>FEL (Front End Loader)</td><td>Wheeled or tracked loader with a front bucket. Common: CAT 992, Liebherr L 586</td></tr>
  </tbody>
</table>

<h2>Processing Terms</h2>
<table>
  <thead><tr><th>Term</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td>Crusher</td><td>Machine that reduces the size of ore and rock</td></tr>
    <tr><td>Mill (SAG/Ball Mill)</td><td>Rotary drum that grinds ore to fine particles for mineral extraction</td></tr>
    <tr><td>Flotation</td><td>Process that separates minerals using water, chemicals and air bubbles</td></tr>
    <tr><td>Leach</td><td>Process where chemicals dissolve and extract metals from ore</td></tr>
    <tr><td>Tailings</td><td>Waste material (slurry) remaining after ore processing</td></tr>
    <tr><td>TSF (Tailings Storage Facility)</td><td>Engineered dam where tailings are stored</td></tr>
    <tr><td>Concentrate</td><td>The valuable product after processing — a higher-grade material for shipping</td></tr>
  </tbody>
</table>

<h2>Safety and HR Terms</h2>
<table>
  <thead><tr><th>Term</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td>MSHA/WHS</td><td>Work Health and Safety — Australian safety legislation</td></tr>
    <tr><td>MSDS/SDS</td><td>Safety Data Sheet — document detailing hazardous substance properties and safe handling</td></tr>
    <tr><td>LTI</td><td>Lost Time Injury — an injury causing a worker to miss a full shift or more</td></tr>
    <tr><td>TRIFR</td><td>Total Recordable Injury Frequency Rate — injuries per million hours worked</td></tr>
    <tr><td>LTIFR</td><td>Lost Time Injury Frequency Rate — LTIs per million hours worked</td></tr>
    <tr><td>HAZOB</td><td>Hazard Observation — formal reporting of a hazard or near-miss</td></tr>
    <tr><td>Toolbox Talk</td><td>Brief safety meeting held before a shift or task (also called a pre-start)</td></tr>
    <tr><td>SOP</td><td>Standard Operating Procedure — documented step-by-step process</td></tr>
    <tr><td>EAP</td><td>Employee Assistance Program — confidential counselling service</td></tr>
    <tr><td>Wet Mess</td><td>The on-site dining hall / cafeteria</td></tr>
    <tr><td>Crib</td><td>A scheduled meal or rest break (e.g. "30-minute crib at 10am")</td></tr>
    <tr><td>Smoko</td><td>A short break. Originally "smoke break" — now used for any short break</td></tr>
  </tbody>
</table>
    `.trim(),
  },

  {
    title: "Fatigue Management in FIFO Work",
    description: "Understanding fatigue risks on extended FIFO rosters, practical strategies to manage fatigue, and your rights and obligations.",
    category: "Safety",
    order: 10,
    content: `
<h2>Why Fatigue Is a Critical Risk in Mining</h2>
<p>Fatigue is a significant contributor to accidents and incidents on mine sites. Working 12-hour shifts in physically and mentally demanding conditions, often in extreme heat or on night shift, creates cumulative fatigue that impairs judgment, reaction time and decision-making.</p>
<p>Studies have found that <strong>18–20 hours without sleep produces impairment equivalent to a blood alcohol concentration of 0.10%</strong> — above the legal driving limit. Yet fatigue is harder to self-assess than alcohol intoxication.</p>

<h2>FIFO-Specific Fatigue Factors</h2>
<ul>
  <li>Long travel days at the start and end of each swing (airports, flights, transfers)</li>
  <li>Sleeping in an unfamiliar environment with different noise and light conditions</li>
  <li>Rapid transition between day and night shift across a roster</li>
  <li>Heat stress in Pilbara and other hot environments</li>
  <li>Irregular sleep patterns when transitioning back to home life</li>
  <li>Social pressures on R&amp;R that disrupt sleep before returning to site</li>
</ul>

<h2>Signs of Fatigue</h2>
<ul>
  <li>Difficulty concentrating or focusing on tasks</li>
  <li>Slower reaction times</li>
  <li>Making errors you wouldn't normally make</li>
  <li>Microsleeps — brief, involuntary sleep episodes lasting 1–30 seconds</li>
  <li>Mood changes — irritability, low motivation</li>
  <li>Memory lapses — forgetting what you just did or were told</li>
  <li>Physical symptoms — heavy eyes, headaches, muscle weakness</li>
</ul>

<h2>Fatigue Management Strategies</h2>
<h3>Sleep Hygiene</h3>
<ul>
  <li>Aim for 7–9 hours of uninterrupted sleep before each shift</li>
  <li>Use blackout curtains or a sleep mask — light disrupts melatonin production</li>
  <li>Use earplugs or white noise to block camp noise</li>
  <li>Keep your room cool (18–20°C is optimal for sleep)</li>
  <li>Avoid screens for 30–60 minutes before sleeping</li>
  <li>Avoid caffeine within 6 hours of your sleep time</li>
  <li>Stick to a consistent sleep and wake time throughout your swing</li>
</ul>

<h3>During Your Shift</h3>
<ul>
  <li>Take all scheduled breaks — do not skip crib breaks to "get ahead"</li>
  <li>Stay hydrated — dehydration significantly amplifies fatigue</li>
  <li>Eat regularly — avoid large, high-sugar meals that cause energy crashes</li>
  <li>Use caffeine strategically — works best taken in moderate doses, not continuously</li>
  <li>If operating mobile plant, be alert to signs of microsleeping — pull over and report immediately</li>
</ul>

<h3>The Strategic Nap</h3>
<p>A 20-minute nap before a night shift reduces fatigue significantly. Research shows 20-minute naps are optimal — longer naps cause sleep inertia (grogginess on waking). On some sites, controlled napping in designated areas is permitted for night shift workers during breaks.</p>

<h2>Night Shift Adaptation</h2>
<p>Adapting to night shift takes 3–5 days. During this adjustment period:</p>
<ul>
  <li>Wear sunglasses during your drive home in the morning to reduce light exposure</li>
  <li>Sleep as soon as possible after your shift — do not delay</li>
  <li>Inform campmates that you are on night shift so they respect quiet hours</li>
  <li>Eat a light meal before your shift — heavy meals cause drowsiness</li>
  <li>After your last night shift, sleep normally and wake earlier each day to gradually transition back</li>
</ul>

<h2>Your Legal Obligations Regarding Fatigue</h2>
<ul>
  <li>You have a duty of care to <strong>arrive at work fit for duty</strong> — not just sober, but rested</li>
  <li>If you are too fatigued to work safely, you must report this to your supervisor before starting your shift</li>
  <li>Your employer is required to manage fatigue risks — this includes maximum hours limits, rostering rules and access to rest facilities</li>
  <li>Driving to work or operating mobile plant while fatigued is a serious breach of safety obligations</li>
</ul>

<h2>Transition Fatigue: The Travel Day Problem</h2>
<p>The travel day at the start of a swing is one of the highest-risk periods. Workers often:</p>
<ul>
  <li>Wake at 2–3am for early flights</li>
  <li>Spend 6–12 hours travelling</li>
  <li>Arrive on site and start an induction or even a shift the same day</li>
</ul>
<p>Be especially vigilant on Day 1 of your swing. Many companies now have policies preventing workers from operating mobile plant on the same day they arrive via FIFO — know your site's policy.</p>
    `.trim(),
  },
];

const quizzes = [
  {
    title: "Site Safety Fundamentals",
    description: "Test your knowledge of core WHS principles, hazard management and emergency procedures on Australian mine sites.",
    category: "Safety",
    order: 1,
    passMark: 70,
    questions: [
      {
        question: "Under Australian WHS legislation, if you believe a task creates an immediate and serious risk to your health or safety, what is your right?",
        options: [
          "You must complete the task and report the hazard afterwards",
          "You can stop work and you will not face reprisal for doing so",
          "You must get written permission from your supervisor before stopping",
          "You should wait until the end of the shift to raise the concern",
        ],
        answer: 1,
      },
      {
        question: "What is the correct order of the Hierarchy of Controls, from most to least effective?",
        options: [
          "PPE → Administrative → Engineering → Isolation → Substitution → Elimination",
          "Elimination → Substitution → Isolation → Engineering → Administrative → PPE",
          "Administrative → PPE → Engineering → Elimination → Substitution → Isolation",
          "Engineering → Elimination → PPE → Substitution → Administrative → Isolation",
        ],
        answer: 1,
      },
      {
        question: "What does LOTO stand for and what is its purpose?",
        options: [
          "Load On, Truck Off — a signal for haul truck dispatch",
          "Lockout/Tagout — a procedure to isolate energy sources during maintenance",
          "Lift Over, Tie Off — a rigging procedure for heavy lifts",
          "Level Out, Track On — a dozer operator procedure",
        ],
        answer: 1,
      },
      {
        question: "You discover a hazard on site that has not caused any injury. What should you do?",
        options: [
          "Fix it yourself if you can and move on without reporting",
          "Report it only if you think it is serious enough to cause a fatality",
          "Report it immediately through the site hazard reporting system",
          "Mention it to a workmate and let them decide if it needs reporting",
        ],
        answer: 2,
      },
      {
        question: "What is a 'Take 5' used for on a mine site?",
        options: [
          "A 5-minute paid break mandated under Australian awards",
          "A pre-task safety check where you identify and control hazards before starting work",
          "A form completed at the end of each shift summarising work done",
          "A 5-point checklist for inspecting light vehicles before driving",
        ],
        answer: 1,
      },
      {
        question: "Which type of permit is required before welding or grinding on a mine site?",
        options: [
          "Confined Space Entry Permit",
          "Excavation Permit",
          "Hot Work Permit",
          "Isolation Permit",
        ],
        answer: 2,
      },
      {
        question: "What should you do if you discover someone else's personal lock on an isolation point and the job is ready to start?",
        options: [
          "Remove the lock carefully and proceed — the work is safe since the area is already isolated",
          "Never remove someone else's personal lock — contact that person or the site safety officer",
          "Remove the lock and put your own lock on instead",
          "Leave a tag next to the lock explaining the job is starting",
        ],
        answer: 1,
      },
      {
        question: "What is the minimum hearing protection class recommended for most general mine site work?",
        options: ["Class 1", "Class 2", "Class 4", "Class 5"],
        answer: 2,
      },
      {
        question: "Research shows that 18–20 hours without sleep produces impairment roughly equivalent to a blood alcohol concentration of:",
        options: ["0.03%", "0.05%", "0.08%", "0.10%"],
        answer: 3,
      },
      {
        question: "An incident where no one was injured but could have been is called a:",
        options: ["False alarm", "Near-miss", "Minor incident", "Observation"],
        answer: 1,
      },
    ],
  },

  {
    title: "PPE and Hazard Identification",
    description: "Test your knowledge of Personal Protective Equipment requirements, correct usage and hazard identification on Australian mine sites.",
    category: "Safety",
    order: 2,
    passMark: 70,
    questions: [
      {
        question: "Which Australian Standard does high-visibility clothing on mine sites need to comply with?",
        options: ["AS/NZS 1337", "AS/NZS 4602", "AS/NZS 1801", "AS/NZS 2210"],
        answer: 1,
      },
      {
        question: "What respiratory protection class should be worn when crushing or drilling silica-bearing rock?",
        options: ["P1 — non-toxic dust only", "P2 — fine particulates and silica dust", "P3 — highly toxic particulates", "No protection required"],
        answer: 1,
      },
      {
        question: "Your full body harness was involved in a fall arrest event. What should you do with it?",
        options: [
          "Inspect it carefully and continue using it if there is no visible damage",
          "Remove it from service immediately — it must not be used again after a fall arrest",
          "Report it to your supervisor and use it again after their approval",
          "Only replace it if it shows cuts or broken buckles",
        ],
        answer: 1,
      },
      {
        question: "At what height does fall protection (a full body harness) become required when there is no guardrail?",
        options: ["1 metre", "1.5 metres", "2 metres", "3 metres"],
        answer: 2,
      },
      {
        question: "Under Australian WHS law, who is responsible for providing standard PPE to workers?",
        options: [
          "The worker — they must supply their own PPE",
          "The employer — at no cost to the worker",
          "The employer — but workers reimburse 50% of the cost",
          "The labour hire company, not the site operator",
        ],
        answer: 1,
      },
      {
        question: "You are about to grind metal in a work area. In addition to safety glasses, what additional face protection is required?",
        options: ["No additional protection needed", "A P2 respirator only", "A face shield", "A welding helmet"],
        answer: 2,
      },
      {
        question: "A hard hat must be replaced after:",
        options: [
          "5 years from manufacture date",
          "Any significant impact, or every 3 years from first use",
          "Only when it shows visible cracks",
          "Every 12 months regardless of condition",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is NOT a type of energy source that must be considered when applying isolation (LOTO)?",
        options: ["Electrical", "Hydraulic", "Gravitational", "Noise"],
        answer: 3,
      },
      {
        question: "What class of hearing protection provides 26+ dB of attenuation?",
        options: ["Class 2", "Class 3", "Class 4", "Class 5"],
        answer: 3,
      },
      {
        question: "Which PPE standard do safety helmets (hard hats) in Australia need to comply with?",
        options: ["AS/NZS 4602", "AS/NZS 1801", "AS/NZS 2210", "AS/NZS 1337"],
        answer: 1,
      },
    ],
  },

  {
    title: "Pre-Employment and Site Entry Requirements",
    description: "Test your knowledge of the tickets, medicals, and checks required before entering a mine site in Australia.",
    category: "Getting Started",
    order: 3,
    passMark: 70,
    questions: [
      {
        question: "What is the most fundamental ticket required for entry to most construction and mine sites in Australia?",
        options: [
          "First Aid Certificate (HLTAID011)",
          "White Card (Construction Induction)",
          "Working at Heights Certificate",
          "Senior First Aid Certificate",
        ],
        answer: 1,
      },
      {
        question: "During a Pre-Employment Medical, you are required to declare pre-existing medical conditions. Why is it important to declare these honestly?",
        options: [
          "It helps your employer match you to the most suitable roster",
          "Failure to disclose can void your employment contract and workers compensation coverage",
          "It is only important if the condition requires medication",
          "It affects your pay rate under the relevant EBA",
        ],
        answer: 1,
      },
      {
        question: "Approximately how long can cannabis remain detectable in urine testing for a regular user?",
        options: ["24–48 hours", "3–5 days", "2–4 weeks", "3 months"],
        answer: 2,
      },
      {
        question: "A National Police Check in Australia is provided by which government body?",
        options: [
          "Australian Federal Police (AFP)",
          "Australian Criminal Intelligence Commission (ACIC)",
          "Department of Home Affairs",
          "Fair Work Australia",
        ],
        answer: 1,
      },
      {
        question: "Drug and alcohol testing on mine sites can occur at which of the following times?",
        options: [
          "Pre-employment only",
          "Pre-employment and upon injury only",
          "Pre-employment, randomly on-site, post-incident and for cause",
          "Only at the beginning of each new roster swing",
        ],
        answer: 2,
      },
      {
        question: "Which licence is required to operate haul trucks or water carts on mine sites?",
        options: [
          "C Class (car) licence",
          "LR (Light Rigid) licence",
          "MR (Medium Rigid) licence",
          "HR (Heavy Rigid) licence",
        ],
        answer: 3,
      },
      {
        question: "What does VEVO stand for and what is it used for?",
        options: [
          "Verified Employment Vetting Organisation — background check system",
          "Visa Entitlement Verification Online — used to confirm work rights",
          "Vehicle Entry Verification Override — used for site access",
          "Voluntary Employment Verification Obligation — payroll compliance",
        ],
        answer: 1,
      },
      {
        question: "A Confined Space Entry Permit is required when:",
        options: [
          "Working in any space smaller than 3 square metres",
          "Entering any space not designed for human occupancy that may have limited entry/exit or hazardous atmosphere",
          "Working underground in a mine decline",
          "Entering the cab of large mining equipment",
        ],
        answer: 1,
      },
      {
        question: "What is the current Superannuation Guarantee rate that employers must pay (2024–25)?",
        options: ["9.5%", "10%", "11%", "11.5%"],
        answer: 3,
      },
      {
        question: "The Dogman licence is required for which activity?",
        options: [
          "Working with explosive dogs used in mine detection",
          "Directing and guiding crane loads during lifting operations",
          "Operating a water cart for dust suppression",
          "Driving a haul truck in open cut operations",
        ],
        answer: 1,
      },
    ],
  },

  {
    title: "Mining Industry Knowledge",
    description: "Test your knowledge of Australian mining operations, terminology, commodities and major employers.",
    category: "Industry Knowledge",
    order: 4,
    passMark: 70,
    questions: [
      {
        question: "What does FIFO stand for?",
        options: [
          "Fixed Income, Fixed Output",
          "Fly-In Fly-Out",
          "First In First Out",
          "Full Income Full Operations",
        ],
        answer: 1,
      },
      {
        question: "Which is the most common FIFO roster in Western Australia's iron ore operations?",
        options: ["8:6", "5:2", "2:1", "20:10"],
        answer: 2,
      },
      {
        question: "Australia is the world's number one producer and exporter of which commodity?",
        options: ["Gold", "Copper", "Lithium", "Iron Ore"],
        answer: 3,
      },
      {
        question: "What does 'ROM' stand for in mining?",
        options: [
          "Rate of Mining",
          "Run of Mine",
          "Report on Materials",
          "Remote Operations Management",
        ],
        answer: 1,
      },
      {
        question: "Which company operates the largest iron ore operations in the Pilbara, WA?",
        options: [
          "Glencore and Anglo American",
          "BHP, Rio Tinto and Fortescue",
          "Northern Star and Evolution Mining",
          "South32 and Newmont",
        ],
        answer: 1,
      },
      {
        question: "In mining, what is 'overburden'?",
        options: [
          "Ore that exceeds the processing plant's capacity",
          "A worker carrying too much equipment on a shift",
          "Waste material above an ore body that must be removed to access the ore",
          "The additional weight on haul trucks when fully loaded",
        ],
        answer: 2,
      },
      {
        question: "What is a 'bench' in open cut mining?",
        options: [
          "A rest area for operators between shifts",
          "A horizontal shelf or step in the pit wall created by mining operations",
          "A measurement of ore grade in tonnes per hour",
          "The platform on a blast hole drill rig",
        ],
        answer: 1,
      },
      {
        question: "What does TRIFR stand for?",
        options: [
          "Total Reported Incidents — Fatalities and Risks",
          "Total Recordable Injury Frequency Rate",
          "Training Requirements for Incident Free Rosters",
          "Total Risk Index for Frequency Reporting",
        ],
        answer: 1,
      },
      {
        question: "What is the 'wet mess' on a mine site?",
        options: [
          "An area where chemical or water spills have occurred",
          "The dining hall where meals are provided to workers",
          "A washing area for cleaning equipment",
          "An emergency decontamination shower facility",
        ],
        answer: 1,
      },
      {
        question: "Tailings are:",
        options: [
          "The last few tonnes of ore from an exhausted mine",
          "The rope or cable used to connect haul trucks during towing",
          "Waste material remaining after ore has been processed",
          "The area at the back of the mine pit near the portal",
        ],
        answer: 2,
      },
    ],
  },

  {
    title: "FIFO Employment and Contracts",
    description: "Test your knowledge of FIFO employment arrangements, EBAs, pay conditions, and your rights as a mining worker.",
    category: "Employment",
    order: 5,
    passMark: 70,
    questions: [
      {
        question: "What is an EBA in the context of FIFO employment?",
        options: [
          "Emergency Benefit Allowance — paid during wet weather shutdowns",
          "Enterprise Bargaining Agreement — a legally binding agreement setting pay and conditions above the minimum",
          "Employee Background Assessment — a pre-employment check",
          "Equipment Based Allowance — a payment for using personal tools",
        ],
        answer: 1,
      },
      {
        question: "What is the key difference between direct employment and labour hire in the mining industry?",
        options: [
          "Direct employees earn less but have better career prospects",
          "Labour hire workers are employed by a third-party company and placed at a mine site",
          "Direct employment only applies to underground mining roles",
          "Labour hire workers receive better superannuation entitlements",
        ],
        answer: 1,
      },
      {
        question: "What does 'all-in rate' mean when advertised in a mining job?",
        options: [
          "The rate includes all overtime automatically paid",
          "A single rate that may include base pay and various allowances combined",
          "The rate applies to all workers regardless of experience level",
          "The full cost to the company including superannuation and expenses",
        ],
        answer: 1,
      },
      {
        question: "Under the Fair Work Act, how much annual leave is a full-time employee entitled to per year?",
        options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
        answer: 2,
      },
      {
        question: "A Haul Truck Operator working FIFO 2:1 in the Pilbara would typically earn approximately:",
        options: [
          "$55,000 – $70,000 per year",
          "$80,000 – $95,000 per year",
          "$100,000 – $130,000 per year",
          "$200,000 – $250,000 per year",
        ],
        answer: 2,
      },
      {
        question: "What is TOIL in an employment context?",
        options: [
          "Tax On Income Levy — a surcharge on FIFO earnings",
          "Time Off In Lieu — receiving time off instead of overtime pay",
          "Total Overtime Including Loadings — a pay calculation method",
          "Transfer Of Income Liability — a payroll accounting term",
        ],
        answer: 1,
      },
      {
        question: "Your R&R (Rest and Recreation) days on a FIFO roster are:",
        options: [
          "Deducted from your annual leave balance each swing",
          "Your rostered days off at home — separate from annual leave",
          "Paid at a lower rate than your working days",
          "Only guaranteed if you complete the full swing",
        ],
        answer: 1,
      },
      {
        question: "When checking a FIFO job advertisement, the 'gateway airport' refers to:",
        options: [
          "The airport at the mine site where you land",
          "The city or airport from which your employer pays for your flights",
          "The transit airport between your home city and the site",
          "The priority boarding gate given to FIFO workers",
        ],
        answer: 1,
      },
      {
        question: "Under the Superannuation Guarantee, what is the minimum amount employers must contribute to your super fund (2024–25)?",
        options: ["9% of ordinary time earnings", "10% of ordinary time earnings", "11% of ordinary time earnings", "11.5% of ordinary time earnings"],
        answer: 3,
      },
      {
        question: "If you are on a casual FIFO contract, which of the following is generally true?",
        options: [
          "You receive a higher hourly rate but have no guaranteed hours or leave entitlements",
          "You receive the same rate as permanent workers but with additional job security",
          "You are entitled to full annual leave after 12 months",
          "Casual workers cannot be terminated without 4 weeks' notice",
        ],
        answer: 0,
      },
    ],
  },
];

async function main() {
  console.log("Seeding FIFO training documents and quizzes...");

  // Clear existing content
  await db.quizAttempt.deleteMany();
  await db.quizQuestion.deleteMany();
  await db.quiz.deleteMany();
  await db.document.deleteMany();

  // Seed documents
  for (const doc of documents) {
    await db.document.create({ data: doc });
  }
  console.log(`✓ Created ${documents.length} training documents`);

  // Seed quizzes
  for (const quiz of quizzes) {
    const { questions, ...quizData } = quiz;
    await db.quiz.create({
      data: {
        ...quizData,
        questions: {
          create: questions.map((q, i) => ({
            question: q.question,
            options: q.options,
            answer: q.answer,
            order: i,
          })),
        },
      },
    });
  }
  console.log(`✓ Created ${quizzes.length} quizzes with 10 questions each`);

  console.log("\n✅ Seed complete!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
