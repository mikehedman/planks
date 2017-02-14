import { observable, action, autorun } from 'mobx';


class IntervalStore {

  @observable activeRow = 0;
  @observable activeSeconds = 0;
  @observable elapsedSeconds = 0;
  @observable totalSeconds = 0;
  @observable  hasStarted = false;
  @observable timerRunning = false;
  @observable intervalTimes = intervalTimes;
  @observable timer = null;
  @observable idleTimer = null;
  @observable playSounds = this.props.playSounds;

  @action setActiveRow(activeRow) {
    this.activeRow = activeRow;
  }

  @action setActiveSeconds(activeSeconds) {
    this.activeSeconds = activeSeconds;
  }

  @action setTotalSeconds(totalSeconds) {
    this.totalSeconds = totalSeconds;
  }

  @action setHasStarted(hasStarted) {
    this.hasStarted = hasStarted;
  }

  @action setTimerRunning(timerRunning) {
    this.timerRunning = timerRunning;
  }

  @action setIntervalTimes(intervalTimes) {
    this.intervalTimes = intervalTimes;
  }

  @action setPlaySounds(playSounds) {
    this.playSounds = playSounds;
  }



  @observable notes = [];
  
  @action getNotesFromServer = () => {
    fetch('/api/notes')
      .then(
        r => r.status !== 200 ?
          console.error(`Notes fetching error: ${r.status}`) :
          r.json()
      )
      .then(action(data => { this.notes = data; }))
      .catch(err => console.error(err));
  }
  @action update = (idx, title, body) => {
    this.notes[idx].title = title;
    this.notes[idx].body = body;
    const note = this.notes[idx];
    this.sendJson(note, 'PUT');
    return this.notes[idx];
  }
  @action remove = (idx) => {
    this.sendJson({id: this.notes[idx].id}, 'DELETE');
    return this.notes.splice(idx, 1);
  }
  @action add = (title, body) => {
    const arrayOfIds = this.notes.length ? this.notes.map(note => note.id) : [0];
    const id = Math.max.apply(Math, arrayOfIds) + 1;
    const newNote = { id, title, body };
    this.notes.push(newNote);
    this.sendJson(newNote);
    return newNote;
  }
  sendJson(json, method = 'POST') {
    fetch('/api/notes', {
      method,
      headers: {  
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
      },
      body: `json=${encodeURI(JSON.stringify(json))}`
    })
    .then(r => {
      if (r.status !== 200) console.error(`Post error: ${r.status}`);
    })
    .catch(err => { console.log(err); });
  }
}
let store = new IntervalStore;

export default store;