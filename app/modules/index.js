useStrict();
import React, { Component, cloneElement } from 'react';
import { useStrict } from 'mobx';

import { Provider } from 'mobx-react';
//import DevTools from 'mobx-react-devtools';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './sharedStyles.css';

//imports just so that webpack includes them
import apple_touch_icon from '!!file?name=apple-touch-icon.png!../assets/apple-touch-icon.png';
import favicon from '!!file?name=favicon.ico!../assets/favicon.ico';
import ic_volume_off from '!!file?name=assets/ic_volume_off.png!../assets/ic_volume_off.png';
import ic_volume_up from '!!file?name=assets/ic_volume_up.png!../assets/ic_volume_up.png';

import { store as settingsStore } from './Settings';
import { store as noteStore } from './Notes';
import { store as timerStore } from './Timer';
import { store as intervalsStore } from './Intervals';

export default function App({ children }) {
  return (
    <div>
      <main role="main" className={styles.main}>
        <Provider {...{ settingsStore, noteStore, timerStore, intervalsStore }}>
          {children}
        </Provider>
      </main>
      {/*<DevTools position={{ bottom: 0, right: 20 }} />*/}
    </div>
  );
}