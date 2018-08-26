import React from 'react';
import {connect } from 'react-redux'
import { Link, Route, Redirect } from 'react-router-dom'
import App from './App'
import { logout } from './auth.redux'

function Two(){
	return <h1>Two</h1>
}
function Three(){
	return <h1>Three</h1>
}

class Dashboard extends React.Component{
	constructor(props){
		super(props)
		this.match = this.props.match
	}
	render() {
		console.log(this.props)
		const redirectToLogin = <Redirect to="/login"></Redirect>
		const app = (
			<div>
				{ this.props.isAuth? <button onClick={this.props.logout} >Logout</button>: null }
				<ul>
					<li><Link to={ `${this.match.path}/` }>test 1</Link></li>
					<li><Link to={ `${this.match.path}/two` }>test 2</Link></li>
					<li><Link to={ `${this.match.path}/three` }>test 3</Link></li>
				</ul>
				<Route path={ `${this.match.path}/` } exact component={App} ></Route>
				<Route path={ `${this.match.path}/two` } component={Two} ></Route>
				<Route path={ `${this.match.path}/three` } component={Three} ></Route>
			</div>
		)
		return this.props.isAuth?app:redirectToLogin
	}
}


export default connect(state=>({isAuth: state.auth.isAuth}), {logout})(Dashboard)
