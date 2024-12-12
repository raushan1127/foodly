import { useState, useEffect } from "react"



const useOnlineStatus = () => {


    const [onlinestatus, setOnlinestatus] = useState(null)

    // check if online 
    useEffect(() => {

        window.addEventListener("offline",() =>{
            setOnlinestatus(false);

        });

        window.addEventListener("online",()=>{
            setOnlinestatus(true);
        });


    },[]);
    return onlinestatus;
};

export default useOnlineStatus;