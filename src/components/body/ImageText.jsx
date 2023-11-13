import './imagetext.css'


function image(src) {
    return (
        <div className='image-text-image'>
            <img style={{width:'100%'}} alt={src} src={src}/> 
        </div>
    );
}

export default function ImageText({src, reverse, text, subtitle}) {
    return (
        <div className='image-text-container'>
            {reverse ? image(src) : null}
            <div className='image-text-text'>
                <div className='body-subtitle'>{subtitle}</div>
                <div className='image-text-body'>{text}</div>
            </div>
            {reverse ? null : image(src)}
        </div>
    )
}