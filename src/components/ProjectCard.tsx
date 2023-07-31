import React from "react"

// TODO: figure out typeing functional components.

interface Props {
    title: string
    description: string
    link: string
    thumbnailSrc: string
    thumbnailAlt: string
    about: string
    technologies: string
}

export function ProjectCard(props: Props): JSX.Element{
    // const title = props.title
    // const description = props.description
    // const link = props.link
    // const thumbnailSrc = props.thumbnailSrc
    // const thumbnailAlt = props.thumbnailAlt
    // const technologies = props.technologies
    // const about = props.about

    return (
        <div className="projectCard">
            <article>
                <img src={props.thumbnailSrc} alt={props.thumbnailAlt}/>
                <h2><a href={props.link}>{props.title}</a></h2>
                <h3>{props.description}</h3>
                <p>{props.technologies}</p>
                <p>{props.about}</p>
            </article>
        </div>  
    )
 
}

export function projectCardFactory(projects: Array<Props>): JSX.Element[] {
    let cards: Array<JSX.Element> = []
    let id = 0
    projects.forEach(element => { 
        cards.push(ProjectCard(element))
    });
    return cards
}
