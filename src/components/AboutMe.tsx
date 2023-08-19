import React, { useState } from "react"
import { toggleElementVisibility, HIDDEN_CLASS_NAME } from "../utilities"

export const ABOUT_ME_ID = "about-me"

interface Props {
    aboutMe: string,
    email: string
    github: string
    githubPersonal: string
    linkedin: string
}

export function toggleAboutMeVisibility() {
    toggleElementVisibility(ABOUT_ME_ID)
}

export function hideAboutMe() {
    let aboutMe = getAboutMe()
    if (aboutMe) {
        if (!aboutMe.classList.contains(HIDDEN_CLASS_NAME)) {
            aboutMe.classList.add(HIDDEN_CLASS_NAME)
        }
    }
}
export function showAboutMe() {
    let aboutMe = getAboutMe()
    if (aboutMe) {
        if (aboutMe.classList.contains(HIDDEN_CLASS_NAME)) {
            aboutMe.classList.remove(HIDDEN_CLASS_NAME)
        }
    }
}

export function getAboutMe() {
    return document.getElementById(ABOUT_ME_ID)
}

function AboutMe(props: Props): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(true)
    // const [triggerRender, setTriggerRender] = useState(1)

    // let isExpanded: boolean
    // const about = getAboutMe()
    // if (about?.classList.contains(HIDDEN_CLASS_NAME) && isExpanded != true) {
    //     // isExpanded = true
    //     setIsExpanded(true)
    
    // } else if(!about?.classList.contains(HIDDEN_CLASS_NAME) && isExpanded != false)
    // {
    //     setIsExpanded(false)
    //     // setIsExpanded(false)
        
    // }
    return (
        <div>
            <div className="contact-info">
                <div id="aboutMe-button" className="aboutMe-button" onClick={() => {
                    if(isExpanded) {
                        setIsExpanded(false)
                        hideAboutMe()
                        
                    } else {
                        setIsExpanded(true)
                        showAboutMe()
                        
                    }
                }}>
                    {/* {isExpanded ? '\u25B2' : '\u25BC'} */}
                    <span>About me {isExpanded ? '\u25B2' : '\u25BC'}</span>
                </div>
                <span>{props.email}</span>
                <span><a href={props.github}>github</a> </span>
                <span><a href={props.githubPersonal}>personal github</a> </span>
                <span><a href={props.linkedin}>LinkedIn</a> </span>
            </div>
            <div className="aboutMe text-wrapper" id={ABOUT_ME_ID}>

                <article>
                    <h2>About me:</h2>
                    <p>{props.aboutMe}</p>
                </article>
            </div>
        </div>
    )
}

export default AboutMe