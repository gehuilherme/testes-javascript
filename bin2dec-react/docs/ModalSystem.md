# How to make a modal.



## Ex.:

### Import dependencies:

    import {Button} from 'react-bootstrap';
    import React, { useState } from "react";
    import ModalCalc from '../Components/Modal';

### In the function, implement as needed:

    const [showModal, handleShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [modalButtonText, setModalButtonText] = useState("");

    function handleButtonClick() {
      setModalTitle(`Text to modal title`);
      setModalMessage(`Text to modal body`);
      setModalButtonText(`Text to button`);
      handleShow(true);
    }

    function handleModalClose() {
      handleShow(false);
    }

    <div className="d-grid gap-2">
        <Button size="lg" variant='dark' onClick={handleButtonClick}>Convert</Button>
    </div>
    {showModal && (
        <ModalCalc onClose={handleModalClose} modaltitle={modalTitle} modalmessage={modalMessage} modalbuttontext={modalButtonText} />
    )}