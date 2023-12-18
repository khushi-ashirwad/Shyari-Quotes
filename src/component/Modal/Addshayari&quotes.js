import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BasicContext } from "../../context/BasicProvider";
import { useDispatch } from "react-redux";
import { getCategory } from "../../redux/action/categoryAction";
import Getcategory from "../Global/Getcategory";
import { addContent, getContent } from "../../redux/action/QuoteAction";
import { addShayari, getShayari } from "../../redux/action/ShayatiAction";
import Select from 'react-select';

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

  const handlechnagecontent = (selectedOption) => {
    setadddata({
      ...adddata,
      category: selectedOption ? selectedOption.value : "",
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
    if (currentPath === "/Quotes") {
      dispatch(addContent(data)).then(() => {
        setadddata({});
        dispatch(getContent());
      });
    } else {
      dispatch(addShayari(data)).then(()=>{
        setadddata({});
        dispatch(getShayari())
      })
    }
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
        size="lg"
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
          <label>Select </label>
          <br />
          <Select
            options={currentvalue
              .filter(
                (category) =>
                  (currentPath === '/Quotes' && category.type === 'quotes' && category.isdisable === true) ||
                  (currentPath !== '/Quotes' && category.type === 'shayari' && category.isdisable === true)
              )
              .map((option) => ({
                label: option.name,
                value: option._id,
              }))}
            onChange={handlechnagecontent}
            styles={{
              control: (provided) => ({
                ...provided,
                maxHeight: "200px",
                overflowY: "auto",
              }),
            }}
          />
          <br />
          <br />
          <label>
            {currentPath === "/Quotes" ? "Enter Quote" : "Enter Shayari"}
          </label>
          <br />
          <textarea
            name="content"
            value={adddata.content}
            onChange={(e) => setadddata({ ...adddata, content: e.target.value })}
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
