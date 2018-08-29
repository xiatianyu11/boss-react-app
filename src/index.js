import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './reducers'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/auth'
import BossInfo from './container/bossinfo/bossinfo'
import './config'

const reduxDevtools = window.devToolsExtension?window.devToolsExtension():()=>{}
const store = createStore(
	reducers,
	compose(applyMiddleware(thunk), reduxDevtools)
)

ReactDom.render((<Provider store={store} >
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Switch>
					<Route path="/boss/info" component={BossInfo}></Route>
					<Route path="/login" exact component={Login}></Route>
					<Route path="/register" component={Register}></Route>
				</Switch>
			</div>
		</BrowserRouter>
		</Provider>), document.getElementById('root'))