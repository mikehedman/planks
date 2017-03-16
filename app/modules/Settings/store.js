import { observable, action, autorun, transaction } from 'mobx';

class SettingsStore {

  @observable intervalSeconds;
  @observable playSounds;

  constructor() {
    this.intervalSeconds = 25;
    this.playSounds = false;
  }

}

const store = new SettingsStore;
export default store;