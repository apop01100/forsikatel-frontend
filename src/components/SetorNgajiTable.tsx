import Header2 from './Header2';
import Table from './Table'
import { ColumnDef } from '@tanstack/react-table'
import { HistoryItem } from '../constants/interfaces/SETORAN_RESPONSE';


// // Sample data
// const userData: User[] = [
//     { date: new Date("2024-02-01"), totalJuz: 5, latestJuz: "Juz 30", totalKhatam: "1x" },
//     { date: new Date("2024-02-02"), totalJuz: 3, latestJuz: "Juz 15", totalKhatam: "2x" },
//     { date: new Date("2024-02-03"), totalJuz: 4, latestJuz: "Juz 20", totalKhatam: "1x" },
//     { date: new Date("2024-02-04"), totalJuz: 6, latestJuz: "Juz 25", totalKhatam: "3x" },
//     { date: new Date("2024-02-05"), totalJuz: 2, latestJuz: "Juz 10", totalKhatam: "1x" },
//     { date: new Date("2024-02-06"), totalJuz: 7, latestJuz: "Juz 29", totalKhatam: "2x" },
//     { date: new Date("2024-02-01"), totalJuz: 5, latestJuz: "Juz 30", totalKhatam: "1x" },
//     { date: new Date("2024-02-02"), totalJuz: 3, latestJuz: "Juz 15", totalKhatam: "2x" },
//     { date: new Date("2024-02-03"), totalJuz: 4, latestJuz: "Juz 20", totalKhatam: "1x" },
//     { date: new Date("2024-02-04"), totalJuz: 6, latestJuz: "Juz 25", totalKhatam: "3x" },
//     { date: new Date("2024-02-05"), totalJuz: 2, latestJuz: "Juz 10", totalKhatam: "1x" },
//     { date: new Date("2024-02-06"), totalJuz: 7, latestJuz: "Juz 29", totalKhatam: "2x" },
//     { date: new Date("2024-02-01"), totalJuz: 5, latestJuz: "Juz 30", totalKhatam: "1x" },
//     { date: new Date("2024-02-02"), totalJuz: 3, latestJuz: "Juz 15", totalKhatam: "2x" },
//     { date: new Date("2024-02-03"), totalJuz: 4, latestJuz: "Juz 20", totalKhatam: "1x" },
//     { date: new Date("2024-02-04"), totalJuz: 6, latestJuz: "Juz 25", totalKhatam: "3x" },
//     { date: new Date("2024-02-05"), totalJuz: 2, latestJuz: "Juz 10", totalKhatam: "1x" },
//     { date: new Date("2024-02-06"), totalJuz: 7, latestJuz: "Juz 29", totalKhatam: "2x" },
// ];
  
  
// Define table columns
const userColumns: ColumnDef<HistoryItem>[] = [
    { accessorKey: "tanggal", 
        header: "Tanggal", 
        cell: (info) => {
            const rawDate = info.getValue<string>();
            const parsedDate = new Date(rawDate);
            return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(parsedDate);
        },
        sortingFn: (rowA, rowB, columnId) => {
            const dateA = new Date(rowA.getValue(columnId));
            const dateB = new Date(rowB.getValue(columnId));
            return dateA.getTime() - dateB.getTime(); // Sort ascending (earliest first)
        },
        enableSorting: true,
        enableMultiSort: false,
        sortDescFirst: false
    },
    { accessorKey: "banyak_juz_dibaca", header: "Banyak Juz Dibaca", enableSorting: false },
    { accessorKey: "juz_terakhir", header: "Juz Terakhir", enableSorting: false },
    { accessorKey: "total_khatam", header: "Total Khatam", enableSorting: false },
];
  

const SetorNgajiTable: React.FC<{ data: HistoryItem[] }> = ({ data }) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <Header2
            title="Riwayat Setoran Mengaji"
            text="Cek Perjalanan mengajimu sejauh ini!"
        />
        <div className="max-h-96 overflow-y-auto">
            <Table data={data} columns={userColumns} />
        </div>
    </div>
  )
}

export default SetorNgajiTable