import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategories from "./RestaurantMenuCategories";
import { useState } from "react";
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';

const RestaurantMenu = () => {

const  [showIndex, setshowIndex] = useState(null)

const  { resId } = useParams(); 
    
const resInfo = useRestaurantMenu(resId);


if (resInfo === null) 
return <Shimmer />;

const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
    totalRatingsString,
    areaName
  } = resInfo?.cards[2]?.card?.card?.info;


  const { 
   slaString,
   lastMileTravelString

   } = resInfo?.cards[2]?.card?.card?.info?.sla;

   const { totalFee } =  resInfo?.cards[2]?.card?.card?.info?.feeDetails;
  
//   const item = resInfo?.cards[2]?.card?.card?.info;
//   console.log(resInfo)

  const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card; 
//   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )

console.log(categories);

  return (
        <div className=" h-screen place-items-start mx-40  px-[200] w-[]">
            <h1 className="font-[1000] text-4xl my-7 mx-[3] "> {name} </h1>

            <div className=" w-[780] h-[300] bg-green-50 p-7  border-solid border-2 rounded-2xl shadow-2xl hover:bg-green-100 hover:scale-[1.01]">
            <div className="summary-menu flex mx-2 px-2font-[500] text-xl justify-between w-[330]"> 
            <h3 className=""><i className="ri-star-fill px-1 text-green-700"></i>{avgRating}({totalRatingsString})</h3>
               <h3>{costForTwoMessage}</h3>
               </div>

               <h4 className="px-2 py-1 mx-2 my-2"> {cuisines.join(",")}</h4>

               {/* <div className="outlet flex justify-between"> */}
               {/* <i class="ri-record-circle-fill"></i> */}
               <div className="outlet flex justify-between px-1 my-8 w-[200]">
               <h3 className="font-[500]"><i class="ri-record-circle-fill px-2 text-gray-400"></i>Outlet</h3>
               <h3>{areaName}</h3>
               </div>

               <div className="deltime flex mx-1 my-9">
               <i class="ri-record-circle-fill px-2 text-gray-400"></i>
               <h3>{slaString}</h3>
               </div>

               <div className="del-charge w-[300] flex mx-[4] justify-between px-2">
                  <h4><i class="ri-riding-line"></i> {lastMileTravelString}</h4>
                  <p>|</p>
                  <h4><i class="ri-money-rupee-circle-line"></i>{totalFee/100} Delivery fee will apply </h4>
               </div>
               </div>
               {/* restuarant menu categories with accordium */}
               <div>
                {categories.map((rescat , index) => <RestaurantMenuCategories  data = {rescat?.card?.card} 
                showItems = {index === showIndex ? true : false } 
                setshowIndex = {() => setshowIndex(index)} />
                
              )}
               </div>
            
         </div>
            // <h1>hii</h1>
        
            )
}
export default RestaurantMenu;