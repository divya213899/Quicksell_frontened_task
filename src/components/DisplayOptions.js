import React from 'react';

const DisplayOptions = ({ onGroupingChange, onOrderingChange }) => {
    return (
        <div>
            <label>
                Grouping:
                <select onChange={onGroupingChange}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </label>
            <label>
                Ordering:
                <select onChange={onOrderingChange}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </label>
        </div>
    );
};

export default DisplayOptions;




// import React from 'react';

// const DisplayOptions = ({ onGroupingChange, onOrderingChange }) => {
//   return (
//     <div className="display-options">
//       <label>
//         Group by:
//         <select onChange={(e) => onGroupingChange(e.target.value)}>
//           <option value="status">Status</option>
//           <option value="user">User</option>
//           <option value="priority">Priority</option>
//         </select>
//       </label>
//       <label>
//         Sort by:
//         <select onChange={(e) => onOrderingChange(e.target.value)}>
//           <option value="priority">Priority</option>
//           <option value="title">Title</option>
//         </select>
//       </label>
//     </div>
//   );
// };

// export default DisplayOptions;


