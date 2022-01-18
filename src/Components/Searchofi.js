import React, {useState} from 'react'
import '../Styles/Searchofi.css'
function Searchofi ({search, setSearch}) {

    const [] = useState('')
    const onSearchValueChange = (event) => {
        setSearch(event.target.value);
    };
    
    return(
        
        <div id='row2' className='row'>
            <div className='container'>
                <div className='col-12'>
                    
                    <input  className='icono-placeholder' value={search} onChange={onSearchValueChange} type="text"  placeholder='Buscar Sucursal' ></input>
                </div>
            </div>
            
        </div>
    )
}

export {Searchofi}