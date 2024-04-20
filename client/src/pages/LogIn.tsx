import { ChangeEvent, FormEvent, useState } from 'react'
import { FormData } from '../components/types'

const LogIn = () => {

    const [formData, setFormData] = useState<Partial<FormData>>({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<Partial<FormData>>({})

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation()
        const errs: Partial<FormData> = {}
        if (!email) {
            errs.email = 'Email is Required'
        }
        if (!password) {
            errs.password = 'Password is Required'
        }
        if (Object.keys(errs).length > 0) {
            return setErrors({ ...errs })
        }
        
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (errors[e.target.name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [e.target.name]: '' }))
        }
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const { email, password } = formData


    return (
        <section className='flex items-center justify-center w-3/4'>
            <form className="rounded-xl border bg-card text-card-foreground shadow w-[400px]" onSubmit={handleSubmit}>
                <div className="flex flex-col p-6 space-y-1">
                    <h3 className="font-semibold tracking-tight text-2xl">Log In</h3>
                    <p className="text-sm text-muted-foreground">Enter your details below to log in</p>
                </div>
                <div className="p-6 pt-0 grid gap-4">
                    <div className="grid gap-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" type="text" onChange={handleChange} value={email} name='email' />
                        {errors.email && <span className='text-red-500 text-xs mb-2'>{errors.email}</span>}
                    </div>
                    <div className="grid gap-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
                        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" onChange={handleChange} value={password} name='password' type="password" />
                        {errors.password && <span className='text-red-500 text-xs mb-2'>{errors.password}</span>}
                    </div>
                </div>
                <div className="flex items-center p-6 pt-0">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:text-white shadow hover:bg-zinc-900 hover:bg-transparent  h-9 px-4 py-2 w-full">Log In</button>
                </div>
            </form>
        </section>
    )
}

export default LogIn