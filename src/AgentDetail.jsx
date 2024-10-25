import React from 'react';
import { useParams } from 'react-router-dom';

const agents = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  // Add more agents as needed
];

function AgentDetail() {
  const { id } = useParams();
  const agent = agents.find((agent) => agent.id === parseInt(id, 10));

  if (!agent) {
    return <p>Agent not found.</p>;
  }

  return (
    <div>
      <h2>{agent.name}</h2>
      <p>Email: {agent.email}</p>
      <p>Phone: {agent.phone}</p>
    </div>
  );
}

export default AgentDetail;
