import React from "react"
import { toggleElementVisibility, HIDDEN_CLASS_NAME } from "../utilities"

export const ABOUT_ME_ID = "about-me"

interface Props {
    aboutMe: string,
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
    return (
        <div className="aboutMe text-wrapper" id={ABOUT_ME_ID}>
            <article>
                <h2>About me:</h2>
                <p>{props.aboutMe}</p>
            </article>
        </div>
    )
}

export default AboutMe