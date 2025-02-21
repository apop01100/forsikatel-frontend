import RecordComponentMobile from "./SetorNgajiRecordMobileComponent"
import totalJuzIcon from "../assets/svg/repository-icon.svg"
import lastJuzIcon from "../assets/svg/triangle-flag-circle-icon.svg"
import khatamIcon from "../assets/svg/verified-badge-icon.svg"
import { MOBILE, TABLET } from "../constants/DEVICES_SIZE"
import { useMediaQuery } from "@react-hook/media-query"
import RecordComponentDesktop from "./SetorNgajiRecordDesktopComponent"
import { ProgressRecords } from "../constants/interfaces/SETORAN_RESPONSE"

const SetorNgajiRecord: React.FC<ProgressRecords> = ({ last_juz, total_juz, total_khatam }) => {
  const isMobile = useMediaQuery(MOBILE);
  const isTablet = useMediaQuery(TABLET);
  return (
    <div className="flex justify-between lg:justify-center lg:items-center rounded-3xl shadow-component py-2 px-1 lg:p-0 bg-record-gradient lg:bg-none lg:gap-2">
      { (isMobile || isTablet) ? (
        <>
          <RecordComponentMobile
            Icon={totalJuzIcon}
            label="Total Juz Dibaca"
            value={`${total_juz}`}
          />
          <div className="line-div"/>
          <RecordComponentMobile
              Icon={lastJuzIcon}
              label="Juz Terakhir Dibaca"
              value={`${last_juz}`}
          />
          <div className="line-div"/>
          <RecordComponentMobile
              Icon={khatamIcon}
              label="Total Khatam"
              value={`${total_khatam}`}
          />
        </>
      )
      : (
        <>
          <RecordComponentDesktop Icon={totalJuzIcon} label="Total Juz Dibaca"  bgColor="bg-record-gradient" size="lg:h-32 lg:w-32 xl:h-36 xl:w-36"> 
            {total_juz} <span className="text-xs">juz</span>
          </RecordComponentDesktop>
          <RecordComponentDesktop Icon={lastJuzIcon} label="Juz Terakhir Dibaca"  bgColor="bg-record-gradient-2" labelSize="text-md" size="lg:h-36 lg:w-36 xl:h-40 xl:w-40"> 
            <span className="text-xs">juz</span> {last_juz}
          </RecordComponentDesktop>
          <RecordComponentDesktop Icon={khatamIcon} label="Total Khatam"  bgColor="bg-record-gradient" size="lg:h-32 lg:w-32 xl:h-36 xl:w-36"> 
            {total_khatam}<span className="text-xs">kali</span>
          </RecordComponentDesktop>
        </>
      )
      }
    </div>
  )
}

export default SetorNgajiRecord