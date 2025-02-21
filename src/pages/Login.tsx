import BackgroundLogin from "../components/LoginBackground"
import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom";
const Login = () => {
    return (
      <BackgroundLogin>
          <LoginForm />

          <div className="h-[0px] border border-neutral-200 w-full hidden sm:block"></div>

          

        <p className="text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="text-primary-300 underline">
            Daftar Sekarang
          </Link>
        </p>
      </BackgroundLogin>
    )
  }
  
  export default Login