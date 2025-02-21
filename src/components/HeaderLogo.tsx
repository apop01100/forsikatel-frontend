import logoAkhlak from "../assets/images/logo_akhlak.png";
import logoBumn from "../assets/images/logo_bumn.png";
import logoForsikatel from "../assets/images/logo_forsikatel.png";
import logoTelkomAkses from "../assets/images/logo_telkom_akses.png";
import logoTelkom from "../assets/images/logo_telkom.png";

interface HeaderLogoProps {
  classImg?: string;
  classHeader?: string;
  imgSize?: string; // New prop for image size control
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ 
  classImg = "", 
  classHeader = "max-w-3xl", 
  imgSize = "w-24 h-auto" 
}) => {
  const logos = [
    { src: logoBumn, alt: "logo bumn" },
    { src: logoAkhlak, alt: "logo akhlak" },
    { src: logoForsikatel, alt: "logo forsikatel" },
    { src: logoTelkom, alt: "logo telkom" },
    { src: logoTelkomAkses, alt: "logo telkom akses" },
  ];

  return (
    <header className={`flex gap-5 ${classHeader}`}>
      {logos.map((logo, index) => (
        <img 
          key={index} 
          className={`object-contain ${imgSize} ${classImg}`} 
          src={logo.src} 
          alt={logo.alt} 
        />
      ))}
    </header>
  );
};

export default HeaderLogo;
