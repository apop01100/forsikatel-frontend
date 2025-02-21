import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
} from "@tanstack/react-table"


interface TableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData>[]
    borderHeader?: string
    classNameHeader?: string
    borderBody?: string
    classNameBody?: string
    firstHighlight?: boolean
}
const Table = <TData,>({ data, columns, borderHeader="border-b-2", classNameHeader="font-semibold text-xs", borderBody="border-t-2", classNameBody="font-bold", firstHighlight=false }: TableProps<TData>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
  return (
    <>
      <table className="w-full font-source min-w-max border-collapse">
        <thead className={`text-neutral-500 sticky top-0 bg-neutral-50 ${borderHeader}`}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={`p-2 text-left ${classNameHeader}`}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-neutral-900 text-sm">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={`${classNameBody} ${borderBody} ${(firstHighlight && row.index === 0) && "text-primary-300"} p-2`}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table