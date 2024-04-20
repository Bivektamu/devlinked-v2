import { Navigate } from "react-router-dom"
import { FormData } from "../types"

export const addNewUser = async (formData: FormData) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify(formData)

    try {

        const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/users/add`, {
            method: 'POST',
            headers,
            body
        })
        if (!res.ok) {
            const error = await res.json()
            if (error) {
                throw new Error(error)
            }
        }
        <Navigate to="/login" />
    }

    catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
    return true
}
