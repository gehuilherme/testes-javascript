import {Container, Form, Button} from 'react-bootstrap';
import React, { useState } from "react";
import ModalCalc from '../Components/Modal';

function Bin2Dec() {

  function convert(bin) {
    return parseInt(bin, 2);
  }
  

  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");
  const [showModal, handleShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalButtonText, setModalButtonText] = useState("");

  function handleBinaryInputChange(event) {
    setBinaryValue(event.target.value);
  }

  function handleButtonClick() {
    const decimal = convert(binaryValue);
    setDecimalValue(decimal);
    setModalTitle(`Result of conversion`);
    setModalMessage(`The decimal value is <b>${decimal}</b>.`);
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
          <Form.Label><b>Write a binary number:</b></Form.Label>
          <Form.Control size="lg" 
            type='text' 
            id='inputBinaryNumber' 
            value={binaryValue} 
            onChange={handleBinaryInputChange} 
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button size="lg" variant='dark' onClick={handleButtonClick}>Convert</Button>
        </div>
        {showModal && (
          <ModalCalc onClose={handleModalClose} modaltitle={modalTitle} modalmessage={modalMessage} modalbuttontext={modalButtonText} />
        )}
      </Form>

    </Container>
  );
}

export default Bin2Dec;
