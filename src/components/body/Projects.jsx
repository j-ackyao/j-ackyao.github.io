import './projects.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useState} from 'react';
import {ImageTextSized} from './ImageText';
import {useTransition, animated} from '@react-spring/web';

import tabgpt from '../../resources/tabgpt.png';
import flappy from '../../resources/flappy.png';
import doge from '../../resources/doge.jpeg';


const p1 = {
    subtitle: "Object Classification",
    text: "An exploration into computer vision with object classification using convolutional neural networks.",
    src: doge,
    reverse: Math.random() > 0.5,
}

const p2 = {
    subtitle: "Guitar Tab Editor",
    text: "Simple guitar editor with data persistence using JSON and unit testing with JUnit.",
    src: tabgpt,
    reverse: Math.random() > 0.5,
}


const p3 = {
    subtitle: "KY Engine",
    text: "2D game engine with a simple entity system and axis-aligned bounding box collisions.",
    src: flappy,
    reverse: Math.random() > 0.5,
}

const projectsList = [p1, p2, p3];

export default function Projects() {
    const [index, setIndex] = useState(0);

    const transition = useTransition(index, {
        from:  {x: -1500, y: 0, opacity: 0},
        enter: {x: 0,     y: 0, opacity: 1},
        leave: {x: 1500,  y: 0, opacity: 0},
    });

    const next = () => {
        index >= projectsList.length - 1 ? setIndex(index => 0) : setIndex(index => index + 1);
    };
    // const lastIndex = () => {
    //     index <= 0 ? setIndex(index => projectsList.length - 1) : setIndex(index => index - 1);
    // }

    return (
        <div className='projects-container'>
            <div className='body-subtitle projects'>PROJECTS</div>
            {/* <button onClick={nextVis}>{visible ? 'visible' : 'invisible'}</button> */}
            <div className='project-display'>
                <div className='project-click' onClick={next} >
                    {transition((style, item) => {
                        style.position = 'absolute';
                        style.transform = 'translateX(0)';
                        style.width = '70%';
                        return (
                            <animated.div style={style}> 
                                <ImageTextSized {...projectsList[item]} textsize={'1.5vw'} subtitlesize={'3vw'} imagescale={'100%'} />
                            </animated.div>
                        );
                    })}
                </div>
            </div>
            <div className='projects-minitext'>Click above to view more or checkout my <a href='https://github.com/j-ackyao'>github</a>!</div>

        </div>
    );
}