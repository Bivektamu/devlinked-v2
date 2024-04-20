import { FormData } from "../types"
const NumOrCharCheck:RegExp = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?\/\\|\-=]/g
const EmailCheck:RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passStrengthCheck:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\|\-=])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?\/\\|\-=]{6,}$/
const validateForm = (formData:FormData) => {
    const errors:Partial<FormData> = {}
    const {firstName, lastName, password, email} = formData
    if(firstName === '') {
        errors.firstName = 'Please insert your first name'
    }
    else if (NumOrCharCheck.test(firstName)) {
        errors.firstName = 'First name should be string'
    }
    if(lastName === '') {
        errors.lastName = 'Please insert your last name'
    }
    else if (NumOrCharCheck.test(lastName)) {
        errors.lastName = 'Last name should be string'
    }
    if(email === '') {
        errors.email = 'Please insert your email'
    }
    else if (!EmailCheck.test(email)) {
        errors.email = 'Please type valid email'
    }
    if(password === '') {
        errors.password = 'Please insert your password'
    }
    else if(!passStrengthCheck.test(password)) {
        errors.password = 'Password must be atleast 6 char long, should have atleast 1 lowercase, 1 upercase, 1 number and symbol'
    }
    
    return errors
}

export default validateForm