import Card from "../components/Card";
import Header2 from "../components/Header2";
import ProgressMengajiHarini from "../components/ProgressMengajiHarini"
import Table from "../components/Table"
import { ColumnDef } from "@tanstack/react-table";
import { regionInterpreter } from "../utils/functions/regionInterpreter";
import useFetch from "../hooks/useFetch";
import { ProgressData, LatestActivity } from "../constants/interfaces/PROGRESS_RESPONSE";
import LoadingCircular from "../components/LoadingCircular";
import { useEffect } from "react";
import { API_PROGRESS } from "../constants/URL_API";

export const columns: ColumnDef<LatestActivity>[] = [
  {
    accessorKey: "region",
    header: "Regiona",
    cell: ({ row }) => <span>{regionInterpreter(row.getValue("region"))}</span>,
  },
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => <span>{row.getValue("name")}</span>,
  },
  {
    accessorKey: "juz_read",
    header: "Juz yang Dibaca",
    cell: ({ row }) => <span>{row.getValue("juz_read")}</span>,
  },
  { 
    accessorKey: "entry_time", 
    header: "Waktu Laporan", 
    cell: (info) => new Intl
        .DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        .format(new Date(info.getValue<Date>())) 
  }
];

const Progress = () => {
  const { data, loading, fetchData } = useFetch<ProgressData>(API_PROGRESS, "GET", {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      { !loading && data ? (
        <div className="flex flex-col h-full w-full gap-8 px-6 pb-8">
          <ProgressMengajiHarini data={data.total_progress_region}/>
          <Card 
            className="flex flex-col p-4 gap-2" 
            cardBgColor="bg-neutral-100"
            boxShadow="shadow-none"
          >
            <Header2 title="Aktivitas Mengaji Terbaru" className="px-2"/>
            <div className="max-h-96 overflow-y-auto">
              <Table 
                data={data.all_latest_activity} 
                columns={columns}              
                backgroundHeader="bg-neutral-100"
                classNameHeader="font-semibold text-[0.6rem] md:text-sm"
                classNameBody="font-normal md:text-sm text-[0.7rem] text-neutral-900"
                borderBody="border-0"
                firstHighlight={true}
              />
            </div>
          </Card>
        </div>
      ) : (
        <LoadingCircular />
      )}
    </>
  )
}
  
  export default Progress