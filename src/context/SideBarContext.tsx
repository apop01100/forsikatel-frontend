import { createContext, useContext, useState, ReactNode } from "react";
import Button from "../components/Button";
import moreIcon from "../assets/svg/more-icon.svg"
import HeaderLogo from "../components/HeaderLogo";
import { useMediaQuery } from "@react-hook/media-query";
import { MOBILE, TABLET } from "../constants/DEVICES_SIZE";

interface SideBarContextProps {
    isOpen: boolean;
    toggleSideBar: () => void
}

const SideBarContext = createContext<SideBarContextProps | null>(null);

export const SideBarContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => setIsOpen(!isOpen);
  const isMobile = useMediaQuery(MOBILE);
  const isTablet = useMediaQuery(TABLET)

  return (
    <SideBarContext.Provider value={{ isOpen, toggleSideBar }}>
        {(isMobile || isTablet) && 
          <>
            <div className="fixed top-0 w-screen flex justify-between items-center border-b bg-neutral-50 z-10">
              <Button onClick={toggleSideBar} Icon={moreIcon}/>
              <HeaderLogo imgSize="w-10 h-8" classHeader="p-2"/>
            </div>
          </>
        }
        {(isOpen && (isMobile || isTablet)) && 
          <>
            <div 
                className="fixed inset-0 bg-black opacity-50 z-10"
                onClick={toggleSideBar}
            />
          </>
        }

        {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarContext = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSideBarContext must be used within a SideBarContextProvider');
  }
  return context;
}

export default SideBarContext