import { createContext,useState} from "react";

export const BasicContext = createContext(null);

const Basicprovider = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Category, setCategory] = useState({
    name: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [dataFetched, setDataFetched] = useState(false); 
  return (
    <>
      <BasicContext.Provider value={{ show, setShow, handleClose, handleShow,Category,setCategory,file,setFile,dataFetched,setDataFetched}}>
        {children}
      </BasicContext.Provider>
    </>
  );
};

export default Basicprovider;
