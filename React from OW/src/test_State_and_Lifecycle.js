import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount(){
		this.timerID = setInterval(
      		() => this.tick(),
      		this.props.interval
    	);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}

	tick() {
    	this.setState({
      		date: new Date()
    	});
  	}

	render() {
		return (
			<div>
				<h1>Hello, Clock</h1>
				<FormattedDate date={this.state.date} />
			</div>
		);
	}
}

function FormattedDate(props){
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

function App() {
  return (
    <div>
      <Clock interval={1000}/>
      <Clock interval={2000}/>
      <Clock interval={3000}/>
    </div>
  );
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);




















