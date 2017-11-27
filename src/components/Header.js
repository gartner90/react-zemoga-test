import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { remainingDays } from '../Services';

class Header extends Component {
  constructor() {
		super();

		this.state = {
			menu: [
				{id: 1, text: "Past Trials", link: 'past-trials'},
				{id: 2, text: "How it Works", link: 'how-it-works'},
				{id: 3, text: "Log in / Sign Up", link: 'log'},
				{id: 4, text: "Search", link: 'search'}
			],
			current:
				{ id: 1, name: "Pope Francis?", closingDate: "Thu Dec 28 2017 14:26:02 GMT-0500 (COT)", image: "https://lawsongill.files.wordpress.com/2015/06/pope_francis.jpg", description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. pedophile punishing ponfit" }
		}
  }

  render() {
  		const pathClass = () => {
  			if (window.location.pathname === '/') {
  				return 'home';
  			} else {
  				return 'page';
  			}
  		}

  		const itemRender = (item) => {
  			if (item.link !== 'search') {
  				return <a href={item.link}>{item.text}</a>
  			} else {
  				return <a href={item.link} className="search-icon"><Glyphicon glyph="search" /></a>
  			}
  		}

		const menu = this.state.menu.map((item) => {
		  return (
			<li key={item.id}>
			  {itemRender(item)}
			</li>
		  );
		});

		const card = 
			<div className="card-top-content">
				<div className="card-top">
					<label>What's your opinion on</label>
					<div className="card-title">{this.state.current.name}</div>
					<div className="card-description">{this.state.current.description}</div>
					<div className="card-more">W <a href="#">More Information</a></div>
					<div className="card-veredict">What's Your Veredict?</div>
				</div>
				<div className="card-down">
					<button className="card-thumbs-up">
						<i className="fa fa-thumbs-up"></i>
					</button>
					<button className="card-thumbs-down">
						<i className="fa fa-thumbs-down"></i>
					</button>
				</div>
			</div>

  		const closing = 
			<div>
				<Row>
					<Col xs={4} className="closing-col">
						<div className="closing-label">
							<span>CLOSING IN</span>
						</div>
					</Col>
					<Col xs={8} className="closing-col">
						<div className="closing-days">
							<span><b>{remainingDays(this.state.current.closingDate)}</b> days</span>
						</div>
					</Col>
				</Row>
			</div>

		return (
			<section className={pathClass() + " container-fluid header-container"} style={{backgroundImage: 'url(' + this.state.current.image + ')'}}>
				<header className="container header-top">
					<Row>
						<Col sm={4} md={3}>
							<div className="main-logo"><a href="/">Rule of Thumb.</a></div>
						</Col>
						<Col sm={8} md={9}>
							<nav className="main-menu">
								<ul>
									{menu}
								</ul>
							</nav>
						</Col>
					</Row>
				</header>
				<article className="container card-content">
					{card}
				</article>
				<div className="closing-content">
					{closing}
				</div>
			</section>
		);
    }
}

export default Header;
