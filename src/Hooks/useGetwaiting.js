import { useEffect, useState } from "react";
import axios from "axios";

const useGetwaiting = (API) =>{
    const [waiting, setOwaiting] = useState([]);
    useEffect(async() =>{
        const response=await axios(API);
        for (let index = 0; index < 7; index++) {
            setOwaiting(response.data[index].lines[index].waiting)
            
        }
        
        
    },[])
    console.log(waiting)
    return waiting;
};

export {useGetwaiting}