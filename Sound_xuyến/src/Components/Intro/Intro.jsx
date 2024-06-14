import React from 'react'
import './Intro.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {
    return (
        <div className='intro' id='home'>
            <div className='slogan'>
                <FontAwesomeIcon icon={faMicrophone} size='3x' className='icon' />
                <h1><span>Sound xuyến</span>, Tự tin kể trọn câu chuyện</h1>
            </div>
            <a href='https://www.facebook.com/soundxuyenlab' className='connect0'>
                <h4>Conect with Us</h4>
            </a>
        </div>
    )
}

export default Intro