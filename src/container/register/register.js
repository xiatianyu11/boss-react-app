import React from 'react'
import { connect } from 'react-redux'
import Logo from '../../component/logo/logo'
import {List, Radio, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
class Register extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'genius'
		}
		this.handleRegister = this.handleRegister.bind(this)
	}
	handleChange(key, val){
		this.setState({
			[key]: val
		})
	}
	handleRegister(){
		this.props.register(this.state)
	}
	render(){
		const RadioItem = Radio.RadioItem
		return (
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
				<Logo></Logo>
				<h2>Register</h2>
				<List>
					{ this.props.msg? <p>{this.props.msg}</p>: null}
					<InputItem
						onChange={v=>this.handleChange('user', v)}
					>User Name</InputItem>
					<InputItem type='password'
						onChange={v=>this.handleChange('pwd', v)}
					>Password</InputItem>
					<InputItem type='password'
						onChange={v=>this.handleChange('repeatpwd', v)}
					>Confirm Password</InputItem>
					<RadioItem checked={this.state.type==='genius'} 
						onChange={v=>this.handleChange('type', 'genius')}
					>
						Niu
					</RadioItem>
					<RadioItem checked={this.state.type==='boss'} 
						onChange={v=>this.handleChange('type', 'boss')}
					>
						Boss
					</RadioItem>
					<Button type='primary' onClick={this.handleRegister}>Register</Button>
				</List>
			</div>
		)
	}
}

export default connect(state=>state.user, {register })(Register);


