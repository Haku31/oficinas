import React from 'react'
import logo from '../icons/logo.png';
import '../Styles/Header.css'


function Header () {
    return (
        <div className='container'>
        <div id='row1' className="row">
            <div className='col-12 mt-4'>
                <img className='offset-lg-5 offset-sm-3 offset-md-5 offset-3' id='img1' src={logo} alt="MDN"></img>
            </div>      
        </div>  
        </div>
        
    );
}

export {Header}