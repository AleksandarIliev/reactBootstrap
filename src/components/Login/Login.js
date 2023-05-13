import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState({});

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onChecked = (e) => {
        setChecked(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);
        console.log(isChecked);
    }

    return (
        <Form className={styles.logStyle} onSubmit={onSubmitHandler}>
            <Form.Label><h5>Log in to your account</h5></Form.Label><br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={onEmailChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={onPasswordChange} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="isChecked" id="I'm not a bot" value="I'm not a bot" onChange={onChecked} checked={isChecked['I\'m not a bot'] || false} label="I'm not a bot" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button><br />
            <Form.Text id="passwordHelpBlock" muted>If you don't have a account click here.</Form.Text>
        </Form>

        // <form onSubmit={onSubmitHandler}>
        //     <div>
        //         <label htmlFor="email">Username</label>
        //         <input type="email" name="email" id="email" value={email} onChange={onEmailChange} placeholder="Your email" />
        //         <label htmlFor="password">Password</label>
        //         <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} placeholder="Your password" />
        //     </div>

        //     <div>
        //         <input type="submit" value="Login" />
        //     </div>
        // </form>
    );
}