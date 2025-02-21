import Button from "./Button"
import berandaIcon from "../assets/svg/beranda-icon.svg"
import haditsDankultumIcon from "../assets/svg/hadits-kultum-icon.svg"
import rekapIcon from "../assets/svg/rekap-icon.svg"
import setoranIcon from "../assets/svg/setor-icon.svg"
import logoutIcon from "../assets/svg/logout-icon.svg"
import { NavLink, Link } from "react-router-dom"
import classes from "../MainNavigation.module.css"
import { useState } from "react"
import arrowUp from "../assets/svg/arrow-up-icon.svg"
import arrowDown from "../assets/svg/arrow-down-icon.svg"
import { motion } from "framer-motion"

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? classes.active : undefined);
const getNavLinkDropdownClass = ({ isActive }: { isActive: boolean }) => (isActive ? classes.dropdownActive : undefined);

const SideBarContent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
  return (
    <div className="flex flex-col gap-6 justify-around h-full">
        <div className={`flex flex-col gap-4 ${classes.sideBarMenu}`}>
            <NavLink to="/" className={getNavLinkClass}>
                <Button Icon={berandaIcon} color="transparent" className="font-source font-semibold gap-2">  
                    Beranda
                </Button>
            </NavLink>    
            <NavLink to="/haditskultum" className={getNavLinkClass}>
                <Button Icon={haditsDankultumIcon} color="transparent" className="font-source font-semibold gap-2">
                    Hadits dan Kultum
                </Button>
            </NavLink>
            <NavLink to="/setorngaji" className={getNavLinkClass}>
                <Button Icon={setoranIcon} color="transparent" className="font-source font-semibold gap-2">
                Setoran Mengaji
                </Button>
            </NavLink>
            <div className="flex flex-col">
                <Button onClick={toggleDropdown} Icon={rekapIcon} color="transparent" className={`font-source font-semibold gap-2 hover:opacity-50 transition-opacity duration-100 ease-in-out`}>
                    <div className="flex justify-between items-center w-full gap-8">
                        Laporan Mengaji <span>{isOpen ? <img src={arrowUp} /> : <img src={arrowDown} />}</span>
                    </div>
                </Button>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="flex flex-col relative justify-center items-center font-source font-semibold h-full">
                        <NavLink to="/progress" className={getNavLinkDropdownClass}>
                            <Button color="transparent" className="font-source font-semibold gap-2">
                                Progress Harian
                            </Button>
                        </NavLink>
                        <NavLink to="/rekap" className={getNavLinkDropdownClass}>
                            <Button color="transparent" className="font-source font-semibold gap-2">
                                Rekapitulasi Mengaji
                            </Button>
                        </NavLink>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className={`flex flex-col justify-center px-8 ${classes.logoutIcon}`}>
        
            <Link to="/login" id="logoutLink">
            <Button 
                Icon={logoutIcon} 
                color="bg-neutral-100" 
                className="justify-center gap-2 font-semibold font-source text-primary-300 rounded-md hover:bg-primary-300 hover:text-white transition-all" 
                id="logoutIcon"
                onClick={handleLogout}
            >
                Keluar Akun 
            </Button> 
            </Link>
        </div>
    </div>
  )
}

export default SideBarContent