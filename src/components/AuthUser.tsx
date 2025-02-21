import {  useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useLocation, useNavigate } from "react-router-dom"
import { API_AUTH } from "../constants/URL_API"

type metadata = {
    created_at: string
    is_deleted: boolean
    updated_at: string
}

interface AuthUserResponse {
    msg: string
    user_info: {
        id: number
        metadata: metadata
        name_husband: string
        phone_number: string
        regional: string
    }
}

interface AuthUserProps {
    children: React.ReactNode
}

const AuthUser: React.FC<AuthUserProps> = ({ children }) => {
    const accessToken = localStorage.getItem('access_token')
    const location  = useLocation(); 
    const { error, fetchData } = useFetch<AuthUserResponse>(API_AUTH, 'GET', { Authorization: `Bearer ${accessToken}` })

    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            return
        }

        if(!accessToken) {
            navigate('/login')
            return
        }
        fetchData()

        if(error) {
            navigate('/login')
        }
    }, [])
   
    return (
        <>
            {children}
        </>
    )
}

export default AuthUser