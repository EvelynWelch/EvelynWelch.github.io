import React from "react"
interface Props {
    title: string,
    description: string,
    link: string,
    thumbnailSrc: string,
    thumbnailAlt: string,
    about: string,
    technologies: string,
}
const ProjectCard = function (props: Props) {
    const title = props.title
    const description = props.description
    const link = props.link
    const thumbnailSrc = props.thumbnailSrc
    const thumbnailAlt = props.thumbnailAlt
    const technologies = props.technologies
    const about = props.about

    return
    <div className="projectCard">
        <article>
            <img src={thumbnailSrc} alt={thumbnailAlt}/>
            <h2><a href={link}>{title}</a>{title}</h2>
            <h3>{description}</h3>
            <p>{technologies}</p>
            <p>{about}</p>
        </article>
    </div>
}

export default ProjectCard