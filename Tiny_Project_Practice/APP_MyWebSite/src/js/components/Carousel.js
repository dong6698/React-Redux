import React from 'react';

class Carousel extends React.Component {
	render(){
		const { title } = this.props;
		const { content } = this.props;
		return (
			<div class="carousel-item">
				<div class="carousel-caption">
					<h4>{ title }</h4>
					<p>{ content }</p>
				</div>
			</div>
		);
	}
}

export default Carousel;