import './projects.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useState} from 'react';
import ImageText from './ImageText';
import {useTransition, animated} from '@react-spring/web';


// function Project() {
//     return (
//         <div>project</div>
//     )
// }

const params = {
    subtitle: "Project 1",
    text: "About 1",
    src: "https://t4.ftcdn.net/jpg/00/37/56/49/360_F_37564907_UF78p26mRJWYrYqJ97G2Ym5iN4IhDCMX.jpg",
    reverse: Math.random() > 0.5,
}

const params2 = {
    subtitle: "Project 2",
    text: "About 2",
    src: "https://t4.ftcdn.net/jpg/00/37/56/49/360_F_37564907_UF78p26mRJWYrYqJ97G2Ym5iN4IhDCMX.jpg",
    reverse: Math.random() > 0.5,
}


const params3 = {
    subtitle: "Project 3",
    text: "About 3",
    src: "https://t4.ftcdn.net/jpg/00/37/56/49/360_F_37564907_UF78p26mRJWYrYqJ97G2Ym5iN4IhDCMX.jpg",
    reverse: Math.random() > 0.5,
}

const projectsList = [params, params2, params3]

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
            <button onClick={next}>current index: {index} / {projectsList.length-1}</button>
            {/* <button onClick={nextVis}>{visible ? 'visible' : 'invisible'}</button> */}
            <div className='project-display'>
                {transition((style, item) => {
                    style.position = 'absolute';
                    style.transform = 'translateX(-50%)';
                    return (
                        <animated.div style={style}> 
                            <ImageText {...projectsList[item]} />
                        </animated.div>
                    );
                })}
            </div>
        </div>
    );
}