// TODO; get link icons instead of displaying the full web address.
interface Props {
    title: string
    github: string
    githubPersonal: string
    jobTitle: string
    linkedin: string
    email: string
}

function PageHeader(props: Props): JSX.Element {
    return (
        <div className="pageHeader">
            <header>
                <h1>{props.title} - <span>{props.jobTitle}</span></h1>
                <span>{props.email} </span>
                <span><a href={props.github}>github <span className="link-icon"> &#128279; </span> </a></span>
                <span><a href={props.githubPersonal}>personal github <span className="link-icon"> &#128279; </span> </a> </span>
                <span><a href={props.linkedin}>LinkedIn <span className="link-icon"> &#128279; </span> </a></span>
            </header>
        </div>
    )
}

export default PageHeader