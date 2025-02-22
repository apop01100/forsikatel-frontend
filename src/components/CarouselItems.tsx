import { rekapResponses } from "../pages/Rekap"
import { useState } from "react"

interface CarouselItemsProps {
    data: rekapResponses;
  }


const CarouselItems: React.FC<CarouselItemsProps> = ({data}) => {
    const [hover, setHover] = useState(false);
  return (
    <>
        {data.total_khatam_region.map((total_khatam, index) => (
                <div 
                    key={index} 
                    onMouseEnter={() => setHover(true)}
                    className=
                    {`flex  min-w-[9rem] flex-col items-center gap-2  rounded-3xl justify-between py-[1rem] px-[2rem] 
                        ${hover ? "bg-primary-300 text-white" : "bg-neutral-50 text-primary-200"} `}
                >
                    {hover ?
                    <>

                    <span className="font-source text-sm">{total_khatam.region}</span>
                    <span className="font-source font-bold text-6xl">{total_khatam.total_khatam}</span>
                    <span className="font-source text-xs">Kali Khatam</span>

                    </>
                    :
                    <>  
                    <span className="font-source text-sm">{data.total_juz_region[index].region}</span>
                    <span className="font-source font-bold text-6xl">{data.total_juz_region[index].total_juz}</span>
                    <span className="font-source text-xs">Juz Terbaca</span>
                    </>   
                }
                    
                </div>
    
        ))}
        </>
  )
}

export default CarouselItems