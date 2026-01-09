export const LoadIcon =({size=200})=>{
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="xMidYMid" 
            style={{ shapeRendering: 'auto', display: 'block' }}
            width={size} 
            height={size}
        >
            <g>
                <rect fill="#577c9b" height="20" width="20" y="19" x="19">
                    <animate calcMode="discrete" begin="0s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
                <rect fill="#577c9b" height="20" width="20" y="19" x="40">
                    <animate calcMode="discrete" begin="0.125s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
                <rect fill="#577c9b" height="20" width="20" y="19" x="61">
                    <animate calcMode="discrete" begin="0.25s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
                <rect fill="#577c9b" height="20" width="20" y="40" x="19">
                    <animate calcMode="discrete" begin="0.875s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
                <rect fill="#577c9b" height="20" width="20" y="40" x="61">
                    <animate calcMode="discrete" begin="0.375s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
                <rect fill="#577c9b" height="20" width="20" y="61" x="19">
                    <animate calcMode="discrete" begin="0.75s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
                <rect fill="#577c9b" height="20" width="20" y="61" x="40">
                    <animate calcMode="discrete" begin="0.625s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
                <rect fill="#577c9b" height="20" width="20" y="61" x="61">
                    <animate calcMode="discrete" begin="0.5s" repeatCount="indefinite" dur="1s" keyTimes="0;0.125;1" values="#0dceff;#577c9b;#577c9b" attributeName="fill"></animate>
                </rect>
            </g>
        </svg>
    )
}