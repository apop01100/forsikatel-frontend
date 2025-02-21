import Header1 from "../components/Header1"
import SetorNgajiInput from "../components/SetorNgajiInput"
import SetorNgajiRecord from "../components/SetorNgajiRecord"
import SetorMengajiChart from "../components/SetorMengajiChart"
import SetorNgajiTable from "../components/SetorNgajiTable"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { API_SETOR_NGAJI } from "../constants/URL_API"
import { SetorNgajiResponse } from "../constants/interfaces/SETORAN_RESPONSE"
import LoadingCircular from "../components/LoadingCircular"

const SetorNgaji = () => {
    const { data, loading, fetchData } = useFetch<SetorNgajiResponse>(API_SETOR_NGAJI, "GET", {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

    useEffect(() => {
      fetchData();
    }, [])

    return (
      <>
        {!loading && data ? (
          <div className="flex lg:pr-4 px-4 flex-col gap-8">
            <div className="flex lg:gap-8 gap-8 md:flex-row-reverse flex-col lg:justify-around 2xl:px-14 justify-between items-center">
              <div className="flex flex-col lg:justify-center 2xl:pl-14 gap-2">
                <Header1 
                  title="Setoran Ngaji Hari Ini"
                  text="Yuk catat bacaanmu dan lihat progresnya! Berapa Juz yang Kamu Baca Hari Ini?"
                />
                <SetorNgajiInput onSubmitSuccess={fetchData}/>
              </div>
              <SetorNgajiRecord last_juz={data.total_progress.last_juz} total_juz={data.total_progress.total_juz} total_khatam={data.total_progress.total_khatam}/>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-8 justify-between items-stretch">
              <SetorMengajiChart />
              <SetorNgajiTable data={data.history}/>
            </div>
          </div>
        ) : (
          <LoadingCircular />
        )}
      </>
    )
  }
  
  export default SetorNgaji