export function GET() {
  return new Response(
    "google-site-verification: googlec990751b8a039305.html\n",
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    },
  );
}
