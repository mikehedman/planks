useStrict();
import React, { Component, cloneElement } from 'react';
import { useStrict } from 'mobx';

import { Provider } from 'mobx-react';
//import DevTools from 'mobx-react-devtools';

import styles from './sharedStyles.css';
import 'bootstrap/dist/css/bootstrap.css';

//import it just so that webpack includes it
import apple_touch_icon from '!!file?name=apple-touch-icon.png!../apple-touch-icon.png';


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