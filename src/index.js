import React from 'react';
import ReactDOM from 'react-dom/client';
// import { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import AboutUs from './components/About'; 
import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import Grocery from './components/Grocery';
import { Provider } from "react-redux";
import  appStore  from './utils/appStore'

const AppLayout = () => {
  return (
    <Provider store = { appStore}>
    <div className='app'>
      <Header/>
      <Outlet />
    
    </div>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
    
      },
      {
        path: "/contactus",
        element: <Contact />,
    
      },
      {
        path: "/cart",
        element: <Cart />,
    
      },
      {
        path: "/grocery",
        element: <Grocery />,
    
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
   
      },
    ],
    errorElement: <Error />,
  },
 

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);