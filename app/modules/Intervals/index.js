import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import styles from './styles.css';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import Header from '../../shared/components/Header';
import SoundsSlider from '../../shared/components/SoundsSlider';

import IntervalSquare from './components/IntervalSquare';

@observer(["settingsStore", "intervalsStore"])
export default class Intervals extends Component {

  constructor(props) {
    super(props);

    // const intervalTimes = this._makeIntervals(this.props.startingIntervalSeconds);
    this.props.intervalsStore.initialize(this.props.settingsStore.intervalSeconds);
  }

  componentDidMount() {
    this.props.intervalsStore.updateWindowDimensions();
    window.addEventListener('resize', this.props.intervalsStore.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.intervalsStore.updateWindowDimensions);
  }

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

    //set width as a function of the window height. the 20 is for padding on the left and right, the 1.25 just works (nothing magical)
    let newWidth = Math.min(this.props.intervalsStore.windowWidth - 20, this.props.intervalsStore.windowHeight/1.25);
    let widthStyle = {"width": newWidth + 'px'};

    return (
      <div>
        <Header leftLink="/" leftText="Settings"/>
        <div className="pageContentContainer" style={widthStyle}>
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
            <SoundsSlider settingsStore={this.props.settingsStore} />
          </div>

        </Navbar>

      </div>
    );
  }

}

  export store from './store';