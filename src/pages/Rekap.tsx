// import ComingSoon from "../components/ComingSoon"
import TotalKhatamJuzCarousel from "../components/TotalKhatamJuzCarousel"
import DetailPeroranganTable from "../components/DetailPeroranganTable"
const Rekap = () => {
    return (
      <section className="flex flex-col items-center w-full gap-[2rem]">
        <div className="flex items-center gap-5">
            <TotalKhatamJuzCarousel />
        </div>
        <div className="w-full">
            <DetailPeroranganTable />
        </div>
      </section>
    )
  }
  
  export default Rekap