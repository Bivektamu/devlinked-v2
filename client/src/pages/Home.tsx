import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
    return (
        <section className='flex items-center justify-center w-3/4 h-screen'>
            <div className='text-center w-[400px]'>
                <h1 className='text-4xl font-bold mb-8'>Developer Linked!</h1>
                <p className='mb-8 '>
                    Create a developer profile/portfolio, share posts, help or get help
                    from other developers
                </p>
                <div className="flex justify-center w-full gap-x-8">
                    <NavLink to={'/signup'} className='min-w-[150px]'>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:text-white shadow hover:bg-zinc-900 hover:bg-transparent  h-9 px-4 py-2 w-full">
                            Sign Up
                        </button>
                    </NavLink>
                    <NavLink to={'/login'} className='min-w-[150px]'>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:text-white shadow hover:bg-zinc-900 hover:bg-transparent  h-9 px-4 py-2 w-full">
                            Log In
                        </button>
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default Home