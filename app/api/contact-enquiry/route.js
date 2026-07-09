import { clean, sendEnquiryMail } from "../../lib/enquiry-mail";

export const runtime = "nodejs";

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid form payload." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const company = clean(payload.company);
  const services = Array.isArray(payload.services)
    ? payload.services.join("; ")
    : clean(payload.services);

  if (!name || !email || !phone || !company || !services) {
    return Response.json(
      { error: "Please enter name, email, phone, company, and at least one service." },
      { status: 400 },
    );
  }

  try {
    return await sendEnquiryMail({
      subject: `BRAM website enquiry - ${company}`,
      replyTo: email,
      title: "BRAM Website Enquiry",
      filename: `bram-contact-enquiry-${Date.now()}.pdf`,
      sections: [
        {
          heading: "Person Details",
          rows: [
            ["Name", name],
            ["Designation", clean(payload.designation)],
            ["Email", email],
            ["Phone", phone],
            ["Preferred Contact", clean(payload.preferredContact)],
          ],
        },
        {
          heading: "Entity Details",
          rows: [
            ["Company / Entity", company],
            ["Entity Type", clean(payload.entityType)],
            ["PAN / GSTIN / CIN / LLPIN", clean(payload.registration)],
            ["Location", clean(payload.location)],
            ["Approx. Turnover", clean(payload.turnover)],
            ["Employee Count", clean(payload.employeeCount)],
          ],
        },
        {
          heading: "Requirement Details",
          rows: [
            ["Services Required", services],
            ["Timeline", clean(payload.timeline)],
            ["Current Compliance Status", clean(payload.complianceStatus)],
            ["Requirement Description", clean(payload.requirement)],
            ["Documents Available", clean(payload.documents)],
          ],
        },
      ],
    });
  } catch (error) {
    return Response.json(
      { error: error.message || "Unable to send email right now." },
      { status: 500 },
    );
  }
}
