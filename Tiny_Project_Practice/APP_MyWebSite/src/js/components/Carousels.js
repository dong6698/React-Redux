import React from 'react';
import Carousel from './Carousel';

class Carousels extends React.Component {
	render(){
		const listOfCarousel = [
			{
				title: "Bootstrap 3",
				content: "Learn how to build your first responsive website with the brand new Twitter Bootstrap 3!"
			},
			{
				title: "Learn to code a website in 4-hours!",
				content: "PSD to HTML5 &amp; CSS3 is a popular Udemy course that has helped thousands of aspiring web designers launch their web design career."
			},
			{
				title: "Web Hosting 101",
				content: "Learn how to buy a perfect domain name and hosting package, and get your website live on the web with ease."
			}
		].map((carousel, i) => <Carousel key={i} title={carousel.title} content={carousel.content} />);
		
		return (
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    { listOfCarousel }
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
		);
	}
}

export default Carousels;