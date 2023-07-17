const ProjectInfo = (props) => {
    const {description} = props;

    return (
        <div className='projectInfo'>
            <p>{description}</p>
        </div>
    )
}

export default ProjectInfo