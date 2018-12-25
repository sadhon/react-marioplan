import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
            <div className=" z-depth-0 project-summary">
                {
                    projects && projects.map(project => {
                        return (
                            <ProjectSummary project={project} key={project.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectList;