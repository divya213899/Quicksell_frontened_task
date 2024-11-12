// // src/components/GroupControls.js
// import React from 'react';

// function GroupControls({ onGroupChange, onSortChange }) {
//   return (
//     <div className="controls">
//       <div>
//         <button onClick={() => onGroupChange('status')}>Group by Status</button>
//         <button onClick={() => onGroupChange('user')}>Group by User</button>
//         <button onClick={() => onGroupChange('priority')}>Group by Priority</button>
//       </div>
//       <div>
//         <button onClick={() => onSortChange('priority')}>Sort by Priority</button>
//         <button onClick={() => onSortChange('title')}>Sort by Title</button>
//       </div>
//     </div>
//   );
// }

// export default GroupControls;
import React from 'react';

const DisplayOptions = ({ onGroupingChange, onOrderingChange }) => {
  return (
    <div className="display-options">
      <label>
        Group by:
        <select onChange={onGroupingChange}>
          <option value="Status">Status</option>
          <option value="User">User</option>
          <option value="Priority">Priority</option>
        </select>
      </label>
      <label>
        Sort by:
        <select onChange={onOrderingChange}>
          <option value="Priority">Priority</option>
          <option value="Title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default DisplayOptions;


// import React from 'react';

// function GroupControls({ onGroupChange, onSortChange }) {
//   return (
//     <div className="controls">
//       <select onChange={e => onGroupChange(e.target.value)}>
//         <option value="status">Group by Status</option>
//         <option value="userId">Group by User</option>
//         <option value="priority">Group by Priority</option>
//       </select>
//       <select onChange={e => onSortChange(e.target.value)}>
//         <option value="priority">Sort by Priority</option>
//         <option value="title">Sort by Title</option>
//       </select>
//     </div>
//   );
// }

// export default GroupControls;
