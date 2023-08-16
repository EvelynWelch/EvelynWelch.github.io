
import React, { useEffect, useState } from 'react';
// import { Route, Routes, Outlet } from "react-router";
import { generateKey } from "crypto"
import { makeid, toggleElementVisibility } from "../utilities"
import { JsxEmit } from 'typescript';


const data = require("../portfolioData");

const projectCardData = [
    data.projectStatMiner,
    data.projectBraveNW,
    data.projectMesh,
    data.projectBraveNWdb
]

projectCardData.forEach(e => { e.key = makeid(8) })

// function assignIds(){
//     projectCardData.forEach(e => {e.key = makeid(8)})
// }
// assignIds()

interface Props {
    title: string
    description: string
    link: string
    thumbnailSrc: string
    thumbnailAlt: string
    about: string
    technologies: string
    key: string
    // isThumbnail: true
    // onclick: Function
}

// TODO: figure out how I want to display it on mobile.
// TODO: make all the thumbnails the same size
// TODO: add the thumbnail animations
// TODO: Add an "X" out button to the shown Project
// TODO: Fix the layout of the ProjectCard

export function ProjectCard(props: Props, onclick: Function, isThumbnail: boolean = true): JSX.Element {
    if (isThumbnail) {
        return (
            <div className="thumbnail" id={props.key} onClick={e => onclick(e)}>
                <img src={props.thumbnailSrc} alt={props.thumbnailAlt} />
                <h2>{props.title}</h2>
            </div>
        )
    } else {
        return (
            <div className="projectCard " id={props.key}>
                <article>
                    <div className="projectCard-text-wrapper">
                        <h2><a href={props.link}>{props.title} <span className="link-icon"> &#128279;</span></a></h2>
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
}

export function projectCardFactory(projects: Array<Props>, onclick: Function): JSX.Element[] {
    let cards: Array<JSX.Element> = []
    projects.forEach(element => {
        cards.push(ProjectCard(element, onclick))
    });
    return cards
}

// The animation should pop off whatever project got clicked on
// minimize the about me
// shrink the thumbnail and move them inline with the "about me" <h2>
export function Projects(props: Array<Props>): JSX.Element {
    // const [projectData, setProjectData] = useState(props);
    const [focusedProject, setFocusedProject] = useState<JSX.Element | null>(null)
    const [focusedProjectKey, setFocusedProjectKey] = useState<string | null>(null)
    const projectData = props

    // create an array of all the thumbnails
    let projects: JSX.Element[] = projectCardFactory(
        projectData,
        (e: any) => {
            // get the clicked element, and its id
            let clickedElement = e.currentTarget
            let clickedId = clickedElement.id


            // after a Thumbnail is clicked if there is a hidden element, unhide it
            console.log("focusedProjectKey to check: " + focusedProjectKey)
            if (focusedProjectKey != null) {
                console.log("visibility toggle on: " + focusedProjectKey)
                // toggleElementVisibility(focusedProjectKey!)
                let old = document.getElementById(focusedProjectKey)
                if (old!.classList.contains("hidden")) {
                    old!.classList.remove("hidden")
                }
            }

            toggleElementVisibility(clickedId)
            setFocusedProjectKey(clickedId)


            // find that id in projects array and set it as the focused project
            for (let i = 0; i < projectData.length; i++) {
                if (projectData[i].key == clickedId) {
                    // console.log("id found")
                    let nd = projectCardData[i]
                    // nd.key = makeid(5)
                    setFocusedProject(ProjectCard(
                        nd,
                        () => { console.log("this should be changed to the the close with 'X'") },
                        false,
                    ))
                    // projects.push(focusedProject)
                    // setFocusedProject(ProjectCard(projectData[i], () => {console.log("this should be changed to the the close with 'X'")}))
                    console.log(projects)
                    break;
                }
            }
            // hide the clicked Thumbnail                 
        }
    )

    return (
        <div>
          
            <div className="projects-container">
            {projects}

            </div>
            
                {focusedProject}
            
        </div>
    )
}
