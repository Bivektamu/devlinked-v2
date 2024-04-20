import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FormData } from '../components/types'
import validateForm from '../components/helper/validate'

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation()
    const errs = validateForm(formData)
    if (Object.keys(errs).length > 0) {
      return setErrors(errs)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (errors[e.target.name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const { firstName, lastName, email, password } = formData
  return (
    <section className='flex items-center justify-center w-3/4'>
      <div className="rounded-xl border bg-card text-card-foreground shadow w-[400px]">
        <div className="flex flex-col p-6 space-y-1">
          <h3 className="font-semibold tracking-tight text-2xl">Create an account</h3>
          <p className="text-sm text-muted-foreground">Enter your details below to create your account</p>
        </div>
        <form onSubmit={handleSubmit} >
          <div className="p-6 pt-0 grid gap-4">

            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="firstName">First Name</label>
              <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="firstName" value={firstName} name="firstName" onChange={handleChange} placeholder="Jane" type="text" />
              {errors.firstName && <span className='text-red-500 text-xs mb-2'>{errors.firstName}</span>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="lastName">Last Name</label>
              <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="lastName" value={lastName} name="lastName" onChange={handleChange} placeholder="Jane" type="text" />
              {errors.lastName && <span className='text-red-500 text-xs mb-2'>{errors.lastName}</span>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
              <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" value={email} name="email" onChange={handleChange} placeholder="m@example.com" type="string" />
              {errors.email && <span className='text-red-500 text-xs mb-2'>{errors.email}</span>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
              <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" value={password} name="password" onChange={handleChange} type="password" />
              {errors.password && <span className='text-red-500 text-xs mb-2'>{errors.password}</span>}
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:text-white shadow hover:bg-zinc-900 hover:bg-transparent  h-9 px-4 py-2 w-full">Create account</button>
          </div>
        </form>
      </div>
    </section >
  )
}

export default SignUp