import './projects.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useState} from 'react';
import {ImageTextSized} from './ImageText';
import {useTransition, animated} from '@react-spring/web';

import tabgpt from '../../resources/tabgpt.png';
import flappy from '../../resources/flappy.png';


const p1 = {
    subtitle: "Object Classification",
    text: "An exploration into computer vision with object classification using convolutional neural networks.",
    src: "https://raw.githubusercontent.com/j-ackyao/object-classification/main/md_files/object_classification_39_1.png",
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
            <div className='projects-minitext'>Click below to view more</div>
            {/* <button onClick={nextVis}>{visible ? 'visible' : 'invisible'}</button> */}
            <div className='project-display' onClick={next} >
            {transition((style, item) => {
                style.position = 'absolute';
                style.transform = 'translateX(-50%)';
                style.width = '70%';
                return (
                    <animated.div style={style}> 
                        <ImageTextSized {...projectsList[item]} textsize={'1.5vw'} subtitlesize={'3vw'} imagescale={'100%'} />
                    </animated.div>
                );
            })}
            </div>

        </div>
    );
}