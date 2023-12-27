import React from 'react';
import './header.css';
import HorizontalLine from '../HorizontalLine';
import LogoLink from '../IconLink';


const logosize = "30px";

function Name() {
    return (
        <div className='header-name'>JY</div>
    )
}

function Mail() {
    return (
        <a className='header-mail' href='mailto: jackyao2004@gmail.com'>jackyao2004@gmail.com</a>
    )
}

function Links() {
    return (
        <div className='header-iconlinks'>
            <LogoLink size={logosize} link={"https://github.com/j-ackyao"} src={"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"}/>
            <LogoLink size={logosize} link={"https://www.linkedin.com/in/j-ackyao"} src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}/>
        </div>
    )
}

export default function Header() {
    return (
        <div className='header-container'>
            <Name />
            <HorizontalLine />
            <Mail />
            <Links />
        </div>
    )
};