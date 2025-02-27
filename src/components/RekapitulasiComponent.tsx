import { rekapResponses } from "../pages/Rekap";
import useFetch from "../hooks/useFetch";
import { API_REKAP } from "../constants/URL_API";
import { useEffect, useContext, createContext, useState } from "react";
import TotalKhatamJuzCarousel from "./TotalKhatamJuzCarousel";
import DetailPeroranganTableDesktop from "./DetailPeroranganTableDesktop";
import DetailPeroranganTableMobile from "./DetailPeroranganTableMobile";
import LoadingCircular from "./LoadingCircular"
import zoomInSvg from "../assets/svg/zoom-in.svg"
import { useMediaQuery } from "@react-hook/media-query";
import { DESKTOP, TABLET } from "../constants/DEVICES_SIZE";

interface rekapContextProps {
  regionFilter: string;
  setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

const RekapContext = createContext<rekapContextProps | null>(null);

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
}
const RekapitulasiComponent = () => {
    const{ data, loading, error, fetchData} = useFetch<rekapResponses>(
        API_REKAP, 
        "GET", 
        headers
      )
      const isTablet = useMediaQuery(TABLET);
      const isDesktop = useMediaQuery(DESKTOP);

      const [regionFilter, setRegionFilter] = useState<string>("");

    useEffect(() => {
      fetchData();
      if(error) {
        alert(error)
      }  
    }, [])
    // console.log(regionFilter)

        return (
          <RekapContext.Provider value={{ regionFilter, setRegionFilter }}>
          {!loading && data ? (
            <section className="flex flex-col h-[100vh] w-full lg:gap-0 pr-0 mt-[2rem] lg:mt-0 lg:pr-[2rem]">
            <div className="flex items-center">
                <TotalKhatamJuzCarousel data={data}/>
            </div>
            <div className="flex items-center justify-end mr-[2rem]">
                <img src={zoomInSvg} alt="zoom_in_logo" />
                <span className="text-[10px] lg:text-xs text-neutral-900 font-source">Arahkan cursor ke salah satu regional untuk melihat individu.</span>
            </div>
            <div className="w-full  mt-[1rem] lg:mt-0">
              {isTablet && <DetailPeroranganTableMobile detail_person={data.detail_person}/>}
               {isDesktop && <DetailPeroranganTableDesktop detail_person={data.detail_person}/>} 
            </div>
          </section>
          ): <LoadingCircular />}
          </RekapContext.Provider>
          // <ComingSoon />
        )
}

export const UseRekapContext = () => {
  const context = useContext(RekapContext);
  if (!context) {
    throw new Error("useRekapContext must be used within a RekapContextProvider");
  }
  return context;
}

export default RekapitulasiComponent