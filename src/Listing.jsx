import React, { useState, useEffect } from 'react';

function Listing() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const storedListings = localStorage.getItem('listings');
    if (storedListings) {
      setListings(JSON.parse(storedListings));
    }
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listing;
