useStrict();
import React, { Component, cloneElement } from 'react';
import { useStrict } from 'mobx';

import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';


import styles from './sharedStyles.css';
import 'bootstrap/dist/css/bootstrap.css';


import { store as settingsStore } from './Settings';
import { store as noteStore } from './Notes';
import { store as timerStore } from './Timer';
import { store as intervalsStore } from './Intervals';

export default function App({ children }) {
  return (
    <div>



      {/*<Navbar>*/}
        {/*<Navbar.Header>*/}
          {/*<Navbar.Brand>*/}
            {/*<a href="#">React-Bootstrap</a>*/}
          {/*</Navbar.Brand>*/}
        {/*</Navbar.Header>*/}
        {/*<Nav>*/}
          {/*<NavItem eventKey={1} href="#">Link</NavItem>*/}
          {/*<NavItem eventKey={2} href="#">Link</NavItem>*/}
          {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
            {/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
            {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
            {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
            {/*<MenuItem divider />*/}
            {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
          {/*</NavDropdown>*/}
        {/*</Nav>*/}
      {/*</Navbar>*/}


      <main role="main" className={styles.main}>
        <Provider {...{ settingsStore, noteStore, timerStore, intervalsStore }}>
          {children}
        </Provider>
      </main>
      <DevTools position={{ bottom: 0, right: 20 }} />
    </div>
  );
}