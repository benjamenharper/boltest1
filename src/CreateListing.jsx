import React, { useState } from 'react';

function CreateListing() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newListing = {
      id: Date.now(),
      title,
      description,
      price,
    };

    const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
    storedListings.push(newListing);
    localStorage.setItem('listings', JSON.stringify(storedListings));

    setMessage('Property listing added successfully!');
    setTitle('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h1>Create Listing</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </label>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default CreateListing;
