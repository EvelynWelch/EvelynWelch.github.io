import { makeid } from "../utilities"

interface Props {
    title: string
    description: string
    link: string
    thumbnailSrc: string
    thumbnailAlt: string
    about: string
    technologies: string
    key?: string
    
}

// TODO: turn these into 2 collumns with the info on one side, and the img on the other
// TODO: figure out how I want to display it on mobile.

export function ProjectCard(props: Props): JSX.Element{
    return (
        <div className="projectCard " key={props.key}>
            <article>   
                <div className="projectCard-text-wrapper">
                    <h2><a href={props.link}>{props.title} <span className="link-icon"> &#128279; </span>   </a></h2>
                    <h3>{props.description}</h3>
                    <p>{props.technologies}</p>
                    <p>{props.about}</p>
                </div> 
                <div className="img-wrapper">
                    <img src={props.thumbnailSrc} alt={props.thumbnailAlt}/>
                </div>
            </article>
        </div>  
    )
}

// TODO: make this assign each element a key and unique id.

export function projectCardFactory(projects: Array<Props>): JSX.Element[] {
    let cards: Array<JSX.Element> = []
    projects.forEach(element => { 
        element.key = makeid(8)
        cards.push(ProjectCard(element))
    });
    return cards
}
