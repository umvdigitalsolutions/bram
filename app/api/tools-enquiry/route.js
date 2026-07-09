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
  const toolName = clean(payload.toolName);
  const selectedItems = Array.isArray(payload.selectedItems)
    ? payload.selectedItems.join("; ")
    : clean(payload.selectedItems);
  const summary = clean(payload.summary);
  const message = clean(payload.message);

  if (!name || !email || !phone || !summary) {
    return Response.json(
      { error: "Please enter name, email, phone, and tool details." },
      { status: 400 },
    );
  }

  try {
    return await sendEnquiryMail({
      subject: `BRAM tools enquiry - ${toolName || "Client tools"}`,
      replyTo: email,
      title: "BRAM Tools Enquiry",
      filename: `bram-tools-enquiry-${Date.now()}.pdf`,
      sections: [
        {
          heading: "Client Details",
          rows: [
            ["Name", name],
            ["Email", email],
            ["Phone", phone],
            ["Company / Entity", company],
          ],
        },
        {
          heading: "Tool Selection",
          rows: [
            ["Tool", toolName],
            ["Selected Items", selectedItems],
            ["Calculator Mode", clean(payload.calculatorMode)],
            ["Full Summary", summary],
          ],
        },
        {
          heading: "Client Message",
          rows: [["Message", message]],
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
