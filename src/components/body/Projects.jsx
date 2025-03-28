import './projects.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useState} from 'react';
import {ImageTextSized} from './ImageText';
import {useTransition, animated} from '@react-spring/web';

import tabgpt from '../../resources/tabgpt.png';
import flappy from '../../resources/flappy.png';
import doge from '../../resources/doge.jpeg';
import asl from '../../resources/asl.png';
import campus from '../../resources/campusexplorer.png'

// reverse value assigned here to prevent glitching inconsistent, to be fixed
// when fixed, can be stored in json files instead
const p1 = {
    subtitle: "Object Classification",
    text: "An exploration into computer vision with object classification using convolutional neural networks.",
    src: doge,
    reverse: Math.random() > 0.5,
    link: "https://github.com/j-ackyao/object-classification",
}

const p2 = {
    subtitle: "Guitar Tab Editor",
    text: "Simple guitar editor with data persistence using JSON and unit testing with JUnit.",
    src: tabgpt,
    reverse: Math.random() > 0.5,
    link: "https://github.com/j-ackyao/tab-gpt",
}

const p3 = {
    subtitle: "KY Engine",
    text: "2D game engine with a simple entity system and axis-aligned bounding box collisions.",
    src: flappy,
    reverse: Math.random() > 0.5,
    link: "https://github.com/j-ackyao/KY-Engine",
}

const p4 = {
    subtitle: "ASL Translate",
    text: "Web application that translates English to ASL demonstrated by a compiled signing video.",
    src: asl,
    reverse: Math.random() > 0.5,
    link: "http://jackyao.ddns.net/asl-translate/",
}

const p5 = {
    subtitle: "Campus explorer",
    text: "Map application to view lecture halls and approximating travel times.",
    src: campus,
    reverse: Math.random() > 0.5,
    link: "https://github.com/j-ackyao/",
}

const projectsList = [p4, p5, p1, p2, p3];

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(0);

    const transition = useTransition(index, {
        from:  {x: -1500 * dir, y: 0, opacity: 0},
        enter: {x: 0,     y: 0, opacity: 1},
        leave: {x: 1500 * dir,  y: 0, opacity: 0},
    });

    const next = () => {
        setDir(1);
        index >= projectsList.length - 1 ? setIndex(index => 0) : setIndex(index => index + 1);
    };
    const prev = () => {
        setDir(-1);
        index <= 0 ? setIndex(index => projectsList.length - 1) : setIndex(index => index - 1);
    }

    return (
        <div className='projects-container'>
            <div className='body-subtitle projects'>PROJECTS</div>
            <div className='project-display'>
            <div className='project-arrow' onClick={next}>&lt;</div>
                <div className='project-container' >
                    {transition((style, item) => {
                        style.transform = 'translateX(0)';
                        return (
                            <animated.div onClick={() => {window.location = projectsList[index].link}} style={style} className='project-click'> 
                                <ImageTextSized {...projectsList[item]} textsize={'1.5vw'} subtitlesize={'3vw'} imagescale={'100%'} />
                            </animated.div>
                        );
                    })}
                </div>
            <div className='project-arrow' onClick={prev}>&gt;</div>
            </div>
            <div className='projects-minitext'>Click the arrows to view more or checkout my <a href='https://github.com/j-ackyao'>github</a> to see many more!</div>
        </div>
    );
}