class Sounds {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext);
  }

  /**
   * The main source of this came from http://www.redblobgames.com/x/1618-webaudio/
   * Altered to add the duration argument
   * @param {int} duration Pass in 0 to just initialize sound, or 1 for a one second sound
   */
  cowbell(duration) {
    var T = this.context.currentTime;

    var osc1 = this.context.createOscillator();
    osc1.type = "square";
    osc1.frequency.value = 800;

    var osc2 = this.context.createOscillator();
    osc2.type = "square";
    osc2.frequency.value = 540;

    var gain = this.context.createGain();
    osc1.connect(gain);
    osc2.connect(gain);
    gain.gain.setValueAtTime(0.5, T);
    gain.gain.exponentialRampToValueAtTime(0.01, T + 1.0);

    var filter = this.context.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 800;
    gain.connect(filter);

    filter.connect(this.context.destination);

    osc1.start(T);
    osc2.start(T);
    osc1.stop(T + duration);
    osc2.stop(T + duration);
  }

  /**
   * Call this from a user initiated click handler to tell iOS that we're going to be playing sounds
   */
  enable() {
    this.cowbell(0);
  }

  /**
   * play the sound
   */
  play() {
    this.cowbell(1);
  }

}
let sounds = new Sounds();

export default sounds;