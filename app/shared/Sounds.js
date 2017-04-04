class Sounds {
  constructor() {
    //the reference to 'window' barfs in server side rendering, sso we just skip it if on server
    if (typeof window !== 'undefined') {
      this.context = new (window.AudioContext || window.webkitAudioContext);
    }
    this.seconds = 1;
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
   * play the sound (num) times
   * @param {int} num The number of times to play the sound. Optional, defaults to 1
   */
  play(num) {
    num = num || 1;

    //play shorter sounds if there's going to be more than one
    let duration = (num == 1) ? this.seconds : this.seconds * .5;

    for (let i = 0; i < num; i++) {
      setTimeout(() => {
        this.cowbell(this.seconds);
      }, i * duration * 1000);
    }
  }

}
let sounds = new Sounds();

export default sounds;