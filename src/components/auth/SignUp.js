import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createUser} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: "",
        password : "",
        firstName : "",
        lastName : "",
        authError : null

    }

    handleSubmit = (e) => {
        e.preventDefault();
       this.props.createUser(this.state);
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
        const {auth, authError} = this.props;

        if(auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
                <form  className="white"  onSubmit={this.handleSubmit} >
                    <h4 className="grey-text text-darken-3">Sign In</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} autoComplete="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} autoComplete="password" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} autoComplete="firstName" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Password</label>
                        <input type="text" id="lastName" onChange={this.handleChange} autoComplete="lastName" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                    </div>

                    <div className="error red-text center">
                        <p>{ authError ? authError : null }</p>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth : state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createUser : (newUser) => { dispatch(createUser(newUser))}
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
