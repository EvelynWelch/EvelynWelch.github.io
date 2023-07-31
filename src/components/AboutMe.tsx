import React from "react"
interface Props {
    aboutMe: string, 
}

function AboutMe(props: Props): JSX.Element {
    
    
    return (
    <div className="aboutMe">
        <article>
            <p>{props.aboutMe}</p>
        </article>
    </div>
    )
}

export default AboutMe