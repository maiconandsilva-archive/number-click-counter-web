import React, {useContext} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AppContext} from "../contexts";

function ErrorMessage() {
  const {errorMessage, setErrorMessage} = useContext(AppContext);
  return (
    <Modal isOpen={!!errorMessage}>
      <ModalHeader className="text-danger" tag="h2">Error</ModalHeader>
      <ModalBody>{errorMessage}</ModalBody>
      <ModalFooter>
        <Button onClick={() => setErrorMessage("")}>OK</Button>
      </ModalFooter>
    </Modal>
  );
}

export default ErrorMessage;
