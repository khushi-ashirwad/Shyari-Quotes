import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { BasicContext } from "../../context/BasicProvider";
import Getcategory from "../Global/Getcategory";
import { useDispatch } from "react-redux";
import { addImage, getImage } from "../../redux/action/ImageAction";
const ImageModal = () => {
 const { show, handleClose, image, setImage, setFile, file } =
    useContext(BasicContext);
  const imagecategory = Getcategory();
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setImage({
      ...image,
      [e.target.name]: e.target.value,
    });
  };
  const handlechnagefile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleimagesubmit = () => {
    console.log( "data",image, file);
    const formdata = new FormData();
    formdata.append("name", image.name);
    if (image.description) {
      formdata.append("description", image.description);
    }
    formdata.append("category", image.category);
    formdata.append("file", file);
    formdata.append("issensitive", image.issensitive);
    dispatch(addImage(formdata)).then(() => {
      dispatch(getImage());
      setImage({});
    });
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Images </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Select Category </label>
          <br />
          <select
            style={{
              width: "100%",
              border: " none",
              background: "#EDEFF5",
              padding: "0.5rem 0.5rem",
            }}
            name="category"
            value={image.category}
            onChange={handlechange}
          >
            {imagecategory
              ? imagecategory
                  .filter(
                    (category) =>
                      category.type === "image" && category.isdisable === true
                  )
                  .map((value) => (
                    <option value={value._id}>{value.name}</option>
                  ))
              : null}
          </select>
          <br />
          <br />
          <label>Enter Name</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              border: "1px solid #7E7E7E",
              background: "#EDEFF5",
            }}
            name="name"
            value={image.name}
            onChange={handlechange}
          />
          <br />
          <br />
          <label>Description</label>
          <br />
          <textarea
            type="text"
            name="description"
            style={{
              width: "100%",
              border: "1px solid #7E7E7E",
              background: "#EDEFF5",
            }}
            value={image.description}
            onChange={handlechange}
          />
          <br />
          <br />
          <label>Is Sensitive </label>
          <br />
          <input
            type="radio"
            value="true"
            name="issensitive"
            onChange={handlechange}
            checked
          />{" "}
          Yes
          <br />
          <input
            type="radio"
            value="false"
            name="issensitive"
            onChange={handlechange}
          />{" "}
          No
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
            name="file"
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
              handleimagesubmit();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageModal;
