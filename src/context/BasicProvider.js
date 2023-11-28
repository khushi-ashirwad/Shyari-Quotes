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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedCategory, setEditedCategory] = useState({});
  return (
    <>
      <BasicContext.Provider value={{ show, setShow, handleClose, handleShow,Category,setCategory,file,setFile,dataFetched,setDataFetched,isEditModalOpen, setIsEditModalOpen,editedCategory, setEditedCategory}}>
        {children}
      </BasicContext.Provider>
    </>
  );
};

export default Basicprovider;
