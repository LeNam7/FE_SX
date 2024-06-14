import React from 'react'
import './Fooster.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const SXFooster = () => {
    return (
        <div className='fooster'>

            <div className='logo2'>
                <h1>Sound</h1>
                <h3>Xuyến</h3>
            </div>

            <div className="stock"></div>

            <div className="contact1">
                <div className="contact-title1">
                    <p><span>Hotline:</span> 0971 870 712 - 088 689 1203</p>
                    <p><span>Email:</span> soundxuyen@gmail.com</p>
                    <p><span>Facebook:</span> <a style={{ textDecoration: "none" }} href="https://www.facebook.com/soundxuyenlab">Sound Xuyến</a></p>
                    <p><span>Instagram:</span> <a style={{ textDecoration: "none" }} href="https://www.instagram.com/soundxuyen.lab/">soundxuyen.lab</a></p>
                </div>
            </div>

            <div className="stock"></div>

            <a href='https://www.facebook.com/soundxuyenlab' className='connect1'>
                <FontAwesomeIcon icon={faMicrophone} size='3x' color='#232323' style={{margin: '10px'} }/>
            </a>

        </div>
    )
}

export default SXFooster