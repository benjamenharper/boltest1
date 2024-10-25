import React from 'react';
import { Link } from 'react-router-dom';

const agents = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more agents as needed
];

function AgentDirectory() {
  return (
    <div>
      <h2>Agent Directory</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            <Link to={`/agent/${agent.id}`} className="agent-link">
              {agent.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentDirectory;
