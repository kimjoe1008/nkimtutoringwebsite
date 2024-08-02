import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const review = searchParams.get('review');

  try {
    if (!name || !review) throw new Error('Name and Review required');
    await sql`
      INSERT INTO reviews (approved, name, review)
      VALUES ('denied', ${name}, ${review});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}