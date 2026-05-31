import { useState, useEffect } from "react";

const AHMED_PROFILE = {
  name: "Ahmed Mustafa Memon",
  address: "Apartment 36, New Market Square, Ward's Hill Road, Dublin 8, Ireland",
  phone: "083 129 4883",
  email: "ahmedmemon55@hotmail.com",
  linkedin: "linkedin.com/in/ahmed-mustafa-memon-9aa674367",
  rightToWork: "Stamp 4 — Full unrestricted work rights in Ireland. No work permit or sponsorship required.",
  education: [
    { degree: "BA (Honours) Accounting & Finance", institution: "Griffith College Dublin", dates: "2024 – Present (Expected Dec 2026)", grade: "On track for 2:1", modules: "Corporate Finance, Performance Management, Portfolio Theory & Management, Financial Data Analysis, Valuation & Security Analysis, Auditing & Assurance, Taxation (IT1/IT2/IT3), Financial Reporting (Consolidations, IAS 33, SCF)" },
    { degree: "A-Levels & O-Levels", institution: "Foundation Public School, Hyderabad, Pakistan", dates: "2018 – 2022", subjects: "Accounting, Business Studies, Economics" }
  ],
  skills: [
    "Financial Analysis & Valuation", "Portfolio Theory & Asset Pricing (CAPM, APT)", "Technical & Fundamental Market Analysis",
    "Macro Analysis — G7 central banks, interest rate differentials, CPI, NFP, PMI, GDP",
    "Forex & Crypto Trading — live market experience since June 2021, 75-80% win rate",
    "Excel (Advanced) — financial modelling, pivot tables, KPI dashboards, P&L tracking, back-testing datasets",
    "SQL (Beginner — developing for financial data analysis)", "TradingView, MT4/MT5, OANDA API", "QuickBooks & Sage",
    "Irish Taxation (IT1/IT2/IT3 — Case I, USC, PRSI, VAT)", "Python (in progress — data analysis & automation)",
    "Financial Reporting (Consolidations, IAS 33 EPS, SCF)", "Risk Management & Position Sizing",
    "Compliance-style monitoring — trading checklists, portfolio risk controls, scenario analysis",
    "Teamwork & Collaboration", "Strong written and verbal communication"
  ],
  experience: [
    { title: "Independent Investment & Market Analysis", dates: "June 2021 – Present", bullets: [
      "Conduct technical and fundamental analysis across major FX pairs and crypto markets, applying economic indicators, monetary policy insights, and risk management frameworks.",
      "Designed and implemented disciplined trading strategies using compliance-style monitoring tools, portfolio risk controls, and scenario-based analysis.",
      "Maintained a documented win rate of 75–80% across back-tested and live trading sessions with strict daily drawdown thresholds and position sizing rules.",
      "All trades logged in Notion with entry rationale, execution notes, and post-trade review; performance tracked in Excel with P&L, drawdown, and win rate metrics.",
      "Continuously refined strategies using structured back-testing datasets built in Excel using TradingView and MT4/MT5 exported data.",
      "Produce weekly market review summaries combining technical pattern analysis with macro context."
    ]},
    { title: "Independent Research — G7 Central Banks & Macro Analysis", dates: "Feb 2025 – Present", bullets: [
      "Producing an advanced research report on the structure and regulatory functions of G7 central banks, highlighting their role in maintaining financial stability and shaping monetary policy.",
      "Analysed how G7 central banks are interconnected and how their policies influence global markets, capital flows, and economic performance.",
      "Research directly informs trade planning — particularly around high-impact macro events such as FOMC, ECB, and BOE meetings.",
      "Demonstrated ability to interpret complex economic and regulatory frameworks and communicate findings clearly to diverse audiences."
    ]}
  ]
};

