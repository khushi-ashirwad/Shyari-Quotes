import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalContentComponent = ({
  isOpen,
  onClose,
  editedContent,
  defaultValues,
  setDefaultValues,
  handleSaveChanges,
}) => {
  const currentPath = window.location.pathname;

  return (
    <Modal show={isOpen} onHide={onClose}  aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="content">
            <Form.Label> Category Name</Form.Label>
            <Form.Control
            style={{
              width: "100%",
              border: "1px solid #7E7E7E",
              background: "#EDEFF5",
            }}
              type="text"
              value={defaultValues.categoryId}
              onChange={(e) =>
                setDefaultValues({ ...defaultValues,  categoryId: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="content"><br/>
            <Form.Label> {currentPath === "/Quotes" ? "Quotes" : "Shayari"}</Form.Label><br/>
            <textarea
            style={{
              width: "100%",
              border: "1px solid #7E7E7E",
              background: "#EDEFF5",
            }}
              type="text"
              value={defaultValues.content}
              onChange={(e) =>
                setDefaultValues({ ...defaultValues, content: e.target.value })
              }
            />
          </Form.Group><br/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{
          backgroundColor: "#A30D11",
          border: "none",
          padding: "0.5rem 2rem",
        }} onClick={onClose}>
          Close
        </Button>
        <Button style={{
          backgroundColor: "#59167C",
          border: "none",
          padding: "0.5rem 2rem",
        }} onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContentComponent;
