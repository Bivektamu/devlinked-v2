import React from 'react'

type Props = {}

const LogIn = (props: Props) => {
    return (
        <section className='flex items-center justify-center w-3/4'>
            <div className="rounded-xl border bg-card text-card-foreground shadow min-w-[400px]">
                <div className="flex flex-col p-6 space-y-1">
                    <h3 className="font-semibold tracking-tight text-2xl">Log In</h3>
                    <p className="text-sm text-muted-foreground">Enter your details below to log in</p>
                </div>
                <div className="p-6 pt-0 grid gap-4">
                    <div className="grid gap-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" type="email" />
                    </div>
                    <div className="grid gap-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
                        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" type="password" />
                    </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:text-white shadow hover:bg-zinc-900 hover:bg-transparent  h-9 px-4 py-2 w-full">Log In</button>
                </div>
            </div>
        </section>
    )
}

export default LogIn