import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import styles from '../styles.css';


const NUM_INTERVALS = 16;
const START_UNDERLAY_COLOR = '#abd59c';
const STOP_UNDERLAY_COLOR = '#e06060';

@observer(["settingsStore, timerStore"])
export default class Intervals extends Component {

  constructor(props) {
    super(props);

    const intervalTimes = this._makeIntervals(this.props.startingIntervalSeconds);
    this.state = {
      activeRow: 0,
      activeSeconds: 0,
      elapsedSeconds: 0,
      totalSeconds: 0,
      hasStarted: false,
      timerRunning: false,
      intervalTimes: intervalTimes,
      timer: null,
      idleTimer: null,
      playSounds: this.props.playSounds,
      soundStarted: false
    };

    this.intervalRows = [];
    this.scrollView = null;
  }

  render() {
    const parentState = this.props.parent.state;
    //highlight the active row
    let rowStyle = styles.inactiveRow;
    if (parentState.hasStarted && this.props.row == parentState.activeRow) {
      rowStyle = styles.activeRow;
    }

    //decide on the proper label for this row
    let label = 'Prone';
    if (this.props.row % 4 == 0) {
      label = 'Right side';
    } else if (this.props.row % 2 == 0) {
      label = 'Left side';
    }

    let activeSeconds = '';
    if (this.props.row == parentState.activeRow) {
      activeSeconds = this.props.interval - parentState.activeSeconds;
      //if we're done with the last interval, just set to zero
      activeSeconds = activeSeconds < 0 ? 0 : activeSeconds;
    }
    return (
      <div>
        <div className={styles.intervalRow}>
          <span style={[styles.interval, rowStyle]}>{this.props.row + 1}. {label}: {this.props.interval}</span><span style={styles.activeSeconds}>{activeSeconds}</span>
        </div>
        <hr style={styles.separator}/>
      </div>
    );
  }
}