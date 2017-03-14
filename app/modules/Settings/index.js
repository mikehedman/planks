import React, { Component } from 'react';
import { Link } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import styles from './styles.css';
import Header from '../../shared/components/Header';
import Awake from '../../shared/Awake';

import Button from 'react-bootstrap/lib/Button';

@observer(["timerStore", "settingsStore"])
export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.timerStore;
  }

  componentDidMount() {
    //turn off Awake in case it was previously running
    Awake.disable();
  }

  handleChangeIntervalSeconds = (e) => {
    this.props.settingsStore.intervalSeconds = e.target.value;
  };
  handleChangePlaySounds = (e) => {
    this.props.settingsStore.playSounds = e.target.checked;
  };
  onIntervalGoPressed = () => {
    this.props.history.push('/intervals');
  };

  render() {
    return (
      <div>
        <Header rightLink="/info" rightText="Info"/>

        <h1>
          Select a workout:
        </h1>
        <section>
          <h2>
            Intervals
          </h2>
          <div>
            <div className="label">
              Starting seconds:
            </div>

            <input
              type="text"
              value={this.props.settingsStore.intervalSeconds}
              placeholder='>15 sec'
              onChange={this.handleChangeIntervalSeconds}/>
          </div>
          <Button
            bsStyle="info"
            bsSize="xsmall"
            onClick={this.onIntervalGoPressed.bind(this)}>
            Go
          </Button>

        </section>

        <label className="switch">
          <input
            type="checkbox"
            checked={this.props.settingsStore.playSounds}
            onChange={this.handleChangePlaySounds}/>
            <div className="slider"></div>
        </label>

        <div>play sounds: {this.props.settingsStore.playSounds ? "Yes" : "No"}</div>
          {/*<section>*/}
            {/*<h2>*/}
              {/*Timer Mode*/}
            {/*</h2>*/}
            {/*<div>*/}
              {/*<div style={styles.label}>*/}
                {/*Goal seconds:*/}
              {/*</div>*/}
              {/*<input*/}
                {/*style={styles.timeInput}*/}
                {/*value={this.state.timerModeSeconds}*/}
                {/*keyboardType='decimal-pad'*/}
                {/*onChange={this.onTimerModeSecondsTextChanged.bind(this)}/>*/}
            {/*</div>*/}
            {/*{ timerModeLastWorkout != '' ? <span style={styles.lastWorkout}>{timerModeLastWorkout}</span> : null}*/}
            {/*<button*/}
              {/*style={[styles.button, styles.section, this.state.timerModeSeconds == '' && styles.disabled]}*/}
              {/*underlayColor={this.state.timerModeSeconds != '' ? BUTTON_PRESSED_COLOR : BUTTON_COLOR}*/}
              {/*onPress={this.onTimerModeGoPressed.bind(this)}>*/}
              {/*<Text style={styles.buttonText}>Go</Text>*/}
            {/*</button>*/}
          {/*</section>*/}
          {/*<section>*/}
              {/*<div style={styles.label}>*/}
                {/*Play sounds?*/}
              {/*</div>*/}
              {/*<Switch*/}
                {/*onValueChange={this.onPlaySoundsChanged.bind(this)}*/}
                {/*value={this.state.playSounds} />*/}
          {/*</section>*/}
      </div>
    );
  }

}

export store from './store';