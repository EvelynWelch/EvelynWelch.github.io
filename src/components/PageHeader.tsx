import React from "react"

interface Props {
    title: string,
    github: string,
    githubPersonal: string
}

function PageHeader(props: Props): JSX.Element {
    console.log("wtf")
    return (
        <div className="pageHeader">
            <header>
                <h1>{props.title}</h1>
                <p><a href={props.github}>{props.github}</a></p>
                <p><a href={props.githubPersonal}>{props.githubPersonal}</a></p>
                
            </header>
            {/* <h1>Work please</h1> */}
        </div>   
    ) 
}

export default PageHeader