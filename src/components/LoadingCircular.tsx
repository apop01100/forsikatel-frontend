import CircularProgress from "@mui/material/CircularProgress";

const LoadingCircular = () => {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-screen text-primary-300">
      <CircularProgress sx={{ color: "#ED1B26" }} size={70}/>
    </div>


  )
}

export default LoadingCircular