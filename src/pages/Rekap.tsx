// import ComingSoon from "../components/ComingSoon"
import TotalKhatamJuzCarousel from "../components/TotalKhatamJuzCarousel"
import DetailPeroranganTable from "../components/DetailPeroranganTable"

export type rekapResponses = {
  detail_person:
    {
      last_5days: [
        boolean,
        boolean,
        boolean,  
        boolean,
        boolean
      ]
      last_juz: number
      name_husband: string
      regional: string
      total_juz: number
      total_khatam: number
      user_id: number
    }[]
  total_juz_region:[
    {
      region: string
      total_juz: number
    }
  ]
  total_khatam_region:[ 
    {
      region: string
      total_khatam: number
    }
  ]
}
const Rekap = () => {
    return (
      <section className="flex flex-col items-center w-full gap-[2rem] pr-[2rem]">
        <div className="flex items-center gap-5">
            <TotalKhatamJuzCarousel />
        </div>
        <div className="w-full">
            <DetailPeroranganTable />
        </div>
      </section>
      // <ComingSoon />
    )
  }
  
  export default Rekap