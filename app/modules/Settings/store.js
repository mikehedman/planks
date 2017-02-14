import { observable, action, autorun, transaction } from 'mobx';

class SettingsStore {

  @observable intervalSeconds = 25;
  @observable playSounds = false;

}

const store = new SettingsStore;
export default store;