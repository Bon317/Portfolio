import ProjectInfo from "./ProjectInfo"
import ProjectPicture from "./ProjectPicture"

const ProjectCard = (props) => {
    const {link, title, description, photo, className} = props;
    return (
        <div className={`projectCard ${className}`}>
            <ProjectPicture photo = {photo}></ProjectPicture>
            <h2>{title}</h2>
            <ProjectInfo description = {description}></ProjectInfo>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">Visit</a>}
        </div>
    )
}

export default ProjectCard