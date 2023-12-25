import ImageText from './ImageText';
import me from '../../resources/me.jpg';

const params = {
    subtitle: "ABOUT ME",
    text: "Hi! I'm Jack Yao, a second year student at UBC studying Combined Computer Science and Statistics. My aspiring future is to work in the field of AI and ML, but looking to establish a foundation in software development in the meantime.",
    src: me,
    reverse: true,
}

export default function About() {
    return (
        <ImageText {...params}/>
    )
}

