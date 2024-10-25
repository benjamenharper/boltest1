import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PropertyListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const storedListings = localStorage.getItem('listings');
    if (storedListings) {
      setListings(JSON.parse(storedListings));
    }
  }, []);

  const featuredProperty = listings.length > 0 ? listings[0] : null;

  return (
    <div>
      {featuredProperty && (
        <div className="featured-property">
          <h2>Featured Property</h2>
          <h3>{featuredProperty.title}</h3>
          <p>{featuredProperty.description}</p>
          <p>Price: {featuredProperty.price}</p>
          <Link to={`/property/${featuredProperty.id}`} className="details-button">
            View Details
          </Link>
        </div>
      )}
      <div className="property-grid">
        {listings.slice(1).map((listing) => (
          <div key={listing.id} className="property-item">
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
            <Link to={`/property/${listing.id}`} className="details-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListings;
