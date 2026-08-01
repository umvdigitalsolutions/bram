"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const partners = [
  {
    name: "Manish Malik",
    role: "Partner",
    credential: "Gold Medalist, AIR 1",
    office: "Head Office, Noida",
    focus:
      "Leads complex audit, cost accounting, GST, tax assessment, and strategic compliance assignments with a strong command of finance controls.",
    profile:
      "Manish anchors the firm profile and partner-led delivery model. A CA, CMA and LLB professional with AIR 1 in CMA, his work spans statutory audits, cost audits, financial consulting, taxation, corporate compliance and strategic financial planning.",
    image: "/partners/manish.png",
    imageClass: "object-contain object-center",
  },
  {
    name: "Ayush Khandelwal",
    role: "Partner",
    credential: "Gold Medalist",
    office: "Head Office, Noida",
    focus:
      "Works across audit execution, GST compliance, accounting systems, tax documentation, and client coordination for recurring finance operations.",
    profile:
      "Ayush supports the Noida leadership desk with a practical blend of audit, tax and recurring compliance oversight. He helps convert technical requirements into clear work plans, document lists and delivery timelines for business clients.",
    image: "/partners/ayush.png",
    imageClass: "object-contain object-top",
  },
  {
    name: "Akshay Sharma",
    role: "Partner",
    credential: "Chartered Accountant",
    office: "Head Office, Noida and Mayur Vihar, Delhi",
    focus:
      "Supports corporate compliance, statutory audit, MCA matters, assessment preparation, and process-driven advisory for business clients.",
    profile:
      "Akshay connects the Noida and Delhi network for statutory, corporate and compliance assignments. His profile is useful for clients that need responsive documentation, MCA coordination, audit support and issue-wise assessment preparation.",
    image: "/partners/akshay.png",
    imageClass: "object-contain object-top",
  },
  {
    name: "Rishab Jain",
    role: "Partner",
    credential: "Chartered Accountant",
    office: "Daryaganj, Delhi",
    focus:
      "Focuses on Delhi client relationships, tax audit, GST compliance, bookkeeping oversight, and documentation discipline for growing enterprises.",
    profile:
      "Rishab strengthens the Delhi branch presence and client-facing compliance desk. He works closely with entrepreneurs and operating teams that need structured books, timely filings, audit schedules and tax-ready records.",
    image: "/partners/rishab-jain-profile.jpg",
    imageClass: "object-cover object-center",
  },
  {
    name: "Bhawana Jain",
    role: "Partner",
    credential: "Chartered Accountant",
    office: "Daryaganj, Delhi",
    focus:
      "Works with partner-led compliance delivery across audit, tax, MCA, accounting, and client support from the Delhi office network.",
    profile:
      "Bhawana supports the branch office network with disciplined compliance execution, client communication, taxation, reporting, auditing and advisory support. Her profile includes FCA standing, international taxation learning and CSR certification.",
    image: "/partners/bhawana-jain-profile.jpg",
    imageClass: "object-cover object-center",
  },
  {
    name: "Renu Sehgal",
    role: "Cost Accounting Lead / Associate Partner",
    credential: "Cost Accountant, MM & Co.",
    linkedPhrase: "MM & Co.",
    linkedPhraseHref: "https://www.mmncompany.com",
    office: "Sector 63, Noida",
    focus:
      "Leads the cost accountants desk for cost audit, cost records, cost control, CMA reporting and sector-specific cost compliance.",
    profile:
      "Renu Sehgal strengthens the leadership bench with dedicated cost accounting capability through MM & Co. A CMA with AIR 16, B.Com and M.Com, her work covers accounting, GST, reconciliations, foreign transactions, ECB compliance, FEMA-linked matters and statutory financial discipline.",
    image: "/partners/renu1.png",
    imageClass: "object-contain object-center",
  },
];

