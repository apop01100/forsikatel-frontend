import React from "react"
import { ActivityStatistics } from "../constants/interfaces/DASHBORAD_RESPONSES"
import Header2 from "./Header2"
import { regionInterpreter } from "../utils/functions/regionInterpreter"
import starIcon from "../assets/images/star.png"

interface StatistikAktivitasMengajiProops {
    data: ActivityStatistics
}

const StatistikAktivitasMengaji: React.FC<StatistikAktivitasMengajiProops> = ({ data }) => {
  return (
    <div className="bg-white flex flex-col h-full w-full rounded-3xl text-center font-bold text-neutral-900 gap-2 p-4">
        <Header2 title="Statistik Aktivitas Mengaji" text="per regional" className="text-left items-start w-full" textSize="font-semibold"/>
        <div className="flex flex-col gap-2 w-full justify-center">
            {data.progress_data.map((item, index) => (
                <div className="flex gap-1" key={index}>
                    <p className="text-xs font-source text-start w-4">{regionInterpreter(item.region, true)}</p>
                    <div
                        className={`${data.user_region === item.region ? "bg-neutral-300" : "bg-primary-300"} flex h-full text-xs px-2 justify-end rounded-full hover:bg-neutral-100 text-primary-300`}
                        style={{
                            width: `${Math.round(item.total_users_setor / item.total_users_region*100)}%`
                        }}
                    >   
                        {data.stars.includes(item.region) && <img src={starIcon} />}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default StatistikAktivitasMengaji