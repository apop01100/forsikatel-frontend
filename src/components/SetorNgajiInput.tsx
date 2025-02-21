import Button from "./Button"
import uploadIcon from "../assets/svg/upload-icon.svg"
import useFetch from "../hooks/useFetch"
import { API_SETOR_NGAJI } from "../constants/URL_API"
import { Formik, Form, Field, ErrorMessage } from "formik"
import validationSchema from "../schemas/SetorNgajiValidationSchema"
import { useEffect, useState } from "react"
import SuccessSnackbar from "./SuccessSnackbar"
import ErrorInputSnackbar from "./ErrorSnackbar"

interface SetorNgajiInputValue {
  juz: number | string
}

interface SetorNgajiResponse {
  msg: string
}

interface SetorNgajiProps {
  onSubmitSuccess: () => void
}

const SetorNgajiInput: React.FC<SetorNgajiProps> = ({ onSubmitSuccess }) => {
  const { data,error, loading, fetchData } = useFetch<SetorNgajiResponse>(
    API_SETOR_NGAJI, 
    "POST", 
    { Authorization: `Bearer ${localStorage.getItem("access_token")}`}
  );
  const [ showSnackbar, setShowSnackbar ] = useState(false)

  const handleSubmit = async (values: SetorNgajiInputValue) => {
    await fetchData({ juz_read: Number(values.juz) });

    if (!error) {
      setShowSnackbar(true);
      setTimeout(() => onSubmitSuccess(), 2500);
    }
  }

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setShowSnackbar(false)
  };

  return (
      <Formik
        initialValues={{ juz: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-2 w-full rounded-lg h-12 font-source">
            <Field 
              className="px-4 font-source w-full bg-white focus-visible:outline-primary-300 rounded-l-lg"
              id="juz"
              name="juz"
              placeholder="Input Jumlah Juz"
            />
            <Button 
              className="p-2 text-primary-300 lg:text-xs xl:text-sm w-full justify-center font-semibold gap-2 hover:bg-primary-300 hover:text-neutral-50 rounded-r-lg" 
              Icon={loading ? "" : uploadIcon}
              color="bg-neutral-100"
              type="submit"
              disabled={isSubmitting}
            >
              { loading ? "Loading..." : "Kirim Setoran" }
            </Button>
            <ErrorMessage name="juz" component="div" className="text-sm text-primary-300 px-3 pt-1" />
            { error ? (
              <ErrorInputSnackbar error={true}>
                <div className="flex flex-col font-source">
                    <p className="text-lg font-semibold">
                        Setoran Gagal Tercatat
                    </p>
                    <p className="text-xs font-medium">
                        Maaf, setoran mengaji Anda hari ini belum berhasil. 
                    </p>
                </div>
              </ErrorInputSnackbar>
            ) : (
              <SuccessSnackbar isOpen={showSnackbar} handleClose={handleClose}>
                <div className="flex flex-col font-source">
                  <p className="text-lg font-semibold">
                      Setoran Berhasil!
                  </p>
                  <p className="text-xs font-medium">
                      Alhamdulillah, setoran mengaji Anda hari ini telah berhasil tercatat.
                  </p>
                </div>
              </SuccessSnackbar>
            )}
          </Form> 
        )}
      </Formik>
  )
}

export default SetorNgajiInput
