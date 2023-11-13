import './projects.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax';


export default function Projects() {
    var index = 0;
    return (
        <div className='projects-container'>
            <div className='body-subtitle projects'>PROJECTS</div>
            <Parallax pages={2} onClick={this.scrollTo(1)} className='project-preview' style={{position:'relative', height:'100px'}} horizontal={true}>
                <ParallaxLayer className='project'>
                    test
                </ParallaxLayer>
                <ParallaxLayer offset={1} className='project'>
                    test
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}