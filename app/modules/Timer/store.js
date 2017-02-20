import { observable, action, computed, transaction } from 'mobx';

class TimerStore {
  @observable counter = 0;
  @observable interval = null;

  @action startTimer = () => {
    this.interval = setInterval(action(() => { this.counter++; }), 1000);
  }
  @action stopTimer = () => {
    clearInterval(this.interval);
    this.interval = null;
  }
  @action increment = () => {
    this.counter += 10;
    return this.counter;
  }
  @action decrement = () => {
    this.counter -= 10;
    return this.counter;
  }
  @action reset = () => {
    this.counter = 0;
    return this.counter;
  }

  @computed get formattedTime() {
    let seconds = this.counter;
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
    return this.interval !== null;
  }
}

const store = new TimerStore;
export default store;