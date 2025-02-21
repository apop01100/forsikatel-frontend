import CircleProgress from "./CircleProgress"


const ProgressKhatamDashboard = ({ progress }: { progress: number | undefined}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-3 px-4 w-full h-full bg-white rounded-3xl lg:shadow-box">
        <h3 className="text-2xl lg:text-2xl font-bold">Progress Khatam</h3>
        <CircleProgress  progress={progress}/>
    </div>
  )
}

export default ProgressKhatamDashboard