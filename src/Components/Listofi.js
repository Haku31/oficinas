import React from 'react'
import '../Styles/Listofi.css'





function Listofi (props) {
    
    return (
        <div  className='container-fluid'>
            {props.children}
        </div>
            
        
        
    )
}

export {Listofi};