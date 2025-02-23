import { rekapResponses } from "../../pages/Rekap"
import { ColumnDef } from "@tanstack/react-table"
import checkCircle from "../../assets/svg/check-circled-outline.svg"
import uncheckCircle from "../../assets/svg/uncheck-circled-outline.svg"
import Table from "../../components/Table"
import { regionInterpreter } from "./regionInterpreter"

interface TableFilter {
    data: rekapResponses["detail_person"]
    selected: string
}



export const TableFilterRekap: React.FC<TableFilter> = ({data, selected}) => {
    const isMobile = true;
    const userColumns: ColumnDef<rekapResponses["detail_person"][0]>[] = [
        { accessorKey: "regional", header: "Regional", enableSorting: false,
            cell: ({ row }) => (
                regionInterpreter(row.original.regional, isMobile)
            ),
         },
        { accessorKey: "name_husband", header: "Nama - Nama Suami", enableSorting: false },
    ];
    
    // Add conditional columns
    if (selected === "total_khatam") {
        userColumns.push({
            accessorKey: "total_khatam",
            header: "Total Khatam",
            enableSorting: false,
            cell: ({ row }) => <span>{row.original.total_khatam}x</span>,
        });
    } else if (selected === "total_juz") {
        userColumns.push({
            accessorKey: "total_juz",
            header: "Total Juz",
            enableSorting: false,
        });
    } else if (selected === "last_juz") {
        userColumns.push({
            accessorKey: "last_juz",
            header: "Juz Terakhir",
            enableSorting: false,
        });
    } else if (selected === "last_5days") {
        userColumns.push({
            accessorKey: "last_5days",
            header: "5 hari terakhir",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex items-center" key={row.original.user_id}>
                    {row.original.last_5days.map((day, index) => (
                        <img
                            key={index}
                            src={day ? checkCircle : uncheckCircle}
                            alt={day ? "check_circle" : "uncheck_circle"}
                            draggable="false"
                            className="object-contain w-4 h-5"
                        />
                    ))}
                </div>
            ),
        });
    }
    
    
    const selectedData = data.filter((item) => {
        if (selected === "total_khatam") {
            return item.total_khatam;
        } else if (selected === "total_juz") {
            return item.total_juz;
        } else if (selected === "last_juz") {
            return item.last_juz;
        } else if (selected === "last_5days") {
            return item.last_5days;
        }
        return false;
    });
    

    return (
        <Table 
            data={selectedData} 
            columns={userColumns} 
            borderHeader="bg-white" 
            borderBody="py-4 font-border border-t-2"
            classNameBody="font-semibold"
        />
    )
}