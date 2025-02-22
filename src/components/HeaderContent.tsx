import HeaderLogo from "./HeaderLogo"

const HeaderContent = () => {
  return (
    <div className="flex items-center gap-2 px-4 pt-2 w-full justify-end">
        <HeaderLogo imgSize="w-16 h-8" classImg="object-contain" />
    </div>
  )
}

export default HeaderContent