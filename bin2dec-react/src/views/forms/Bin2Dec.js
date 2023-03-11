import {Container, Form, Button} from 'react-bootstrap';
import React, { useState } from "react";
import ModalCalc from '../Components/ModalCalc';

function Bin2Dec() {

  function convert(bin) {
    return parseInt(bin, 2);
  }
  

  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");
  const [showModal, handleShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function handleBinaryInputChange(event) {
    setBinaryValue(event.target.value);
  }

  function handleConvertButtonClick() {
    const decimal = convert(binaryValue);
    setDecimalValue(decimal);
    setModalMessage(`The decimal value of <b>${binaryValue}</b> is <b>${decimal}</b>.`);
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
          <Button size="lg" variant='dark' onClick={handleConvertButtonClick}>Convert</Button>
        </div>
        {showModal && (
          <ModalCalc onClose={handleModalClose} message={modalMessage} />
        )}
      </Form>

    </Container>
  );
}

export default Bin2Dec;
