import React, { Component } from 'react';
import { Link } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import styles from './styles.css';
import Header from '../../shared/components/Header';
 import SoundsSlider from '../../shared/components/SoundsSlider';

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

  onIntervalGoPressed = () => {
    this.props.history.push('/intervals');
  };

  render() {
    return (
      <div>
        <Header rightLink="/info" rightText="Info"/>
        <div className="pageContentContainer">

          <h1>
            Select a workout:
          </h1>
          <section>
            <h2>
              Intervals
            </h2>
            <div className="inlineForm">
              <div className="label">
                Starting seconds:
              </div>

              <input
                type="number"
                value={this.props.settingsStore.intervalSeconds}
                placeholder='>15 sec'
                onChange={this.handleChangeIntervalSeconds} />

              <Button
                bsStyle="success"
                onClick={this.onIntervalGoPressed.bind(this)}
                disabled={!this.props.settingsStore || !(this.props.settingsStore.intervalSeconds > 0)}
              >
                Go
              </Button>
            </div>


          </section>

          <div className="inlineForm">
            <div className="label">
              Play sounds?
            </div>
            <SoundsSlider settingsStore={this.props.settingsStore} />
          </div>
        </div>
      </div>
    );
  }

}

export store from './store';