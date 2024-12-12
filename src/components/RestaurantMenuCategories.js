import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuCategories = (props) => {

  const { data , showItems , setshowIndex } = props;
   

  const handler = () => {
    setshowIndex();
  }

  
  
  const{
    title,
  } = data;

    return (
        <div className="my-10 w-[] ">
          {/* header */}
          <div className=" h-full w-[900] bg-grey-300 flex px-5 my-3 py-5 justify-between border border-solid rounded-lg shadow-xl hover:cursor-pointer " onClick={handler} on>
            <span className="font-bold text-lg">{title}({data?.itemCards?.length})</span>
            <span><i class="ri-arrow-down-s-fill "></i></span>
          </div>
          { showItems && <ItemList item = {data?.itemCards} />}
        </div>
    )
}
export default RestaurantMenuCategories;