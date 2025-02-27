import Button from "./Button"

interface TabButtonProps {
    isActive: boolean
    isSelected: () => void
    children?: React.ReactNode
}

const TabButton: React.FC<TabButtonProps> = ({ isActive=false, isSelected, children }) => {
    
  return (
    <Button 
        color="bg-white" 
        className={`flex flex-colfont-source rounded-t-2xl ${isActive ? "" : "opacity-50 hover:bg-neutral-200"}`}
        padding=""
        onClick={isSelected}
    >
        <p className={`w-32 pt-2 pb-1 text-center text-sm text-primary-300 ${isActive ? "font-bold" : "font-semibold hover:text-neutral-700"}`}> 
            {children}
        </p>
        {isActive ? <div className="bg-primary-300 h-1 w-full"/> : <div className="h-1 w-full"/>}
    </Button>
  )
}

export default TabButton