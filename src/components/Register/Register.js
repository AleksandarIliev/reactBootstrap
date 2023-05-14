import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import styles from './Register.module.css'

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePass, setRepass] = useState('');
    const [gender, setGender] = useState('male');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [continent, setContinent] = useState({});
    const [role, setRole] = useState('');
    const [isChecked, setChecked] = useState({});

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onRepassChange = (e) => {
        setRepass(e.target.value);
    };

    const onGenderChange = (e) => {
        setGender(e.target.value);
    }

    const onPhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onContinentChange = (e) => {
        setContinent(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    const onRoleChange = (e) => {
        setRole(e.target.value);
    }

    const onChecked = (e) => {
        setChecked(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);
        console.log(rePass);
        console.log(gender);
        console.log(phoneNumber);
        console.log(isChecked);
        console.log(continent);
        console.log(role);
    }

    return (
        // <form onSubmit={onSubmitHandler}>
        //     <div>
        //         <label htmlFor="email">Email</label>
        //         <input type="email" name="email" id="email" value={email} onChange={onEmailChange} placeholder="Your email" />
        //         <label htmlFor="password">Password</label>
        //         <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} placeholder="Your password" />
        //     </div>

        //     <div>
        //         <label htmlFor="inputField">Input field</label>
        //         <textarea name="inputField" id="inputField" cols="20" rows="10" value={inputField} onChange={onInputFieldChange}></textarea>
        //     </div>

        //     <div>
        //         <label htmlFor="asia">Asia</label>
        //         <input type="checkbox" name="continent" id="Asia" value="Asia" onChange={onContinentChange} checked={continent['Asia'] || false} />
        //         <label htmlFor="africa">Africa</label>
        //         <input type="checkbox" name="continent" id="Africa" value="Africa" onChange={onContinentChange} checked={continent['Africa'] || false} />
        //         <label htmlFor="north America">North America</label>
        //         <input type="checkbox" name="continent" id="North America" value="North America" onChange={onContinentChange} checked={continent['North America'] || false} />
        //         <label htmlFor="south America">South America</label>
        //         <input type="checkbox" name="continent" id="South America" value="South America" onChange={onContinentChange} checked={continent['South America'] || false} />
        //         <label htmlFor="antarctica">Antarctica</label>
        //         <input type="checkbox" name="continent" id="Antarctica" value="Antarctica" onChange={onContinentChange} checked={continent['Antarctica'] || false} />
        //         <label htmlFor="europe">Europe</label>
        //         <input type="checkbox" name="continent" id="Europe" value="Europe" onChange={onContinentChange} checked={continent['Europe'] || false} />
        //         <label htmlFor="australia">Australia</label>
        //         <input type="checkbox" name="continent" id="Australia" value="Australia" onChange={onContinentChange} checked={continent['Australia'] || false} />
        //     </div>

        //     <div>
        //         <label htmlFor="male">Male</label>
        //         <input type="radio" name="gender" id="male" value="male" onChange={onGenderChange} checked={gender === 'male'} />
        //         <label htmlFor="female">Female</label>
        //         <input type="radio" name="gender" id="female" value="female" onChange={onGenderChange} checked={gender === 'female'} />
        //     </div>

        //     <div>
        //         <select value={role} onChange={onRoleChange}>
        //             <option value="company">Company</option>
        //             <option value="private person">Private person</option>
        //         </select>
        //     </div>

        //     <div>
        //         <button type="button" onClick={onSubmitHandler}>Register</button>
        //     </div>
        // </form>

        <Form className={styles.regStyle} onSubmit={onSubmitHandler}>
            <Form.Label><h5>Make your registration here:</h5></Form.Label><br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={onEmailChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={onPasswordChange} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control type="password" name="repeatPassword" value={rePass} onChange={onRepassChange} placeholder="Repeat password" />
            </Form.Group>
            <Form.Group>
                <Form.Check type="radio" inline name="gender" id="male" value="male" onChange={onGenderChange} checked={gender === "male"} label="male" />
                <Form.Check type="radio" inline name="gender" id="female" value="female" onChange={onGenderChange} checked={gender === "female"} label="female" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="tel" value={phoneNumber} onChange={onPhoneChange} placeholder="Your GSM number" />
            </Form.Group>
            <Form.Group>
                <Form.Label>You are: </Form.Label>
                <select value={role} onChange={onRoleChange}>
                    <option value="company">Company</option>
                    <option value="private person">Private person</option>
                    <option value="other">Other</option>
                </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="isChecked" id="I'm not a bot" value="I'm not a bot" onChange={onChecked} checked={isChecked['I\'m not a bot'] || false} label="I'm not a bot" />
                <Form.Check type="checkbox" name="isChecked" id="My data is currect" value="My data is currect" onChange={onChecked} checked={isChecked['My data is currect'] || false} label="My phone and email are correct" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button><br />
            <Form.Text id="passwordHelpBlock" muted>If you have account go to <NavLink to='/login'>login page.</NavLink></Form.Text>
        </Form>
    );
}