import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Auth, SignUpFormData, State, Status } from "../types"

export const logIn = createAsyncThunk('/user/login', async ({ email, password }: Pick<SignUpFormData, 'email' | 'password'>) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({ email, password })


    const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers,
        body
    })
    if (!res.ok) {
        const error = await res.json()
        if (error) {
            throw new Error(error)
        }
    }
})

export const getAuthStatus = createAsyncThunk('/auth/status', async () => {
    const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/auth/status`, {
        method: 'GET',
        credentials: 'include'
    })

    if(!res.ok) {
        throw new Error()
    }

})


export const logOut = createAsyncThunk('/auth/logout', async () => {
    await fetch(`${import.meta.env.VITE_API_ENDPOINT}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
    })

})


export const addUser = createAsyncThunk('/user/add', async (formData: SignUpFormData) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify(formData)


    const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/users/add`, {
        method: 'POST',
        headers,
        body
    })
    if (!res.ok) {
        const error = await res.json()
        if (error) {
            throw new Error(error.error)
        }
    }

    return await res.json()

})


const initalState: Auth = {
    isLoggedIn: false,
    msg: '',
    status: Status.IDLE,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initalState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addUser.pending, (state: Auth) => {
                state.status = Status.PENDING
            })
            .addCase(addUser.fulfilled, (state: Auth, action) => {
                state.status = Status.FULFILLED
                state.msg = action.payload
            })
            .addCase(addUser.rejected, (state: Auth, action) => {
                state.status = Status.REJECTED
                state.msg = action.error.message as string
            })
            .addCase(logIn.pending, (state: Auth) => {
                state.status = Status.PENDING
            })
            .addCase(logIn.fulfilled, (state: Auth) => {
                state.status = Status.FULFILLED
                state.isLoggedIn = true
                state.msg = ''
            })
            .addCase(logIn.rejected, (state: Auth, action) => {
                state.status = Status.REJECTED
                state.isLoggedIn = false
                state.msg = action.error.message as string
            })
            .addCase(getAuthStatus.pending, (state: Auth) => {
                
                state.status = Status.PENDING
            })
            .addCase(getAuthStatus.fulfilled, (state: Auth) => {
                
                state.status = Status.FULFILLED
                state.isLoggedIn = true
            })
            .addCase(getAuthStatus.rejected, (state: Auth, action) => {
                
                state.status = Status.REJECTED
                state.isLoggedIn = false
            })
            .addCase(logOut.pending, (state: Auth) => {
                state.status = Status.PENDING
            })
            .addCase(logOut.fulfilled, (state: Auth) => {
                state.status = Status.FULFILLED
                state.isLoggedIn = false
            })
            .addCase(logOut.rejected, (state: Auth, action) => {
                state.status = Status.REJECTED
                state.isLoggedIn = false
            })
    }
})

export default authSlice.reducer

export const auth = (state: State) => state.auth