import { useMediaQuery } from "@react-hook/media-query";
import { MOBILE, DESKTOP, TABLET } from "../constants/DEVICES_SIZE";
import DashboardHeader from "../components/DashboardHeader";
import DashboardKalender from "../components/DashboardKalender";
import ProgressKhatamDashboard from "../components/ProgressKhatamDashboard";
import DashboarAktivitasMengaji from "../components/DashboarAktivitasMengaji";
import { DashboardResponse } from "../constants/interfaces/DASHBORAD_RESPONSES";
import { API_DASHBOARD } from "../constants/URL_API";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import HadistHariIniDashBoard from "../components/HadistHariIniDashBoard";
import RegionalJuzTerbanyakDashboard from "../components/RegionalJuzTerbanyakDashboard";
import craneImage from "../assets/images/crane-logo.png";
import LoadingCircular from "../components/LoadingCircular";
import { toTitleCase } from "../utils/functions/toTitleCase";

const Dashboard = () => {
  const isMobile = useMediaQuery(MOBILE);
  const isDesktop = useMediaQuery(DESKTOP);
  const isTablet = useMediaQuery(TABLET);
  const { data, loading, error, fetchData } = useFetch<DashboardResponse>(API_DASHBOARD, "GET", {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

  if (localStorage.getItem("access_token") === null || error) {
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {(isMobile || isTablet) && 
        <>
          <div className="flex flex-col w-full h-full items-center px-4 gap-4">
            { !loading && data ? (
              <>
                <DashboardHeader time={data.time_in_day} name={toTitleCase(data.name_husband)}/>
                <DashboardKalender data={data.kalender}/>
                <div className="flex gap-3 items-start justify-between w-full">
                  <ProgressKhatamDashboard progress={data?.last_juz}/>
                  <div className="flex flex-col justify-between w-full h-full gap-1">
                    <HadistHariIniDashBoard isMobile={isMobile} />
                    <RegionalJuzTerbanyakDashboard data={data.top_region} loading={loading}/>
                  </div>
                </div>
                <div className="bg-white flex flex-col justify-center items-center h-full w-full rounded-3xl text-center font-bold text-neutral-900 gap-2 py-4">
                  Fitur Baru Sedang dalam Proses!
                  <img src={craneImage} className="h-44"/>
                </div>
                <DashboarAktivitasMengaji data={data.latest_activity} loading={loading}/>
              </>
            ):(
              <LoadingCircular />
            )}
          </div>
        </>
      }

      {isDesktop && 
        <>
          <div className="flex flex-row w-full h-full justify-between px-4 gap-4">
            { !loading && data ? (
              <>
                <div className="bg-neutral-100 flex flex-col rounded-3xl w-11/12 h-full justify-center items-center p-4 gap-4">
                  <DashboardHeader time={data.time_in_day} name={toTitleCase(data.name_husband)}/>
                  <DashboardKalender data={data.kalender}/>
                  <div className="flex w-full gap-4 justify-between items-stretch">
                    <RegionalJuzTerbanyakDashboard data={data?.top_region} loading={loading}/>
                    <div className="bg-neutral-50 flex flex-col justify-center items-center h-full w-full rounded-3xl text-center font-bold text-neutral-900 gap-2 py-4">
                      Fitur Baru Sedang dalam Proses!
                      <img src={craneImage} className="h-44"/>
                    </div>
                  </div>
                  <DashboarAktivitasMengaji data={data.latest_activity} loading={loading}/>
                </div>
                <div className="flex flex-col gap-4 p-4 rounded-lg w-1/3 h-full justify-center items-center">
                  <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-3/5 w-full">
                    <ProgressKhatamDashboard progress={data.last_juz}/>
                  </div>
                  <div className="bg-white flex justify-center rounded-3xl box-shadow h-full w-full">
                    <HadistHariIniDashBoard isDesktop={isDesktop} data={data.hadits}/>
                  </div>
                </div>
              </>
            ) : (
              <LoadingCircular />
            )}
            
          </div>
        </>
      }
    </>
  )
}

export default Dashboard