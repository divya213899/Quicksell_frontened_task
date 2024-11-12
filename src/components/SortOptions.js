import React from 'react';

const SortOptions = ({ onSortChange }) => {
    return (
        <div>
            <button onClick={() => onSortChange('priority')}>Sort by Priority</button>
            <button onClick={() => onSortChange('title')}>Sort by Title</button>
        </div>
    );
};

export default SortOptions;

