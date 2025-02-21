import * as Yup from "yup";

const validationSchema = Yup.object({
    fullName: Yup.string()
    .matches(/^[A-Za-z\s]+ - [A-Za-z\s]+$/, "Format harus 'Nama Istri - Nama Suami'")
    .required("Nama wajib diisi"),
    phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka")
    .min(10, "Nomor telepon harus memiliki setidaknya 10 digit")
    .max(15, "Nomor telepon tidak boleh lebih dari 15 digit")
    .required("Nomor telepon wajib diisi"),
    regional: Yup.string().required("Regional wajib diisi"),
});

export default validationSchema;