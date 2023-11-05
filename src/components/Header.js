import React from 'react';
import Paper from '@mui/material/Paper';
import './header.css';
import HorizontalLine from './HorizontalLine';
import LogoLink from './IconLink';


const logosize = "50px";

export default function Header() {
    return (
        <div className='header-container'>
            <a className='header-mail'>jackyao2004@gmail.com</a>
            <HorizontalLine />
            <a className='header-name'>Jack Yao</a>
            <div className='header-iconlinks'>
                <LogoLink size={logosize} link={"https://google.com"} src={"https://media.discordapp.net/attachments/995877199284535366/1166856208297234492/IMG_4781.gif?width=1091&height=959"}/>
                <LogoLink size={logosize} link={"https://google.com"} src={"https://media.discordapp.net/attachments/995877199284535366/1166856208297234492/IMG_4781.gif?width=1091&height=959"}/>
                <LogoLink size={logosize} link={"https://google.com"} src={"https://media.discordapp.net/attachments/995877199284535366/1166856208297234492/IMG_4781.gif?width=1091&height=959"}/>
            </div>
        </div>
    )
};