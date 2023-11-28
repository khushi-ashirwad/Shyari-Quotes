
import { useSelector } from "react-redux";

const Getcategory = () => {
  const { category } = useSelector((state) => state.categoryRducer);
  const currentvalue = category;
  return currentvalue;
};

export default Getcategory;

export const Getcontent = () =>{
    const {quotescontent} = useSelector((state)=>state.contentReducer);
    return quotescontent;
}

export const GetImage = ()=>{
  const {image} = useSelector(state=>state.imageReducer);
  return image;
}