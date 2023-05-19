
export const ItemExperience = ({experience, porcental, handleViewOut}) => {

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
                    stroke="rgba(102, 112, 55, 0.438)"
                    strokeWidth="7"
                    fill="none"
                />
            </svg>
        </div>
    )
}
