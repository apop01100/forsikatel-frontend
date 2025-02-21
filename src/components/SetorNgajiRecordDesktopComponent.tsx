import Card from "./Card"
import IconBackground from "./IconBackground"

interface RecordDesktopProps {
    children: React.ReactNode
    Icon: string
    label: string
    labelSize?: string
    bgColor?: string
    size?: string
}

const SetorNgajiRecordDesktopComponent: React.FC<RecordDesktopProps> = ({ children, Icon, label, bgColor="bg-record-gradient", size="h-40 w-40", labelSize="text-xs" }) => {
  return (
    <Card className={`flex flex-col justify-center items-start gap-4 py-2 px-3 ${size} text-sm font-source font-semibold text-neutral-900 ${bgColor}`}>
        <IconBackground Icon={Icon} size="h-10 w-10 p-2"/>
    <div className="flex flex-col items-start justify-between w-full">
        <span className={`${labelSize}`}>{ label }</span>
        <div className="text-3xl flex items-center gap-1">
            { children}
        </div>
    </div>
    </Card>
  )
}

export default SetorNgajiRecordDesktopComponent