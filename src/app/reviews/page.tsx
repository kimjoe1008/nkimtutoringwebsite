
import { sql } from '@vercel/postgres'; // Adjust according to your SQL client

export default function Page() {
  // Server action to handle form submission and insert a record into the Reviews table
  async function handleAddReview(formData: FormData) {
    'use server';

    // Extract form data
    const name = formData.get('name') as string;
    const review = formData.get('review') as string;

    // Insert the form data into the Reviews table
    await sql`
      INSERT INTO Reviews (Approved, Name, Review) 
      VALUES ('denied', ${name}, ${review});
    `;
  }

  return (
    <form action={handleAddReview}>
      <div>
        <label htmlFor="approved">Approved:</label>
        <input type="text" id="approved" name="approved" required />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea id="review" name="review" required></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}
