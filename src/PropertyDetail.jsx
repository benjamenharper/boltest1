import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
    const foundProperty = storedListings.find((listing) => listing.id === parseInt(id, 10));
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
    </div>
  );
}

export default PropertyDetail;
