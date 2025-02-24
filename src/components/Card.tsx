interface CardProps {
    children: React.ReactNode
    className?: string
    cardBgColor?: string
    rounded?: string
    boxShadow?: string
}

const Card: React.FC<CardProps> = ({ children, className="", cardBgColor="bg-white", rounded="rounded-3xl", boxShadow="box-shadow" }) => {
  return (
    <div className={`${boxShadow} ${cardBgColor} ${className} ${rounded}`}>
        { children }
    </div>
  )
}

export default Card