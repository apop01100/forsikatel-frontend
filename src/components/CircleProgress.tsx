import React from "react";
import { useEffect, useState } from "react";
import { MOBILE } from "../constants/DEVICES_SIZE";
import { useMediaQuery } from "@react-hook/media-query";

interface SegmentedProgressProps {
    total?: number;
    progress?: number;
  }

const CircleProgress: React.FC<SegmentedProgressProps> = ({
    total = 30,
    progress = 15,
}) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const radius = 60;
    const strokeWidth = 2;
    const isMobile = useMediaQuery(MOBILE);

    useEffect(() => {
        setAnimatedProgress(0);
        const timeouts = Array.from({ length: progress }, (_, i) =>
          setTimeout(() => setAnimatedProgress((prev) => prev + 1), i * 50)
        );
    
        return () => timeouts.forEach(clearTimeout);
    }, [progress])

  
    return (
      <>
        <svg width="12.5rem" height={isMobile ? "10rem" : "15rem"} viewBox="0 0 120 120">
        <g transform="translate(60,60)">
          {[...Array(total)].map((_, index) => {
            const angle = (index * 360) / total;
            const isFilled = index < animatedProgress;
            return (
              <g key={index} transform={`rotate(${angle})`}>
                
                <line
                  x1={0}
                  y1={-radius + strokeWidth}
                  x2={0}
                  y2={-radius + strokeWidth * 3 + 5}
                  stroke={isFilled ? "#ED1B26" : "#757575"}
                  strokeWidth={strokeWidth / 2}
                  strokeLinecap="round"
                  style={{ transition: "stroke 0.3s ease-in-out" }}
                />

                <circle
                  cx={0}
                  cy={-radius + strokeWidth * 4 + 6}
                  r={strokeWidth / 3}
                  fill={isFilled ? "#ED1B26" : "#757575"}
                  style={{ transition: "fill 0.3s ease-in-out" }}
                />

              </g>
            );
          })}
          <g transform={`translate(0, ${strokeWidth})`} textAnchor="middle">
          <text
                  fill="#ED1B26"
                  className="text-2xl font-source font-bold transition-all"

                >{animatedProgress}</text>
            <text
                  y={strokeWidth * 7}
                  fill="#ED1B26"
                  className="text-sm font-source font-semibold transition-all"
                >/30 Juz</text>
            </g>
        </g>
      </svg>

      <div className="flex flex-col items-center">
        <span className="text-primary-300 text-xl font-semibold font-source">{Math.floor((animatedProgress/30)*100)}% Selesai</span>
        <span className="px-2 text-center text-sm text-neutral-700 font-source">Tetap semangat! Hanya {30-progress} juz lagi menuju khatam</span>
      </div>
      </>
    );
};
  


export default CircleProgress