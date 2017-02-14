import React, { Component } from 'react';
import { Link } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import styles from './styles.css';

@observer(["timerStore", "settingsStore"])
export default class Settings extends Component {
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


  handleChangeIntervalSeconds = (e) => {
    this.props.settingsStore.intervalSeconds = e.target.value;
  };
  handleChangePlaySounds = (e) => {
    this.props.settingsStore.playSounds = e.target.checked;
  };
  onIntervalGoPressed = () => {
    let i = 1;
  };

  render() {
    return (
      <div>

          <h1>
            Select a workout:
          </h1>
          <section>
            <h2>
              Intervals
            </h2>
            <div>
              <div className={styles.label}>
                Starting seconds:
              </div>

              <input
                type="text"
                value={this.props.settingsStore.intervalSeconds}
                placeholder='>15 sec'
                onChange={this.handleChangeIntervalSeconds}/>
            </div>
            <button
              onClick={this.onIntervalGoPressed.bind(this)}>
              <div>Go</div>
            </button>
          </section>

        <label className={styles.soundsSwitch}>
          <input
            type="checkbox"
            checked={this.props.settingsStore.playSounds}
            onChange={this.handleChangePlaySounds}/>
            <div className={styles.soundsSlider}></div>
        </label>

        <div>play the sounds {this.props.settingsStore.playSounds}</div>
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