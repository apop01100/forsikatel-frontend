import { Link } from "react-router-dom"
import RightArrow from "../assets/svg/right-arrow.svg"
import { Hadist } from "../constants/interfaces/DASHBORAD_RESPONSES"
interface HadistHariIniDashBoardProps {
    isMobile?: boolean
    isDesktop?: boolean
    data?: Hadist
}

const HadistHariIniDashBoard: React.FC<HadistHariIniDashBoardProps> = ({isMobile, isDesktop, data}) => {
  return (
    <>
        {isDesktop && (
            <div className="flex flex-col gap-5 py-[3.5rem] px-[1.2rem] w-full">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold">Hadits</h3>
                        <h4 className="text-xl font-source">Hari ini</h4>
                    </div>
                    <Link to="/haditskultum" className="flex items-center px-5 h-[3rem] rounded-full box-shadow">
                        <img src={RightArrow} alt="right_arrow_icon" className="object-cover"/>
                    </Link>
                </div>
                <p className="text-sm font-source text-justify">{ data?.hadits }</p>
                <br />
                <p className="text-sm text-neutral-300 font-source text-justify">{ data?.source }</p>
            </div>
        )}

        {isMobile && (
            <div className="flex flex-col gap-5 p-[1rem] w-full bg-neutral-50 rounded-xl box-shadow">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold">Hadits</h3>
                        <h4 className="text-xl font-source">Hari ini</h4>
                    </div>
                    <Link to="/haditskultum" className="flex items-center px-3 h-[2rem] rounded-full box-shadow">
                        <img src={RightArrow} alt="right_arrow_icon" className="object-cover"/>
                    </Link>
                </div>
            </div>
        )}
        
    
    </>
  )
}

export default HadistHariIniDashBoard