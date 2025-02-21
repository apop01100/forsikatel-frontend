interface Header2Props {
    title: string
    text?: string  
    className?: string 
}

const Header2: React.FC<Header2Props> = ({ title, text, className="" }) => {
  return (
    <div className={`flex flex-col text-neutral-900 ${className}`}>
        <h2 className="text-2xl font-bold ">{ title }</h2>
        {text && <p className="font-source text-sm">{ text }</p>}
    </div>
  )
}

export default Header2