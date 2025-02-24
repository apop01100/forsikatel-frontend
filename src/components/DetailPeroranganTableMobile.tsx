import Card from "./Card"
import { rekapResponses } from "../pages/Rekap"
import { useState } from "react"
import { TableFilterRekap } from "../utils/functions/tableFilter"

interface DetailPeroranganTableProps {
    detail_person: rekapResponses["detail_person"]
}


const selectedStyle = "bg-primary-300 transition-all duration-300 text-white rounded-full"
const DetailPeroranganTableMobile: React.FC<DetailPeroranganTableProps> = ({detail_person}) => {
    const [selected, setSelected] = useState<string>("total_khatam")
    return (
        <Card className="w-full px-[2rem] py-[1.5rem] rounded-b-none">
            <div className="flex items-center group w-full flex-col gap-5">
                <div className="flex justify-between w-full">
                    <h2 className="text-2xl font-semibold">Detail Perorangan</h2>
                </div>
                <div className="flex items-center text-xs justify-center font-semibold font-source  px-2 py-1 rounded-full bg-neutral-50">
                    <button 
                        onClick={() => setSelected("total_khatam")} 
                        className={`${selected === "total_khatam" ? selectedStyle : "text-neutral-800"} px-3 py-1`}
                    >
                        Khatam
                    </button>
                    <button 
                        onClick={() => setSelected("total_juz")}  
                        className={`${selected === "total_juz" ? selectedStyle : "text-neutral-800"} px-3 py-1`}
                        >
                            Total Juz
                    </button>
                    <button 
                        onClick={() => setSelected("last_juz")}
                        className={`${selected === "last_juz" ? selectedStyle : "text-neutral-800"} px-3 py-1`}
                        >
                            Juz Terakhir
                    </button>
                    <button 
                        onClick={() => setSelected("last_5days")}
                        className={`${selected === "last_5days" ? selectedStyle : "text-neutral-800"} px-3 py-1`}
                        >
                            5 Hari Terakhir
                    </button>
                </div>
                <div className="flex items-center w-full">
                <TableFilterRekap data={detail_person} selected={selected} />
                </div>
            </div>
        </Card>
      )
}

export default DetailPeroranganTableMobile