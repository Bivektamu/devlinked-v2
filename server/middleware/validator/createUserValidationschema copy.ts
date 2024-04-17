const createUserValidationschema = {
    firstName: {
        notEmpty: {
            errorMessage: "First Name can not be empty",
        },
        isString: {
            errorMessage: "Must be string",
        },
        isLength: {
            options: {
                min: 3,
                max: 32,
            },
            errorMessage: "Name should be between 5-32 char",
        },
    },
    lastName: {
        notEmpty: {
            errorMessage: "Can not be empty",
        },
        isString: {
            errorMessage: "Must be string",
        },
        isLength: {
            options: {
                min: 3,
                max: 32,
            },
            errorMessage: "must be betwee 5-32",
        },
    },
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
        isStrongPassword: {
            options: {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            }
        }
        
    }

}

export default createUserValidationschema