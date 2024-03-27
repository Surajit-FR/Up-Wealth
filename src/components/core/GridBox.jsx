import React from 'react';

const GridBox = ({ color, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className="grid-box"
            style={{ backgroundColor: color }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        ></div>
    );
};

export default GridBox;