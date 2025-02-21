import register_img from '../assets/images/register_desktop.png'
import { Formik, Form,  ErrorMessage, Field} from "formik"
import HeaderLogo from './HeaderLogo'
import { Link,  } from "react-router-dom"
import RegisterInput from './AuthInput'
import searchSVG from '../assets/svg/search.svg'
import Button from './Button'
import { useState, useRef,  } from "react"
import RegionalPopOut from './RegionalPopOut'
import useFetch from '../hooks/useFetch'
import { API_REGISTER } from '../constants/URL_API'
import validationSchema from '../schemas/RegisterValidationSchema'
import ErrorInputSnackbar from './ErrorSnackbar'
import SuccessSnackbar from './SuccessSnackbar'
import { useEffect } from 'react'

interface RegisterValues {
    fullName: string,
    phoneNumber: string,
    regional?: string,
    regionalValue: string,

}

interface LoginResponse {
    access_token: string;
    msg: string;
    refresh_token: string;
  }



export const RegisterPage = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [showError, setShowError] = useState(false);
    const {  error, loading, fetchData } = useFetch<LoginResponse>(API_REGISTER, "POST");
    const initialValues = { fullName: "", phoneNumber: "",  regional: "", regionalValue: "" };
    // const Navigate = useNavigate()

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // When the hook's error value changes, update your local state.
        if (error) {
            setShowError(true);
            setShowSnackbar(false);
          }
      }, [error]);

    async function handleSubmit(e: RegisterValues) {
        setShowError(false);
        setShowSnackbar(false);

        try {
            await fetchData({
                name_husband: e.fullName,
                phone_number: e.phoneNumber,
                regional: e.regionalValue,
            });

            if (!error) {
                setShowSnackbar(true);
            } else if (error) {
                // Even if error is true, we already reset it above
                setShowError(true);
            }
        } catch (err) {
            console.log("Error submitting:", err);
            setShowError(true);
        }
                               
            // Navigate("/login");     
        // console.log("Error submitting:", error);
    }

    
  return (
    <>
        {/* Background white for mobile */}
        <div className='noisy-gradient-background flex items-center overflow-y-auto pt-[5rem] lg:pt-0'>
            <div className='bg-white sm:bg-transparent flex justify-center lg:items-center rounded-tl-[5rem] px-[1rem] pt-[3rem] md:pt-0 h-full w-full'>
            {/* RegisterImage */}
            <div className='hidden lg:block ml-8 relative z-10'>
                <img draggable={false} className='hidden lg:block object-contain' src={register_img} alt="register_desktop" />
            </div>
            {/* Form Section */}
            <section className='relative flex flex-col px-2 2xl:w-full lg:py-[1rem] 2xl:pt-[3rem] lg:pr-[1rem] 2xl:px-[6rem] lg:left-[-2rem] gap-5'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='flex justify-center items-center'>
                    <HeaderLogo imgSize="w-12 h-8"/>
                    </div>          
                    <div className='mt-[1rem]'>
                        <h2 className='text-[2.5rem] font-bold text-primary-300'>Mulai Perjalanan Mengajimu!</h2>
                        <p className='text-base font-normal font-source text-neutral-900'>
                            Daftar sekarang dan pantau progres mengaji dengan mudah
                        </p>
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            >
                        {({ isSubmitting, values, setFieldValue }) => (
                            <Form className="w-full">
                                <div className="flex flex-col gap-5">
                                    <RegisterInput 
                                        id="fullName" 
                                        label="Nama - Nama Suami" 
                                        type="text" 
                                        placeholder='Masukkan Nama - Nama Suami'
                                        autoComplete='new-password'
                                        value={values.fullName}   
                                    />
                                    <RegisterInput 
                                        id="phoneNumber" 
                                        label="Nomor Handphone" 
                                        type="text" 
                                        placeholder='Gunakan nomor yang aktif'
                                        autoComplete='new-password'
                                        value={values.phoneNumber} 
                                    />
                                    <div>
                                        <img src={searchSVG} alt="searchLogo" className='absolute mt-9 ml-2'/>
                                        <div className="w-full flex flex-col gap-2">
                                            <label className="text-sm font-normal font-source text-neutral-900" htmlFor="regional">Regional</label>
                                            <Field 
                                                className="text-sm pr-2 pl-10 h-10 bg-neutral-100 font-source border-b-neutral-900 border-b-2" 
                                                id="regional" 
                                                type="text"
                                                ref={inputRef} 
                                                placeholder='Pilih kantor regionalmu'
                                                // onChange={(e: ChangeEvent<HTMLInputElement>) => {setShowSearch(true), setFieldValue("regional", e.target.value)}}
                                                onClick={() => setShowSearch(true)}
                                                autoComplete="off"    
                                                value={values.regional}
                                            />
                                            <ErrorMessage name="regional" component="div" className="text-sm text-primary-300" />
                                        </div>
                                        {showSearch && 
                                            <RegionalPopOut 
                                                searchRegional={values.regional}
                                                inputRef={inputRef} 
                                                OnBlur={() => setShowSearch(false)}
                                                OnChange={() => setShowSearch(true)} 
                                                OnSelected={(e) => {setFieldValue("regional", e.regional), setFieldValue("regionalValue", e.values)}} 
                                            /> 
                                        }
                                    </div>
                                    <div className="w-full flex justify-center">
                                            <Button 
                                                className="justify-center px-3 py-2 rounded-none font-bold text-base font-source"
                                                color='bg-primary-300  text-white w-full hover:bg-primary-200 '
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                {loading ? "Loading..." : "Daftar Sekarang"}
                                            </Button>
                                    </div>

                                    <hr className="h-px my-3 border-0 bg-[#DDE1E6] " />
                                    <p className="text-neutal-900 text-sm font-normal font-source">Sudah punya akun?  
                                        <Link to="/login" className="text-primary-300 hover:text-primary-100 font-normal underline"> Masuk di sini</Link>
                                    </p>
                                </div>
                                
                            </Form>
                            )}
                        </Formik>
                    </div>
                    
                </div>
            </section>
            </div>
        </div>
       {showError &&  <ErrorInputSnackbar  error={showError}>
            
        <div className="flex flex-col font-source">
                    <p className="text-lg font-semibold">
                        Registrasi Gagal!
                    </p>
                    <p className="text-xs font-medium">
                        Oops, ada yang tidak beres!
                    </p>
                    <ul className='text-xs font-medium'>
                            <li>Coba periksa kembali data yang kamu masukkan.</li>
                            <li>Pastikan koneksi internetmu stabil.</li>
                            <li>Jika masalah berlanjut, hubungi tim dukungan kami.</li>
                        </ul> 
                </div>
        </ErrorInputSnackbar>}
        <SuccessSnackbar isOpen={showSnackbar} handleClose={() => {setShowSnackbar(false); } }>
        <div className="flex flex-col font-source">
                  <p className="text-lg font-semibold">
                      Registrasi Berhasil!
                  </p>
                  <p className="text-xs font-medium">
                      Selamat, akunmu telah berhasil dibuat.
                  </p>
                </div>
            </SuccessSnackbar>
        
    </>
  )
}
