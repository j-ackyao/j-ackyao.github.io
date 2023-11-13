import './intro.css';
import {ParallaxLayer} from '@react-spring/parallax';


const backgroundspeed = 0.25;
const namespeed = /*-0.25*/ -0.15;
const backgroundimagesrc = "https://t4.ftcdn.net/jpg/00/37/56/49/360_F_37564907_UF78p26mRJWYrYqJ97G2Ym5iN4IhDCMX.jpg";

export default function BigName() {
    return (
        <div className='intro-container'>
            <ParallaxLayer speed={backgroundspeed} className='intro-background-container'>
                <img className='intro-background-image'
                    src={backgroundimagesrc}
                    alt={"Parallax background"}
                />
            </ParallaxLayer>
            <ParallaxLayer speed={namespeed} className='intro-name-container'>
                <div className='intro-name'>Jack Yao</div>
                <div className='intro-subtitle'>Hello 👋👋👋</div>
            </ParallaxLayer>

        </div>
    )
}