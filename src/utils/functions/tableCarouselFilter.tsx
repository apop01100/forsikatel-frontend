import { UseRekapContext } from "../../components/RekapitulasiComponent"
import { rekapResponses } from "../../pages/Rekap"
import Table from "../../components/Table"
import { ColumnDef } from "@tanstack/react-table"
import { regionInterpreter } from "./regionInterpreter"
import checkCircle from "../../assets/svg/check-circled-outline.svg"
import uncheckCircle from "../../assets/svg/uncheck-circled-outline.svg"


interface TableCarouselFilter {
    data: rekapResponses["detail_person"]
    accessor?: ColumnDef<rekapResponses["detail_person"][0]>[]
}
const TableCarouselFilter: React.FC<TableCarouselFilter> = ({data, accessor}) => {
    const {regionFilter} = UseRekapContext()

    const userColumns: ColumnDef<rekapResponses["detail_person"][0]>[] = [
        { accessorKey: "regional", header: "Regional", enableSorting: false, 
            cell: ({row}) => {return (
                regionFilter ?
                (row.original.regional === regionFilter && regionInterpreter(row.original.regional)) : regionInterpreter(row.original.regional)
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

    const detail_person = regionFilter ? data.filter((item) => item.regional === regionFilter) : data
  return (
    <Table 
        data={detail_person} 
        columns={accessor ? accessor : userColumns}  
        borderHeader="bg-white" 
        borderBody="py-4 font-border border-t-2" 
        classNameBody="font-semibold overflow-y-auto"/>
  )
}

export default TableCarouselFilter