
// KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';
import { PRIORITY_LEVELS } from '../utils/constants';

const KanbanBoard = ({ tickets, groupBy, sortBy, getUserById }) => {
  // Define group keys based on selected group type
  const getGroupKey = (ticket) => {
    switch (groupBy) {
      case 'Status':
        return ticket.status;
      case 'User':
        return getUserById(ticket.userId);
      case 'Priority':
        return PRIORITY_LEVELS[ticket.priority] || 'No Priority';
      default:
        return ticket.status;
    }
  };

  // Sorting logic
  const sortTickets = (a, b) => {
    switch (sortBy) {
      case 'Priority':
        return b.priority - a.priority; // Higher priority first
      case 'Title':
        return a.title.localeCompare(b.title); // Alphabetical order
      default:
        return 0;
    }
  };

  // Group tickets based on the selected option
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = getGroupKey(ticket);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {groupedTickets[group]
            .sort(sortTickets)
            .map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} getUserById={getUserById} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
