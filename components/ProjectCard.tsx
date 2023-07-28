const projectCard = function (props) {
    // data for specific components is passed as propNameData
    const data = props.projectCardData
    // unpack and hoist the props
    const projectTitle = data.projectTitle
    const projectDescription = data.projectDescription
    const projectThumbnailSrc = data.projectThumbnailSrc
    const projectThumbnailAlt = data.projectThumbnailAlt

    return
    <div className="projectCard">
        <article>
            <h2>{projectTitle}</h2>
            <img src={projectThumbnailSrc} alt={projectThumbnailAlt}/>
            <p>{projectDescription}</p>
        </article>
    </div>
}