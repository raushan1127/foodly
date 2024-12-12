import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ item }) => {
    
    
    const dispatch = useDispatch();

    const handleadditems = (list) => {
        dispatch(addItems(list));
    }
    
    return (
        <div>
            {item.map((list) => (
            <div key={list.card.info.id} className="p-2 m-2  border-gray-100 border-b-2 flex justify-between">
            <div className="w-9/12">
           <div className="py-2">
           <span className="font-semibold">{list?.card?.info?.name}</span>
            <span className="font-semibold">- ₹ {list?.card?.info?.price}</span>
           </div>
           <p className="text-xs py-3 mx-2">{list?.card?.info?.description}</p>
           </div>
           <div className="w-3/12 h-auto ">
           <div className="absolute">
            <button className=  "bg-green-600  rounded-lg w-[60] text-gray-50 mx-5 my-16" onClick={() => handleadditems(list)}>Add +</button>
            </div>
            <img className="w-[100] rounded-xl " src={CDN_URL+list.card.info.imageId}></img>
            </div> 
           </div>
        ))}
      

        </div> 
    )
};
export default ItemList;