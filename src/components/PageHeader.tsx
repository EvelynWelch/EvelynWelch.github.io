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
                <span>github: <a href={props.github}>{props.github}</a> </span>
                <span>personal github: <a href={props.githubPersonal}>{props.githubPersonal}</a> </span>
                <span>linkedin: <a href={props.linkedin}>{props.linkedin} </a></span>
                <span>email:  {props.email} </span>
            </header>
        </div>   
    ) 
}

export default PageHeader