import React, { Component } from 'react';
import Alert from '../components/Alert';
import FamousContent from '../components/FamousContent';
import Banner from '../components/Banner';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		return (
			<div>
				{this.props.showAlert ? <Alert/> : null}
	            <FamousContent />
	            <Banner />
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    showAlert: state.showAlert
  }
}

export default connect(mapStateToProps)(Home);
