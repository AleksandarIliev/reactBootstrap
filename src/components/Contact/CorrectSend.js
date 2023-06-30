import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export const CorrectSend = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    // https://www.youtube.com/watch?v=bMq2riFCF90
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification message</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your question is successfully send. We will reply you as soon as possible.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} onClickCapture={() => navigate('/')}>
                        Go to home
                    </Button>
                    <Button variant="primary" onClick={handleClose} onClickCapture={() => navigate(-1)}>
                        Go back
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}