class Awake {

  iosSleepPreventInterval;

  stayAwake() {
    this.iosSleepPreventInterval = setInterval(function () {
      window.location.href = "/new/page";
      window.setTimeout(function () {
        window.stop()
      }, 0);
    }, 20000);
  }

  disable() {
    clearInterval(this.iosSleepPreventInterval);
  }

}
let awake = new Awake;

export default awake;