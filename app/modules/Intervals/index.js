import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import styles from './styles.css';
import IntervalRow from './components/IntervalRow';

const NUM_INTERVALS = 16;
const START_UNDERLAY_COLOR = '#abd59c';
const STOP_UNDERLAY_COLOR = '#e06060';
import Header from 'components/Header';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';

@observer(["settingsStore", "timerStore"])
export default class Intervals extends Component {

  constructor(props) {
    super(props);
    this.timer = this.props.timerStore;

    // const intervalTimes = this._makeIntervals(this.props.startingIntervalSeconds);
    this.intervalTimes = this._makeIntervals(this.props.settingsStore.intervalSeconds);
    this.state = {
      activeRow: 0,
      activeSeconds: 0,
      elapsedSeconds: 0,
      totalSeconds: 0,
      hasStarted: false,
      timerRunning: false,
      intervalTimes: this.intervalTimes,
      timer: null,
      idleTimer: null,
      playSounds: this.props.playSounds,
      soundStarted: false
    };

    this.intervalRows = [];
    this.scrollView = null;
  }

  render() {
    // const parentState = this.props.parent.state;
    // //highlight the active row
    // let rowStyle = styles.inactiveRow;
    // if (parentState.hasStarted && this.props.row == parentState.activeRow) {
    //   rowStyle = styles.activeRow;
    // }
    //
    // //decide on the proper label for this row
    // let label = 'Prone';
    // if (this.props.row % 4 == 0) {
    //   label = 'Right side';
    // } else if (this.props.row % 2 == 0) {
    //   label = 'Left side';
    // }
    //
    // let activeSeconds = '';
    // if (this.props.row == parentState.activeRow) {
    //   activeSeconds = this.props.interval - parentState.activeSeconds;
    //   //if we're done with the last interval, just set to zero
    //   activeSeconds = activeSeconds < 0 ? 0 : activeSeconds;
    // }

    let startStopButton;
    if (this.timer.isRunning) {
      startStopButton =
        <Button
          bsStyle="danger"
          bsSize="xsmall"
          onClick={this.timer.stopTimer}>
          Stop
        </Button>
    } else {
      startStopButton =
        <Button
          bsStyle="info"
          bsSize="xsmall"
          onClick={this.timer.startTimer}>
          Start
        </Button>
    }
    return (
      <div>
        <Header leftLink="/" leftText="Settings"/>
        {this.intervalTimes.map(function(interval, index) {
          return <IntervalRow key={index} interval={interval} row={index} ref={component => this.intervalRows['interval' + index] = component}/>
        }, this)}



        <Navbar fixedBottom>
          <div className="timeLabel">
            Elapsed
          </div>
          <div>{this.timer.formattedTime}</div>
          {startStopButton}

        </Navbar>

        {/*<View style={[styles.footer, styles.centerVertical]}>*/}
          {/*<Text style={styles.timeLabel}>{this.state.elapsedSeconds == 0 ? '' : 'Elapsed'}</Text>*/}
          {/*<Text style={styles.timeTime}>{this.secondsToMinSec(this.state.elapsedSeconds)}</Text>*/}
          {/*<TouchableHighlight*/}
            {/*style={[styles.button, styles.startStop, startStopColorStyle, styles.flex_6]}*/}
            {/*underlayColor={startStopUnderlayColor}*/}
            {/*onPress={this.onStartStopPressed.bind(this)}>*/}
            {/*<Text style={styles.buttonText}>{this.state.timerRunning ? 'Stop' : 'Start'}</Text>*/}
          {/*</TouchableHighlight>*/}
        {/*</View>*/}
        {/*<View style={[styles.footer, styles.centerVertical]}>*/}
          {/*<View style={[styles.foo]}>*/}
            {/*<Text style={styles.timeLabel}>{'Total'}</Text>*/}
            {/*<Text style={styles.timeTime}>{this.secondsToMinSec(this.state.totalSeconds)}</Text>*/}
          {/*</View>*/}
          {/*<View style={[styles.foo]}>*/}
            {/*<Text style={styles.inlineLabel}>*/}
              {/*Play sounds?*/}
            {/*</Text>*/}
            {/*<Switch*/}
              {/*onValueChange={this.onPlaySoundsChanged.bind(this)}*/}
              {/*value={this.state.playSounds} />*/}
          {/*</View>*/}
        {/*</View>*/}

      </div>
    );
  }

  _makeIntervals(startingInterval) {
    const PRONE_ADJUSTMENT = 15;
    var interval_drop;

    if ((startingInterval) <= 50) {
      interval_drop = 5;
    } else if ((startingInterval) < 75) {
      interval_drop = 10;
    } else {
      interval_drop = 15;
    }

    var intervals = [];
    var sideTime = startingInterval;
    for (var i = 0; i < NUM_INTERVALS / 4; i++) {
      intervals.push(Math.max(0, sideTime));
      intervals.push(Math.max(0, sideTime - PRONE_ADJUSTMENT));
      intervals.push(Math.max(0, sideTime));
      intervals.push(Math.max(0, sideTime - PRONE_ADJUSTMENT));
      sideTime -= interval_drop;
    }

    return intervals;
  }

}