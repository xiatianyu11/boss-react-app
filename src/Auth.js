import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, getUserData } from './auth.redux'


@connect(
	state=> ({isAuth: state.auth.isAuth, name: state.auth.name}),
	{ login, getUserData }
)
class Auth extends React.Component{
	componentDidMount(){
		this.props.getUserData()
	}
	render() {
		console.log(this.props)
		return (
			<div>
				<h2>我的名字是{this.props.name}, 年龄{this.props.age}</h2>
				{ this.props.isAuth? <Redirect to="/dashboard/" ></Redirect>: null}
				<div>Auth Page</div>
				<button onClick={this.props.login}>Login</button>
			</div>
		)
	}
}

export default Auth