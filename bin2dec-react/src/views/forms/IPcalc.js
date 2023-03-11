import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import React, { useState } from "react";
import AlertBox from '../Components/Alert';
import CallModal from '../Components/Modal';

function IPCalc() {

  const [showModal, handleShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalButtonText, setModalButtonText] = useState("");

  function handleButtonClick() {
    setModalTitle(`Comming soon!`);
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
            <Row>
                <Col sm={9}>
                    <Form.Label><b>Address (Host or Network):</b></Form.Label>
                    <Form.Control size="lg" type='text' id='inputIP'/>
                </Col>
                <Col sm={3}>
                    <Form.Label><b>Netmask (i.e. 24):</b></Form.Label>
                    <Form.Control size="lg" type='text' id='inputNetmask'/>
                </Col>
            </Row>
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

export default IPCalc;
