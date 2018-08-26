import React from 'react'
import Logo from '../../component/logo/logo'
import {List, Radio, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			type: 'genius'
		}
	}
	render(){
		const RadioItem = Radio.RadioItem
		return (
			<div>
				<Logo></Logo>
				<h2>Register</h2>
				<List>
					<InputItem>User Name</InputItem>
					<InputItem>Password</InputItem>
					<InputItem>Confirm Password</InputItem>
					<RadioItem checked={this.state.type==='genius'} >
						Niu
					</RadioItem>
					<RadioItem checked={this.state.type==='boss'} >
						Boss
					</RadioItem>
					<Button type='primary' onClick={this.register}>Register</Button>
				</List>
			</div>
		)
	}
}

export default Register;