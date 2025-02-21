import { Field, ErrorMessage } from "formik";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
  }

const RegisterInput = ({label, id, ...props}: InputProps) => {
    return(
        <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-normal font-source text-neutral-900" htmlFor={id}>{label}</label>
            <Field 
                className="text-sm px-2 h-10 bg-neutral-100 font-source border-b-neutral-900 border-b-2" 
                id={id}  
                {...props} 
            />
            <ErrorMessage name={id} component="div" className="text-sm text-primary-300" />
        </div>
    )
}

export default RegisterInput