import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import Userlist from '../components/Userlist'
import Userdetail from '../components/Userdetail'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'


const App = ({userlist, singleuser, actions}) => (
  <div>
  	<Userlist users={userlist} actions={actions}/>
  	<Userdetail user={singleuser}/>
  </div>
)

App.propTypes = {
  userlist: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  singleuser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  userlist: state.users,
  singleuser: state.active
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
