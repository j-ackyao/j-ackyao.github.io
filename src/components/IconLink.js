

export default function IconLink({src, link, size}) {

    return (
        <a href={link} >
            <img src={src} alt={"Icon link"} style={{
                height: size,
                width: size
            }}/>
        </a>
    )
}