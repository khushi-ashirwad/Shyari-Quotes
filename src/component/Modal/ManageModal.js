import React,{useContext, useEffect} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Getcategory from "../Global/Getcategory";
import { BasicContext } from "../../context/BasicProvider";
import { getCategory } from "../../redux/action/categoryAction";
import { useDispatch} from "react-redux";

const ModalContentComponent = ({
  isOpen,
  onClose,
  defaultValues,
  setDefaultValues,
  handleSaveChanges,
}) => {
  const currentPath = window.location.pathname;
  const currentvalue = Getcategory();
  const {  dataFetched, setDataFetched } =
  useContext(BasicContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataFetched) {
      dispatch(getCategory());
      setDataFetched(true);
    }
  }, [dispatch, dataFetched,setDataFetched]);

  return (
    <Modal show={isOpen} onHide={onClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="content">
            <Form.Label> Category Name</Form.Label>
            <select
              style={{
                width: "100%",
                border: "none",
                background: "#EDEFF5",
                padding: "0.5rem",
              }}
              name="category"
              value={defaultValues.category}
              onChange={(e) => {
                setDefaultValues({ ...defaultValues, category     : e.target.value });
              }}>
                {currentPath === "/Quotes"
              ? currentvalue
                  .filter((category) => category.type === "quotes" && category.isdisable===true)
                  .map((option) => (
                    <option value={option._id}>{option.name}</option>
                  ))
              : currentvalue
                  .filter((category) => category.type === "shayari" && category.isdisable===true)
                  .map((option) => (
                    <option value={option._id}>{option.name}</option>
                  ))}
            </select>
          </Form.Group>
          <Form.Group controlId="content"> 
            <Form.Label>{currentPath === "/Quotes" ? "Quotes" : "Shayari"}</Form.Label>
            <textarea
              style={{
                width: "100%",
                border: "1px solid #7E7E7E",
                background: "#EDEFF5",
                padding: "0.5rem",
                marginTop: "0.5rem",
              }}
              value={defaultValues.content}
              onChange={(e) => setDefaultValues({ ...defaultValues, content: e.target.value })}
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
