import React, { Component } from 'react';
import { remainingMonths, getPercent } from '../Services';
import { editData } from '../actionCreators';
import { connect } from 'react-redux';

class FamousDetail extends Component {
  render() {
    const person = this.props.person;

    const changeVote = (props, id, bool) => {
      const array = Array.from(props.famous);
      array[id].vote = bool;
      props.editData(array);
    }

    const saveVote = (props, id) => {
      const array = Array.from(props.famous);
      let person = array[id];

      if (person.vote) {
        person.up++;
      } else {
        person.down++;
      }

      person.voted = true;
      props.editData(array);
    }

    const restartVote = (props, id) => {
      const array = Array.from(props.famous);
      let person = array[id];

      person.voted = false;
      props.editData(array);
    }

    const thumbUp = <i className="fa fa-thumbs-up"></i>;

    const thumbDown = <i className="fa fa-thumbs-down"></i>

    const renderButtons = (person, props) => {
      let html;
      if (!person.voted) {
        html =
        <div>
          <button className={'btn-thumb btn-thumb-up ' + person.vote} onClick={() => changeVote(props, person.id, true)}>
            {thumbUp}
          </button>
          <button className={'btn-thumb btn-thumb-down ' + person.vote} onClick={() => changeVote(props, person.id, false)}>
            {thumbDown}
          </button>
          <button className="btn-vote" onClick={() => saveVote(props, person.id)}>
            Vote now
          </button>
        </div>
      } else {
        html =
        <button className="btn-vote btn-vote-again" onClick={() => restartVote(props, person.id)}>
          Vote again
        </button>
      }

      return html;
    }

    return (
      <article className="famous-content" style={{backgroundImage: 'url(' + person.image + ')'}}>
        <div className="famous-inside">
          <div className="famous-top">
            <div className="famous-name">
              <span className={'btn-thumb btn-thumb-up ' + ( (getPercent(person.up, person.down) > 49) ? ' state-up' : ' state-down')}>
                {thumbUp}
                {thumbDown}
              </span>
              <span>{person.name}</span>
            </div> 
            <div className="famous-date"><b>{remainingMonths(person.closingDate) + (remainingMonths(person.closingDate) === 1 ? ' Month' : ' Months')} ago </b> in {person.category}</div>
            <div className="famous-description">{person.description}</div>
            <div className="famous-btns">
              {renderButtons(person, this.props)}
            </div>
          </div>
          <div className="famous-inside-botton">
            <div className="famous-results">
              <div className="famous-up famous-bar" style={{width: getPercent(person.up, person.down)+'%'}}></div>  
              <div className="famous-down famous-bar" style={{width: (100 - getPercent(person.up, person.down))+'%'}}></div>        
            </div>
            <div className="famous-results-text">
              <div className="famous-up-text famous-bar-text">
                {thumbUp}
                <span>{getPercent(person.up, person.down)}%</span>
              </div>  
              <div className="famous-down-text famous-bar-text">
                <span>{100 - getPercent(person.up, person.down)}%</span>
                {thumbDown}
              </div>        
            </div>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    famous: state.famous
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editData(array) {
       dispatch(editData(array));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FamousDetail);
