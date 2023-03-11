import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCalc(props) {
  const handleClose = () => props.onClose();

  return (
    <Modal show={true} onHide={handleClose} size="sm" centered>
      <Modal.Header closeButton>
        <Modal.Title>Conversion result</Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{ __html: props.message }}></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCalc;
