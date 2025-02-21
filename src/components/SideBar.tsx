import SideBarContent from "./SideBarContent"
import { useSideBarContext } from "../context/SideBarContext";
import { useMediaQuery } from "@react-hook/media-query";
import { MOBILE, TABLET } from "../constants/DEVICES_SIZE";


const SideBar = () => {
  const { isOpen } = useSideBarContext();
  const isMobile = useMediaQuery(MOBILE);
  const isTablet = useMediaQuery(TABLET);

  return (
    (isMobile || isTablet)  ? (
      <>
        <div 
          className={`fixed flex top-0 min-w-64 z-10 justify-center h-full items-center bg-neutral-50 ${isOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-300 ease-in-out shadow-md`}
          onClick={(e) => e.stopPropagation()}>
          <SideBarContent />
        </div>
      </>
    ) : (
      <div className="flex min-w-64 flex-col justify-start h-full items-center bg-neutral-50">
        <SideBarContent />
      </div>
    )
    
  )
}

export default SideBar