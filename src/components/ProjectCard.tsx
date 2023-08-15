import { generateKey } from "crypto"
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

// TODO: figure out how I want to display it on mobile.
// TODO: make all the thumbnails the same size
// TODO: add the thumbnail animations

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

export function projectCardFactory(projects: Array<Props>): JSX.Element[] {
    let cards: Array<JSX.Element> = []
    projects.forEach(element => { 
        element.key = makeid(8)
        cards.push(ProjectCard(element))
    });
    return cards
}



interface thumbnailProps {
    title: string,
    imgSrc: string,
    imgAlt: string,
    key?: string,
}

export function getThumbnailProps(projects: Array<Props>): Array<thumbnailProps>{
    let thumbnailProps: thumbnailProps[] = []
    projects.forEach(element => {
        thumbnailProps.push({
            title: element.title,
            imgSrc: element.thumbnailSrc,
            imgAlt: element.thumbnailAlt,
        })
    })
    return thumbnailProps
}


function ProjectCardThumbnail(props: thumbnailProps) {
    return (
        <div className="thumbnail">
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <h2>{props.title}</h2>
        </div>
    )
}

function thumbnailFactory(thumbnailData: thumbnailProps[]): JSX.Element[] {
    console.log(thumbnailData)
    let thumbnails: Array<JSX.Element> = []
    thumbnailData.forEach(element => {
        element.key = makeid(8)
        thumbnails.push(ProjectCardThumbnail(element))
    })
    return thumbnails
}

export function ProjectCardThumbnails(thumbnailData: thumbnailProps[]): JSX.Element {
    const thumbnails = thumbnailFactory(thumbnailData)
    return (
        <div className="thumbnail-container">
            {thumbnails}
        </div>
    )
}