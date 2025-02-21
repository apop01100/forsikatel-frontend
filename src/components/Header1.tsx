interface Header1Props {
    title: string | React.ReactNode
    text: string | React.ReactNode
    headerClass?: string
    titleClass?: string
    textClass?: string
}
const Header1: React.FC<Header1Props> = ({ title, text, headerClass="", titleClass="", textClass="" }) => {
  return (
    <div className={`flex flex-col gap-2 ${headerClass}`}>
        <h1 className={`text-3xl xl:text-4xl font-bold text-primary-300 ${titleClass}`}>
            { title }
        </h1>
        <p className={`font-source font-semibold text-neutral-900 ${textClass}`}>
            { text }
        </p>
    </div>
  )
}

export default Header1