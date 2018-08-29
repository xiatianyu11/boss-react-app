import React from 'react'
import axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom'
import { loadData, login } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
@connect(
	state=> ({isAuth: state.user.isAuth, user: state.user.user, url: state.user.redirectTo}),
	{ login, loadData }
)
class AuthRoute extends React.Component{
	componentDidMount(){
		this.props.loadData()
	}
	render() {
		console.log('======', this.props)
		return (
			<div>
				{this.props.url?<Redirect to={this.props.url} />:null}
			</div>
		)
	}
}


export default AuthRoute
