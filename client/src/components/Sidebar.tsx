import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUp from '../pages/SignUp'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <nav className='w-1/4 bg-zinc-900 h-screen flex justify-center flex-col pl-12 gap-y-4 uppercase'>
            <NavLink to='/' className='text-white hover:font-bold'>Home</NavLink>
            <NavLink to='/profiles' className='text-white hover:font-bold'>Profiles</NavLink>
            <NavLink to='/signup' className='text-white hover:font-bold'>Sign Up</NavLink>
            <NavLink to='/login' className='text-white hover:font-bold'>Log In</NavLink>
        </nav>
    )
}

export default Sidebar