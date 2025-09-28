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


const ta = {
    company: "University of British Columbia",
    position: "Teaching Assistant",    
    dates: "Sep 2025 - Present",
    desc: "Directing weekly labs and emulating software industry practices",
}

const fe = {
    company: "UBC Formula Electric",
    position: "Telemetry Engineer",
    dates: "Sep 2025 - Present",
    desc: "Collaborating on the backend for data acquisition and telemetry systems",
}

const rvw = {
    company: "Rivian VW",
    position: "Software Engineer Intern",
    dates: "Jun 2025 - Sep 2025",
    desc: "Designed GPS diagnostic capture and playback for Mapping & Navigations team",
}


const rv = {
    company: "Rivian",
    position: "Software Engineer Intern",
    dates: "Sep 2024 - Apr 2025",
    desc: "Developed with the Infotainment Applications team, maintaining the Android apps platform",
}

const cn = {
    company: "Code Ninjas",
    position: "Code Instructor",
    dates: "Jul 2021 - Apr 2022",
    desc: "Led game development curriculums in youth classrooms",
}


export default function Work() {
    return (
        <div className='work-container'>
            <div className='body-subtitle work'>EXPERIENCES</div>
            <div className='work-list'>
                <Experience {...ta}/>
                <Experience {...fe}/>
                <Experience {...rvw}/>
                <Experience {...rv}/>
                <Experience {...cn}/>
            </div>

        </div>
    )
}