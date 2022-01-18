import { useEffect, useState } from "react";
import axios from "axios";

const useGetoficinas = (API) =>{
    const [oficinas, setOficinas] = useState([]);
    useEffect(async() =>{
        const response=await axios(API);
            function compararOnline (a) {
                if (a.online === true) {
                    return -1
                    
                }else{
                    return 0
                }
            }
            
        
        let resultados = response.data.sort(compararOnline);    
        setOficinas(response.data)
    
    },[])
    
    return oficinas;
};

export {useGetoficinas}