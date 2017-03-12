import { observable, action, computed, autorun } from 'mobx';

class IntervalsStore {
  @observable NUM_INTERVALS = 16;

  @observable intervals = [];
  @observable activeIntervalIndex = 0;
  @observable activeIntervalSeconds = 0;

  @observable elapsedSeconds = 0;
  @observable oneSecondInterval = null;

  @action startTimer = () => {
    this.oneSecondInterval = setInterval(action(() => this.eachSecond()), 1000);
  }
  @action stopTimer = () => {
    clearInterval(this.oneSecondInterval);
    this.oneSecondInterval = null;
  }
  @action reset = () => {
    this.elapsedSeconds = 0;
    return this.elapsedSeconds;
  }

  @computed get formattedTime() {
    let seconds = this.elapsedSeconds;
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

  @computed get isRunning() {
    return this.oneSecondInterval !== null;
  }


  //
  // @action setPlaySounds(playSounds) {
  //   this.playSounds = playSounds;
  // }

  eachSecond() {
    this.elapsedSeconds++;
console.log('active: ' + this.activeIntervalSeconds + ' elapsed: ' + this.elapsedSeconds + '  index: ' + this.activeIntervalIndex);
    this.activeIntervalSeconds--;
    if (this.activeIntervalSeconds == 0) {
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

  @action initialize(startingInterval) {
    const PRONE_ADJUSTMENT = 15;

    let interval_drop;
    if ((startingInterval) <= 50) {
      interval_drop = 5;
    } else if ((startingInterval) < 75) {
      interval_drop = 10;
    } else {
      interval_drop = 15;
    }

    let newIntervals = [];
    let sideTime = startingInterval;
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
