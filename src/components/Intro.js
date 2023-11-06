import './intro.css';
import {ParallaxLayer} from '@react-spring/parallax';


export default function BigName() {
    return (
        <div className='intro-container'>
            <ParallaxLayer speed={-0.15}>
                <img src={"https://media.discordapp.net/attachments/995877199284535366/1166856208297234492/IMG_4781.gif?width=1091&height=959"}
                    alt={"sdsdfsfd"} 
                    style={{
                        width: '100%',
                        objectPosition: '0px 100px'
                    }}
                />
            </ParallaxLayer>
            <ParallaxLayer speed={-0.25} className='intro-name-container'>
                <div className='intro-name'>Jack Yao</div>
                <div className='intro-subtitle'>Leader, Thinker, Innovator</div>
            </ParallaxLayer>

        </div>
    )
}