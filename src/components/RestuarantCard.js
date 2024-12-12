import { CDN_URL } from "../utils/constants";


const RestuarantCard = (props) => {


    
    const {resData} = props;
    
    const { cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info;
  
  
    
    return (
    <div className='res-card w-[200] p-4 bg-orange-50 mx-5 my-3 py-3 border-solid rounded-xl hover:bg-orange-300 hover:shadow-xl hover:scale-95'>
    <img className= 'res-logo w-[150] border-solid rounded-md hover: m-3' src={CDN_URL + cloudinaryImageId} alt='restuarant image'></img>
      <h3 className="font-[600] text-xl my-4 mx-1">{name}</h3>
        <div className="font-[400]">
          <h4 className="my-2" >{cuisines.join(', ')}</h4>
           <div className="flex justify-between w-[40]">
           <i class="ri-star-fill"></i>
           <h4>{avgRating}</h4>
           </div>
        <h4>{costForTwo}</h4>
        <div className="flex justify-between w-[70]">
        <i class="ri-e-bike-2-fill"></i>
        <h4>{sla.deliveryTime }min</h4>
        </div>
        </div>
      </div>
    )
  }
  export default RestuarantCard;