export function GET() {
  const apiKey = process.env.COMPANY_MASTER_API_KEY || "";
  const apiSecret = process.env.COMPANY_MASTER_API_SECRET || "";
  const mismatch =
    (apiKey.startsWith("key_live_") && apiSecret.startsWith("secret_test_")) ||
    (apiKey.startsWith("key_test_") && apiSecret.startsWith("secret_live_"));

  return Response.json({
    configured: Boolean(process.env.COMPANY_MASTER_API_KEY),
    hasSecret: Boolean(process.env.COMPANY_MASTER_API_SECRET),
    environment: apiKey.startsWith("key_live_") ? "production" : "test",
    mismatch,
  });
}
