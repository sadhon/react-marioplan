import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: "",
        password : ""

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state) ;
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })

    }

    render() {
        const { auth } = this.props;
        if(auth.uid) return <Redirect to="/" />
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
                        <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                    </div>
                    <p className="center">{ this.props.status ? this.props.status : null }</p>

                </form>

                
            </div>
            )
        }
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            status : state.auth.authError,
            auth : state.firebase.auth
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            signIn :(creds) => dispatch(signIn(creds))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