const JOB_BOARDS = [
  { name: "LinkedIn Jobs", icon: "💼", categories: [
    { label: "🎓 Summer internships", searches: [
      { label: "Finance Summer Internship — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=finance+summer+internship&location=Ireland&f_TPR=r2592000" },
      { label: "Investment Banking Internship — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=investment+banking+internship&location=Ireland&f_TPR=r2592000" },
      { label: "Accounting Internship — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=accounting+internship&location=Dublin%2C+Ireland&f_TPR=r2592000" },
      { label: "Asset Management Internship — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=asset+management+internship&location=Ireland&f_TPR=r2592000" },
      { label: "Trade Support Internship — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=trade+support+internship&location=Ireland&f_TPR=r2592000" },
      { label: "Audit / Tax Internship — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=audit+tax+internship&location=Dublin%2C+Ireland&f_TPR=r2592000" },
    ]},
    { label: "👔 Junior / graduate roles", searches: [
      { label: "Trainee Accountant — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=trainee+accountant&location=Ireland" },
      { label: "Junior Accountant — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=junior+accountant&location=Dublin%2C+Ireland" },
      { label: "Graduate Audit Associate — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=graduate+audit+associate&location=Ireland" },
      { label: "Junior Financial Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=junior+financial+analyst&location=Ireland" },
      { label: "Graduate Finance Scheme — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=graduate+finance+scheme&location=Ireland" },
      { label: "Tax Associate — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=tax+associate+graduate&location=Dublin%2C+Ireland" },
    ]},
    { label: "📈 Trading & markets", searches: [
      { label: "Trade Support Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=trade+support+analyst&location=Ireland" },
      { label: "FX / Currency Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=fx+analyst+currency&location=Ireland" },
      { label: "Market Risk Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=market+risk+analyst&location=Ireland" },
      { label: "Trading Operations Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=trading+operations+analyst&location=Ireland" },
      { label: "Derivatives Operations Analyst — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=derivatives+operations+analyst&location=Dublin%2C+Ireland" },
    ]},
    { label: "🏦 Investment & asset management", searches: [
      { label: "Investment Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=investment+analyst&location=Ireland" },
      { label: "Asset Management Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=asset+management+analyst&location=Ireland" },
      { label: "Fund Administration Analyst — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=fund+administration+analyst&location=Dublin%2C+Ireland" },
      { label: "Portfolio Management Assistant — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=portfolio+management+assistant&location=Ireland" },
      { label: "Wealth Management Associate — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=wealth+management+associate&location=Ireland" },
    ]},
    { label: "🏛️ Banking & corporate finance", searches: [
      { label: "Investment Banking Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=investment+banking+analyst&location=Ireland" },
      { label: "Treasury Analyst — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=treasury+analyst&location=Dublin%2C+Ireland" },
      { label: "Corporate Finance Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=corporate+finance+analyst&location=Ireland" },
      { label: "Credit Analyst — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=credit+analyst&location=Dublin%2C+Ireland" },
      { label: "Private Equity Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=private+equity+analyst&location=Ireland" },
    ]},
    { label: "🛡️ Risk & compliance", searches: [
      { label: "Risk Analyst — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=risk+analyst&location=Dublin%2C+Ireland" },
      { label: "Compliance Analyst — Ireland", url: "https://www.linkedin.com/jobs/search/?keywords=compliance+analyst&location=Ireland" },
      { label: "Regulatory Reporting Analyst — Dublin", url: "https://www.linkedin.com/jobs/search/?keywords=regulatory+reporting+analyst&location=Dublin%2C+Ireland" },
    ]},
  ]},
  { name: "IrishJobs.ie", icon: "🇮🇪", categories: [
    { label: "🎓 Internships & graduate", searches: [
      { label: "Finance Internships — Ireland", url: "https://www.irishjobs.ie/jobs/accounting-finance?contract=Internship" },
      { label: "Graduate Finance Roles", url: "https://www.irishjobs.ie/jobs/accounting-finance/graduate-roles" },
      { label: "Trainee / Junior Accountant", url: "https://www.irishjobs.ie/jobs/accounting-finance/accounts-assistant" },
    ]},
    { label: "📊 Finance & investment", searches: [
      { label: "Investment Fund Management", url: "https://www.irishjobs.ie/jobs/finance/investment-fund-management" },
      { label: "Banking & Financial Services", url: "https://www.irishjobs.ie/jobs/finance/banking" },
      { label: "Accounting & Finance", url: "https://www.irishjobs.ie/jobs/accounting-finance" },
    ]},
  ]},
  { name: "Indeed Ireland", icon: "🔍", categories: [
    { label: "🎓 Internships", searches: [
      { label: "Finance Internship — Dublin", url: "https://ie.indeed.com/jobs?q=finance+internship&l=Dublin&jt=internship" },
      { label: "Accounting Internship — Ireland", url: "https://ie.indeed.com/jobs?q=accounting+internship&l=Ireland&jt=internship" },
      { label: "Investment Banking Internship", url: "https://ie.indeed.com/jobs?q=investment+banking+internship&l=Ireland" },
    ]},
    { label: "👔 Junior & graduate", searches: [
      { label: "Trainee Accountant — Ireland", url: "https://ie.indeed.com/jobs?q=trainee+accountant&l=Ireland" },
      { label: "Junior Financial Analyst — Dublin", url: "https://ie.indeed.com/jobs?q=junior+financial+analyst&l=Dublin" },
      { label: "Accounts Assistant — Dublin", url: "https://ie.indeed.com/jobs?q=accounts+assistant&l=Dublin" },
    ]},
    { label: "📈 Trading & markets", searches: [
      { label: "Trade Support Analyst", url: "https://ie.indeed.com/jobs?q=trade+support+analyst&l=Ireland" },
      { label: "Asset Management Analyst", url: "https://ie.indeed.com/jobs?q=asset+management+analyst&l=Ireland" },
      { label: "Risk Analyst — Dublin", url: "https://ie.indeed.com/jobs?q=risk+analyst&l=Dublin" },
    ]},
  ]},
  { name: "Graduate Programmes", icon: "🎓", categories: [
    { label: "🏢 Big 4 & accounting firms", searches: [
      { label: "PwC Graduate — Ireland", url: "https://www.pwc.ie/careers/students-graduates.html" },
      { label: "Deloitte Graduate — Ireland", url: "https://www2.deloitte.com/ie/en/pages/careers/articles/graduate-programmes.html" },
      { label: "KPMG Graduate — Ireland", url: "https://home.kpmg/ie/en/home/careers/students.html" },
      { label: "EY Graduate — Ireland", url: "https://www.ey.com/en_ie/careers/students" },
      { label: "Grant Thornton Graduate — Ireland", url: "https://www.grantthornton.ie/careers/students-and-graduates/" },
    ]},
    { label: "🏦 Banks & asset managers", searches: [
      { label: "BlackRock Dublin Careers", url: "https://careers.blackrock.com/job-search-results/?location=Dublin" },
      { label: "GradIreland — Finance & Banking", url: "https://gradireland.com/jobs?field=finance-banking" },
      { label: "JP Morgan Graduate — Dublin", url: "https://careers.jpmorgan.com/global/en/students/programs" },
      { label: "Goldman Sachs Graduate", url: "https://www.goldmansachs.com/careers/students/programs" },
    ]},
  ]},
];