const networkPartners = [
  {
    name: "Dr Aman Singh",
    role: "Founder Partner / Assam Lead",
    credential: "MCA, PhD",
    office: "Guwahati, Assam",
    profile:
      "Dr Aman Singh brings operating leadership, client acquisition, relationship management, vendor sourcing, business development and training capability to the wider BRAM network.",
    image: "/partners/aman.png",
    imageClass: "object-contain object-top",
  },
  {
    name: "Kuranganayani Chetia",
    role: "Founder Partner / Education Lead",
    credential: "JNU Alumni",
    office: "Guwahati, Assam",
    profile:
      "Kuranganayani Chetia supports the Assam leadership desk with a strong education and mentoring background, including civil service training initiatives and institutional development work.",
    image: "/partners/kuru.png",
    imageClass: "object-contain object-top",
  },
  {
    name: "Bharat Singh Prajapat",
    role: "Branch Partner / Network Lead",
    credential: "Sonipat branch office",
    office: "Kundli, Sonipat",
    profile:
      "Bharat leads the Sonipat branch touchpoint for clients around Kundli and nearby industrial areas. The office supports coordination, document collection, compliance communication and local relationship coverage for BRAM assignments.",
    image: "/partners/bharat.png",
    imageClass: "object-contain object-top",
  },
  {
    name: "Ekta Parmar",
    role: "Associate Partner",
    credential: "Company Secretaries",
    office: "Mira Road East, Thane, Mumbai",
    profile:
      "Ekta leads the Mumbai associate company secretarial desk. The association supports corporate law, secretarial, board documentation and filing-linked coordination where clients need specialist company law execution.",
    image: "/partners/ekta.jpeg",
    imageClass: "object-cover object-top",
  },
];

const legalConsultants = [
  {
    name: "Adv. Pritam",
    role: "Legal Consultant",
    credential: "Advocate",
    office: "Legal advisory desk",
    focus:
      "Adv. Pritam supports Delhi High Court, commerce and corporate legal matters for clients who need coordinated legal guidance alongside finance and compliance work.",
    profile:
      "Adv. Pritam is a legal consultant associated with the BRAM professional network and is not a partner of the firm. Based around Delhi High Court practice, he handles legal matters connected with commerce, corporate work, contracts, business documentation, notices, representation preparation and dispute-linked advisory for clients requiring coordinated legal support.",
    image: "/partners/pritam.png",
    imageClass: "object-contain object-top",
  },
];

const legalSupportAreas = [
  {
    title: "Court coordination",
    detail:
      "Delhi High Court, commerce and corporate legal matters can be coordinated when a client assignment needs legal inputs.",
  },
  {
    title: "Documents and notices",
    detail:
      "Support for legal documentation, notice replies, representation preparation and contract-linked review.",
  },
  {
    title: "Business matters",
    detail:
      "Commercial and corporate legal inputs where a finance, tax, GST or MCA matter needs legal coordination.",
  },
];

