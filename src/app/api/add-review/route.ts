import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const Name = searchParams.get('Name');
  const Review = searchParams.get('Review');
 
  try {
    if (!Name || !Review) throw new Error('Name and review required');
    await sql`INSERT INTO Reviews (Approved, Name, Review) VALUES ('denied', ${Name}, ${Review});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const reviews = await sql`SELECT * FROM Reviews;`;
  return NextResponse.json({ reviews }, { status: 200 });
}