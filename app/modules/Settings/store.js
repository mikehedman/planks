import { observable, action, autorun, transaction } from 'mobx';

class SettingsStore {

  @observable intervalSeconds;
  @observable playSounds;

  constructor() {
    var self = this;
    this.intervalSeconds = localStorage.getItem('intervalSeconds');
    this.playSounds = (localStorage.getItem('playSounds') == 'true') || false;
    autorun(() => localStorage.setItem('intervalSeconds', self.intervalSeconds));
    autorun(() => localStorage.setItem('playSounds', self.playSounds));
  }
}

const store = new SettingsStore;
export default store;