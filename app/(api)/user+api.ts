import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.NEON_DB_URL}`);

    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return new Response(
        JSON.stringify({ message: "Missing Required Fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const response = await sql`
      INSERT INTO users (name, email, clerk_id) VALUES (${name}, ${email}, ${clerkId})
    `;

    return new Response(JSON.stringify(response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.debug("Error: ", err);
    // return new Response(JSON.stringify({ error: err.message || err }), {
    //   status: 500,
    //   headers: { "Content-Type": "application/json" },
    // });
  }
}
