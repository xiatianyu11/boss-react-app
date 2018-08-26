import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
			<h1>now has gun {this.props.num}</h1>
			<button onClick={this.props.addGun} >+</button>
			<button onClick={this.props.removeGun} >-</button>
			<button onClick={this.props.addGunAsync} >delay +</button>
			</div>
			)
	}
}

const mapStateToProps = state=>{
	return {num: state}
}

export default connect(mapStateToProps, { addGun, removeGun, addGunAsync })(App)