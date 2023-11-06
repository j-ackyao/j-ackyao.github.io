import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import BigName from './components/Intro';
import {Parallax} from '@react-spring/parallax';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Parallax>
      <Header />
      <BigName />
      <a style={{fontSize:'1000px',color:'white'}} href={"https://bit.ly/2005221"}>_____</a>
    </Parallax>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
