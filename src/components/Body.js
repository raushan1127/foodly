import { useState, useEffect } from 'react';
import RestuarantCard from './RestuarantCard';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';



const Body = () => {
  const {resId} = useParams();


  const [Listofrest, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');
  console.log(Listofrest);


useEffect(()=>{

    fetchdata();

 },[]);

 const fetchdata = async () =>{
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5753675&lng=88.3330031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  
  const apidata = await data.json();
 
  console.log (apidata);
  
  setListOfRestaurants(apidata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setfilteredRestaurant(apidata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
 
};

const onlinestatus = useOnlineStatus();
if (onlinestatus === false)
  return (
   <h1>
    Seems !like you are not connected to internet
   </h1>
  )

return Listofrest.length === 0 ? (
  <Shimmer />
) :  (
    <div className='res-body'>
      <div className='filter flex m-4 justify-between'>
        <div className='search-bar'>

          <input type='text' className='border-solid border-2 rounded-md border-x-slate-400blue-50 px-2 mx-[1]' placeholder='enter restuarant name' value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} ></input>

          <button className='search-btn mx-1 border-solid border-2 rounded-md border-orange-100 w-20 hover:bg-orange-300 font-[500]'
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const searchedRestaurant = Listofrest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(searchedRestaurant);
            }} >Search</button>
        </div>
        <div className='filter-button'>
          <button className='top-rated-filter border-solid border-2 rounded-md border-orange-100 hover:bg-orange-300 mx-2 w-60 font-[500]' onClick={() => {
            const filteredList = filteredRestaurant.filter((rest) => rest.info.avgRating > 4.5 )

            setfilteredRestaurant(filteredList);
            console.log(filteredList);
          }} >Top Rated restuarant</button>

        </div>

      </div>
      <div className='res-container flex flex-wrap'>
        {filteredRestaurant.map((restuarant) => (
         <Link  key={restuarant.info.id}  to={"/restaurant/" + restuarant.info.id}><RestuarantCard resData={restuarant} /></Link> 
        ))
        
        }
        {console.log(filteredRestaurant)};

      </div>
    </div>
)
}
export default Body;