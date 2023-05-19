import { useEffect, useState } from "react";

export const ItemExperience = ({experience, porcental, handleViewOut}) => {

    // const [counter, setCounter] = useState(0);
    // const numVal = experience;

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (counter !== numVal) {
    //             setCounter((prevCounter) => prevCounter + 1);
    //         }
    //     }, 80);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [counter, numVal]);

    return (
        <div className="progress-bar" onMouseLeave={handleViewOut}>
            <span className="number">{experience}%</span>
            <svg height="100" width="100" className="circle">
                <style>
                    {`
                    .circle {
                        stroke-dasharray: 410;
                        stroke-dashoffset: 410;
                        transform: rotate(-90deg);
                        animation: bar-fill 0.5s linear forwards;
                    }
                    
                    @keyframes bar-fill {
                        100% {
                            stroke-dashoffset: ${410 - porcental};
                        }
                    }
                `}
                </style>
                <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#151615"
                    strokeWidth="7"
                    fill="none"
                />
            </svg>
        </div>
    )
}
