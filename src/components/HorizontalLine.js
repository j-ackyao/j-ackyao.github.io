

export default function HorizontalLine({color, thickness}) {
    if (!thickness)
        thickness = '1px';
    if (!color)
        color = 'black';
    return (
        <hr
        style={{
            color: color,
            backgroundColor: color,
            border:'none',
            height: thickness,
            width: '100%',
        }}
    />
    )
}