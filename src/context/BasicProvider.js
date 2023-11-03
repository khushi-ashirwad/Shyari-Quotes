import { createContext,useState} from "react";

export const BasicContext = createContext(null);

const Basicprovider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BasicContext.Provider value={{ show, setShow, handleClose, handleShow }}>
        {children}
      </BasicContext.Provider>
    </>
  );
};

export default Basicprovider;
