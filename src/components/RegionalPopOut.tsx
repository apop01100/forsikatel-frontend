import { createPortal } from "react-dom"
import {  useRef, useEffect, useState } from "react"


type regionalListProps = {
    id: number,
    regional: string,
    values: string,
}
export const regionalList: regionalListProps[] = [
    {
        id: 1,
        regional: "Head Office",
        values: "ho",
    }, 
    {
        id: 2,
        regional: "R1 Sumatera",
        values: "r1_sumatera",
    },
    {
        id: 3,
        regional: "R2 Jakarta",
        values: "r2_jakarta",
    },
    {
        id: 4,
        regional: "R3 Jawa Barat",
        values: "r3_jabar",
    },{
        id: 5,
        regional: "R4 Jawa Tengah dan Yogyakarta",
        values: "r4_jateng_jogja",
    },
    {
        id: 6,
        regional: "R5 Jawa Timur, Bali, dan Nusa Tenggara",
        values: "r5_jatim_bali_nt",
    },
    {
        id: 7,
        regional: "R6 Kalimantan",
        values: "r6_kalimantan",
    },
    {
        id: 8,
        regional: "R7 Kawasan Timur Indonesia",
        values: "r7_kti",
    },
]

interface RegionalPopOutProps {
    searchRegional: string,
    isSearchOpen?: boolean
    inputRef?: React.RefObject<HTMLInputElement | null>
    OnBlur: () => void
    OnSelected: (e: regionalListProps) => void
    OnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const RegionalPopOut: React.FC<RegionalPopOutProps> = ({searchRegional,  OnBlur, OnSelected, inputRef}) => {
    const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const popOutRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (inputRef && inputRef.current) {
            const rect = inputRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY, // Position below input
                left: rect.left + window.scrollX, // Align with input left
            });
            
        }
        

    }, [popOutRef.current, searchRegional]);
  
    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        // Check if the new focused element is within the pop-out
  
        if (
          popOutRef.current &&
          !popOutRef.current.contains(e.relatedTarget as Node) &&
          !(inputRef?.current && inputRef.current.contains(e.relatedTarget))
        ) {
          OnBlur();
        }
      };

    function handleSelect(e: regionalListProps) {
        OnSelected(e)
        OnBlur()
    }


    const filteredRegionalList = regionalList.filter((reg) => reg.regional.toLowerCase().includes(searchRegional.toLowerCase()))
  return (createPortal(
    <>
        <div className="overflow-y-auto absolute text-sm font-light w-[25rem] max-h-[10rem] z-[999] border rounded-md mt-1 bg-neutral-100 px-2 py-2 scrollbar-popSearch"
                tabIndex={1}
                ref={popOutRef}
                onBlur={handleBlur} 
                style={{ top: position.top, left: position.left }}   
            >
            {filteredRegionalList.map((reg) => (
                <div 
                    key={reg.id}
                    onClick={() => handleSelect(reg)}
                    className="cursor-pointer hover:bg-neutral-300 hover:text-primary-300 rounded-md p-2"
                    tabIndex={1}
                    onBlur={handleBlur}
                    >
                    {reg.regional}
                </div>
            ))}
        </div>
    </>, document.body
    
  ))
}

export default RegionalPopOut