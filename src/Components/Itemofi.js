import React from 'react'
import '../Styles/Itemofi.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faClock} from '@fortawesome/free-solid-svg-icons'



function Itemofi ({oficina}) {
    let change = ()=>{
        if (oficina.online === true) {
            console.log('cambio')
        }
    };

   
    return(
        
        <div id='card' onClick={change} className="card text-white  mb-4" >

            <font size='6'  >{oficina.name}</font> 
            <div id='footercard'>
                <FontAwesomeIcon id='icon' icon={faUser} />
                <p id='pa'>40</p>
                <FontAwesomeIcon id='icon' icon={faClock} />
                <p id='pa'>40</p>
            </div>              
        </div>
            
        
    )
}

export {Itemofi}