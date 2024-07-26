"use client"
import Background from "../background";
import NavBar from "../navbar";
import React, { useState } from 'react';

export default function Reviews(){
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/addReview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, review }),
        });

        if (response.ok) {
        alert('Review submitted successfully!');
        setName('');
        setReview('');
        } else {
        alert('Failed to submit review.');
        }
    };

    return(
        <main>
            <Background/>
            <NavBar/>
            <h1>Submit a Review</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="review">Review:</label>
                <textarea
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}