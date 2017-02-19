import React, { Component } from 'react';

import Awake from 'Awake';
import Sounds from 'Sounds';
import Button from 'react-bootstrap/lib/Button';

export default class Info extends Component {
  toggleAwake() {
    Awake.stayAwake();
    Sounds.enable();
    setTimeout(function() {Sounds.play()}, 3000);
  }

  render() {
    return (
      <div>
        <div>This is the info page</div>
        <button onClick={this.toggleAwake}>Toggle awake</button>
        <Button bsStyle="danger">Danger</Button>
      </div>
    );
  }
}