const TARGET_COMPANIES = [
  { name: "PwC Ireland", type: "Big 4 — Audit / Tax / Advisory", url: "https://www.pwc.ie/careers/students-graduates.html", priority: "internship" },
  { name: "Deloitte Ireland", type: "Big 4 — Audit / Tax / Consulting", url: "https://www2.deloitte.com/ie/en/pages/careers/articles/graduate-programmes.html", priority: "internship" },
  { name: "KPMG Ireland", type: "Big 4 — Audit / Tax / Advisory", url: "https://home.kpmg/ie/en/home/careers/students.html", priority: "internship" },
  { name: "EY Ireland", type: "Big 4 — Assurance / Tax / Strategy", url: "https://www.ey.com/en_ie/careers/students", priority: "internship" },
  { name: "Grant Thornton", type: "Mid-tier — Audit / Tax / Advisory", url: "https://www.grantthornton.ie/careers/students-and-graduates/", priority: "internship" },
  { name: "BlackRock", type: "Asset Management", url: "https://careers.blackrock.com/job-search-results/?location=Dublin", priority: "role" },
  { name: "State Street", type: "Asset Servicing / Fund Admin", url: "https://careers.statestreet.com/global/en/ireland", priority: "role" },
  { name: "Northern Trust", type: "Wealth & Asset Management", url: "https://careers.northerntrust.com/search/?q=&locationsearch=Dublin", priority: "role" },
  { name: "Citi Ireland", type: "Banking / Trade Support", url: "https://jobs.citi.com/search-jobs/Dublin", priority: "role" },
  { name: "JP Morgan", type: "Investment Banking", url: "https://careers.jpmorgan.com/global/en/students/programs", priority: "role" },
  { name: "Bank of America", type: "Investment Banking", url: "https://careers.bankofamerica.com/en-us/students-and-graduates", priority: "role" },
  { name: "Davy Group", type: "Wealth / Stockbroking", url: "https://www.davy.ie/about/careers.html", priority: "role" },
  { name: "AIB", type: "Banking / Markets", url: "https://aib.ie/careers", priority: "role" },
  { name: "Bank of Ireland", type: "Banking / Markets", url: "https://careers.bankofireland.com", priority: "role" },
  { name: "Goodbody Stockbrokers", type: "Wealth / Equity Research", url: "https://www.goodbody.ie/en/about-goodbody/careers", priority: "role" },
  { name: "Maples Group", type: "Fund Services / Private Equity", url: "https://www.maples.com/careers", priority: "role" },
  { name: "Fidelity International", type: "Asset Management", url: "https://jobs.fidelityinternational.com/search/?q=&locationsearch=Dublin", priority: "role" },
  { name: "HSBC Ireland", type: "Banking / Trade Finance", url: "https://www.hsbc.com/careers", priority: "role" },
];

const STATUSES = ["Saved","Applied","Interview","Offer","Rejected"];
const SC = { Saved:{bg:"#EEF2FF",tx:"#4338CA",bd:"#C7D2FE"}, Applied:{bg:"#EFF6FF",tx:"#1D4ED8",bd:"#BFDBFE"}, Interview:{bg:"#FEF3C7",tx:"#92400E",bd:"#FDE68A"}, Offer:{bg:"#D1FAE5",tx:"#065F46",bd:"#6EE7B7"}, Rejected:{bg:"#FEE2E2",tx:"#991B1B",bd:"#FECACA"} };
const EMPTY = {company:"",role:"",location:"Dublin",dateApplied:"",status:"Applied",notes:"",url:""};
const SK = "ahmed_copilot_v4";

function load(){try{return JSON.parse(localStorage.getItem(SK)||"[]");}catch{return[];}}
function save(a){try{localStorage.setItem(SK,JSON.stringify(a));}catch{}}

