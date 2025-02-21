interface DotCircleProps {
    size?: string
    bgColor?: string
}
const DotCircle: React.FC<DotCircleProps> = ({ size = "h-2 w-2", bgColor = "bg-primary-300" }) => {
    return <div className={`${size} ${bgColor} rounded-full`}></div>;
};

export default DotCircle;