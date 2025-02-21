import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from './Card';
import Header2 from "./Header2";
import { API_PROGRESS_CHART } from "../constants/URL_API";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

interface ProgressChart {
    day: string;
    today: number;
    prev_week: number;
}

interface ProgressResponse {
    data: ProgressChart[];
}

const SetorMengajiChart = () => {
    const { data, fetchData } = useFetch<ProgressResponse>(API_PROGRESS_CHART, "GET", {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

    useEffect (() => {
        fetchData();
        console.log(data)
    }, [])

  return (
    <div className="flex flex-col gap-2 w-full">
        <Header2
            title="Progress Mengaji"
            text="Pantau perjalananmu menuju khatam!"
            className="px-4"
        />
        <Card className="flex flex-col gap-2 justify-center items-center p-4 font-source text-sm h-full">
            <h3 className="text-neutral-400">
                Terus pertahankan ritmemu dan capai target khatam!
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data?.data}>
                    <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="day" tickLine={false} 
                        ticks={["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]} 
                        interval={0}
                        padding={{ left: 20, right: 20 }}
                    />
                    <YAxis hide />
                    <Tooltip/>
                    <Legend/>
                    <Line
                        type="linear"
                        dataKey="today"
                        legendType="circle"
                        name="7 hari terakhir"
                        stroke="#FF0000"
                        strokeWidth={3}
                        dot={false}
                    />
                    <Line
                        type="linear"
                        dataKey="prev_week"
                        legendType="circle"
                        name="Minggu sebelumnya"
                        stroke="#FF9DA1"
                        strokeWidth={3}
                        dot={false}
                        strokeOpacity={0.5}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    </div>
  )
}

export default SetorMengajiChart