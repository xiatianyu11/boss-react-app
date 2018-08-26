import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './auth.redux'

@connect(
	state=> ({isAuth: state.auth.isAuth}),
	{ login }
)
class Auth extends React.Component{
	render() {
		console.log(this.props)
		return (
			<div>
				{ this.props.isAuth? <Redirect to="/dashboard/" ></Redirect>: null}
				<div>Auth Page</div>
				<button onClick={this.props.login}>Login</button>
			</div>
		)
	}
}

export default Auth