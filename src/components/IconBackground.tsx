interface IconBackgroundProps {
    Icon: string
    backgroundColor?: string
    size?: string
}

const IconBackground: React.FC<IconBackgroundProps> = ({ Icon, backgroundColor="bg-white", size="p-2" }) => {
  return (
    <div className={`${backgroundColor} rounded-full ${size} flex justify-center items-center shadow-sm`}>
        <img src={Icon} className="h-full w-full"/>
    </div>
  )
}

export default IconBackground