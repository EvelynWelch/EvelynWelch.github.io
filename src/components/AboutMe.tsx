import React from "react"
interface Props {
    aboutMe:string, 
}

const AboutMe = function(props: Props) {
    
    const aboutMe = props.aboutMe
    return 
    <div className="aboutMe">
        <article>
            <p>{aboutMe}</p>
        </article>
    </div>
}

export default AboutMe