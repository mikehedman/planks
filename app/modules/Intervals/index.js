import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import styles from './styles.css';
import IntervalSquare from './components/IntervalSquare';

const START_UNDERLAY_COLOR = '#abd59c';
const STOP_UNDERLAY_COLOR = '#e06060';
import Header from '../../shared/components/Header';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';

@observer(["settingsStore", "intervalsStore"])
export default class Intervals extends Component {

  constructor(props) {
    super(props);

    // const intervalTimes = this._makeIntervals(this.props.startingIntervalSeconds);
    this.props.intervalsStore.initialize(this.props.settingsStore.intervalSeconds);
  }

  handleChangePlaySounds = (e) => {
    this.props.settingsStore.playSounds = e.target.checked;
  };

  render() {
    const headers = ['left', 'prone', 'right', 'prone'];

    let startStopButton;

    if (this.props.intervalsStore.isRunning) {
      startStopButton =
        <Button
          bsStyle="danger"
          bsSize="large"
          onClick={this.props.intervalsStore.stopTimer}>
          Stop
        </Button>
    } else {
      startStopButton =
        <Button
          bsStyle="success"
          bsSize="large"
          onClick={this.props.intervalsStore.startTimer}>
          Start
        </Button>
    }

    let switchClasses = 'switch ' + (this.props.settingsStore.playSounds ? 'unmuted' : 'muted');
    return (
      <div>
        <Header leftLink="/" leftText="Settings"/>
        <div className="pageContentContainer">
          <div>
            {headers.map(function(text, index) {
              return <div className="headerSquare" key={index} >
                <div className="content">
                  <div className="table">
                    <div className="table-cell">
                      {text}
                    </div>
                  </div>
                </div>
              </div>
            })
            }
            {this.props.intervalsStore.intervals.map(function(interval, index) {
              return <IntervalSquare key={index} interval={interval} activeIntervalIndex={this.props.intervalsStore.activeIntervalIndex} row={index} activeIntervalSeconds={this.props.intervalsStore.activeIntervalSeconds}/>
              {/*return <IntervalSquare key={index} interval={interval} activeIntervalIndex={this.props.intervalsStore.activeIntervalIndex} row={index} ref={component => this.intervalRows['interval' + index] = component}/>*/}
            }, this)}
          </div>
          <div className="timeBlock">
            <div className="timeLabel">Time elapsed<span className="timeValue">{this.props.intervalsStore.formattedTime}</span></div>
            <div className="timeLabel">Total workout<span className="timeValue">{this.props.intervalsStore.totalWorkoutSeconds}</span></div>
          </div>
        </div>

        <Navbar fixedBottom>
          <div className="floatLeft">{startStopButton}</div>

          <div className="floatRight">
            <Button
              bsStyle="warning"
              onClick={this.props.intervalsStore.reset}
              disabled={this.props.intervalsStore.isRunning}>
              Reset workout
            </Button>
          </div>

          <div className="inlineForm floatRight">
            <label className={switchClasses}>
              <input
                type="checkbox"
                checked={this.props.settingsStore.playSounds}
                onChange={this.handleChangePlaySounds}/>
              <div className="slider"></div>
            </label>
          </div>

        </Navbar>

      </div>
    );
  }

}

  export store from './store';