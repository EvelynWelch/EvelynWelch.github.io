import { generateKey } from "crypto"
import { makeid } from "../utilities"

import React, { useState } from 'react';

const data = require("../portfolioData");

const projectCardData = [
    data.projectStatMiner,
    data.projectBraveNW,
    data.projectMesh,
    data.projectBraveNWdb
]

interface Props {
    title: string
    description: string
    link: string
    thumbnailSrc: string
    thumbnailAlt: string
    about: string
    technologies: string
    key: string
}

// TODO: figure out how I want to display it on mobile.
// TODO: make all the thumbnails the same size
// TODO: add the thumbnail animations
// TODO: Add an "X" out button to the shown Project
// TODO: Fix the layout of the ProjectCard

export function ProjectCard(props: Props): JSX.Element {
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
                    <img src={props.thumbnailSrc} alt={props.thumbnailAlt} />
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

export function getThumbnailProps(projects: Array<Props>): Array<thumbnailProps> {
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


function ProjectCardThumbnail(props: Props, onclick: Function) {
    return (
        <div className="thumbnail" id={props.key} onClick={e => onclick(e)}>

            <img src={props.thumbnailSrc} alt={props.thumbnailAlt} />

            <h2>{props.title}</h2>
        </div>
    )
}

function thumbnailFactory(thumbnailData: Props[], onclick: Function): JSX.Element[] {
    // console.log(typeof thumbnailData)
    // console.log(thumbnailData.length)
    // console.log(Array.isArray(thumbnailData))
  
    let thumbnails: Array<JSX.Element> = []
    thumbnailData.forEach(element => {

        thumbnails.push(ProjectCardThumbnail(element, onclick))
    })
    return thumbnails
}

export function ProjectCardThumbnails(thumbnailData: Props[], onclick: Function): JSX.Element {
    const thumbnails = thumbnailFactory(thumbnailData, onclick)
    return (
        <div className="thumbnail-container" id="thumbail-animation-target">
            {thumbnails}
        </div>
    )
}

// The animation should pop off whatever project got clicked on
// minimize the about me
// shrink the thumbnail and move them inline with the "about me" <h2>

// export function ProjectCardThumbnailAnimations(targetKey: string, projectData: Array<Props>) {
//     const PROJECT_DISPLAY_DIV = "project-display"
//     const target = document.getElementById(targetKey)

//     target!.style.display = "none"
//     const targetData = projectData.find((element) => element.key = targetKey)
//     const projectContainer = document.getElementById(PROJECT_DISPLAY_DIV)
//     const project = ProjectCard(targetData!)

// }

// TODO: find where to get the mouse event type.
// export function thumbnailOnClick(e: any) {

//     const key = e.currentTarget.id

//     ProjectCardThumbnailAnimations(key, projectCardData)
// }




export function Projects(props: Array<Props>): JSX.Element {
    const [projectData, setProjectData] = useState(props);
    const [focusedProject, setFocusedProject] = useState<JSX.Element | null>(null)
    const [focusedProjectKey, setFocusedProjectKey] = useState<string | null>(null)
    // console.log(projectData) 

    const onClick = (e: any) => {
        // unhide element if one is selected
        if(focusedProject != null) {
        //    let k = focusedProject.key
            let hiddenThumbnail = document.getElementById(focusedProjectKey!)
            hiddenThumbnail!.style.display = "block"
            console.log(focusedProject.props)
        }

        // hide the clicked element
        let clickedElement = e.currentTarget
        // console.log(clickedElement)
        clickedElement.style.display = "none"

        let clickedId = clickedElement.id
        setFocusedProjectKey(clickedId)
        // console.log(clickedId)

        for (let i = 0; i < projectData.length; i++) {
            if(projectData[i].key == clickedId){
                // console.log("id found")
                setFocusedProject(ProjectCard(projectData[i]))
            }
        }
       
        // setFocusedProject(ProjectCard(data!))
    }

    let thumbnails = ProjectCardThumbnails(projectData, onClick)

    return (
        <div className="projects-container">
            {thumbnails}
            <div id="focussed-project">
                {focusedProject}
            </div>
        </div>
    )
}
