import ImageText from './ImageText';

const params = {
    subtitle: "MORE ME",
    text: "word. ".repeat(70),
    src: "https://t4.ftcdn.net/jpg/00/37/56/49/360_F_37564907_UF78p26mRJWYrYqJ97G2Ym5iN4IhDCMX.jpg",
    reverse: false,
}

export default function More() {
    return (
        <ImageText {...params}/>
    )
}