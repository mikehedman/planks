import React, { Component } from 'react';
import { Link } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import './styles.css';

@observer(["timerStore"])
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.timerStore;
  }

  componentDidMount() {
    this.store.startTimer();
  }

  componentWillUnmount() {
    this.store.stopTimer();
  }

  render() {
    return (
      <div>
        <h1>
          <span className="label">Timer:</span>
          <span className="counter"> {this.store.counter}</span>
        </h1>
        <button
          onClick={this.store.reset}
          className="reset-button"
        >Reset</button>
        <button
          onClick={this.store.decrement}
          className="inc-button"
        >-10</button>
        <button
          onClick={this.store.increment}
          className="dec-button"
        >+10</button>
      </div>
    );
  }
}

export store from './store';