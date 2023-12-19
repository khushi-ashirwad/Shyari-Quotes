import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Getcategory from "../Global/Getcategory";
import Select from "react-select";

const EditImage = ({
  isOpen,
  onClose,
  imageData,
  handleUpdate,
}) => {
  const [updatedData, setUpdatedData] = useState({
    name: "",
    description: "",
    category: "",
    isSensitive: true,
    file: null,
  });
  const currentvalue = Getcategory();

  useEffect(() => {
    setUpdatedData({
      name: imageData.name || "",
      description: imageData.description || "",
      category: imageData.category || "",
      isSensitive: imageData.isSensitive || false,
      file: null,
    });
  }, [imageData]);

  const handleSaveChanges = () => {
    const formData = new FormData();
    formData.append("name", updatedData.name);
    formData.append("description", updatedData.description);
    formData.append("isSensitive", updatedData.isSensitive);
    formData.append("file", updatedData.file);

    handleUpdate(imageData._id, formData);
    onClose();
  };

  const handleFileChange = (e) => {
    setUpdatedData({
      ...updatedData,
      file: e.target.files[0],
    });
  };

  return (
    <Modal show={isOpen} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <br />
          <Select
            styles={{
              control: (provided) => ({
                ...provided,
                width: "100%",
                border: "none",
                background: "#EDEFF5",
                padding: "0.5rem",
              }),
            }}
            options={
              currentvalue.length > 0
                ? currentvalue
                  .filter(
                    (category) =>
                      category.type === "image" && category.isdisable === true
                  )
                  .map((value) => ({
                    label: value.name,
                    value: value._id,
                  }))
                : []
            }
            value={
              currentvalue.length > 0
                ? {
                  label: updatedData.category.name,
                  value: updatedData.category._id,
                }
                : null
            }
            onChange={(selectedOption) => {
              setUpdatedData({
                ...updatedData,
                category: {
                  _id: selectedOption.value,
                  name: selectedOption.label,
                },
              });
            }}
          />

          <Form.Group controlId="formName">
            <Form.Label>Enter Name:</Form.Label>
            <Form.Control
              type="text"
              style={{
                width: "100%",
                border: "1px solid #7E7E7E",
                background: "#EDEFF5",
              }}
              value={updatedData?.name}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              style={{
                width: "100%",
                border: "1px solid #7E7E7E",
                background: "#EDEFF5",
              }}
              value={updatedData?.description}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  description: e.target.value,
                })
              }
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formIsSensitive">
            <Form.Label>IsSensitive</Form.Label>
            <br />
            <input
              type="radio"
              value="true"
              name="issensitive"
              checked={updatedData.isSensitive}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  isSensitive: e.target.checked,
                })
              }
            />{" "}
            Yes
            <br />
            <input
              type="radio"
              value="false"
              name="issensitive"
              checked={!updatedData.isSensitive}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  isSensitive: !e.target.checked,
                })
              }
            />{" "}
            No
          </Form.Group>
          <br />
          <Form.Group controlId="formImage">
            <Form.Label>Thumbnail</Form.Label>
            <br />
            <input type="file" onChange={handleFileChange} />
            {updatedData?.file && (
              <img
                src={URL.createObjectURL(updatedData.file)}
                alt="Preview"
                style={{ width: "40%", marginTop: "10px" }}
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button
          style={{
            backgroundColor: "#A30D11",
            border: "none",
            padding: "0.5rem 2rem",
          }}
          onClick={onClose}
        >
          Close
        </Button>
        <Button
          style={{
            backgroundColor: "#59167C",
            border: "none",
            padding: "0.5rem 2rem",
          }}
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditImage;
