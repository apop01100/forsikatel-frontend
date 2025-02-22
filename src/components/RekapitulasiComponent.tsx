import { rekapResponses } from "../pages/Rekap";
import useFetch from "../hooks/useFetch";
import { API_REKAP } from "../constants/URL_API";
import { useEffect } from "react";
import TotalKhatamJuzCarousel from "./TotalKhatamJuzCarousel";
import DetailPeroranganTable from "./DetailPeroranganTable";
import LoadingCircular from "./LoadingCircular";

const RekapitulasiComponent = () => {
    const{ data, loading, error, fetchData} = useFetch<rekapResponses>(
        API_REKAP, 
        "GET", 
        {Authorization: `Bearer ${localStorage.getItem("access_token")}`}
      )
      useEffect(() => {
      
        fetchData();
        if(error) {
          alert(error)
        }
          console.log(data)

      }, [])
        return (
          <>
          {data && loading ? (
            <section className="flex flex-col items-center w-full gap-[2rem] pr-[2rem]">
            <div className="flex items-center gap-5">
                <TotalKhatamJuzCarousel data={data}/>
            </div>
            <div className="w-full">
                <DetailPeroranganTable detail_person={data.detail_person}/>
            </div>
          </section>
          ): <LoadingCircular />}
          </>
          // <ComingSoon />
        )
}

export default RekapitulasiComponent