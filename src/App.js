import React from 'react'
import { addGun, removeGun } from './index.redux'

class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const store = this.props.store
		const num = store.getState()
		return (
			<div>
			<h1>now has gun {num}</h1>
			<button onClick={()=>store.dispatch(addGun())} >+</button>
			<button onClick={()=>store.dispatch(removeGun())} >-</button>
			</div>
			)
	}
}

export default App