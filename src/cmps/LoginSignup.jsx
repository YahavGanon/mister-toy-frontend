import { useState } from 'react';

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';
import { userService } from '../services/user.service.js';
import { login, signup } from '../store/actions/user.actions.js';
import { LoginForm } from './LoginForm.jsx';
import { useNavigate } from 'react-router-dom';





export function LoginSignup() {
    const [isSignup, setIsSignUp] = useState(false)
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())

    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onLogin(credentials)
    }

    function onLogin(credentials) {
        isSignup ? _signup(credentials) : _login(credentials)
    }

    function _login(credentials) {
        login(credentials)
            .then(() => { showSuccessMsg('Logged in successfully') })
            .catch((err) => { showErrorMsg('Oops try again') })
            navigate('/toy')
    }

    function _signup(credentials) {
        signup(credentials)
            .then(() => { showSuccessMsg('Signed in successfully') })
            .catch((err) => { showErrorMsg('Oops try again') })
            navigate('/toy')
    }

    return (
        <div className="login-input">
            <form className="login-signup" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username..."

                    value={credentials.username}
                    onChange={handleChange}
                    required
                    autoFocus
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password..."

                    value={credentials.password}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                />

                {isSignup && <input
                    type="text"
                    name="fullname"
                    value={credentials.fullname}
                    placeholder="Full name"
                    onChange={handleChange}
                    required
                />}

                <button>{isSignup ? 'Signup' : 'Login'}</button>

            </form>

            <div style={{textAlign: "center"}} className="btns">
                <a style={{textDecoration: "none", color:"black"}} href="#" onClick={() => setIsSignUp(!isSignup)}>
                    {isSignup ?
                        'Already a member? Login' :
                        'New user? Signup here'
                    }
                </a >
            </div>
        </div>
    )

}