const officeNetwork = [
  {
    type: "Head office",
    location: "Noida",
    lead: "Manish Malik, Ayush Khandelwal, Akshay Sharma and Renu Sehgal",
    address: "B-33, First Floor, Sector 63, Noida 201301",
    contact: "+91 9718324334",
    description:
      "The head office coordinates partner-led audit, tax, GST, cost accounting, MCA, bookkeeping and advisory delivery for the wider office network.",
  },
  {
    type: "Branch office",
    location: "Daryaganj, Delhi",
    lead: "Rishab Jain and Bhawana Jain",
    address: "4732/21, 3rd Floor, Dayanand Marg, Daryaganj, Delhi 110002",
    contact: "Delhi branch desk",
    description:
      "The Daryaganj branch supports Delhi-based client relationships, recurring compliance, documentation, accounting coordination and audit readiness.",
  },
  {
    type: "Branch office",
    location: "Kundli, Sonipat",
    lead: "Bharat Singh Prajapat",
    address: "15, 1st Floor, Khatri Market, Near Makhan Bhog, Kundli, Sonipat 121028",
    contact: "+91 9718324334",
    description:
      "The Sonipat branch provides local coverage for clients around Kundli, including document coordination, compliance follow-up and branch-level client support.",
  },
  {
    type: "Branch office",
    location: "Guwahati, Assam",
    lead: "Dr Aman Singh and Kuranganayani Chetia",
    address: "Phunu Chetia Complex, Bataguli, Panjabari Main Road, Guwahati, Assam 781037",
    contact: "+91 9718324334 | infobramcollp@gmail.com",
    description:
      "The Assam office extends BRAM's services and courses presence with education, training, operations and regional client coordination capability.",
  },
  {
    type: "Branch office",
    location: "Mayur Vihar Phase 3, Delhi",
    lead: "Akshay Sharma",
    address: "A 3/217, New Kondli Market, Mayur Vihar Phase 3, Delhi 110091",
    contact: "Delhi branch desk",
    description:
      "The Mayur Vihar branch extends Delhi accessibility for corporate compliance, audit coordination, accounting support and client meetings.",
  },
  {
    type: "Associate office",
    location: "Mira Road East, Thane, Mumbai",
    lead: "Ekta Parmar",
    address: "33, Rohini Complex, Sector 3, Mira Road East, Thane 401107",
    contact: "+91 9718324334",
    description:
      "The Mumbai associate office supports company secretarial and corporate law coordination through a specialist professional network.",
  },
  {
    type: "Associate office",
    location: "Sector 63, Noida",
    lead: "Renu Sehgal, MM & Co.",
    address: "B-33, FF-02, Sector 63, Noida 201301",
    contact: "+91 9718324334 | infobramcollp@gmail.com",
    description:
      "The associated cost accountants office strengthens BRAM's CMA bench for cost audit, cost records, cost controls and sector-specific reporting.",
  },
];

const strengths = [
  {
    title: "Partner-reviewed work, always.",
    detail: "Every filing, audit and submission is signed off by a partner—not left to a junior associate.",
  },
  {
    title: "One desk, every discipline.",
    detail: "Audit, tax, GST, MCA, cost accounting and advisory under a single accountable team.",
  },
  {
    title: "A calendar you can see.",
    detail: "Clients know what is due, what is filed and what is next—not just what is overdue.",
  },
];

const leadershipStructure = [
  "Manish Malik, Ayush Khandelwal and Akshay Sharma lead the Noida practice desk.",
  "Rishab Jain and Bhawana Jain lead Delhi audit, tax and compliance delivery.",
  "Renu Sehgal leads cost accounting, cost audit and CMA assignments.",
];

function PartnerPhoto({ partner, sizes, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(partner)}
      className="group relative block aspect-[4/3] w-full bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a15a] focus-visible:ring-offset-2"
      aria-label={`Open ${partner.name} detailed profile`}
    >
      {partner.image ? (
        <Image
          src={partner.image}
          alt={`${partner.name} profile photo`}
          fill
          sizes={sizes}
          className={`${partner.imageClass || "object-cover object-center"} transition duration-300 group-hover:scale-[1.03]`}
        />
      ) : (
        <div className="h-full bg-[#f7f5ef]" aria-label={`${partner.name} profile photo pending`} />
      )}
      <span className="absolute inset-x-0 bottom-0 bg-[#17201d]/82 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f1d79d] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
        View profile
      </span>
    </button>
  );
}

function LinkedPartnerText({ partner, text }) {
  if (!partner.linkedPhrase || !partner.linkedPhraseHref || !text.includes(partner.linkedPhrase)) {
    return text;
  }

  const parts = text.split(partner.linkedPhrase);

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <a
          href={partner.linkedPhraseHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#8a6b2f] underline decoration-[#c7a15a] underline-offset-4 transition hover:text-[#17201d]"
        >
          {partner.linkedPhrase}
        </a>
      ) : null}
    </span>
  ));
}

