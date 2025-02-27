import Header2 from "./Header2"
import Table from "./Table"
import { ColumnDef } from "@tanstack/react-table";
import { LatestActivity } from "../constants/interfaces/DASHBORAD_RESPONSES";
import { regionInterpreter } from "../utils/functions/regionInterpreter";
import { toTitleCase } from "../utils/functions/toTitleCase";
import { useMediaQuery } from "@react-hook/media-query";
import { MOBILE } from "../constants/DEVICES_SIZE";

const columns: ColumnDef<LatestActivity>[] = [
    { accessorKey: "region", header: "Regional" },
    { accessorKey: "name", header: "Nama" },
    { accessorKey: "juz_read", header: "Juz yang Dibaca" },
    { 
        accessorKey: "entry_time", 
        header: "Waktu Laporan", 
        cell: (info) => (
          <span>
            {new Intl.DateTimeFormat("id-ID", {
            hour: "2-digit", 
            minute: "2-digit",
            timeZone: "Asia/Jakarta" // WIB timezone
            }).format(new Date(info.getValue<Date>()))}
          &nbsp;WIB</span>
    )}
];

interface DashboardAktivitasMengajiProps {
    data: LatestActivity[];
}


const DashboarAktivitasMengaji: React.FC<DashboardAktivitasMengajiProps> = ({ data }) => {
    const isMobile = useMediaQuery(MOBILE);
    const transformedData = data.map((activity) => ({
        ...activity, 
        region: isMobile ? regionInterpreter(activity.region, true) : regionInterpreter(activity.region),
        name: toTitleCase(activity.name)
    }));

  return (
    <div className="lg:bg-neutral-50 bg-white flex flex-col justify-center w-full rounded-3xl px-6 py-3 gap-2">
        <Header2 title="Aktivitas Mengaji Terbaru" className="px-2 min-sm:text-lg" headerSize="text-lg lg:text-2xl"/>
        
        <Table 
            data={transformedData} 
            columns={columns} 
            classNameHeader="font-medium text-[0.6rem] md:text-sm" 
            classNameBody="text-[0.7rem] md:text-sm" 
            borderBody="border-0 font-normal" 
            firstHighlight={true} 
            backgroundHeader="bg-white lg:bg-neutral-50"
        />
        
    </div>
  )
}

export default DashboarAktivitasMengaji