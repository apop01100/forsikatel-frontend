import RegionalCardDashboard from "./RegionalCardDashboard"
import { TopRegion } from "../constants/interfaces/DASHBORAD_RESPONSES"
import { regionInterpreter } from "../utils/functions/regionInterpreter";

interface RegionalJuzTerbanyakDashboardProps {
  data: TopRegion[];
  loading: boolean
}
const RegionalJuzTerbanyakDashboard: React.FC<RegionalJuzTerbanyakDashboardProps> = ({ data, loading }) => {
  const transformedData = data.map((activity) => ({
    ...activity, 
    region: regionInterpreter(activity.region) // Transform region
  }));
  return (
    <div className="flex flex-col gap-2 xl:w-2/6 pt-2">
       <h3 className="font-semibold font-source text-xs">Regional dengan Jumlah Juz Terbanyak</h3>
       {loading ? (<p>Loading...</p>) :(<>
         {transformedData && transformedData.map((region, index) => {
          // const displayRegion = region.region.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
          let medal_color = "";

          if (index % 2 === 0) {
            medal_color = "orange";
          } else {
            medal_color = "red";
          }
          return (
            <RegionalCardDashboard medal={medal_color} key={index}>
              <div className="flex flex-col">
              <h3 className="text-[15px] font-semibold font-source">{region.region}</h3>
              <span className="text-neutral-300 text-xs font-source">{region.total_juz} Juz Terbaca</span>
              </div>
          </RegionalCardDashboard>
          )})}
       
       </>)}
    </div>
  )
}

export default RegionalJuzTerbanyakDashboard