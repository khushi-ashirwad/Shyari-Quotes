import React, { useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Select from 'react-select';
import Getcategory from "../Global/Getcategory";
import { BasicContext } from "../../context/BasicProvider";
import { getCategory } from "../../redux/action/categoryAction";
import { useDispatch } from "react-redux";

const ModalContentComponent = ({
  isOpen,
  onClose,
  defaultValues,
  setDefaultValues,
  handleSaveChanges,
}) => {
  const currentPath = window.location.pathname;
  const currentvalue = Getcategory();
  const { dataFetched, setDataFetched } = useContext(BasicContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataFetched) {
      dispatch(getCategory());
      setDataFetched(true);
    }
  }, [dispatch, dataFetched, setDataFetched]);

  let options = [];
  if (currentPath === "/Quotes") {
    options = currentvalue
      .filter(
        (category) =>
          category.type === "quotes" && category.isdisable === true
      )
      .map((option) => ({
        value: option._id,
        label: option.name,
      }));
  } else {
    options = currentvalue
      .filter(
        (category) =>
          category.type === "shayari" && category.isdisable === true
      )
      .map((option) => ({
        value: option._id,
        label: option.name,
      }));
  }

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="content">
            <Form.Label>Category Name</Form.Label>
            <Select
              styles={{
                menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
                menu: (provided) => ({
                  ...provided,
                  maxHeight: "200px",
                  overflowY: "auto",
                }),
              }}
              menuPortalTarget={document.body}
              options={options}
              value={{
                value: defaultValues.category_id,
                label: currentvalue.find(
                  (category) => category._id === defaultValues.category_id
                )?.name,
              }}
              onChange={(selectedOption) => {
                setDefaultValues({
                  ...defaultValues,
                  category_id: selectedOption.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>
              {currentPath === "/Quotes" ? "Quotes" : "Shayari"}
            </Form.Label>
            <textarea
              style={{
                width: "100%",
                border: "1px solid #7E7E7E",
                background: "#EDEFF5",
                padding: "0.5rem",
                marginTop: "0.5rem",
              }}
              value={defaultValues.content}
              onChange={(e) =>
                setDefaultValues({ ...defaultValues, content: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
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

export default ModalContentComponent;
