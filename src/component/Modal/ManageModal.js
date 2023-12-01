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

  const filteredOptions =
    currentvalue &&
    currentvalue.filter &&
    typeof currentvalue.filter === "function"
      ? currentPath === "/Quotes"
        ? currentvalue.filter((category) => category.type === "quotes" && category.isdisable === true)
        : currentvalue.filter((category) => category.type === "shayari" && category.isdisable === true)
      : [];
  return (
    <Modal show={isOpen} onHide={onClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="category">
            <Form.Label>Category Name</Form.Label>
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
                console.log("Selected Category ID:", e.target.value);
                setDefaultValues({ ...defaultValues, category     : e.target.value });
              }}              >
              {(filteredOptions.length > 0 ? filteredOptions : currentvalue || []).map((option) => (
                <option key={option._id} value={option._id}>
                  {option.name}
                </option>
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
