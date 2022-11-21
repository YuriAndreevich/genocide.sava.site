import React from 'react'
import './Footer.scss'
import SVG from "react-inlinesvg";

import githubSVG from '../../assets/img/Github.png'

function Footer() {
    return (
        <div className='footer'><div className='footer-content'>Copyright ©2022 All rights reserved | <a href='https://github.com/YuriAndreevich' target='_blank' rel="noreferrer"><img src="https://preview.colorlib.com/theme/stellar/images/clients/icon-github.svg" alt="GitHub" /></a></div></div>
    )
}

export default Footer