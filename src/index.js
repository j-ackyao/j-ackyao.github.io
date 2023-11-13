import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import BigName from './components/intro/Intro';
import Body from './components/body/Body';
import {Parallax} from '@react-spring/parallax';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const parallaxconfig = {
  mass: 1,
  friction: 26,
  tension: 200,
}


root.render(
  <React.StrictMode>
    <Parallax config={parallaxconfig}>
      <Header />
      <BigName />
      <Body />
      <a style={{fontSize:'1000px',color:'white'}} href={"https://bit.ly/2005221"}>_____</a>
    </Parallax>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
