// // // // import React from 'react';
// // // // import './TicketCard.css';
// // // // import TodoIcon from '../assets/icons/To-do.svg';
// // // // import InProgressIcon from '../assets/icons/in-progress.svg';
// // // // import DoneIcon from '../assets/icons/Done.svg';
// // // // import CancelledIcon from '../assets/icons/Cancelled.svg';
// // // // import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
// // // // import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
// // // // import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
// // // // import UrgentPriorityIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
// // // // import { PRIORITY_LEVELS } from '../utils/constants';

// // // // // function TicketCard({ ticket }) {
// // // // //   const getStatusIcon = (status) => {
// // // // //     switch (status) {
// // // // //       case 'Todo':
// // // // //         return TodoIcon;
// // // // //       case 'In Progress':
// // // // //         return InProgressIcon;
// // // // //       case 'Done':
// // // // //         return DoneIcon;
// // // // //       case 'Cancelled':
// // // // //         return CancelledIcon;
// // // // //       default:
// // // // //         return null;
// // // // //     }
// // // // //   };

// // // // //   const getPriorityIcon = (priority) => {
// // // // //     switch (priority) {
// // // // //       case 4:
// // // // //         return UrgentPriorityIcon;
// // // // //       case 3:
// // // // //         return HighPriorityIcon;
// // // // //       case 2:
// // // // //         return MediumPriorityIcon;
// // // // //       case 1:
// // // // //         return LowPriorityIcon;
// // // // //       default:
// // // // //         return null;
// // // // //     }
// // // // //   };

// // // // //   const statusIcon = getStatusIcon(ticket.status);
// // // // //   const priorityIcon = getPriorityIcon(ticket.priority);
// // // // //   const getPriorityLabel = (priority) => PRIORITY_LEVELS[priority] || 'No Priority';


// // // // //   return (
// // // // //     <div className="ticket-card">
// // // // //       <div className="ticket-header">
// // // // //         {statusIcon && <img src={statusIcon} alt={`${ticket.status} icon`} className="icon-status" />}
// // // // //         <h3>{ticket.title}</h3>
// // // // //       </div>
// // // // //       <p><strong>User:</strong> {ticket.user}</p>
// // // // //       <p>
// // // // //          <strong>Priority:</strong> {getPriorityLabel(ticket.priority)}
// // // // //         {priorityIcon && <img src={priorityIcon} alt="Priority icon" className="icon-priority" />}
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default TicketCard;


// // // // import './TicketCard.css';

// // // // const getPriorityClass = (priority) => {
// // // //   switch (priority) {
// // // //     case 0:
// // // //       return 'priority-low';
// // // //     case 1:
// // // //       return 'priority-medium';
// // // //     case 2:
// // // //       return 'priority-high';
// // // //     case 3:
// // // //       return 'priority-urgent';
// // // //     default:
// // // //       return '';
// // // //   }
// // // // };

// // // // const TicketCard = ({ ticket, getUserById }) => {
// // // //   return (
// // // //     <div className="ticket-card">
// // // //       <h3>{ticket.title}</h3>
// // // //       <p>User: {getUserById(ticket.userId)}</p>
// // // //       <p>Status: {ticket.status}</p>

// // // //       <div className="priority">
// // // //         <span className={`priority-icon ${getPriorityClass(ticket.priority)}`}></span>
// // // //         <span>Priority: {ticket.priority}</span>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TicketCard;

// // // import React from 'react';
// // // import './TicketCard.css';
// // // import TodoIcon from '../assets/icons/To-do.svg';
// // // import InProgressIcon from '../assets/icons/in-progress.svg';
// // // import DoneIcon from '../assets/icons/Done.svg';
// // // import CancelledIcon from '../assets/icons/Cancelled.svg';
// // // import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
// // // import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
// // // import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
// // // import UrgentPriorityIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
// // // import { PRIORITY_LEVELS } from '../utils/constants';

