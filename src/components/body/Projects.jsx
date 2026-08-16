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
import subaru from '../../resources/subaru.png'
import videoeditor from '../../resources/videoeditor.jpg'


function coinflip() {
    return Math.random() > 0.5;
}
// reverse value assigned here to prevent glitching inconsistent, to be fixed
// when fixed, can be stored in json files instead
const p1 = {
    subtitle: "Object Classification",
    text: "An exploration into computer vision with object classification using convolutional neural networks.",
    src: doge,
    reverse: coinflip(),
    link: "https://github.com/j-ackyao/object-classification",
}

const p2 = {
    subtitle: "Guitar Tab Editor",
    text: "Simple guitar editor with data persistence using JSON and unit testing with JUnit.",
    src: tabgpt,
    reverse: coinflip(),
    link: "https://github.com/j-ackyao/tab-gpt",
}

const p3 = {
    subtitle: "KY Engine",
    text: "2D game engine with a simple entity system and axis-aligned bounding box collisions.",
    src: flappy,
    reverse: coinflip(),
    link: "https://github.com/j-ackyao/KY-Engine",
}

const p4 = {
    subtitle: "ASL Translate",
    text: "Web application that translates English to ASL demonstrated by a compiled signing video.",
    src: asl,
    reverse: coinflip(),
    link: "https://github.com/sammy-kuang/asl-translate",
}

const p5 = {
    subtitle: "Campus explorer",
    text: "Map application to view lecture halls and approximating travel times.",
    src: campus,
    reverse: coinflip(),
    link: "https://github.com/j-ackyao/",
}

const p6 = {
    subtitle: "Subaru ECU reader",
    text: "Modern rendition of JDM Subaru ECU reader in Rust and simple HTML interface.",
    src: subaru,
    reverse: coinflip(),
    link: "https://github.com/j-ackyao/ssm-reader",
}

const p7 = {
    subtitle: "Vibecoded video editor",
    text: "Totally AI implemented lightweight video editor, human-out-the-loop style.",
    src: videoeditor,
    reverse: coinflip(),
    link: "https://github.com/j-ackyao/video-editor",
}

const projectsList = [p7, p6, p4, p5, p1, p2, p3];

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const transition = useTransition(index, {
        from:  {x: -1500 * dir, y: 0, opacity: 0},
        enter: {x: 0,     y: 0, opacity: 1},
        leave: {x: 1500 * dir,  y: 0, opacity: 0},
        onStart: () => setIsTransitioning(true),
        onRest: () => setIsTransitioning(false),
    });

    const next = () => {
        setDir(-1);
        index >= projectsList.length - 1 ? setIndex(index => 0) : setIndex(index => index + 1);
    };
    const prev = () => {
        setDir(1);
        index <= 0 ? setIndex(index => projectsList.length - 1) : setIndex(index => index - 1);
    }

    const handleProjectClick = () => {
        if (isTransitioning) return;
        window.location.href = projectsList[index].link;
    };

    return (
        <div className='projects-container'>
            <div className='body-subtitle projects'>PROJECTS</div>
            <div className='project-display'>
                <div className='project-arrow' onClick={prev}>&lt;</div>
                <div className='project-container' >
                    {transition((style, item) => {
                        style.transform = 'translateX(0)';
                        return (
                            <animated.div onClick={handleProjectClick} style={{ ...style, pointerEvents: isTransitioning ? 'none' : 'auto', cursor: isTransitioning ? 'default' : 'pointer' }} className='project-click'> 
                                <ImageTextSized {...projectsList[item]} textsize={'clamp(0.9rem, 0.8vw + 0.7rem, 1.8rem)'} subtitlesize={'clamp(1.4rem, 1.4vw + 1rem, 4rem)'} imagescale={'100%'} />
                            </animated.div>
                        );
                    })}
                </div>
                <div className='project-arrow' onClick={next}>&gt;</div>
            </div>
            <div className='projects-minitext'>Click the arrows to view more or checkout my <a href='https://github.com/j-ackyao'>github</a> to see many more!</div>
        </div>
    );
}