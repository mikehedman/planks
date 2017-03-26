import React, { Component } from 'react';
import styles from './styles.css';

export default class SoundsSlider extends Component {

  handleChangePlaySounds = (e) => {
    this.props.settingsStore.playSounds = e.target.checked;
console.log('switching: ' + e.target.checked);
  };

  render() {
    let switchClasses = 'switch ' + (this.props.settingsStore.playSounds ? 'unmuted' : 'muted');
console.log('switchC: ' + switchClasses);
    return (
      <label className={switchClasses}>
        <input
          type="checkbox"
          defaultChecked={this.props.settingsStore.playSounds}
          onChange={this.handleChangePlaySounds}
        />
        <div className="slider"></div>
      </label>
    );
  }
}
