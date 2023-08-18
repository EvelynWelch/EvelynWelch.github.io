
import React, { useState } from 'react';
// import { Route, Routes, Outlet } from "react-router";
import { makeid } from "../utilities"

import { hideAboutMe, showAboutMe } from './AboutMe';


const data = require("../portfolioData");

const projectCardData = [
    data.projectStatMiner,
    data.projectBraveNW,
    data.projectMesh,
    data.projectBraveNWdb
]

// create id's 
projectCardData.forEach(e => { e.key = makeid(8) })

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
// TODO: make the about me hide when a project is selected.

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
                <div className='projectCard-X' onClick={e => onclick(e)}>
                    <button name="close-focused-project">X</button>
                </div>
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
    const [focusedProject, setFocusedProject] = useState<JSX.Element | null>(null)

    const projectData = props
    let focusedProjectKey: string | null = null

    let projects: JSX.Element[] = projectCardFactory(
        projectData,
        (e: any) => {
            // get the clicked element, and its id
            let clickedElement = e.currentTarget
            let clickedId = clickedElement.id
            focusedProjectKey = clickedId

            // add the selected-project class
            clickedElement.classList.add("selected-project")
            // remove selected-project non selected one
            projectData.forEach(element => {
                if (element.key != clickedId) {
                    let elem = document.getElementById(element.key)
                    if (elem!.classList.contains("selected-project")) {
                        elem!.classList.remove("selected-project")
                    }
                }
            })

            // find that id in projects array and set it as the focused project 
            for (let i = 0; i < projectData.length; i++) {
                if (projectData[i].key == clickedId) {
                    let data = { ...projectData[i] }
                    data.key = makeid(5)
                    // make the 'x' close the focused project
                    setFocusedProject(ProjectCard(
                        data,
                        () => {
                            setFocusedProject(null)
                            focusedProjectKey = null
                        },
                        false,
                    ))
                    break;
                }
            }
        }
    )

    // hide about me
    if (focusedProject == null) {
        showAboutMe()
    } else {
        hideAboutMe()
    }

    if (!focusedProject) {
        projectData.forEach(element => {
            if (element.key) {
                let htmlElement = document.getElementById(element.key)
                if (htmlElement) {
                    if (htmlElement.classList.contains("selected-project")) {
                        htmlElement.classList.remove("selected-project")
                    }
                }
            }
        })
    }

    return (
        <div className='projects-container'>
            <div className="thumbnail-container">
                {projects}
            </div>
            <div className="">
                {focusedProject}
            </div>
        </div>
    )
}
