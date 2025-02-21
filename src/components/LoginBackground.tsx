import mushafLogo from "../assets/images/mushaf_1.png"
import HeaderLogo from "./HeaderLogo"
import loginDesktop from "../assets/images/login_desktop.png"
import Header1 from "./Header1"

const BackgroundLogin = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col items-stretch noisy-gradient-background sm:bg-neutral-50 sm:pt-0">
      <img src={mushafLogo} className="block sm:hidden object-cover z-10 relative top-12 left-1/4 h-60 w-56" />
      <div className="sm:flex">
        <div className="flex flex-col items-center py-24 px-16 gap-14 w-full h-full bg-neutral-50 rounded-ss-[100px] sm:flex-1">
          <div className="flex justify-center items-center">
            <HeaderLogo imgSize="w-12 h-8"/>
          </div>
          <div className="sm:w-full">
            <Header1 title="Selamat Datang" text="Masuk untuk melihat dan memperbarui laporan mengajimu." />
          </div>
          { children }
        </div>
        <div className="hidden lg:flex justify-center items-center flex-1 p-8">
          <img src={loginDesktop} className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default BackgroundLogin