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
                <div className="links">
                    {/* TODO: figure out how to make this justify to left but not go further than the title */}
                    <span>{props.email}</span>
                    <span><a href={props.github}>github</a> </span>
                    <span><a href={props.githubPersonal}>personal github</a> </span>
                    <span><a href={props.linkedin}>LinkedIn</a> </span>
                </div>
            </header>
        </div>
    )
}

export default PageHeader