// // // const TicketCard = ({ ticket, getUserById }) => {
// // //   // Helper function to get the status icon based on ticket status
// // //   const getStatusIcon = (status) => {
// // //     switch (status) {
// // //       case 'Todo':
// // //         return TodoIcon;
// // //       case 'In Progress':
// // //         return InProgressIcon;
// // //       case 'Done':
// // //         return DoneIcon;
// // //       case 'Cancelled':
// // //         return CancelledIcon;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   // Helper function to get the priority icon based on priority level
// // //   const getPriorityIcon = (priority) => {
// // //     switch (priority) {
// // //       case 4:
// // //         return UrgentPriorityIcon;
// // //       case 3:
// // //         return HighPriorityIcon;
// // //       case 2:
// // //         return MediumPriorityIcon;
// // //       case 1:
// // //         return LowPriorityIcon;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   // Get priority label from constants
// // //   const getPriorityLabel = (priority) => PRIORITY_LEVELS[priority] || 'No Priority';

// // //   // Retrieve icons and labels
// // //   const statusIcon = getStatusIcon(ticket.status);
// // //   const priorityIcon = getPriorityIcon(ticket.priority);
// // //   const priorityLabel = getPriorityLabel(ticket.priority);

// // //   return (
// // //     <div className="ticket-card">
// // //       <div className="ticket-header">
// // //         {statusIcon && <img src={statusIcon} alt={`${ticket.status} icon`} className="icon-status" />}
// // //         <h3>{ticket.title}</h3>
// // //       </div>
      
// // //       <p><strong>User:</strong> {getUserById(ticket.userId)}</p>
// // //       <p><strong>Status:</strong> {ticket.status}</p>

// // //       <div className="priority">
// // //         <strong>Priority:</strong> {priorityLabel}
// // //         {priorityIcon && <img src={priorityIcon} alt={`${priorityLabel} icon`} className="icon-priority" />}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TicketCard;
// // // TicketCard.js
// // import React from 'react';
// // import './TicketCard.css';
// // import TodoIcon from '../assets/icons/To-do.svg';
// // import InProgressIcon from '../assets/icons/in-progress.svg';
// // import DoneIcon from '../assets/icons/Done.svg';
// // import CancelledIcon from '../assets/icons/Cancelled.svg';
// // import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
// // import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
// // import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
// // import UrgentPriorityIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
// // import { PRIORITY_LEVELS } from '../utils/constants';

// // const TicketCard = ({ ticket, getUserById }) => {
// //   const getStatusIcon = (status) => {
// //     switch (status) {
// //       case 'Todo':
// //         return TodoIcon;
// //       case 'In Progress':
// //         return InProgressIcon;
// //       case 'Done':
// //         return DoneIcon;
// //       case 'Cancelled':
// //         return CancelledIcon;
// //       default:
// //         return null;
// //     }
// //   };

// //   const getPriorityIcon = (priority) => {
// //     switch (priority) {
// //       case 4:
// //         return UrgentPriorityIcon;
// //       case 3:
// //         return HighPriorityIcon;
// //       case 2:
// //         return MediumPriorityIcon;
// //       case 1:
// //         return LowPriorityIcon;
// //       default:
// //         return null;
// //     }
// //   };

// //   const getPriorityLabel = (priority) => PRIORITY_LEVELS[priority] || 'No Priority';

// //   const statusIcon = getStatusIcon(ticket.status);
// //   const priorityIcon = getPriorityIcon(ticket.priority);
// //   const priorityLabel = getPriorityLabel(ticket.priority);

// //   return (
// //     <div className="ticket-card">
// //       <div className="ticket-header">
// //         {statusIcon && <img src={statusIcon} alt={`${ticket.status} icon`} className="icon-status" />}
// //         <h3>{ticket.title}</h3>
// //       </div>
      
// //       <p><strong>User:</strong> {getUserById(ticket.userId)}</p>
// //       <p><strong>Status:</strong> {ticket.status}</p>

// //       <div className="priority">
// //         <strong>Priority:</strong> {priorityLabel}
// //         {priorityIcon && <img src={priorityIcon} alt={`${priorityLabel} icon`} className="icon-priority" />}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TicketCard;

