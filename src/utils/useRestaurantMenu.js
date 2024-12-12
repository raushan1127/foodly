import { useState, useEffect } from "react" ;
import { menu_api, menu_api_end } from "./constants";



const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

   useEffect(() => {
        fetchmenu();

    },[]);

    const fetchmenu = async () => {
        const data = await fetch(menu_api + resId + menu_api_end)
        const json = await data.json();
        setResInfo(json.data)
    }
    return resInfo;

}

export default useRestaurantMenu;