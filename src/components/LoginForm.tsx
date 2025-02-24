import LoginInput from "./LoginInput"
import Button from "./Button"
import { Formik, Form } from "formik";
import validationSchema from "../schemas/LoginValidationSchema";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_LOGIN  } from "../constants/URL_API";
import { useEffect, useState } from "react";
import ErrorInputSnackbar from './ErrorSnackbar'
import SuccessSnackbar from "./SuccessSnackbar";

interface LoginValues {
  fullName: string;
  phoneNumber: string;
}

interface LoginResponse {
  access_token: string;
  msg: string;
  refresh_token: string;
}

const LoginForm = () => {
  const { data, error, loading, fetchData } = useFetch<LoginResponse>(API_LOGIN, "POST");
  const [ showError, setShowError ] = useState(false);
  const [ showSnackbar, setShowSnackbar ] = useState(false);

  const navigate = useNavigate()
  const initialValues = {
    fullName: "",
    phoneNumber: "",
  }

  const handleSubmit = async (values: LoginValues, { resetForm }: { resetForm: () => void }) => {
    setShowError(false);
    setShowSnackbar(false);
    resetForm();

    await fetchData({ name_husband: values.fullName, phone_number: values.phoneNumber });

    if (data) {
      setShowSnackbar(true);
    }

    if (error) {
      setShowError(true);
    }
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      setShowSnackbar(true);
      setTimeout(() => navigate("/"), 1000);
    }
    
    if (error) {
      setShowError(true);
    }
  }, [data, error, navigate]);

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-8">
            <div className="flex flex-col w-full gap-8">
              <LoginInput label="Nama - Nama Suami" id="fullName" name="fullName" placeholder="Masukkan Nama - Nama Suami"/>
              <LoginInput label="Nomor Handphone" id="phoneNumber" name="phoneNumber" placeholder="Masukkan Nomor Handphone Anda"/>
            </div>
            <Button type="submit" className="justify-center px-3 py-2 rounded-none font-bold text-base font-source" color="bg-primary-300  text-white w-full hover:bg-primary-200" disabled={isSubmitting}>
              { loading ? "Loading..." : "Masuk" }
            </Button>
          </Form>
        )}
      </Formik>

      {showError &&  
        <ErrorInputSnackbar  error={showError}>   
            <div className="flex flex-col font-source">
                <p className="text-lg font-semibold">
                    Login Gagal!
                </p>
                <p className="text-xs font-medium">
                    Oops, ada yang tidak beres!
                </p>
                <ul className='text-xs font-medium'>
                    <li>Coba periksa kembali data yang kamu masukkan.</li>
                </ul> 
            </div>
        </ErrorInputSnackbar>
      }
      {showSnackbar && <SuccessSnackbar isOpen={true} handleClose={() => {setShowSnackbar(false)} }>
        <div className="flex flex-col font-source">
          <p className="text-lg font-semibold">
              Login Berhasil!
          </p>
          <p className="text-xs font-medium">
              Selamat datang di website Forsikatel Mengaji.
          </p>
        </div>
      </SuccessSnackbar>}
    </div>
    
  )
}

export default LoginForm