
export const ItemExperience = ({ experience, porcental, handleViewOut }) => {

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
                    style={{
                        stroke: `url(#gradient)`,
                        strokeWidth: "7px",
                        fill: "#a8a8a841",
                    }}
                    fill="none"
                />
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(-15)">
                        <stop offset="0%" stopColor="rgb(31, 33, 124)" />
                        <stop offset="50%" stopColor="rgb(31, 33, 124)" />
                        <stop offset="90%" stopColor="rgb(202, 76, 214)" />
                        <stop offset="95%" stopColor="rgb(221, 36, 83)" />
                        <stop offset="100%" stopColor="rgb(221, 36, 83)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
