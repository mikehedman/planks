import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styles from './styles.css';

@observer(["settingsStore"])
export default class SoundsSlider extends Component {

  handleChangePlaySounds = (e) => {
    this.props.settingsStore.playSounds = e.target.checked;
  };

  render() {
    let switchClasses = 'switch ' + (this.props.settingsStore.playSounds ? 'unmuted' : 'muted');
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
