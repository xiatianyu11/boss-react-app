import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
import Msg from '../msg/msg'
import {getMsgList, recvMsg} from '../../redux/chat.redux'
import QueueAnim from 'rc-queue-anim'



@connect(
    state => state,
    {getMsgList, recvMsg}
)
class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
  }

 render() {
    const {pathname} = this.props.location
    const user = this.props.user
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ]
    const page = navList.find(v => v.path === pathname)
    // 动画生效，只渲染一个route，根据当前的path决定组件
    return (
        <div>
          <NavBar
              className='fixd-header'
              mode='dard'
          >
            {navList.find(v => v.path === pathname).title}
          </NavBar>
          <div style={{marginTop: 45}}>
            <QueueAnim
                type={'scaleX'}
                duration={'800'}
            >
              <Route
                  key={page.path}
                  path={page.path}
                  component={page.component}
              />
            </QueueAnim>
          </div>
          <NavLinkBar data={navList}/>
        </div>
    )
  }
}

export default Dashboard