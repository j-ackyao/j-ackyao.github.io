import './projects.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useState} from 'react';
import {ImageTextSized} from './ImageText';
import {useTransition, animated} from '@react-spring/web';



const p1 = {
    subtitle: "Object Classification",
    text: "An exploration into computer vision with object classification using convolutional neural networks.",
    src: "https://raw.githubusercontent.com/j-ackyao/object-classification/main/md_files/object_classification_39_1.png",
    reverse: Math.random() > 0.5,
}

const p2 = {
    subtitle: "Guitar Tab Editor",
    text: "Simple guitar editor with data persistence using JSON and unit testing with JUnit.",
    src: "https://private-user-images.githubusercontent.com/60021675/292724407-792cfe9e-c079-4041-85f6-649d68c8a20c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM0ODgzMzIsIm5iZiI6MTcwMzQ4ODAzMiwicGF0aCI6Ii82MDAyMTY3NS8yOTI3MjQ0MDctNzkyY2ZlOWUtYzA3OS00MDQxLTg1ZjYtNjQ5ZDY4YzhhMjBjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjI1VDA3MDcxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE5MDEzNzA0NjgzZjk3ODhlZTMwNDVlNTMwNzJiNWY1NzczMTljMjI3YTNjMGI5NTY1ZmU5MGQwM2EyZTI1ODcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1pe6pVIdJkGpEe_P7utSV09GQWU_fxLtB6lWXonAjfc",
    reverse: Math.random() > 0.5,
}


const p3 = {
    subtitle: "KY Engine",
    text: "2D game engine with a simple entity system and axis-aligned bounding box collisions.",
    src: "https://private-user-images.githubusercontent.com/60021675/292724172-1db94ce7-b6fe-4994-9747-a243b61f7c86.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM0ODgyODEsIm5iZiI6MTcwMzQ4Nzk4MSwicGF0aCI6Ii82MDAyMTY3NS8yOTI3MjQxNzItMWRiOTRjZTctYjZmZS00OTk0LTk3NDctYTI0M2I2MWY3Yzg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjI1VDA3MDYyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZjNzY0MmI1YWI4NzE3ODUxNzhlMzdmYjljNDc4NmQzMjhkYWViODk3ZDFkMmI0YWQ2ODAzZGE0YTRhZGJkNDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.qkwEkzESOoKhuJwghzeloZFOybm8Zcpo9ERK8OhgGPo",
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