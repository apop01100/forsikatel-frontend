import { useState } from "react"
import TabButton from "./TabButton"
import Card from "./Card"
import Header2 from "./Header2"
import { regionInterpreter } from "../utils/functions/regionInterpreter";
import { RegionProgress } from "../constants/interfaces/PROGRESS_RESPONSE";
import { isMore } from "../utils/functions/isMore";

interface ProgressMengajiHariniProps {
    data: RegionProgress[]
}

const ProgressMengajiHarini: React.FC<ProgressMengajiHariniProps> = ({data}) => {
    const [isActive, setIsActive] = useState(true);
    const [select, setSelect] = useState(true);

    const selectButton = () => {
        setIsActive(!isActive);
        setSelect(!select);
    }

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
        <Header2 title="Progress Mengaji Harini"/>
        <div className="flex flex-col w-full">
            <div className="flex w-full">
                <TabButton isActive={isActive} isSelected={selectButton}>Jumlah Setoran</TabButton>
                <TabButton isActive={!isActive} isSelected={selectButton}>Jumlah Juz</TabButton>
            </div>
            <Card className="flex flex-col gap-4 font-source text-neutral-900 font-bold p-8" rounded="rounded-b-3xl rounded-tr-3xl" boxShadow="shadow-lg">
                {data.map((item , index) => (
                    <div key={index}>
                        <p>{regionInterpreter(item.region)}</p>
                        <div 
                            className={`bg-primary-300 h-4 text-xs text-end px-2 rounded-full hover:bg-neutral-100 text-primary-300`} 
                            style={{
                                width: `${select ? 
                                    isMore(Math.round(item.jumlah_setoran / item.jumlah_user_per_region))
                                : 
                                    isMore(Math.round(item.jumlah_juz / 30))}%`
                            }}
                        >
                            {select ? item.jumlah_setoran : item.jumlah_juz}/{select ? item.jumlah_user_per_region : 30}
                        </div>
                    </div>
                ))}
            </Card>
        </div>
    </div>
  )
}

export default ProgressMengajiHarini