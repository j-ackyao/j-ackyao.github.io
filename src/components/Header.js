import React from 'react';
import './header.css';
import HorizontalLine from './HorizontalLine';
import LogoLink from './IconLink';


const logosize = "30px";

export default function Header() {
    return (
        <div className='header-container'>
            <a className='header-mail' href='mailto: jackyao2004@gmail.com'>jackyao2004@gmail.com</a>
            <HorizontalLine />
            <div className='header-name'>Jack Yao</div>
            <div className='header-iconlinks'>
                <LogoLink size={logosize} link={"https://github.com/j-ackyao"} src={"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"}/>
                <LogoLink size={logosize} link={"https://www.linkedin.com/in/j-ackyao"} src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}/>
                <LogoLink size={logosize} link={"https://google.com"} src={"https://media.discordapp.net/attachments/995877199284535366/1166856208297234492/IMG_4781.gif?width=1091&height=959"}/>
            </div>
        </div>
    )
};