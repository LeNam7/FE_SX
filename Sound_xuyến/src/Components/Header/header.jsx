import React from 'react'
import './header.css'

import logo from '../../assets/logoSX.jpg'


const SXheader = () => {
    return (
        <div className='header'>

            <div className='logo'>
                <img src={logo} alt="logo" style={{width: '175px', height: '60px',  borderRadius: '15px'}}/>
            </div>

            <ul>
                <li><a offer="true" href="#home">Home</a></li>
                <li><a offer="true" href="#service">Service</a></li>
                <li><a offer="true" href="#about">About Us</a></li>
            </ul>

            <a href='https://www.facebook.com/soundxuyenlab' className='connect'>
                <h4>Conect with Us</h4>
            </a>

            {/* <div className='toggle-icon'>
                <h5>Night</h5>
            </div> */}

        </div>
    )
}

export default SXheader