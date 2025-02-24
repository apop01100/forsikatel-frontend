import React from "react";
import { useLocation } from "react-router-dom"
import SideBar from "./SideBar";
import { SideBarContextProvider } from "../context/SideBarContext";
import HeaderContent from "./HeaderContent";
import { DESKTOP, MOBILE } from "../constants/DEVICES_SIZE";
import Footer from "./Footer";
import { useMediaQuery } from "@react-hook/media-query";
import AuthUser from "./AuthUser";

const Layout = ({ children }: { children: React.ReactNode}) => {
    const location = useLocation();
    const noSideBarRoutes = ["/login", "/register", "/Login", "/Register"];
    const showSideBar = !noSideBarRoutes.includes(location.pathname);
    const isDesktop = useMediaQuery(DESKTOP);
    const isMobile =  useMediaQuery(MOBILE);

  return (
    <AuthUser>
      <div className="flex flex-col lg:flex-row gap-4 w-full h-screen">
          {showSideBar && 
            <SideBarContextProvider>
              <SideBar />
            </SideBarContextProvider>
          }
          <main className="flex flex-col items-center gap-8 overflow-scroll w-full">
            {(isDesktop && showSideBar) && <HeaderContent />}
            <div className={`lg:mt-0 ${showSideBar ? "mt-14" : "mt-0"}  w-full`}>
              {children}
            </div>
          {(isMobile && showSideBar) }
          </main>
      </div>
    </AuthUser>
  )
}

export default Layout