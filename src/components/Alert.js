import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { toggleAlert } from '../actionCreators';
import { connect } from 'react-redux';

class Alert extends Component {
  render() {
    return (
      <section className="alert-container">
        <Row>
          <Col md={3}>
            <div className="alert-subtitle">Speak out. Be heard</div>
            <div className="alert-title">Be counted</div>
          </Col>
          <Col md={9}>
            <a className="alert-close" onClick={() => this.props.toggleAlert(this.props.showAlert)}>X</a>
            <div className="alert-description">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy .You share your opinion, we analyze and put the data in a public report.</div>
          </Col>
        </Row>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    showAlert: state.showAlert
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAlert(bool) {
       dispatch(toggleAlert(bool));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);