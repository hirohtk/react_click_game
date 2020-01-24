import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./modal.css";
 
function GameModal(props) {

  // show is a boolean, setShow is a function
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)};

  // DID NOT NEED FOR MY PURPOSES
  // const handleShow = () => setShow(true);

  // console.log("props.open is " + props.open);

  return (
    <>
       {/* show expects a boolean (true) to open, false to close */}
      <Modal show={(props.open) ? (props.open) : false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p id={props.color}>{props.winOrLose}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>Play again!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => props.hideModal()}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameModal;