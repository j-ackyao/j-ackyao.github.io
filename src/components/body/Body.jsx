import './body.css';
import About from './About';
import More from './More';
import Work from './Work';
import Projects from './Projects'

export default function Body() {
    return (
        <div className='body-container'>
            <About />
            {/* <More /> */}
            <Work />
            <Projects />
        </div>
    )
}