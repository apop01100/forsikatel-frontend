import { dummyDataCarouselProps } from "./TotalKhatamJuzCarousel"

interface CarouselComponentProps {
    data: dummyDataCarouselProps[]

}

const CarouselComponent: React.FC<CarouselComponentProps> = ({data}) => {
  return (
    <>
    <div className="relative">
        {/* Left gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-20 pointer-events-none bg-gradient-to-r from-neutral-50 to-transparent" />
        {/* Right gradient overlay */}
        <div className="absolute inset-y-0 right-0 w-20 pointer-events-none bg-gradient-to-l from-neutral-50 to-transparent" />

        <div className="flex gap-2 max-w-[40rem] carousel carousel-scroll">    
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

        </div>
    </div>
    </>
    
  )
}

export default CarouselComponent