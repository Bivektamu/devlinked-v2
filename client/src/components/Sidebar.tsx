import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import { useStoreDispatch } from '../store'
import { auth, getAuthStatus, logOut } from '../store/slices/authSlice'
import { useSelector } from 'react-redux'

type Props = {}

const Sidebar = (props: Props) => {
    const dispatch = useStoreDispatch()
    const { isLoggedIn } = useSelector(auth)

    const clickHandler = e => {
        e.stopPropagation()
        dispatch(logOut())
        // dispatch(getAuthStatus())
    }
    return (
        <nav className='w-1/4 bg-zinc-900 h-screen flex justify-center flex-col pl-12 gap-y-4 uppercase'>
            {isLoggedIn ?
            <>
                <NavLink to='/dashboard' className='text-white hover:font-bold'>Dashboard</NavLink>
                <NavLink to='/posts' className='text-white hover:font-bold'>Posts</NavLink>
            </>
                :
                <NavLink to='/' className='text-white hover:font-bold'>Home</NavLink>
            }
            <NavLink to='/profiles' className='text-white hover:font-bold'>Profiles</NavLink>
            {!isLoggedIn ?
                <>
                    <NavLink to='/signup' className='text-white hover:font-bold'>Sign Up</NavLink>
                    <NavLink to='/login' className='text-white hover:font-bold'>Log In</NavLink>
                </>
                :
                <button className='text-white hover:font-bold text-left' onClick={clickHandler}>Log Out</button>
            }

            {/* <button className='text-white hover:font-bold text-left' onClick={clickHandler}>Get Status</button> */}
        </nav>
    )
}

export default Sidebar