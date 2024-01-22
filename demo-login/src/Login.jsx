import React, { useState } from 'react'

export const Login = (props) => {
    const [islogin, setIsLogin] = useState({
        email: " ",
        password: " "
    });
    const { email, password } = islogin;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(islogin);
    }

    return (
        <div className='auth-form-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>Username</label>
                <input value={email} onChange={(event) => setInterval(event.target.value)} name='email' placeholder='youremail@gmail.com' type="text" />
                <label>Password</label>
                <input value={password} onChange={(event) => setIsLogin(event.target.value)} name='password' placeholder='********' />

            </form>
            <button>Login</button>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}> If not register ? click here to Regisster</button>
        </div>
    )
}
export default Login


