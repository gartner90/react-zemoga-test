import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <Content body={children} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;