import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import CarouselItems from "./CarouselItems"
import { rekapResponses } from "../pages/Rekap"
import { useRef } from "react"


interface CarouselComponentProps {
    data: rekapResponses;
  }

const CarouselComponent: React.FC<CarouselComponentProps> = ({data}) => {

    const targetRef = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 400, damping:30 });
    const minX = -1000;
    const maxX = 0;

      // Clamp function to restrict value between min and max
    const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

    const handleWheel = (e: React.WheelEvent) => {
        // e.preventDefault();
        const newX = clamp(x.get() - e.deltaY, minX, maxX);
        x.set(newX);
      };
      const progress = useTransform(springX, [maxX, minX], [0, 1]);
      const leftOpacity = progress; // Fades in as you scroll right
      const rightOpacity = useTransform(progress, [0, 1], [1, 0]);
    return (
    <>
    <div className="relative " ref={targetRef}>
        {/* Left gradient overlay */}
        <motion.div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none  bg-gradient-to-r from-neutral-50 to-transparent"
        style={{ opacity: leftOpacity }}
        />

        {/* Right gradient overlay (fade out when scrolling right) */}
        <motion.div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none  bg-gradient-to-l from-neutral-50 to-transparent"
        style={{ opacity: rightOpacity }}
        />

        <div className="overflow-hidden" onWheel={handleWheel}>
            <motion.div 
                drag="x" 
                dragConstraints={{ left: minX, right: maxX }}
                style={{ x: springX }} 
                className="flex gap-2 min-w-[10rem] md:min-w-[20rem] lg:min-w-[30rem] max-w-[50rem] cursor-pointer"
            >    
            <CarouselItems data={data} />

            </motion.div>
        </div>
    </div>
    </>
    
  )
}

export default CarouselComponent