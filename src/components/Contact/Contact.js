import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Contact.module.css';

export const Contact = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [textField, setTextField] = useState('');
    const [isChecked, setChecked] = useState({});

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onTextChange = (e) => {
        setTextField(e.target.value);
    }

    const onChecked = (e) => {
        setChecked(state => ({...state, [e.target.value]: e.target.checked}));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(phoneNumber);
        console.log(textField);
        console.log(isChecked);
    }

    return (
        <Form className={styles.contactStyle} onSubmit={onSubmitHandler}>
            <Form.Label><h5>If you want to contact with us, here is right place to do this</h5></Form.Label><br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={onEmailChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="tel" value={phoneNumber} onChange={onPhoneChange} placeholder="Your GSM number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write here for what this is about</Form.Label>
                <Form.Control as="textarea" value={textField} onChange={onTextChange} placeholder="Write here" rows={5} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="isChecked" id="I'm not a bot" value="I'm not a bot" onChange={onChecked} checked={isChecked['I\'m not a bot'] || false} label="I'm not a bot" />
                <Form.Check type="checkbox" name="isChecked" id="My data is currect" value="My data is currect" onChange={onChecked} checked={isChecked['My data is currect'] || false} label="My phone and email are correct" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}