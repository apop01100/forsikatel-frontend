import CarouselComponent from "./CarouselComponent"
import { rekapResponses } from "../pages/Rekap"
import { UseRekapContext } from "./RekapitulasiComponent"

export type dummyDataCarouselProps = {
  regional: string,
  total_khatam: number,
}

interface TotalKhatamJuzCarouselProps {
  data: rekapResponses
}



// const dummyData: dummyDataCarouselProps[] = [
//   {regional: "Head Office", total_khatam: 10},
//   {regional: "Sumatera", total_khatam: 20},
//   {regional: "Jateng", total_khatam: 15},
//   {regional: "Jabar", total_khatam: 5},
//   {regional: "Jakarta", total_khatam: 30},
//   {regional: "Kalimantan", total_khatam: 3},
//   {regional: "Sulawesi", total_khatam: 3},
// ]

const TotalKhatamJuzCarousel: React.FC<TotalKhatamJuzCarouselProps> = ({data}) => {
  const {regionFilter, setRegionFilter} = UseRekapContext()
  return (
    <div className="flex items-start px-[2rem] overflow-hidden lg:items-center lg:flex-row flex-col gap-5 justify-center lg:gap-8 w-full">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">Total Khatam dan Juz</h2>
          <span className="text-xs font-source lg:text-end">per regional</span>
          {regionFilter && 
            <button 
              className="text-xs font-source bg-neutral-200 hover:bg-neutral-300 hover:cursor-pointer text-neutral-800 rounded-md px-2 py-1" 
              onClick={()=> setRegionFilter("")}
            >
                Show all
              </button>
          }
          
        </div>
        <CarouselComponent data={data}/>
      </div>
  )
}

export default TotalKhatamJuzCarousel