import { createContext,useState} from "react";

export const BasicContext = createContext(null);

const Basicprovider = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  return (
    <>
      <BasicContext.Provider value={{ show, setShow, handleClose, handleShow,category,setCategory,file,setFile }}>
        {children}
      </BasicContext.Provider>
    </>
  );
};

export default Basicprovider;
