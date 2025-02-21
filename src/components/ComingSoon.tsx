import craneImage from "../assets/images/crane-logo.png";
import Header1 from "./Header1";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 px-6 h-full lg:bg-white bg-neutral-50 rounded-3xl mx-2">
        <Header1 
            title="Fitur Baru Sedang dalam Proses!"
            text="Kami sedang menyiapkan sesuatu yang menarik untuk memudahkan perjalanan mengajimu."
            headerClass="justify-center items-center"
            titleClass="text-center lg:text-3xl text-4xl font-semibold"
            textClass="text-center"
        />
        <div className="w-1/2">
            <img src={craneImage} className="h-full"/>
        </div>
        <p className="text-center">Bersiaplah untuk pengalaman yang lebih seru dan bermanfaat.</p>
    </div>
  )
}

export default ComingSoon