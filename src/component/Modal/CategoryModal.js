import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { BasicContext } from "../../context/BasicProvider";
import { useDispatch } from "react-redux";
import { addCategory, getCategory } from "../../redux/action/categoryAction";

const CategoryModal = ({ currentPath }) => {
  const { show, handleClose, Category, setCategory, file, setFile } =
    useContext(BasicContext);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCategory({
      ...Category,
      [e.target.name]: e.target.value,
    });
  };
  const handlechnagefile = (e) => {
    setFile(e.target.files[0]);
  };
  const handlecategory = () => {
    const formData = new FormData();
    formData.append("name", Category.name);
    if (Category.description) {
      formData.append("description", Category.description);
    }
    formData.append("file", file);
    if (currentPath === "/Category") {
      formData.append("type", "quotes");
    } else if (currentPath === "/Image%20Category") {
      formData.append("type", "image");
    } else {
      formData.append("type", "shayari");
    }
    dispatch(addCategory(formData)).then(() => {
      dispatch(getCategory());
      setCategory({});
    });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            {currentPath === "/Category" ? "Quotes" : "Shayari"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Enter Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={Category.name}
            style={{
              width: "100%",
              border: "1px solid #7E7E7E",
              background: "#EDEFF5",
            }}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={Category.description}
            style={{
              width: "100%",
              border: "1px solid #7E7E7E",
              background: "#EDEFF5",
            }}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Thumbnail</label>
          <br />
          <input
            type="file"
            style={{
              width: "100%",
              border: "1px solid #7E7E7E",
              padding: "0.2rem",
              background: "#EDEFF5",
            }}
            onChange={handlechnagefile}
          />
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
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "#59167C",
              border: "none",
              padding: "0.5rem 2rem",
            }}
            onClick={() => {
              handleClose();
              handlecategory();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryModal;
