// import { DESKTOP, MOBILE } from "../constant/DEVICES_SIZE"
// import { useMediaQuery } from "@react-hook/media-query"

interface SetorNgajiLaoyoutProps {
    children: React.ReactNode
}

const SetorNgajiLayout: React.FC<SetorNgajiLaoyoutProps> = ({ children }) => {

  return (
    <div className="flex lg:pr-4 px-4 flex-col gap-8"> 
      { children } 
    </div>
  )
}

export default SetorNgajiLayout