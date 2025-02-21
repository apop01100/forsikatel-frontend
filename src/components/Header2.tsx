interface Header2Props {
    title: string
    text?: string  
    className?: string
    headerSize?: string
    textSize?: string 
}

const Header2: React.FC<Header2Props> = ({ title, text, className="", headerSize="text-2xl", textSize="text-sm"}) => {
  return (
    <div className={`flex flex-col text-neutral-900 ${className}`}>
        <h2 className={`${headerSize} font-bold`}>{ title }</h2>
        {text && <p className={`${textSize} font-source text-sm`}>{ text }</p>}
    </div>
  )
}

export default Header2