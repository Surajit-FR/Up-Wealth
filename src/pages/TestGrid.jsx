import React, { useEffect, useState } from 'react';

const TestGrid = () => {
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const container = document.getElementById("gridBox");
        setContainerWidth(Number(container?.clientWidth));
    }, []);

    return (
        <>
            <div className="main-container">
                <div className="box-container" id="gridBox">
                    {
                        Array?.from({ length: 140 }, (_, index) => (
                            <div className="box" style={{ height: (containerWidth * 0.05) }} key={index}></div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default TestGrid;