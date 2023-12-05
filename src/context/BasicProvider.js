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
  const [image,setImage] = useState({
    name:'',
    description:"",
    category:'',
    issensitive:''
  })
  const [dataFetched, setDataFetched] = useState(false); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedContent, setEditedContent] = useState({});
  const [editedCategory, setEditedCategory] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);

  return (
    <>
      <BasicContext.Provider value={{ show, setShow, handleClose, handleShow,Category,setCategory,file,setFile,dataFetched,setDataFetched,isEditModalOpen, setIsEditModalOpen,editedCategory, setEditedCategory,image,setImage,editedContent, setEditedContent,editModalOpen,setEditModalOpen,selectedImageData,setSelectedImageData}}>
        {children}
      </BasicContext.Provider>
    </>
  );
};

export default Basicprovider;