function PartnerProfileModal({ partner, onClose }) {
  if (!partner) return null;

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-[#111815]/78 px-4 py-6 backdrop-blur-sm sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-profile-title"
      onMouseDown={onClose}
    >
      <div
        className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-5xl place-items-center"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <article className="relative w-full overflow-hidden border border-[#d8c08a] bg-[#f7f5ef] shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 border border-[#d8c08a] bg-white px-4 py-2 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a15a]"
            aria-label="Close partner profile"
          >
            Close
          </button>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[360px] bg-white sm:min-h-[480px]">
              {partner.image ? (
                <Image
                  src={partner.image}
                  alt={`${partner.name} profile photo`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className={partner.imageClass || "object-cover object-center"}
                  priority
                />
              ) : (
                <div className="grid h-full min-h-[360px] place-items-center bg-white px-8 text-center">
                  <div>
                    <p className="text-6xl font-semibold text-[#c7a15a]">{partner.name.charAt(0)}</p>
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">
                      Profile photo pending
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">{partner.role}</p>
              <h2 id="partner-profile-title" className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d]">
                {partner.name}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="border border-[#ddd3c0] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">Credential</p>
                  <p className="mt-2 font-semibold text-[#344039]">
                    <LinkedPartnerText partner={partner} text={partner.credential} />
                  </p>
                </div>
                <div className="border border-[#ddd3c0] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">Office</p>
                  <p className="mt-2 font-semibold text-[#344039]">{partner.office}</p>
                </div>
              </div>
              {partner.focus ? (
                <div className="mt-6 border-l-4 border-[#c7a15a] bg-white p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">Focus</p>
                  <p className="mt-3 leading-7 text-[#344039]">{partner.focus}</p>
                </div>
              ) : null}
              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">Profile</p>
                <p className="mt-3 text-base leading-8 text-[#5b665f]">
                  <LinkedPartnerText partner={partner} text={partner.profile} />
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function AboutClient() {
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    if (!selectedPartner) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPartner(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPartner]);

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <Header />

      <section className="bg-[#17201d] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">About the firm</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Built by practitioners, not a placement agency.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
              BRAM & Co. LLP was founded in 2016 by a group of Chartered and Cost Accountants who saw the same problem repeat across growing Indian businesses: compliance work scattered across freelancers, part-time consultants and disconnected software, with no single point of accountability when a deadline—or a notice—landed.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
              Today, our multidisciplinary leadership team—CA Manish Malik, CA Ayush Khandelwal, CA Akshay Sharma, CA Rishab Jain, CA Bhawana Jain and CMA Renu Sehgal—leads integrated CA, CS and CMA services for over 500 companies, from a head office in Noida and a network of offices across Delhi, Sonipat, Guwahati and associate desks in Mumbai.
            </p>
          </div>
          <div>
            <div className="mb-8 flex justify-center">
              <div className="relative h-52 w-full sm:h-64 lg:h-72">
                <Image
                  src="/bramco-transparent.png"
                  alt="BRAM & Co. LLP"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="scale-110 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.32)]"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["6", "Leadership profiles"],
                ["7", "Network offices"],
                ["17+", "Team members"],
                ["500+", "Corporate clients"],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/14 bg-white/8 p-5">
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm text-[#d8d2c5]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Leadership</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal">Experienced hands, direct accountability.</h2>
          </div>
          <div className="grid gap-3">
            {leadershipStructure.map((item) => (
              <p key={item} className="border-l-4 border-[#c7a15a] bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#344039]">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="flex h-full flex-col overflow-hidden border border-[#ddd3c0] bg-white shadow-sm">
              <PartnerPhoto
                partner={partner}
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                onOpen={setSelectedPartner}
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="min-h-44">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">{partner.role}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[#17201d]">{partner.name}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#516057]">
                    <LinkedPartnerText partner={partner} text={partner.credential} />
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#8a6b2f]">{partner.office}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPartner(partner)}
                  className="mt-auto inline-flex h-12 w-full items-center justify-center border border-[#17201d] px-4 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a15a]"
                >
                  View full profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Office network</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d]">
                Noida-led, Delhi-connected, and supported by specialist associates.
              </h2>
            </div>
            <p className="text-base leading-7 text-[#5b665f]">
              BRAM & Co. LLP operates through a Noida head office, Delhi and Sonipat branch offices, and associate desks for company secretarial and cost accounting work. Clients get local access without losing partner-level technical oversight.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {officeNetwork.map((office) => (
              <article key={`${office.type}-${office.location}`} className="border border-[#ddd3c0] bg-[#f7f5ef] p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">{office.type}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[#17201d]">{office.location}</h3>
                <p className="mt-3 font-semibold text-[#344039]">Lead: {office.lead}</p>
                <p className="mt-3 text-sm leading-6 text-[#5b665f]">{office.address}</p>
                <p className="mt-3 text-sm font-semibold text-[#17201d]">{office.contact}</p>
                <p className="mt-4 border-t border-[#ddd3c0] pt-4 text-sm leading-6 text-[#5b665f]">
                  {office.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Network partners</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal">Specialist support around the leadership bench.</h2>
          </div>
          <p className="text-base leading-7 text-[#5b665f]">
            The network partner profiles represent branch and associate professionals named in the firm profile. They extend reach, client coordination and specialist execution while the core partner bench remains collectively responsible for delivery.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {networkPartners.map((partner) => (
            <article key={partner.name} className="flex h-full flex-col overflow-hidden border border-[#ddd3c0] bg-white shadow-sm">
              {partner.image ? (
                <PartnerPhoto
                  partner={partner}
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  onOpen={setSelectedPartner}
                />
              ) : null}
              <div className="flex flex-1 flex-col p-5">
                <div className="h-52">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">{partner.role}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[#17201d]">{partner.name}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#516057]">{partner.credential}</p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#8a6b2f]">{partner.office}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPartner(partner)}
                  className="mt-auto inline-flex h-12 w-full items-center justify-center border border-[#17201d] px-4 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a15a]"
                >
                  View full profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">Extended support</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#17201d]">
                Legal coordination when required.
              </h2>
            </div>
            <p className="text-sm leading-7 text-[#5b665f]">
              This is a supporting desk for clients whose finance or compliance matter also needs legal inputs. It is intentionally separate from the partner and network partner profiles.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {legalConsultants.map((consultant) => (
              <article key={consultant.name} className="border border-[#ddd3c0] bg-[#f7f5ef] p-4">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPartner(consultant)}
                    className="relative size-20 shrink-0 overflow-hidden border border-[#ddd3c0] bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a15a]"
                    aria-label={`Open ${consultant.name} detailed profile`}
                  >
                    <Image
                      src={consultant.image}
                      alt={`${consultant.name} profile photo`}
                      fill
                      sizes="80px"
                      className={consultant.imageClass}
                    />
                  </button>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a6b2f]">{consultant.role}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-normal text-[#17201d]">{consultant.name}</h3>
                    <p className="mt-1 text-xs font-semibold leading-5 text-[#516057]">{consultant.credential}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#5b665f]">
                  Delhi High Court, commerce and corporate legal matter support.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedPartner(consultant)}
                  className="mt-4 inline-flex h-10 w-full items-center justify-center border border-[#17201d] px-4 text-xs font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a15a]"
                >
                  View consultant profile
                </button>
              </article>
            ))}
            {legalSupportAreas.map((area) => (
              <article key={area.title} className="border border-[#ddd3c0] bg-[#f7f5ef] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6b2f]">{area.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#5b665f]">{area.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e3d6] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6b2f]">What makes BRAM different</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#17201d]">Accountability built into every engagement.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((strength) => (
              <article key={strength.title} className="border border-[#d4c9b5] bg-[#f7f5ef] p-7">
                <h3 className="text-xl font-semibold text-[#17201d]">{strength.title}</h3>
                <p className="mt-3 leading-7 text-[#344039]">{strength.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnerProfileModal partner={selectedPartner} onClose={() => setSelectedPartner(null)} />

      <Footer />
    </main>
  );
}
