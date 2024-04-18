import { Schema } from "express-validator"

 export const loginUserValidationschema: Schema = {
  
    email: {
        notEmpty: {
            errorMessage: "email required",
        },

        isEmail: {
            errorMessage: 'must be email'
        }
    },
    password: {
        notEmpty: {
            errorMessage: 'Password can not be empty'
        },
        isString: {
            errorMessage: "Must be string",
        },
        isStrongPassword: {
            options: {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            },
            errorMessage:'Password must be atleast 6 char long, should have atleast 1 lowercase, 1 upercase, 1 number and symbol'
        }

    }

}

// export default loginUserValidationschema