// ── DOCX GENERATION (pure JS, no external libraries) ──
function escXml(t){ return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

function makeWpara(text, opts){
  const {bold=false, color="333333", size=20, center=false, spaceBefore=0, spaceAfter=80, borderBottom=false} = opts||{};
  const jc = center ? `<w:jc w:val="center"/>` : "";
  const border = borderBottom ? `<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="1F3A6E"/></w:pBdr>` : "";
  const spacing = `<w:spacing w:before="${spaceBefore}" w:after="${spaceAfter}"/>`;
  const b = bold ? "<w:b/>" : "";
  const col = `<w:color w:val="${color}"/>`;
  const sz = `<w:sz w:val="${size}"/><w:szCs w:val="${size}"/>`;
  return `<w:p><w:pPr>${jc}${border}${spacing}</w:pPr><w:r><w:rPr>${b}${col}${sz}</w:rPr><w:t xml:space="preserve">${escXml(text)}</w:t></w:r></w:p>`;
}

function makeBullet(text){
  return `<w:p><w:pPr><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr><w:spacing w:after="60"/></w:pPr><w:r><w:rPr><w:color w:val="333333"/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr><w:t xml:space="preserve">${escXml(text)}</w:t></w:r></w:p>`;
}

function sectionHeader(title){
  return makeWpara(title.toUpperCase(), {bold:true, color:"1F3A6E", size:24, spaceBefore:240, spaceAfter:80, borderBottom:true});
}

function buildDocxXml(cvText, coverText){
  // Parse CV sections
  const lines = cvText.split("\n");
  let bodyXml = "";

  // Header
  bodyXml += makeWpara(AHMED_PROFILE.name.toUpperCase(), {bold:true, color:"1F3A6E", size:40, center:true, spaceAfter:60});
  bodyXml += makeWpara("Customer Assistant  |  Retail & Convenience Store Professional", {color:"555555", size:22, center:true, spaceAfter:60});
  bodyXml += makeWpara(`${AHMED_PROFILE.address}`, {color:"555555", size:18, center:true, spaceAfter:60});
  bodyXml += makeWpara(`${AHMED_PROFILE.phone}  |  ${AHMED_PROFILE.email}  |  ${AHMED_PROFILE.linkedin}`, {color:"555555", size:18, center:true, spaceAfter:60});
  bodyXml += makeWpara(AHMED_PROFILE.rightToWork, {bold:true, color:"C0392B", size:18, center:true, spaceAfter:200});

  // Parse CV text sections
  let currentSection = "";
  for(const line of lines){
    const trimmed = line.trim();
    if(!trimmed) continue;
    if(trimmed.startsWith("##") || trimmed.startsWith("#")){
      currentSection = trimmed.replace(/^#+\s*/,"").trim();
      bodyXml += sectionHeader(currentSection);
    } else if(trimmed.startsWith("-") || trimmed.startsWith("•")){
      bodyXml += makeBullet(trimmed.replace(/^[-•]\s*/,""));
    } else if(trimmed.includes("|") && !trimmed.startsWith("##")){
      bodyXml += makeWpara(trimmed, {bold:true, color:"111111", size:22, spaceBefore:160, spaceAfter:40});
    } else {
      const isBold = trimmed.startsWith("**") || trimmed.toUpperCase() === trimmed && trimmed.length > 3;
      bodyXml += makeWpara(trimmed.replace(/\*\*/g,""), {bold:isBold, color:"333333", size:20, spaceAfter:60});
    }
  }

  // Cover letter
  if(coverText){
    bodyXml += `<w:p><w:r><w:br w:type="page"/></w:r></w:p>`;
    bodyXml += sectionHeader("Cover Letter");
    for(const line of coverText.split("\n")){
      const trimmed = line.trim();
      if(!trimmed){ bodyXml += `<w:p><w:pPr><w:spacing w:after="120"/></w:pPr></w:p>`; continue; }
      bodyXml += makeWpara(trimmed, {color:"333333", size:20, spaceAfter:160});
    }
  }

  const docXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<w:body>
<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1080" w:right="1080" w:bottom="1080" w:left="1080"/></w:sectPr>
${bodyXml}
</w:body>
</w:document>`;

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="20"/></w:rPr></w:rPrDefault></w:docDefaults>
</w:styles>`;

  const numberingXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:abstractNum w:abstractNumId="0"><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="480" w:hanging="240"/></w:pPr></w:lvl></w:abstractNum>
<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
</w:numbering>`;

  const relsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>
</Relationships>`;

  const rootRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
<Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
</Types>`;

  return { docXml, stylesXml, numberingXml, relsXml, rootRelsXml, contentTypesXml };
}

// Pure JS zip builder — no external library needed
function uint8(str){ return new TextEncoder().encode(str); }
function crc32(data){
  let crc = 0xFFFFFFFF;
  for(let i=0;i<data.length;i++){ crc ^= data[i]; for(let j=0;j<8;j++) crc = (crc>>>1)^(crc&1?0xEDB88320:0); }
  return (crc^0xFFFFFFFF)>>>0;
}
function pack32LE(n){ return [n&0xFF,(n>>8)&0xFF,(n>>16)&0xFF,(n>>24)&0xFF]; }
function pack16LE(n){ return [n&0xFF,(n>>8)&0xFF]; }

function makeZipEntry(name, content){
  const nameBytes = uint8(name);
  const dataBytes = typeof content === "string" ? uint8(content) : content;
  const crc = crc32(dataBytes);
  const local = new Uint8Array([
    0x50,0x4B,0x03,0x04, // local file header sig
    0x14,0x00,           // version needed
    0x00,0x00,           // flags
    0x00,0x00,           // compression (stored)
    0x00,0x00,0x00,0x00, // mod time/date
    ...pack32LE(crc),
    ...pack32LE(dataBytes.length),
    ...pack32LE(dataBytes.length),
    ...pack16LE(nameBytes.length),
    0x00,0x00,           // extra field length
    ...nameBytes,
    ...dataBytes
  ]);
  const central = [
    0x50,0x4B,0x01,0x02, // central dir sig
    0x14,0x00,           // version made by
    0x14,0x00,           // version needed
    0x00,0x00,           // flags
    0x00,0x00,           // compression
    0x00,0x00,0x00,0x00, // mod time/date
    ...pack32LE(crc),
    ...pack32LE(dataBytes.length),
    ...pack32LE(dataBytes.length),
    ...pack16LE(nameBytes.length),
    0x00,0x00,           // extra
    0x00,0x00,           // comment
    0x00,0x00,           // disk start
    0x00,0x00,           // internal attr
    0x00,0x00,0x00,0x00, // external attr
    // offset filled in later
    0x00,0x00,0x00,0x00,
    ...nameBytes
  ];
  return { local, central, nameBytes, dataBytes, crc };
}

function buildZip(files){
  const entries = [];
  let offset = 0;
  const parts = [];
  for(const [name, content] of files){
    const e = makeZipEntry(name, content);
    // set offset in central dir
    e.central[42] = offset&0xFF; e.central[43]=(offset>>8)&0xFF; e.central[44]=(offset>>16)&0xFF; e.central[45]=(offset>>24)&0xFF;
    parts.push(e.local);
    offset += e.local.length;
    entries.push(e);
  }
  const centralStart = offset;
  for(const e of entries) parts.push(new Uint8Array(e.central));
  const centralSize = entries.reduce((a,e)=>a+e.central.length,0);
  const eocd = new Uint8Array([
    0x50,0x4B,0x05,0x06,
    0x00,0x00,0x00,0x00,
    ...pack16LE(entries.length),
    ...pack16LE(entries.length),
    ...pack32LE(centralSize),
    ...pack32LE(centralStart),
    0x00,0x00
  ]);
  parts.push(eocd);
  const total = parts.reduce((a,p)=>a+p.length,0);
  const out = new Uint8Array(total);
  let pos = 0;
  for(const p of parts){ out.set(p,pos); pos+=p.length; }
  return out;
}

function downloadDocx(output, docType){
  let cvText = output;
  let coverText = "";
  if(docType==="both" && output.includes("===COVER LETTER===")){
    const parts = output.split("===COVER LETTER===");
    cvText = parts[0].trim();
    coverText = parts[1]?parts[1].trim():"";
  } else if(docType==="cover"){
    cvText = "";
    coverText = output;
  }

  const {docXml, stylesXml, numberingXml, relsXml, rootRelsXml, contentTypesXml} = buildDocxXml(cvText, coverText);

  const zipData = buildZip([
    ["[Content_Types].xml", contentTypesXml],
    ["_rels/.rels", rootRelsXml],
    ["word/document.xml", docXml],
    ["word/_rels/document.xml.rels", relsXml],
    ["word/styles.xml", stylesXml],
    ["word/numbering.xml", numberingXml],
  ]);

  const blob = new Blob([zipData], {type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Ahmed_Memon_${docType==="cover"?"Cover_Letter":docType==="cv"?"CV":"CV_and_Cover_Letter"}.docx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const s = {
  container:{maxWidth:800,margin:"0 auto",padding:"24px 16px",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"},
  card:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,overflow:"hidden",marginBottom:10},
  inp:{width:"100%",padding:"8px 10px",borderRadius:8,border:"1px solid #d1d5db",fontSize:13,background:"#fff",color:"#111",boxSizing:"border-box"},
  tabBtn:(a)=>({padding:"8px 16px",borderRadius:8,border:"1px solid",borderColor:a?"#3b82f6":"#e5e7eb",background:a?"#eff6ff":"#fff",color:a?"#1d4ed8":"#6b7280",cursor:"pointer",fontSize:13,fontWeight:a?500:400}),
  pill:(a)=>({fontSize:11,padding:"3px 10px",borderRadius:99,border:"1px solid",borderColor:a?"#3b82f6":"#e5e7eb",background:a?"#eff6ff":"#fff",color:a?"#1d4ed8":"#6b7280",cursor:"pointer"}),
  rowBtn:{fontSize:11,padding:"3px 8px",borderRadius:6,border:"1px solid #e5e7eb",background:"#fff",color:"#6b7280",cursor:"pointer"},
  label:{fontSize:11,color:"#6b7280",display:"block",marginBottom:3},
};

export default function App() {
  const [tab, setTab] = useState("boards");
  const [apps, setApps] = useState(load);
  const [showForm, setShowForm] = useState(false);
  const [editIdx, setEditIdx] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [filter, setFilter] = useState("All");
  const [jd, setJd] = useState("");
  const [docType, setDocType] = useState("both");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [expandedBoard, setExpandedBoard] = useState(null);
  const [expandedCat, setExpandedCat] = useState({});
  const [companyFilter, setCompanyFilter] = useState("all");
  const [copied, setCopied] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem("ahmed_api_key_v2")||"");
  const [showApiInput, setShowApiInput] = useState(false);

  useEffect(()=>save(apps),[apps]);

  const counts = STATUSES.reduce((a,st)=>({...a,[st]:apps.filter(x=>x.status===st).length}),{});
  const filtered = filter==="All"?apps:apps.filter(a=>a.status===filter);

  function upsert(){
    if(!form.company||!form.role)return;
    const d=form.dateApplied||new Date().toISOString().slice(0,10);
    if(editIdx!==null){const u=[...apps];u[editIdx]={...form,dateApplied:d};setApps(u);setEditIdx(null);}
    else setApps([{...form,dateApplied:d},...apps]);
    setForm(EMPTY);setShowForm(false);
  }

  function del(i){if(window.confirm("Delete?"))setApps(apps.filter((_,idx)=>idx!==i));}
  function edit(i){setForm(apps[i]);setEditIdx(i);setShowForm(true);setTab("tracker");}
  function chgStatus(i,st){const u=[...apps];u[i]={...u[i],status:st};setApps(u);}
  function toggleCat(b,c){const k=b+"||"+c;setExpandedCat(p=>({...p,[k]:!p[k]}));}
  function saveApiKey(k){localStorage.setItem("ahmed_api_key_v2",k);setApiKey(k);setShowApiInput(false);}

  async function generate(){
    if(!jd.trim())return;
    if(!apiKey){setShowApiInput(true);return;}
    setLoading(true);setOutput("");
    const profileStr=`Name: ${AHMED_PROFILE.name}\nAddress: ${AHMED_PROFILE.address}\nPhone: ${AHMED_PROFILE.phone}\nEmail: ${AHMED_PROFILE.email}\nLinkedIn: ${AHMED_PROFILE.linkedin}\nRight to Work: ${AHMED_PROFILE.rightToWork}\n\nEDUCATION:\n${AHMED_PROFILE.education.map(e=>`- ${e.degree} | ${e.institution} | ${e.dates}${e.grade?` | ${e.grade}`:""}${e.modules?`\n  Modules: ${e.modules}`:""}${e.subjects?`\n  Subjects: ${e.subjects}`:""}`).join("\n")}\n\nKEY SKILLS:\n${AHMED_PROFILE.skills.map(sk=>`- ${sk}`).join("\n")}\n\nPROFESSIONAL EXPERIENCE:\n${AHMED_PROFILE.experience.map(e=>`${e.title} (${e.dates})\n${e.bullets.map(b=>`- ${b}`).join("\n")}`).join("\n\n")}`;
    const both=`You are an expert finance career writer. Using the candidate profile, produce TWO documents tailored to the job description:\n\n1. A complete ATS-optimised CV with these exact sections using ## headings:\n## Professional Summary\n## Education\n## Key Skills\n## Professional Experience\n\n2. A compelling cover letter (3-4 paragraphs)\n\nSeparate the two with exactly: ===COVER LETTER===\n\nRules:\n- Mirror JD keywords naturally\n- Mention Stamp 4 clearly\n- No retail experience\n- Emphasise trading, financial analysis, macro research, accounting studies\n- Use bullet points starting with - for experience\n\nPROFILE:\n${profileStr}\n\nJOB DESCRIPTION:\n${jd}\n\nWrite both now:`;
    const cvOnly=`You are an expert ATS CV writer for finance. Write a complete CV using ## sections: ## Professional Summary, ## Education, ## Key Skills, ## Professional Experience. Use - bullet points. Mirror JD keywords. Mention Stamp 4. No retail.\n\nPROFILE:\n${profileStr}\n\nJOB DESCRIPTION:\n${jd}\n\nWrite CV now:`;
    const coverOnly=`Write a compelling 3-4 paragraph cover letter for a finance role. Tailored to the JD. Mention Stamp 4. Professional tone. No retail.\n\nPROFILE:\n${profileStr}\n\nJOB DESCRIPTION:\n${jd}\n\nWrite cover letter now:`;
    try{
      const res=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json","x-api-key":apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
        body:JSON.stringify({model:"claude-sonnet-4-5",max_tokens:2000,messages:[{role:"user",content:docType==="cv"?cvOnly:docType==="cover"?coverOnly:both}]})
      });
      const data=await res.json();
      if(data.error)setOutput("API Error: "+data.error.message);
      else setOutput(data.content?.find(b=>b.type==="text")?.text||"No output.");
    }catch(e){setOutput("Error: "+e.message);}
    setLoading(false);
  }

  function copyOut(){navigator.clipboard.writeText(output).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);}).catch(()=>{});}

  const filteredCompanies = companyFilter==="all"?TARGET_COMPANIES:TARGET_COMPANIES.filter(c=>c.priority===companyFilter);

  return (
    <div style={s.container}>
      <div style={{marginBottom:24}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6,flexWrap:"wrap"}}>
          <span style={{fontSize:22,fontWeight:700,color:"#111"}}>🚀 Job Copilot</span>
          <span style={{fontSize:11,padding:"2px 8px",borderRadius:99,background:"#d1fae5",color:"#065f46",border:"1px solid #6ee7b7"}}>Ahmed Memon</span>
          <span style={{fontSize:11,padding:"2px 8px",borderRadius:99,background:"#f3f4f6",color:"#374151",border:"1px solid #e5e7eb"}}>Stamp 4</span>
          <span style={{fontSize:11,padding:"2px 8px",borderRadius:99,background:"#fef3c7",color:"#92400e",border:"1px solid #fde68a"}}>Internships first</span>
          <button onClick={()=>setShowApiInput(!showApiInput)} style={{marginLeft:"auto",...s.rowBtn,fontSize:11}}>{apiKey?"✓ API key set":"⚙ Set API key"}</button>
        </div>
        <p style={{fontSize:13,color:"#6b7280"}}>Finance · Accounting · Trading · Investment · Asset Management · Risk & Compliance</p>
        {showApiInput&&(<div style={{marginTop:12,padding:12,background:"#f9fafb",borderRadius:8,border:"1px solid #e5e7eb"}}>
          <p style={{fontSize:12,color:"#6b7280",marginBottom:8}}>Enter your Anthropic API key. Stored locally in your browser only.</p>
          <div style={{display:"flex",gap:8}}>
            <input type="password" placeholder="sk-ant-..." defaultValue={apiKey} id="apiKeyInput" style={{...s.inp,flex:1}}/>
            <button onClick={()=>saveApiKey(document.getElementById("apiKeyInput").value)} style={{padding:"8px 14px",borderRadius:8,border:"1px solid #3b82f6",background:"#eff6ff",color:"#1d4ed8",cursor:"pointer",fontSize:13,fontWeight:500}}>Save</button>
          </div>
        </div>)}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:20}}>
        {STATUSES.map(st=>(<div key={st} style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,padding:"12px 8px",textAlign:"center"}}>
          <div style={{fontSize:22,fontWeight:700,color:"#111"}}>{counts[st]}</div>
          <div style={{fontSize:11,color:"#6b7280",marginTop:2}}>{st}</div>
        </div>))}
      </div>

      <div style={{display:"flex",gap:6,marginBottom:20,flexWrap:"wrap"}}>
        {[{k:"boards",l:"Job boards",e:"🔍"},{k:"companies",l:"Target companies",e:"🏢"},{k:"generator",l:"CV & Cover Letter",e:"📄"},{k:"tracker",l:"Tracker",e:"📋"}].map(({k,l,e})=>(
          <button key={k} style={s.tabBtn(tab===k)} onClick={()=>setTab(k)}>{e} {l}</button>
        ))}
      </div>

      {tab==="boards"&&(<div style={{display:"flex",flexDirection:"column",gap:8}}>
        {JOB_BOARDS.map(board=>(<div key={board.name} style={s.card}>
          <button onClick={()=>setExpandedBoard(expandedBoard===board.name?null:board.name)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px",background:"transparent",border:"none",cursor:"pointer"}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>{board.icon}</span><span style={{fontSize:15,fontWeight:600,color:"#111"}}>{board.name}</span><span style={{fontSize:11,color:"#9ca3af"}}>{board.categories.reduce((a,c)=>a+c.searches.length,0)} searches</span></div>
            <span style={{fontSize:12,color:"#9ca3af"}}>{expandedBoard===board.name?"▲":"▼"}</span>
          </button>
          {expandedBoard===board.name&&(<div style={{borderTop:"1px solid #f3f4f6"}}>
            {board.categories.map(cat=>{const key=board.name+"||"+cat.label;const open=expandedCat[key];return(<div key={cat.label}>
              <button onClick={()=>toggleCat(board.name,cat.label)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 16px",background:"#f9fafb",border:"none",borderBottom:"1px solid #f3f4f6",cursor:"pointer"}}>
                <span style={{fontSize:12,fontWeight:500,color:"#374151"}}>{cat.label}</span><span style={{fontSize:11,color:"#9ca3af"}}>{open?"▲":"▼"}</span>
              </button>
              {open&&(<div style={{padding:"4px 8px 8px"}}>{cat.searches.map(sr=>(
                <a key={sr.label} href={sr.url} target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 8px",textDecoration:"none",color:"#111",borderRadius:6,fontSize:13}} onMouseEnter={e=>e.currentTarget.style.background="#f9fafb"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  <span>{sr.label}</span><span style={{fontSize:11,color:"#3b82f6"}}>↗</span>
                </a>
              ))}</div>)}
            </div>);})}
          </div>)}
        </div>))}
      </div>)}

      {tab==="companies"&&(<div>
        <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
          {[{k:"all",l:"All ("+TARGET_COMPANIES.length+")"},{k:"internship",l:"🎓 Internship priority"},{k:"role",l:"💼 Full roles"}].map(o=>(<button key={o.k} onClick={()=>setCompanyFilter(o.k)} style={s.pill(companyFilter===o.k)}>{o.l}</button>))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {filteredCompanies.map(c=>(<div key={c.name} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:8}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              {c.priority==="internship"&&<span style={{fontSize:10,padding:"1px 6px",borderRadius:99,background:"#fef3c7",color:"#92400e",border:"1px solid #fde68a"}}>intern</span>}
              <span style={{fontWeight:600,fontSize:13,color:"#111"}}>{c.name}</span>
              <span style={{fontSize:12,color:"#6b7280"}}>{c.type}</span>
            </div>
            <a href={c.url} target="_blank" rel="noreferrer" style={{fontSize:12,color:"#3b82f6",textDecoration:"none",whiteSpace:"nowrap",fontWeight:500}}>Careers ↗</a>
          </div>))}
        </div>
      </div>)}

      {tab==="generator"&&(<div>
        <div style={{padding:14,background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:8,marginBottom:16}}>
          <p style={{fontSize:13,color:"#0369a1",margin:0}}><strong>Profile pre-loaded</strong> — June 2021 trading, SQL, all modules, Stamp 4. Generates ATS-optimised CV + Cover Letter downloadable as Word (.docx)!{!apiKey&&<span style={{color:"#dc2626"}}> ⚠ Set your API key first.</span>}</p>
        </div>
        <div style={{display:"flex",gap:7,marginBottom:14,flexWrap:"wrap"}}>
          {[{k:"both",l:"CV + Cover letter"},{k:"cv",l:"CV only"},{k:"cover",l:"Cover letter only"}].map(o=>(<button key={o.k} onClick={()=>setDocType(o.k)} style={{...s.pill(docType===o.k),padding:"5px 12px",fontSize:12}}>{o.l}</button>))}
        </div>
        <div style={{marginBottom:12}}>
          <label style={s.label}>Paste job description *</label>
          <textarea rows={8} value={jd} onChange={e=>setJd(e.target.value)} placeholder="Paste the full job description here..." style={{...s.inp,resize:"vertical",lineHeight:1.6}}/>
        </div>
        <button onClick={generate} disabled={loading||!jd.trim()} style={{padding:"10px 20px",borderRadius:8,border:"1px solid #3b82f6",background:loading||!jd.trim()?"#f9fafb":"#eff6ff",color:"#1d4ed8",cursor:loading||!jd.trim()?"default":"pointer",fontSize:13,fontWeight:600,marginBottom:16,opacity:loading||!jd.trim()?0.6:1}}>
          {loading?"⏳ Generating…":`✨ Generate ${docType==="both"?"CV & Cover Letter":docType==="cv"?"CV":"Cover Letter"}`}
        </button>
        {output&&(<div style={{background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:10,padding:16}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexWrap:"wrap",gap:8}}>
            <span style={{fontSize:13,fontWeight:600,color:"#111"}}>✅ ATS-optimised output</span>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>downloadDocx(output,docType)} style={{fontSize:12,padding:"6px 14px",borderRadius:8,border:"1px solid #059669",background:"#d1fae5",color:"#065f46",cursor:"pointer",fontWeight:600}}>⬇ Download Word (.docx)</button>
              <button onClick={copyOut} style={{fontSize:11,padding:"4px 10px",borderRadius:8,border:"1px solid #e5e7eb",background:"#fff",color:copied?"#059669":"#6b7280",cursor:"pointer"}}>{copied?"✓ Copied!":"Copy text"}</button>
            </div>
          </div>
          <pre style={{whiteSpace:"pre-wrap",fontSize:12,lineHeight:1.8,color:"#111",margin:0,fontFamily:"inherit"}}>{output}</pre>
        </div>)}
      </div>)}

      {tab==="tracker"&&(<div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:8}}>
          <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
            {["All",...STATUSES].map(st=>(<button key={st} onClick={()=>setFilter(st)} style={s.pill(filter===st)}>{st} ({st==="All"?apps.length:counts[st]})</button>))}
          </div>
          <button onClick={()=>{setShowForm(true);setEditIdx(null);setForm(EMPTY);}} style={{padding:"7px 14px",borderRadius:8,border:"1px solid #3b82f6",background:"#eff6ff",color:"#1d4ed8",cursor:"pointer",fontSize:13,fontWeight:500}}>+ Add application</button>
        </div>
        {showForm&&(<div style={{background:"#fff",border:"1px solid #d1d5db",borderRadius:10,padding:16,marginBottom:14}}>
          <p style={{fontWeight:600,fontSize:13,margin:"0 0 14px",color:"#111"}}>{editIdx!==null?"Edit application":"Log new application"}</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
            {[{k:"company",l:"Company *",p:"e.g. BlackRock"},{k:"role",l:"Role *",p:"e.g. Trade Support Analyst"},{k:"location",l:"Location",p:"e.g. Dublin"},{k:"dateApplied",l:"Date applied",t:"date"}].map(f=>(<div key={f.k}><label style={s.label}>{f.l}</label><input type={f.t||"text"} value={form[f.k]} placeholder={f.p||""} onChange={e=>setForm({...form,[f.k]:e.target.value})} style={s.inp}/></div>))}
            <div><label style={s.label}>Status</label><select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} style={s.inp}>{STATUSES.map(st=><option key={st}>{st}</option>)}</select></div>
            <div><label style={s.label}>Job URL</label><input value={form.url} placeholder="https://..." onChange={e=>setForm({...form,url:e.target.value})} style={s.inp}/></div>
            <div style={{gridColumn:"span 2"}}><label style={s.label}>Notes</label><textarea rows={2} value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Recruiter name, salary, deadline, next steps..." style={{...s.inp,resize:"vertical"}}/></div>
          </div>
          <div style={{display:"flex",gap:8}}>
            <button onClick={upsert} style={{padding:"8px 16px",borderRadius:8,border:"1px solid #3b82f6",background:"#eff6ff",color:"#1d4ed8",cursor:"pointer",fontSize:13,fontWeight:600}}>{editIdx!==null?"Save changes":"Log application"}</button>
            <button onClick={()=>{setShowForm(false);setEditIdx(null);setForm(EMPTY);}} style={{padding:"8px 16px",borderRadius:8,border:"1px solid #e5e7eb",background:"#fff",color:"#6b7280",cursor:"pointer",fontSize:13}}>Cancel</button>
          </div>
        </div>)}
        {filtered.length===0?(<div style={{textAlign:"center",padding:"48px 0",color:"#9ca3af",fontSize:13}}><div style={{fontSize:40,marginBottom:8}}>📭</div>{filter==="All"?"No applications yet — start logging!":`No "${filter}" applications yet`}</div>):(
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {filtered.map((app,i)=>{const ri=apps.indexOf(app);const sc=SC[app.status];return(<div key={i} style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,padding:"12px 14px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:5}}>
                <div><span style={{fontWeight:600,fontSize:14,color:"#111"}}>{app.company}</span><span style={{fontSize:12,color:"#6b7280",marginLeft:8}}>{app.role}</span></div>
                <span style={{fontSize:11,padding:"2px 8px",borderRadius:99,background:sc.bg,color:sc.tx,border:`1px solid ${sc.bd}`,whiteSpace:"nowrap"}}>{app.status}</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:12,fontSize:11,color:"#9ca3af",marginBottom:app.notes?7:0,flexWrap:"wrap"}}>
                {app.location&&<span>📍 {app.location}</span>}{app.dateApplied&&<span>📅 {app.dateApplied}</span>}
                {app.url&&<a href={app.url} target="_blank" rel="noreferrer" style={{color:"#3b82f6",textDecoration:"none",fontSize:11}}>↗ View job</a>}
              </div>
              {app.notes&&<p style={{fontSize:12,color:"#6b7280",margin:"0 0 8px",lineHeight:1.5}}>{app.notes}</p>}
              <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
                <select value={app.status} onChange={e=>chgStatus(ri,e.target.value)} style={{...s.rowBtn,padding:"3px 6px"}}>{STATUSES.map(st=><option key={st}>{st}</option>)}</select>
                <button onClick={()=>edit(ri)} style={s.rowBtn}>✏ Edit</button>
                <button onClick={()=>del(ri)} style={{...s.rowBtn,color:"#dc2626",borderColor:"#fecaca"}}>🗑 Delete</button>
              </div>
            </div>);})}
          </div>
        )}
      </div>)}
      <div style={{marginTop:32,paddingTop:16,borderTop:"1px solid #f3f4f6",textAlign:"center",fontSize:11,color:"#9ca3af"}}>Ahmed Memon — Job Copilot · Stamp 4 · Dublin 8 · Built with Claude</div>
    </div>
  );
}
