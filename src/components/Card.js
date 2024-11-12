import React from 'react';

const Card = ({ title, priority }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Priority: {priority}</p>
        </div>
    );
};

export default Card;

