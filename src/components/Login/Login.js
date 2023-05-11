import { useState, useEffect } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
 
    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="email">Username</label>
                <input type="email" name="email" id="email" value={email} onChange={onEmailChange} placeholder="Your email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} placeholder="Your password" />
            </div>

            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    );
}