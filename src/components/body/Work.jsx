import './work.css';



function Experience({company, position, dates, desc}) {
    return (
        <div className='work-experience-container'>
            <div className='work-experience-header'>
                <div className='work-experience-company'>{company}</div>
                <div className='work-experience-dates'>{dates}</div>
            </div>
            <div className='work-experience-body'>
                <div className='work-experience-position'>{position}</div>
                <div className='work-experience-desc'>{desc}</div>
            </div>
            <div>

            </div>
        </div>
    )
}

const c = {
    company: "Code Ninjas",
    position: "Code Instructor",
    dates: "Jul 2021 - Apr 2022",
    desc: "Taught JavaScript and Unity to youths ranging from ages 4 to 16 in a classroom of 20\n and guided students with patience and enthusiasm in their personal game development.",
}


export default function Work() {
    return (
        <div className='work-container'>
            <div className='body-subtitle work'>WORK EXPERIENCE</div>
            <div className='work-list'>
                <Experience {...c}/>
            </div>

        </div>
    )
}