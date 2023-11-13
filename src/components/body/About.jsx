import ImageText from './ImageText';

const params = {
    subtitle: "ABOUT ME",
    text: "Hi! I'm Jack Yao, a second year student at UBC studying Combined Computer Science and Statistics. My aspiring future is to work in the field of AI and ML, but looking to establish a foundation in software development in the meantime.",
    src: "https://t4.ftcdn.net/jpg/00/37/56/49/360_F_37564907_UF78p26mRJWYrYqJ97G2Ym5iN4IhDCMX.jpg",
    reverse: true,
}

export default function About() {
    return (
        <ImageText {...params}/>
    )
}

