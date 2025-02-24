import { ColumnDef } from "@tanstack/react-table"
import Card from "./Card"
import Table from "./Table"
import checkCircle from "../assets/svg/check-circled-outline.svg"
import uncheckCircle from "../assets/svg/uncheck-circled-outline.svg"
import { rekapResponses } from "../pages/Rekap"
import { regionInterpreter } from "../utils/functions/regionInterpreter"

interface DetailPeroranganTableProps {
    detail_person: rekapResponses["detail_person"]
}


// const dummyData: rekapResponses["detail_person"] = 
// [
//     {regional: "Regional 1",name_husband: "Ahmad", total_khatam: 1, total_juz: 10, last_juz: 5, last_5days: [true, true, true, true, true], user_id: 1},
//     {regional: "Regional 1",name_husband: "Ahmad", total_khatam: 2, total_juz: 10, last_juz: 5, last_5days: [true, false, true, false, true], user_id: 2},
//     {regional: "Regional 1",name_husband: "Ahmad", total_khatam: 3, total_juz: 10, last_juz: 5, last_5days: [true, true, false, true, true], user_id: 3},
//     {regional: "Regional 1",name_husband: "Ahmad", total_khatam: 4, total_juz: 10, last_juz: 5, last_5days: [false, true, true, true, true], user_id: 4},
//     {regional: "Regional 1",name_husband: "Ahmad", total_khatam: 5, total_juz: 10, last_juz: 5, last_5days: [true, true, true, false, false], user_id: 5},
//     {regional: "Regional 1",name_husband: "Ahmad", total_khatam: 6, total_juz: 10, last_juz: 5, last_5days: [true, false, true, true, true], user_id: 6},
// ]

const userColumns: ColumnDef<rekapResponses["detail_person"][0]>[] = [
    { accessorKey: "regional", header: "Regional", enableSorting: false, 
        cell: ({row}) => {return (
            regionInterpreter(row.original.regional)
        )}
     },
    { accessorKey: "name_husband", header: "Nama - Nama Suami" , enableSorting: false},
    { accessorKey: "total_khatam", header: "Total Khatam" , enableSorting: false, 
        cell: ({row}) => {return (
            <span>{row.original.total_khatam}x</span>
        )}
    },
    { accessorKey: "total_juz", header: "Total Juz" , enableSorting: false},
    { accessorKey: "last_juz", header: "Juz Terakhir" , enableSorting: false},
    {accessorKey: "last_5days", header: "5 hari terakhir", enableSorting: false, 
        cell: ({row}) => { return (
            <div className="flex items-center" key={row.original.user_id}>
                {row.original.last_5days.map((day, index) => (
                    <>
                        {day === false ? <img key={index} src={uncheckCircle} alt="uncheck_circle" draggable="false"/>
                        :
                        <img key={index} src={checkCircle} alt="uncheck_circle" draggable="false"/>}
                    </>
                ))}
            </div>
        )}
    }
]
const DetailPeroranganTable: React.FC<DetailPeroranganTableProps> = ({detail_person}) => {
  return (
    <Card className="w-full px-[2rem] py-[1.5rem]">
        <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-between w-full">
                <h2 className="text-2xl font-semibold">Detail Perorangan</h2>
                <div className="flex gap-5">
                    <div className="flex gap-1 items-center">
                        <img src={checkCircle} alt="checkCircle" />
                        <span className="text-base text-neutral-900 font-source">= Mengaji</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img src={uncheckCircle} alt="uncheckCircle" />
                        <span className="text-base text-neutral-900 font-source">= Tidak Mengaji</span>
                    </div>
                    
                </div>
            </div>

            <Table data={detail_person} columns={userColumns} borderHeader="bg-white" borderBody="py-4 font-border border-t-2" classNameBody="font-semibold"/>
        </div>
    </Card>
  )
}

export default DetailPeroranganTable