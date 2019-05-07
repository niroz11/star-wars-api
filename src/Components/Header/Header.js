import React from 'react';
import './Header.css'
import logo from './header-bg.jpg'
import trooper from './dark-bro.jpg'
import cross from './cross.png'

const Header = () => {
    return (
            <div className="header-container">
                {/* <span className="title-left">SWAPI</span> */}
                <div className="header-box">
                    <div className="image-box">
                        <img alt="hey" src={trooper}></img>
                    </div> 
                </div>
                {/* <span className="title-right">BOX</span> */}
            </div>
            
            
            
            
            
            
       
        
        
    )
}

export default Header;