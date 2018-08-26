import { combineReducers } from 'redux'
import { counter } from './index.redux'
import { auth } from './auth.redux'
import { user } from './redux/user.redux'

export default combineReducers({counter, auth, user})