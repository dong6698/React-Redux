import { combineReducers } from 'redux'
import users from './reducer-users'
import active from './reducer-active-user'

const rootReducer = combineReducers({
  users,
  active
})

export default rootReducer
