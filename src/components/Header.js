// import app_logo from "../utils/constants";
import { useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const onlinestatus = useOnlineStatus();

  const [btnNameReact, setbtnNameReact] = useState('login');

  const cartItems = useSelector((store) => 
    store.cart.items);

    return (
      <div className='flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-100 font-[500] my-5 drop-shadow-xl m-2'>
        <div className='app-logo'>
        <Link to="/" className='links' ><img className= 'w-20 mx-6 mt-2' src='https://cdn-icons-png.flaticon.com/128/3655/3655682.png'>
          </img></Link>
          </div>
          <div className='flex items-center '>
            <ul className='flex p-4 m-4'>
              <li className='px-4'>
                onlinestatus : {onlinestatus ? "🟢" : "🔴"}
              </li>
              <Link to="/" className='links' ><li className='px-4'>Home</li></Link>
              <Link to="/about" className='links' ><li className='px-4'>About</li></Link>
              <Link to="/cart" className='links' ><li className='px-4 font-bold text-xl'>Cart ({cartItems.length} items)</li></Link>
              <Link to="/grocery" className='links' ><li className='px-4'>Grocery</li></Link>
              <Link to="/contactus" className='links' ><li className='px-4'>Contact Us</li></Link>


              <button className="mx-4 py-1 border-solid border-2 border-green-200 p-1 rounded-lg hover:bg-green-400" onClick={()=>{
                btnNameReact === "login"?setbtnNameReact('Logout'):setbtnNameReact('login');
              }}>{btnNameReact}
              </button>
  
            
          
        </ul>
      </div>
      </div>
    )
  }
  export default Header;