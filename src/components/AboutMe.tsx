import React from "react"
interface Props {
    aboutMe: string, 
}

function AboutMe(props: Props): JSX.Element {
    
    
    return (
    <div className="aboutMe">
        <article>
            <h2>About me:</h2>
            <p>{props.aboutMe}</p>
        </article>
    </div>
    )
}

export default AboutMe