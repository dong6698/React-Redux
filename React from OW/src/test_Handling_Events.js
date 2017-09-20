import React from 'react';
import ReactDOM from 'react-dom';

// property initializer syntax
class LoggingButton_2 extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

//  arrow function in the callback
class LoggingButton_1 extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {isToggleOn: true};

		// not so sure this line.
		// This binding is necessary to make `this` work in the callback.
		/*
			You have to be careful about the meaning of this in JSX callbacks. 
			In JavaScript, class methods are not bound by default. 
			If you forget to bind this.handleClick and pass it to onClick, 
			this will be undefined when the function is actually called.

			if you refer to a method without () after it, such as onClick={this.handleClick}, 
			you should bind that method.
		*/
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(prevState => ({
      		isToggleOn: !prevState.isToggleOn
    	}));
	}

	render(){
		return (
			<button onClick={this.handleClick}>
        		{this.state.isToggleOn ? 'Open' : 'Close'}
      		</button>
		);
	}
}

ReactDOM.render(
	<Toggle />,
	document.getElementById('root')
);
