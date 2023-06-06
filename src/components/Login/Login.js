import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useState, useContext } from "react";
import styles from './Login.module.css';
import { AuthContext } from '../Contexts/AuthContext';
import { useForm } from '../Hooks/useForm';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export const Login = () => {
    const [isChecked, setChecked] = useState({});
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, onLoginSubmit)

    const onChecked = (e) => {
        setChecked(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    return (
        <Form method="POST" className={styles.logStyle} onSubmit={onSubmit}>
            <Form.Label><h5>Log in to your account</h5></Form.Label><br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name={LoginFormKeys.Email} value={values[LoginFormKeys.Email]} onChange={changeHandler} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="isChecked" id="I'm not a bot" value="I'm not a bot" onChange={onChecked} checked={isChecked['I\'m not a bot'] || false} label="I'm not a bot" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button><br />
            <Form.Text id="passwordHelpBlock" muted>If you don't have a account <NavLink to='/register'>click here.</NavLink></Form.Text>
        </Form>
    );
}