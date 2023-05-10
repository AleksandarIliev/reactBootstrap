import { useState, useEffect } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
// 1'18''
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form>
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