import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-content">
      	<div className="line-divider"></div>
      	<div className="footer-social">
	      	<span className="footer-text">Follow Us</span>
	      	<i className="fa fa-facebook-official"></i>
	      	<i className="fa fa-twitter"></i>
      	</div>
      	<nav className="footer-menu">
      		<ul>
      			<li>
      				<a>Terms and Conditions</a>
      			</li>
      			<li>
      				<a>Privacy Policy</a>
      			</li>
      			<li>
      				<a>Contact Us</a>
      			</li>
      		</ul>
      	</nav>
      </footer>
    );
  }
}

export default Footer;
