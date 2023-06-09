import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
// import { useState } from "react";
import styles from './Register.module.css'

import { useContext } from 'react';
import { useForm } from '../Hooks/useForm';
import { AuthContext } from '../Contexts/AuthContext'

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        rePass: '',
        gender: 'female',
        phoneNumber: '',
        role: '',
        isChecked: {},
    }, onRegisterSubmit);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [rePass, setRepass] = useState('');
    // const [gender, setGender] = useState('male');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [continent, setContinent] = useState({});
    // const [role, setRole] = useState('');
    // const [isChecked, setChecked] = useState({});

    // const onEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const onPasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const onRepassChange = (e) => {
    //     setRepass(e.target.value);
    // };

    // const onGenderChange = (e) => {
    //     setGender(e.target.value);
    // }

    // const onPhoneChange = (e) => {
    //     setPhoneNumber(e.target.value);
    // }

    // const onContinentChange = (e) => {
    //     setContinent(state => ({ ...state, [e.target.value]: e.target.checked }));
    // }

    // const onRoleChange = (e) => {
    //     setRole(e.target.value);
    // }

    // const onChecked = (e) => {
    //     setChecked(state => ({ ...state, [e.target.value]: e.target.checked }));
    // }

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();

    //     console.log(email);
    //     console.log(password);
    //     console.log(rePass);
    //     console.log(gender);
    //     console.log(phoneNumber);
    //     console.log(isChecked);
    //     // console.log(continent);
    //     console.log(role);
    // }

    return (
        <Form method="POST" className={styles.regStyle} onSubmit={onSubmit}>
            <Form.Label><h5>Make your registration here:</h5></Form.Label><br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={values.email} onChange={changeHandler} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control type="password" name="rePass" value={values.rePass} onChange={changeHandler} placeholder="Repeat password" />
            </Form.Group>
            <Form.Group>
                <Form.Check type="radio" inline name="gender" id="male" value="male" onChange={changeHandler} checked={values.gender === "male"} label="Male" />
                <Form.Check type="radio" inline name="gender" id="female" value="female" onChange={changeHandler} checked={values.gender === "female"} label="Female" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="tel" name="phoneNumber" value={values.phoneNumber} onChange={changeHandler} placeholder="Your GSM number in format 0888777666 or 359888777666" minLength="10" maxLength="12" />
            </Form.Group>
            <Form.Group>
                <Form.Label>You are: </Form.Label>
                <select>
                    <option value={values.role} onChange={changeHandler}>- - -</option>
                    <option value={values.role} onChange={changeHandler}>Company</option>
                    <option value={values.role} onChange={changeHandler}>Private person</option>
                    <option value={values.role} onChange={changeHandler}>Other</option>
                </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="isChecked" id="checkbox" value={values.isChecked['I\'m not a bot']} onChange={changeHandler} checked={values.isChecked['I\'m not a bot'] || false} label="I'm not a bot" />
                <Form.Check type="checkbox" name="isChecked" id="checkbox" value={values.isChecked['My data is currect']} onChange={changeHandler} checked={values.isChecked['My data is currect'] || false} label="My phone and email are correct" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button><br />
            <Form.Text id="passwordHelpBlock" muted>If you have account go to <NavLink to='/login'>login page.</NavLink></Form.Text>
        </Form>
    );
}