import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Contact.module.css';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [textField, setTextField] = useState('');
    const [isChecked, setChecked] = useState({});

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPhoneChange = (e) => {
        e.preventDefault();
        const regEx = /(08)\d{8}|(\+359)\d{10}/g;
        const input = e.target.value;
        if (input.match(regEx) >= 0) {
            setPhoneNumber(e.target.value);
        }
    }

    const onTextChange = (e) => {
        setTextField(e.target.value);
    }

    const onChecked = (e) => {
        setChecked(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (isChecked['I\'m not a bot'] === true && isChecked['My data is currect'] === true && textField.length > 0) {
            return (
                emailjs.sendForm(
                    process.env.REACT_APP_SERVICE_ID, 
                    process.env.REACT_APP_TEMPLATE_ID, 
                    form.current, 
                    process.env.REACT_APP_PUBLIC_KEY,
                    ).then((result) => {
                        console.log(result.text);
                        navigate('./correctSend');
                        e.target.reset();
                    }, (error) => {
                        console.log(error.text);
                        navigate('./error');
                        e.target.reset();
                    }))
        }
        return (
            navigate('./error')
        );
    }

    return (
        <>
            <Form ref={form} method="POST" className={styles.contactStyle} onSubmit={onSubmitHandler}>
                <Form.Label><h5>If you want to contact with us, here is right place to do this:</h5></Form.Label><br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={onEmailChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" name="phoneNumber" value={phoneNumber} onChange={onPhoneChange} placeholder="Your GSM number in format 0888777666 or +359888777666" minLength="10" maxLength="13" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write here for what this is about</Form.Label>
                    <Form.Control name="textarea" as="textarea" value={textField} onChange={onTextChange} placeholder="Write here" rows={5} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="isChecked" id="I'm not a bot" value="I'm not a bot" onChange={onChecked} checked={isChecked['I\'m not a bot'] || false} label="I'm not a bot" />
                    <Form.Check type="checkbox" name="isChecked" id="My data is currect" value="My data is currect" onChange={onChecked} checked={isChecked['My data is currect'] || false} label="My phone and email are correct" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    );
}