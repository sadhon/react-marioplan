import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'


const SignedInLinks = (props) => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/createproject">Create Project</NavLink></li>
            <li><NavLink to="/" onClick={ props.signOut } >Sign Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{ props.profile.initials }</NavLink></li>
        </ul>
    )
}

const mapDispatchToState = (dispatch) =>{
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToState)(SignedInLinks);