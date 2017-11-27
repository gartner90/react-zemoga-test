import React, { Component } from 'react';
import FamousDetail from '../components/FamousDetail';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class FamousContent extends Component {
  render() {
    const items = this.props.famous.map(function(item) {
      return (
        <Col sm={6} key={item.id}>
          <FamousDetail person={item}/>
        </Col>
      );
    });

    return (
      <section className="famous-container">
        <h2>Votes</h2>
        <Row>
          {items}
        </Row>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    famous: state.famous
  }
}

export default connect(mapStateToProps)(FamousContent);
