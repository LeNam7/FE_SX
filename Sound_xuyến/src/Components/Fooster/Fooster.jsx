import React from 'react'
import './Fooster.css'

import logo from '../../assets/logoSX.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SXFooster = () => {
    return (
        <div className='fooster'>

            <div className='logo2'>
                <img src={logo} alt="logo" style={{ width: '175px', height: '60px', borderRadius: '15px' }} />
            </div>

            <div className="stock"></div>

            <div className="contact1">
                <div className="contact-title1">
                    <p><span> <FontAwesomeIcon icon={faPhoneVolume} size='x' color='#232323'/> :</span> 0971 870 712  -  088 689 1203</p>
                    <p><span> <FontAwesomeIcon icon={faEnvelope} size='x' color='#232323'/> :</span> soundxuyen@gmail.com</p>
                    <p><span> <FontAwesomeIcon icon={faFacebook} size='x' color='#232323'/> :</span> <a style={{ textDecoration: "none" }} href="https://www.facebook.com/soundxuyenlab">Sound Xuyến</a></p>
                    <p><span> <FontAwesomeIcon icon={faInstagram} size='x' color='#232323'/> :</span> <a style={{ textDecoration: "none" }} href="https://www.instagram.com/soundxuyen.lab/">soundxuyen.lab</a></p>
                </div>
            </div>

            <div className="stock"></div>

            <a href='https://www.facebook.com/soundxuyenlab' className='connect1'>
                <FontAwesomeIcon icon={faMicrophone} size='3x' color='#232323' style={{ margin: '10px' }} />
            </a>

        </div>
    )
}

export default SXFooster