import { observable, action, computed, transaction } from 'mobx';

class TimerStore {
  @observable seconds = 0;
  @observable oneSecondInterval = null;

  @action startTimer = () => {
    this.oneSecondInterval = setInterval(action(() => { this.seconds++; }), 1000);
  }
  @action stopTimer = () => {
    clearInterval(this.oneSecondInterval);
    this.oneSecondInterval = null;
  }
  @action reset = () => {
    this.seconds = 0;
    return this.seconds;
  }

  @computed get formattedTime() {
    let seconds = this.seconds;
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
}

const store = new TimerStore;
export default store;