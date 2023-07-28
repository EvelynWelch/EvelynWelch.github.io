const aboutMe = function(props) {
    const data = props.aboutMeData
    const aboutMeText = data.aboutMeText
    return 
    <div className="aboutMe">
        <article>
            <p>{aboutMeText}</p>
        </article>
    </div>
}