import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import useInput from 'src/hooks/useInput';

export default function UsernameModal({ setUsername, ...props }) {
  const [text, onTextChange] = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    setUsername(text);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold" id="contained-modal-title-vcenter">
          Enter your Username
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit} className="px-2 py-1">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username..."
              onChange={onTextChange}
            />
          </Form.Group>
          <Button type="submit" className="visually-hidden">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}