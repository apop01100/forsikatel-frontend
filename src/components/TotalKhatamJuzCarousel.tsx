import CarouselComponent from "./CarouselComponent"
import { rekapResponses } from "../pages/Rekap"
export type dummyDataCarouselProps = {
  regional: string,
  total_khatam: number,
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

const TotalKhatamJuzCarousel = (data: rekapResponses) => {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">Total Khatam dan Juz</h2>
          <span className="text-xs font-source text-end">per regional</span>
        </div>
        <CarouselComponent data={data}/>
      </div>
  )
}

export default TotalKhatamJuzCarousel