import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component{
	componentDidMount(){
		axios.get('/user/info')
			.then(res => {
				if(res.status === 200){
					console.log(res.data)
					if(res.data.code === 0){

					}else{
						this.props.history.push('/login')
					}
				}
			})
	}
	render(){
		return <p>判断跳转的地方</p>
	}
}


export default AuthRoute
