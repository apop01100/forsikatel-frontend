import {  useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
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

const AuthUser = () => {
    const accessToken = localStorage.getItem('access_token')
    const { error, fetchData } = useFetch<AuthUserResponse>(API_AUTH, 'GET', { Authorization: `Bearer ${accessToken}` })

    const navigate = useNavigate()

    useEffect(() => {
        if(!accessToken) {
            navigate('/login')
            return
        }
        fetchData()

        if(error) {
            navigate('/login')
        }
    }, [accessToken,  fetchData])
   
    return null
}

export default AuthUser