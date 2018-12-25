import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'


const ProjectDetails = ({project, auth}) => {

    if(!auth.uid) return <Redirect to='/signin' />


    //const id = props.match.params.id;

    if(project){
        return (
            <div className="container project-details section">
                <div className="card z-depth-0">
                    <div className="card-content  ">
                        <div className="card-title">{project.title}</div>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey grey-text lighten-4">
                        <p>{project.authorFirstName} {project.authorLastName}</p>
                        <p>{ moment(project.createdAt.toDate()).calendar() }</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container red-text">
                <p>loading...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null

    return {
        project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails)
