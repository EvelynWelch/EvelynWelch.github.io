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
            </header>
        </div>
    )
}

export default PageHeader