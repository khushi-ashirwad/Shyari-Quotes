import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { BasicContext } from "../../context/BasicProvider";
const ImageModal =()=> {
    const { show, handleClose } = useContext(BasicContext);

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
         <br/>
         <select style={{width:"100%",border:" none",background:"#EDEFF5",padding:"0.5rem 0.5rem"}}>
            <option value="angry">Angry</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
         </select>
         <br/>
         <br/>        
         <label>Enter Name</label>
         <br/>
         <input type="text"  style={{width:"100%",border:"1px solid #7E7E7E",background:"#EDEFF5"}}/>
         <br/><br/>
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
          />
          <br />
          <br />
         <label>Is Sensitive </label>
         <br/>
         <input type="radio" value="Yes" name="true"  /> Yes<br/>
        <input type="radio" value="No" name="true" /> No<br/><br/>
         <label>Thumbnail</label>
         <br/>
         <input type="file" style={{width:"100%",border:"1px solid #7E7E7E",padding:"0.2rem",background:"#EDEFF5"}}/>
        </Modal.Body>
        <Modal.Footer style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
          <Button
            style={{ backgroundColor: "#A30D11", border: "none",padding:"0.5rem 2rem" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#59167C", border: "none",padding:"0.5rem 2rem"  }}
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ImageModal;
