

export default function IconLink({src, link, size}) {

    return (
        <a href={link} >
            <img src={src} style={{
                height: size,
                width: size
            }}/>
        </a>
    )
}