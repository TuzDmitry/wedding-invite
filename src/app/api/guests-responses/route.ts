import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    const { data, error } = await supabase
        .from("guests-responses")
        .select("*")
        .order("written_at", { ascending: false })
        .limit(10);

    if (error) {
        return new NextResponse(`<p>Error: ${error.message}</p>`, {
            status: 500,
            headers: { "Content-Type": "text/html" },
        });
    }

    if (!data || data.length === 0) {
        return new NextResponse("<p>No responses found.</p>", {
            status: 200,
            headers: { "Content-Type": "text/html" },
        });
    }

    const headers = Object.keys(data[0]);

    const tableHTML = `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; padding: 1rem; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
          th { background: #f0f0f0; }
        </style>
      </head>
      <body>
        <h2>Last 10 Guest Responses</h2>
        <table>
          <thead>
            <tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${data
        .map(
            row =>
                `<tr>${headers
                    .map(h => `<td>${row[h] ?? ""}</td>`)
                    .join("")}</tr>`
        )
        .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;

    return new NextResponse(tableHTML, {
        status: 200,
        headers: { "Content-Type": "text/html" },
    });
}
