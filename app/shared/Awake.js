class Awake {
  constructor() {
    this.intervalDuration = 20000;
    this.sleepPreventInterval;
  }

  stayAwake() {
    this.sleepPreventInterval = setInterval(function () {
      window.location.href = "/new/page";
      window.setTimeout(function () {
        window.stop()
      }, 0);
    }, this.intervalDuration);
  }

  disable() {
    clearInterval(this.sleepPreventInterval);
  }

  setIntervalDuration(intervalDuration) {
    this.intervalDuration = intervalDuration;
  }

}
let awake = new Awake;

export default awake;