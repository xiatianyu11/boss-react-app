import React from 'react'
// Getting back-end data
import axios from 'axios'
// router4
import {withRouter} from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'

@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    axios.get('/user/info')
        .then(res => {
          if (res.status === 200) {
            if (res.data.code === 0) {
              this.props.loadData(res.data.data)
            } else {
              this.props.history.push('/login')
            }
          }
        })
  }

  render() {
    return null
  }
}

export default AuthRoute