import './imagetext.css'


function image(src, scale) {
    if (scale == null) {
        scale = '100%';
    }

    return (
        <div className='image-text-image'>
            <img style={{width:scale}} alt={src} src={src}/> 
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


export function ImageTextSized({src, reverse, text, subtitle, imagescale, textsize, subtitlesize}) {
    return (
        <div className='image-text-container' >
            {reverse ? image(src, imagescale) : null}
            <div className='image-text-text'>
                <div className='body-subtitle' style={{fontSize:subtitlesize}}>{subtitle}</div>
                <div className='image-text-body' style={{fontSize:textsize}}>{text}</div>
            </div>
            {reverse ? null : image(src, imagescale)}
        </div>
    )
}