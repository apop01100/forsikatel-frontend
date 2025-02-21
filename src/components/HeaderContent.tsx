import HeaderLogo from "./HeaderLogo"

const HeaderContent = () => {
  return (
    <div className="flex items-center gap-2 px-2 pt-2 w-full justify-between">
        <span className="text-sm font-normal text-neutral-300">
            Copyright ©2025 All Rights Reserved | Forsikatel Group Telkom Akses - KTI
        </span>
        <HeaderLogo imgSize="w-16 h-8" classImg="object-contain" />
    </div>
  )
}

export default HeaderContent