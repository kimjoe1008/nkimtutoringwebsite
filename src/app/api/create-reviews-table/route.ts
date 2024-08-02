import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS Reviews (
        ReviewID SERIAL PRIMARY KEY,
        Approved varchar(10),
        Name varchar(50),
        Review varchar(1000)
      );
    `;

    const reviews = await sql`SELECT * FROM Reviews;`;

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred', error: String(error) }, { status: 500 });
  }
}
