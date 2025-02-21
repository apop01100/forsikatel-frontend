interface FormValues {
    namaLengkap: string;
    nomorHandphone: string;
    regional: string;
  }

export const validate = (values: FormValues): Partial<FormValues> => {
    const errors: Partial<FormValues> = {};
  
    if (!values.namaLengkap) {
      errors.namaLengkap = 'Required';
    } else if (values.namaLengkap.length > 100) {
      errors.namaLengkap = 'Must be 15 characters or less';
    }
  
    if (!values.nomorHandphone) {
      errors.nomorHandphone = 'Required';
    } else if (values.nomorHandphone.length < 5) {
      errors.nomorHandphone = 'Must be 5 characters or more';
    }
  
    return errors;
  };


export function Required(value : any) {
    return value.trim() !== '';
}