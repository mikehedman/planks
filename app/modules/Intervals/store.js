import { observable, action, computed, autorun } from 'mobx';
import Awake from '../../shared/Awake';
import Sounds from '../../shared/Sounds';
import SettingsStore from '../Settings/store';


class IntervalsStore {
  originalStartingSeconds = null;
  @observable NUM_INTERVALS = 16;

  @observable intervals = [];
  @observable activeIntervalIndex = 0;
  @observable activeIntervalSeconds = 0;

  @observable elapsedSeconds = 0;
  @observable oneSecondInterval = null;

  @action startTimer = () => {
    this.oneSecondInterval = setInterval(action(() => this.eachSecond()), 1000);
    Awake.stayAwake();
console.log('in startTimer');
    Sounds.enable();
  }
  @action stopTimer = () => {
    clearInterval(this.oneSecondInterval);
    this.oneSecondInterval = null;
    Awake.disable();
  }
  @action reset = () => {
    this.stopTimer();
    if (this.originalStartingSeconds != null) {
      this.initialize(this.originalStartingSeconds);
    }
  }

  @computed get formattedTime() {
    return this.formatSeconds(this.elapsedSeconds);
  }

  @computed get isRunning() {
    return this.oneSecondInterval !== null;
  }

  @computed get totalWorkoutSeconds() {
    const workoutSeconds = this.intervals.reduce((accumulator, value) => accumulator + value, 0);
    return this.formatSeconds(workoutSeconds);
  }

  formatSeconds(seconds) {
    let text = '';
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (minutes > 0) {
      text += minutes;
    }
    text += ':';
    if (seconds < 10) {
      text += '0';
    }
    text += seconds;
    return text;
  }

  eachSecond() {
    this.elapsedSeconds++;
    this.activeIntervalSeconds--;
    if (this.activeIntervalSeconds == 0) {
      //play sound if desired
      if (SettingsStore.playSounds) {
        Sounds.play();
      }

      //find the next non-zero interval
      do {
        if (this.activeIntervalIndex == this.NUM_INTERVALS - 1) {
          //done with the last interval
          this.activeIntervalIndex = null;
        } else {
          this.activeIntervalIndex++;
          this.activeIntervalSeconds = this.intervals[this.activeIntervalIndex];
        }
      } while (this.intervals[this.activeIntervalIndex] == 0 && this.activeIntervalIndex !== null);
    }

  };

  @action initialize(startingIntervalSeconds) {
    this.originalStartingSeconds = startingIntervalSeconds;
    const PRONE_ADJUSTMENT = 15;

    let interval_drop;
    if ((startingIntervalSeconds) <= 50) {
      interval_drop = 5;
    } else if ((startingIntervalSeconds) < 75) {
      interval_drop = 10;
    } else {
      interval_drop = 15;
    }

    let newIntervals = [];
    let sideTime = startingIntervalSeconds;
    for (let i = 0; i < this.NUM_INTERVALS / 4; i++) {
      newIntervals.push(Math.max(0, sideTime));
      newIntervals.push(Math.max(0, sideTime - PRONE_ADJUSTMENT));
      newIntervals.push(Math.max(0, sideTime));
      newIntervals.push(Math.max(0, sideTime - PRONE_ADJUSTMENT));
      sideTime -= interval_drop;
    }

    this.intervals = newIntervals;
    this.activeIntervalIndex = 0;
    this.activeIntervalSeconds = this.intervals[0];
  }

}
const store = new IntervalsStore;

export default store;
