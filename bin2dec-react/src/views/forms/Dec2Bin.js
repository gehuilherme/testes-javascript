import {Container, Form, Button} from 'react-bootstrap';
import React, { useState } from "react";
import CallAlertBox from '../Components/Alert';
import CallModal from '../Components/Modal';

function Dec2Bin() {

  function convert(dec) {
    const decimal = parseInt(dec)
    const conv = decimal.toString(2);
    return conv;
  }
// eslint-disable-next-line
  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");
  const [showModal, handleShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalButtonText, setModalButtonText] = useState("");

  function handleDecimalInputChange(event) {
    setDecimalValue(event.target.value);
  }

  function handleButtonClick() {
    const binary = convert(decimalValue);
    setBinaryValue(binary);
    setModalTitle(`Result of Conversion:`);
    setModalMessage(`${binary}`);
    setModalButtonText(`Close`);
    handleShow(true);
  }

  function handleModalClose() {
    handleShow(false);
  }

  return (
    <Container>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label><b>Write a decimal number:</b></Form.Label>
          <Form.Control 
          size="lg" 
          type='text' 
          id='inputDecimalNumber'
          value={decimalValue} 
          onChange={handleDecimalInputChange} 
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button size="lg" variant='dark' onClick={handleButtonClick}>Convert</Button>
        </div>
        {showModal && (
          <CallModal onClose={handleModalClose} modaltitle={modalTitle} modalmessage={modalMessage} modalbuttontext={modalButtonText} />
        )}
      </Form>
      
    </Container>
  );
}

export default Dec2Bin;
