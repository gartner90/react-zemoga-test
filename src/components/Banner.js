import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section className="banner-content">
     		<button className="banner-btn">
        	Submit a Name
        </button>
        <div className="banner-description">
        	Is there anyone else you would want us to add?
        </div>
      </section>
    );
  }
}

export default Banner;
