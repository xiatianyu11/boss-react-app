import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { login } from '../../redux/user.redux'

@connect(
	state=>state.user,
	{login}
)
class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			user: '',
			pwd: ''
		}
		this.register = this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}
	register(){
		this.props.history.push('./register')
	}
	handleChange(key, val){
		this.setState({
			[key]: val
		})
	}
	handleLogin(){
		this.props.login(this.state)
	}
	render(){
		return (
				<div>
					{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
					<Logo></Logo>
					<WingBlank>
						{ this.props.msg? <p>{this.props.msg}</p>: null}
						<InputItem
							onChange={v=>this.handleChange('user', v)}
						>User Name</InputItem>
						<WhiteSpace />
						<InputItem type='password'
							onChange={v=>this.handleChange('pwd', v)}
						>Password</InputItem>
						<WhiteSpace />
						<Button onClick={this.handleLogin}  type='primary'>Login</Button>
						<WhiteSpace />
						<Button type='primary' onClick={this.register}>Register</Button>
					</WingBlank>
				</div>
				)
	}
}

export default Login;