import {getCurrentDay, getCurrentMonth, getCurrentYear, getCurrentWeekDates } from "../utils/functions/getDates";
import Header2 from "./Header2";
import { DAYS } from "../constants/DATES";
import DotCircle from "./DotCircle";
import { Calendar } from "../constants/interfaces/DASHBORAD_RESPONSES";

interface DashboardKalenderProps {
    data: Calendar;
}

const DashboardKalender: React.FC<DashboardKalenderProps> = ({ data }) => {
    const currentDay = getCurrentDay();
    const currentWeekDates = getCurrentWeekDates();

  return (
    <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-end px-4">
            <Header2 title={"Kalender"} />
            <p className="font-source font-semibold">{getCurrentMonth()}&nbsp;{getCurrentYear()}</p>
        </div>
        <div className="bg-white lg:bg-neutral-50 flex justify-around items-center rounded-[30px] py-3 px-2 font-source w-full h-full">
            {currentWeekDates.map((date, index) => (
                    <div key={index} className={`flex flex-col items-center w-12 py-3 rounded-full h-full ${date === currentDay ? "bg-primary-300 text-white" : "text-neutral-900"}`}>
                        <p className="font-normal text-xs xl:text-sm">
                            {DAYS[index]}
                        </p>
                        <p className="font-normal text-2xl xl:text-3xl">
                            {date}
                        </p>
                        { data[DAYS[index]] && <DotCircle size="h-2 w-2"/> }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DashboardKalender