// import React from 'react';
// import './TicketCard.css';
// import TodoIcon from '../assets/icons/To-do.svg';
// import backlog from '../assets/icons/Backlog.svg';
// import InProgressIcon from '../assets/icons/in-progress.svg';
// import DoneIcon from '../assets/icons/Done.svg';
// import CancelledIcon from '../assets/icons/Cancelled.svg';
// import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
// import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
// import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
// import UrgentPriorityIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
// import { PRIORITY_LEVELS } from '../utils/constants';

// const TicketCard = ({ ticket, getUserById, groupBy, sortBy }) => {
//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'Todo':
//         return TodoIcon;
//       case 'In progress':
//         return InProgressIcon;
//       case 'Done':
//         return DoneIcon;
//       case 'Cancelled':
//         return CancelledIcon;
//       case 'Backlog':
//         return backlog;
//       default:
//         return null;
//     }
//   };

//   const getPriorityIcon = (priority) => {
//     switch (priority) {
//       case 4:
//         return UrgentPriorityIcon;
//       case 3:
//         return HighPriorityIcon;
//       case 2:
//         return MediumPriorityIcon;
//       case 1:
//         return LowPriorityIcon;
//       default:
//         return null;
//     }
//   };

//   const getPriorityLabel = (priority) => PRIORITY_LEVELS[priority] || 'No Priority';

//   const statusIcon = getStatusIcon(ticket.status);
//   const priorityIcon = getPriorityIcon(ticket.priority);
//   const priorityLabel = getPriorityLabel(ticket.priority);

//   return (
//     <div className="ticket-card">
//       {/* Display API-provided ID */}
//       <p><strong>ID:</strong> {ticket.id}</p>
      
//       <div className="ticket-header">
//         {/* Display Title with Status Icon */}
//         {statusIcon && <img src={statusIcon} alt={`${ticket.status} icon`} className="icon-status" />}
//         <h3>{ticket.title}</h3>
//       </div>

//       {/* Only show the user if not sorting by user */}
//       {sortBy !== 'User' && (
//         <p><strong>User:</strong> {getUserById(ticket.userId)}</p>
//       )}

//       <div className="priority">
//         {/* Display Priority Icon next to Priority Label if not grouped by Priority */}
//         <strong>Priority:</strong> {priorityLabel}
//         {groupBy !== 'Priority' && priorityIcon && (
//           <img src={priorityIcon} alt={`${priorityLabel} icon`} className="icon-priority" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default TicketCard;

import React from 'react';
import './TicketCard.css';
import TodoIcon from '../assets/icons/To-do.svg';
import InProgressIcon from '../assets/icons/in-progress.svg';
import DoneIcon from '../assets/icons/Done.svg';
import CancelledIcon from '../assets/icons/Cancelled.svg';
import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
import UrgentPriorityIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
import no_priority from '../assets/icons/No-priority.svg';
import { PRIORITY_LEVELS } from '../utils/constants';

const TicketCard = ({ ticket, groupBy, getUserById }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Todo':
        return TodoIcon;
      case 'In progress':
        return InProgressIcon;
      case 'Done':
        return DoneIcon;
      case 'Cancelled':
        return CancelledIcon;
      default:
        return null;
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return UrgentPriorityIcon;
      case 3:
        return HighPriorityIcon;
      case 2:
        return MediumPriorityIcon;
      case 1:
        return LowPriorityIcon;
      default:
        return no_priority;
    }
  };

  const statusIcon = getStatusIcon(ticket.status);
  const priorityIcon = getPriorityIcon(ticket.priority);

  return (
    <div className="ticket-card">
      <p><strong>ID:</strong> {ticket.id}</p>

      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        {statusIcon && groupBy !== 'Status' && (
          <img src={statusIcon} alt={`${ticket.status} icon`} className="icon-status" />
        )}
      </div>

      {/* Conditionally render User name based on groupBy */}
      {groupBy !== 'User' && (
        <p><strong>User:</strong> {getUserById(ticket.userId)}</p>
      )}

      {/* Show priority icon only, without label */}
      <div className="priority">
        {priorityIcon && <img src={priorityIcon} alt="Priority icon" className="icon-priority" />}
      </div>

      {/* Show tags */}
      <div className="tags">
        <strong>Tags:</strong> {ticket.tag.join(', ')}
      </div>
    </div>
  );
};

export default TicketCard;
