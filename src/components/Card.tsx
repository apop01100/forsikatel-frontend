interface CardProps {
    children: React.ReactNode
    className?: string
    cardBgColor?: string
    rounded?: string
}

const Card: React.FC<CardProps> = ({ children, className="", cardBgColor="bg-white", rounded="rounded-3xl" }) => {
  return (
    <div className={`box-shadow ${cardBgColor} ${className} ${rounded}`}>
        { children }
    </div>
  )
}

export default Card