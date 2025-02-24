import { rekapResponses } from "../pages/Rekap"
import { useState } from "react"
import { regionInterpreter } from "../utils/functions/regionInterpreter";

interface CarouselItemsProps {
    data: rekapResponses;
  }



const CarouselItems: React.FC<CarouselItemsProps> = ({data}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
        {data.total_khatam_region.map((total_khatam, index) => (
          
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group" // group allows child elements to access hover state
        >
          <div className={`w-[9rem] flex flex-col items-center group gap-2 rounded-3xl justify-between py-4 px-6 ${hoveredIndex === index ? "bg-neutral-50" : "bg-primary-300 "} transition-group-carousel`}>
            <span 
              className={`font-source text-sm ${hoveredIndex === index ? " text-primary-400" : "text-white"} `}
              >
                {hoveredIndex === index ? regionInterpreter(data.total_juz_region[index].region) :  regionInterpreter(data.total_khatam_region[index].region)}
            </span>
            <span className={`font-source font-bold ${hoveredIndex === index ? " text-primary-400" : "text-white"} text-6xl `}>{hoveredIndex === index ?  data.total_juz_region[index].total_juz : total_khatam.total_khatam}</span>
            <span className={`font-source text-xs ${hoveredIndex === index ? " text-primary-400" : "text-white"} `}>{hoveredIndex === index ? "Juz Terbaca" :  "Kali Khatam"}</span>
          </div>
        </div>
      ))}
        </>
  )
}

export default CarouselItems