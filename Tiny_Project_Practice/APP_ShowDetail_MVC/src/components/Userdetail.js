import React, { PropTypes, Component } from 'react'

export default class Userdetail extends Component {
	static propTypes = {
    	user: PropTypes.object.isRequired
  	}

	render(){
		if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
	}
}