import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProjectSummary = ({project}) => {

  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
          <h3 className="card-title"> {project.title}</h3>
          <p>{project.content}</p>
          <p>{ moment(project.createdAt.toDate()).calendar()}</p>
          <p>posted by : {project.authorFirstName} {project.authorLastName}</p>
      </div>
      <div className="card-action">
        <Link to={"/project/"+ project.id }>See the details</Link>

      </div>
    </div>
  )
}

export default ProjectSummary
