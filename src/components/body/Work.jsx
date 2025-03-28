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


const rvw = {
    company: "Rivian VW Group",
    position: "Software Engineer Intern",
    dates: "Jun 2025 - Present",
    desc: "Interning on the Navigations team in Palo Alto",
}


const rv = {
    company: "Rivian",
    position: "Software Engineer Intern",
    dates: "Sept 2024 - Apr 2025",
    desc: "Developed with the Infotainment Applications team, maintaining the Android apps platform",
}

const cn = {
    company: "Code Ninjas",
    position: "Code Instructor",
    dates: "Jul 2021 - Apr 2022",
    desc: "Led game development curriculums in classrooms of 20 youths with JavaScript and Unity",
}


export default function Work() {
    return (
        <div className='work-container'>
            <div className='body-subtitle work'>WORK EXPERIENCE</div>
            <div className='work-list'>
                <Experience {...rvw}/>
                <Experience {...rv}/>
                <Experience {...cn}/>
            </div>

        </div>
    )
}