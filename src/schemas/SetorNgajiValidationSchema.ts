import * as Yup from "yup";

const validationSchema = Yup.object({
    juz: Yup.number()
    .typeError("Jumlah Juz hanya boleh berisi angka")
    .required("Jumlah Juz wajib diisi")
    .integer("Jumlah Juz harus berupa bilangan bulat")
    .min(1, "Jumlah Juz minimal 1"),
});

export default validationSchema;