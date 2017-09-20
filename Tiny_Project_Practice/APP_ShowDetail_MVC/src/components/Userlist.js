import React, { PropTypes, Component } from 'react'

export default class Userlist extends Component {
	static propTypes = {
    	users: PropTypes.array.isRequired,
    	actions: PropTypes.object.isRequired
  	}

	render(){
		return (
			<div>
				<h1>UserList</h1>
				<ul>
					{this.props.users.map((user)=>{
						return (
							<li 
							key={user.id} 
							onClick={()=>{ this.props.actions.showDetail(user)}}
							>{user.first} {user.last}</li>
							);
					})}
				</ul>
			</div>
			);
	}
}