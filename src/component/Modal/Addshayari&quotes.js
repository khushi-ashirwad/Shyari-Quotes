import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BasicContext } from "../../context/BasicProvider";
import { useDispatch ,useSelector} from "react-redux";
import { getCategory } from "../../redux/action/categoryAction";
import Getcategory from "../Global/Getcategory";
import { addContent, getContent } from "../../redux/action/ContentAction";


const Addshayariquotes = ({ currentPath }) => {
  const { show, handleClose, dataFetched, setDataFetched } =
    useContext(BasicContext);
  const currentvalue = Getcategory();
  const [adddata, setadddata] = useState({
    content: "",
    category: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataFetched) {
      dispatch(getCategory());
      setDataFetched(true);
    }
  }, [dispatch, dataFetched, setDataFetched]);

  const handlechnagecontent = (e) => {
    setadddata({
      ...adddata,
      [e.target.name]: e.target.value,
    });
  };

  const handlecontent = () => {
    if (!adddata.content || !adddata.category) {
      return;
    }

    const data = {
      content: adddata.content,
      category: adddata.category,
    };

    dispatch(addContent(data)).then(() => {
      setadddata({});
      dispatch(getContent());
    });
  };

  const handleSaveAndClose = () => {
    if (!adddata.content || !adddata.category) {
      return;
    }

    handlecontent();
    handleClose();
  };
  const handleUnsavedChanges = () => {
    if (adddata.content || adddata.category) {
      } else {
      handleClose();
    }
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
            {currentPath === "/Quotes" ? "Add Quotes" : "Add Shayari"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>select  </label>
          <br />
          <select
            style={{
              width: "100%",
              border: " none",
              background: "#EDEFF5",
              padding: "0.5rem 0.5rem",
            }}
            name="category"
            value={adddata.category}
            onChange={handlechnagecontent}
          >
               <option>Select category</option>
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
          <br />
          <br />
          <label>
            {currentPath === "/Quotes" ? "Enter Quote" : "Enter Shayari"}
          </label>
          <br />
          <textarea
            name="content"
            value={adddata.content}
            onChange={handlechnagecontent}
            style={{ width: "100%", border: "1px solid #7E7E7E" }}
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
            onClick={handleUnsavedChanges}
          >
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "#59167C",
              border: "none",
              padding: "0.5rem 2rem",
            }}
            onClick={handleSaveAndClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Addshayariquotes;
