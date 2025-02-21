import { ColumnDef } from "@tanstack/react-table"
import Card from "./Card"
import Table from "./Table"

type DetailPeroranganTableProps = {
    regional: string
    nama: string,
    khatam: string
    total_juz: number
    juz_terakhir: number
}

    


const dummyData: DetailPeroranganTableProps[] = [
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    {regional: "Regional 1", nama: "Ahmad", khatam: "2x", total_juz: 10, juz_terakhir: 5},
    ]

const userColumns: ColumnDef<DetailPeroranganTableProps>[] = [
    { accessorKey: "regional", header: "Regional", enableSorting: false },
    { accessorKey: "nama", header: "Nama" , enableSorting: false},
    { accessorKey: "khatam", header: "Khatam" , enableSorting: false},
    { accessorKey: "total_juz", header: "Total Juz" , enableSorting: false},
    { accessorKey: "juz_terakhir", header: "Juz Terakhir" , enableSorting: false},
]
const DetailPeroranganTable = () => {
  return (
    <Card className="w-full px-[2rem] py-[1.5rem]">
        <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-between w-full">
                <h2 className="text-2xl font-semibold">Detail Perorangan</h2>
                <div className="flex gap-5">
                    <span>Mengaji</span>
                    <span>Tidak Mengaji</span>
                </div>
            </div>

            <Table data={dummyData} columns={userColumns} />
        </div>
    </Card>
  )
}

export default DetailPeroranganTable