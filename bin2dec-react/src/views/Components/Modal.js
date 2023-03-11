import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CallModal(props) {
  const handleClose = () => props.onClose();

  return (
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title dangerouslySetInnerHTML={{ __html: props.modaltitle }}></Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{ __html: props.modalmessage }}></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} dangerouslySetInnerHTML={{ __html: props.modalbuttontext }}></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CallModal;
