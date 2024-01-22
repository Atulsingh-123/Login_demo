import React, { useState } from 'react'

const Register = (props) => {

    const [isregister, setIsRegister] = useState({
        username: " ",
        email: " ",
        password: " ",
        confirmpassword: " "
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIsRegister({
            ...isregister, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isregister);

        const validationError = {}
        if (!isregister.username.trim()) {
            validationError.username = "Username is required";
        }

        if (!isregister.email.trim()) {
            validationError.email = "Email is required";
        }

        if (!isregister.password.trim()) {
            validationError.password = "Password is required";
        } else if (isregister.password.length < 8) {
            validationError.password = "Password should be atleast 8 characters";
        }

        if (isregister.confirmpassword !== isregister.password) {
            validationError.confirmpassword = "Password not matched";
        }

        setErrors(validationError)

        if (Object.keys(validationError).length === 0) {
            alert("Form submitted successfully");
        }
    }


    return (
        <div className='auth-form-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Full Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='username'
                        placeholder='username'
                        autoComplete='off'
                    />
                    {errors.username && <span> {errors.username} </span>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='example@gmail.com'
                        autoComplete='off'
                    />
                    {errors.email && <span> {errors.email} </span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='*********'
                    />
                    {errors.password && <span> {errors.password} </span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='confirmpassword'
                        placeholder='*********'
                    />
                    {errors.confirmpassword && <span> {errors.confirmpassword} </span>}
                </div>
                <button className='btn-hover' type='submit'>Register</button>
            </form>

            <button className='link-btn' onClick={() => props.onFormSwitch('login')} >already Register? click here to login</button>
        </div>
    )
}

export default Register;