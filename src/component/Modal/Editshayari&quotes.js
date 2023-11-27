import React from "react";
import { Modal, Button } from "react-bootstrap";

const EditModal = ({
  isOpen,
  onClose,
  editedCategory,
  defaultValues,
  setDefaultValues,
  handleSaveChanges,
}) => {
  
  return (
    <Modal show={isOpen}
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Category</Modal.Title>
      </Modal.Header>
      <Modal.Body> <br />
        <label>Enter Name:</label> <br />
        <input style={{
          width: "100%",
          border: "1px solid #7E7E7E",
          background: "#EDEFF5",
        }}
          type="text"
          value={defaultValues?.name || ""}
          onChange={(e) =>
            setDefaultValues((prevValues) => ({
              ...prevValues,
              name: e.target.value,
            }))
          }
        /> <br />
        <br />
        <label>Description:</label><br />
        <input
          type="text"
          style={{
            width: "100%",
            border: "1px solid #7E7E7E",
            background: "#EDEFF5",
          }}
          value={defaultValues?.description || ""}
          onChange={(e) =>
            setDefaultValues((prevValues) => ({
              ...prevValues,
              description: e.target.value,
            }))
          }
        /> <br />
        <br />
        <label>Image:</label><br />
        <input
          type="file"
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setDefaultValues((prevValues) => ({
                  ...prevValues,
                  Image: reader.result,
                }));
              };
              reader.readAsDataURL(selectedFile);
            }
          }}
        />

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

export default EditModal;
