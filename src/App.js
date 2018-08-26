import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'


@connect(state=>({num:state.counter}), { addGun, removeGun, addGunAsync })
class App extends React.Component{
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



export default App