import orangeMedal from "../assets/images/medal_orange.png"
import redMedal from "../assets/images/medal_red.png"

interface RegionalCardDashboardProps {
    medal: string
    children: React.ReactNode
}

const RegionalCardDashboard: React.FC<RegionalCardDashboardProps> = ({children, medal}) => {
  return (
    <div className="flex gap-3 items-center bg-neutral-50 box-shadow lg:shadow-none rounded-2xl py-1 px-2">
        <div className="px-1 py-1 bg-secondary-100 rounded-md">
            {medal === "orange" ? (
                <img src={orangeMedal} alt="orange_medal" className="object-contain"/>
            ) : (
            <img src={redMedal} alt="red_medal" className="object-contain"/>)}
        </div>
            {children}
        
    </div>
  )
}

export default RegionalCardDashboard