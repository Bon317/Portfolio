const ProjectPicture = (props) => {
    const {photo} = props;
    return (
        <div className='projectPicture'>
            <img src={`${photo}`} alt="project"></img>
        </div>
    )
}

export default ProjectPicture