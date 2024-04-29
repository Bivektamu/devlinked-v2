import { useEffect, useState } from "react"
import { Auth, SignUpFormData, Status } from '../../store/types'

const useAuth = () => {
    const [authState, setAuthState] = useState<Auth>({
        isLoggedIn: false,
        status: Status.IDLE,
        msg: '',
    })



    useEffect(() => {
        getAuthStatus()
    }, [])

    const getAuthStatus = async () => {

        setAuthState(prev => ({
            ...prev,
            status: Status.PENDING
        }))

        try {

            const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/auth/status`)
            if (res.ok) {
                setAuthState(prev => ({
                    ...prev,
                    isLoggedIn: true,
                    status: Status.FULFILLED
                }))
            }
            else {
                throw new Error()
            }
        } catch (error) {
            setAuthState(prev => ({
                ...prev,
                isLoggedIn: false,
                status: Status.REJECTED,
            }))
        }

    }


    const logIn = async (email: string, password: string) => {
        setAuthState(prev => ({
            ...prev,
            status: Status.PENDING
        }))

        try {
            const body = JSON.stringify({ email, password })
            const headers = {
                'Content-Type': 'application/json'
            }

            const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/auth/login`, {
                method: 'POST',
                body,
                headers
            })

            if (res.ok) {
                setAuthState(prev => ({
                    ...prev,
                    isLoggedIn: true,
                    status: Status.FULFILLED
                }))
            }
            else {
                throw new Error()

            }
        } catch (error) {
            if (error instanceof Error)
                setAuthState(prev => ({
                    ...prev,
                    isLoggedIn: false,
                    status: Status.REJECTED,
                    msg: error.message ? error.message : ''
                }))
        }

    }

    const { isLoggedIn, status } = authState

    return { isLoggedIn, status, logIn }
}

export default useAuth