import {Container, Form, Button} from 'react-bootstrap';
import React, { useState } from "react";
import AlertBox from '../Components/Alert';
import CallModal from '../Components/Modal';

function Dec2Bin() {

  const [showModal, handleShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalButtonText, setModalButtonText] = useState("");

  function handleConvertButtonClick() {
    setModalTitle(`Wait a minute`);
    setModalMessage(`These tool are under development!`);
    setModalButtonText(`Close`);
    handleShow(true);
  }

  function handleModalClose() {
    handleShow(false);
  }

  return (
    <Container>
      <AlertBox />
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label><b>Write a decimal number:</b></Form.Label>
          <Form.Control size="lg" type='text' id='inputDecimalNumber'/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button size="lg" variant='dark' onClick={handleConvertButtonClick}>Convert</Button>
        </div>
        {showModal && (
          <CallModal onClose={handleModalClose} modaltitle={modalTitle} modalmessage={modalMessage} modalbuttontext={modalButtonText} />
        )}
      </Form>
      
    </Container>
  );
}

export default Dec2Bin;
