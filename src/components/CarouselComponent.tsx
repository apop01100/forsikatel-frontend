import { dummyDataCarouselProps } from "./TotalKhatamJuzCarousel"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
interface CarouselComponentProps {
    data: dummyDataCarouselProps[]

}

const CarouselComponent: React.FC<CarouselComponentProps> = ({data}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollXProgress } = useScroll({
      container: targetRef,
      axis: "x",
    })

    const x = useTransform(scrollXProgress, [0, 1], [0, 100])
    return (
    <>
    <div className="relative overflow-x-auto" ref={targetRef}>
        {/* Left gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-20 pointer-events-none bg-gradient-to-r from-neutral-50 to-transparent" />
        {/* Right gradient overlay */}
        <div className="absolute inset-y-0 right-0 w-20 pointer-events-none bg-gradient-to-l from-neutral-50 to-transparent" />

        <motion.div style={{x}} className="flex gap-2 max-w-[40rem]">    
        {data.map((item, index) => (
            <div 
                key={index} 
                className=
                "flex  min-w-[9rem] flex-col items-center gap-2 bg-primary-300 text-white rounded-3xl justify-between py-[1rem] px-[2rem]"
            >
                <span className="font-source text-sm">{item.regional}</span>
                <span className="font-source font-bold text-6xl">{item.total_khatam}</span>
                <span className="font-source text-xs">Kali Khatam</span>
            </div>
        ))}

        </motion.div>
    </div>
    </>
    
  )
}

export default CarouselComponent