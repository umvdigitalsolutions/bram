"use client";

import { useMemo, useState } from "react";

const serviceOptions = [
  "Audit and assurance",
  "Income tax return / assessment",
  "GST registration, return or notice",
  "MCA / ROC compliance",
  "Cost audit / cost records",
  "Accounting and bookkeeping",
  "Payroll and TDS",
  "Business advisory",
  "Company data / due diligence",
];

const initialForm = {
  name: "",
  designation: "",
  email: "",
  phone: "",
  preferredContact: "Phone",
  company: "",
  entityType: "Private Limited Company",
  registration: "",
  location: "",
  turnover: "",
  employeeCount: "",
  services: [],
  timeline: "Within 7 days",
  complianceStatus: "",
  requirement: "",
  documents: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

  const summary = useMemo(
    () =>
      [
        `Name: ${form.name || "Not entered"}`,
        `Designation: ${form.designation || "Not entered"}`,
        `Email: ${form.email || "Not entered"}`,
        `Phone: ${form.phone || "Not entered"}`,
        `Company / Entity: ${form.company || "Not entered"}`,
        `Entity Type: ${form.entityType || "Not entered"}`,
        `Registration: ${form.registration || "Not entered"}`,
        `Location: ${form.location || "Not entered"}`,
        `Approx. Turnover: ${form.turnover || "Not entered"}`,
        `Employee Count: ${form.employeeCount || "Not entered"}`,
        `Services: ${form.services.length ? form.services.join("; ") : "Not entered"}`,
        `Timeline: ${form.timeline || "Not entered"}`,
        `Preferred Contact: ${form.preferredContact || "Not entered"}`,
        `Compliance Status: ${form.complianceStatus || "Not entered"}`,
        `Requirement: ${form.requirement || "Not entered"}`,
        `Documents Available: ${form.documents || "Not entered"}`,
      ].join("\n"),
    [form],
  );

  function updateField(key, value) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function toggleService(service) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "Creating PDF and sending email..." });

    try {
      const response = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send the enquiry right now.");
      }

      setSubmitState({
        status: "success",
        message: "Your details were converted to PDF and sent to BRAM.",
      });
      setForm(initialForm);
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error.message,
      });
    }
  }

  const inputClass =
    "mt-2 h-12 w-full border border-[#cfc3ad] bg-white px-4 text-[#17201d] outline-none ring-[#c7a15a] focus:ring-2";
  const textareaClass =
    "mt-2 w-full border border-[#cfc3ad] bg-white px-4 py-3 text-[#17201d] outline-none ring-[#c7a15a] focus:ring-2";

  return (
    <form onSubmit={handleSubmit} className="border border-[#ddd3c0] bg-white p-7 shadow-sm">
      <div className="flex flex-col justify-between gap-4 border-b border-[#ddd3c0] pb-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">Detailed enquiry form</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-normal">Send details as PDF</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#5b665f]">
          Fill the client and entity details once. BRAM receives the email with a generated PDF attachment.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ["name", "Full name", "text", true],
          ["designation", "Designation", "text", false],
          ["email", "Email", "email", true],
          ["phone", "Phone", "tel", true],
          ["company", "Company / entity", "text", true],
          ["registration", "PAN / GSTIN / CIN / LLPIN", "text", false],
          ["location", "City / state", "text", false],
          ["turnover", "Approx. turnover", "text", false],
          ["employeeCount", "Employee count", "text", false],
        ].map(([key, label, type, required]) => (
          <label key={key} className="text-sm font-semibold text-[#344039]">
            {label}
            <input
              type={type}
              required={required}
              value={form[key]}
              onChange={(event) => updateField(key, event.target.value)}
              className={inputClass}
            />
          </label>
        ))}

        <label className="text-sm font-semibold text-[#344039]">
          Entity type
          <select
            value={form.entityType}
            onChange={(event) => updateField("entityType", event.target.value)}
            className={inputClass}
          >
            {["Private Limited Company", "LLP", "Partnership", "Proprietorship", "Trust / Society", "Individual", "Other"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-[#344039]">
          Preferred contact
          <select
            value={form.preferredContact}
            onChange={(event) => updateField("preferredContact", event.target.value)}
            className={inputClass}
          >
            {["Phone", "Email", "WhatsApp", "Office meeting"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-[#344039]">
          Timeline
          <select
            value={form.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className={inputClass}
          >
            {["Urgent", "Within 7 days", "Within 15 days", "This month", "Planning stage"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-[#344039]">Services required</p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {serviceOptions.map((service) => {
            const selected = form.services.includes(service);

            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`min-h-12 border px-4 py-3 text-left text-sm font-semibold transition ${
                  selected
                    ? "border-[#17201d] bg-[#17201d] text-white"
                    : "border-[#ddd3c0] bg-[#f7f5ef] text-[#344039] hover:border-[#c7a15a] hover:bg-[#fffaf0]"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-[#344039]">
          Current compliance status
          <textarea
            value={form.complianceStatus}
            onChange={(event) => updateField("complianceStatus", event.target.value)}
            rows={4}
            className={textareaClass}
          />
        </label>
        <label className="text-sm font-semibold text-[#344039]">
          Documents available
          <textarea
            value={form.documents}
            onChange={(event) => updateField("documents", event.target.value)}
            rows={4}
            className={textareaClass}
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-[#344039]">
        Requirement details
        <textarea
          required
          value={form.requirement}
          onChange={(event) => updateField("requirement", event.target.value)}
          rows={5}
          className={textareaClass}
        />
      </label>

      <label className="mt-4 block text-sm font-semibold text-[#344039]">
        PDF preview
        <textarea
          value={summary}
          readOnly
          rows={10}
          className="mt-2 w-full border border-[#cfc3ad] bg-[#f7f5ef] px-4 py-3 text-xs leading-5 text-[#17201d] outline-none"
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={submitState.status === "loading"}
          className="inline-flex min-h-12 items-center justify-center border border-[#17201d] bg-[#17201d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c7a15a] hover:text-[#17201d] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitState.status === "loading" ? "Sending PDF..." : "Send PDF enquiry"}
        </button>
        <button
          type="button"
          onClick={() => setForm(initialForm)}
          className="inline-flex min-h-12 items-center justify-center border border-[#17201d] px-5 py-3 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white"
        >
          Clear form
        </button>
      </div>

      {submitState.message ? (
        <p
          className={`mt-4 border px-4 py-3 text-sm font-semibold ${
            submitState.status === "success"
              ? "border-[#7c9b67] bg-[#f0f7ec] text-[#2f5c2e]"
              : submitState.status === "error"
              ? "border-[#c58b83] bg-[#fff2f0] text-[#8c3028]"
              : "border-[#ddd3c0] bg-[#f7f5ef] text-[#344039]"
          }`}
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
