import React from 'react';
import { Navigate } from 'react-router-dom';

function Private({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Private Content</h2>
      <p>This content is only accessible to registered users.</p>
    </div>
  );
}

export default Private;
