import React, { Component } from 'react';
import { observer } from 'mobx-react';
import NoteList from './components/NoteList';

@observer(["noteStore", "timerStore"])
export default class Notes extends Component {

  componentDidMount() {
    this.props.noteStore.getNotesFromServer();
    this.props.timerStore.startTimer();
  }

  componentDidUnmount() {
    this.props.timerStore.stopTimer();
  }
  
  render() {
    return (
      <div>
        <h1>
          <span >Timer:</span>
          <span > {this.props.timerStore.counter}</span>
        </h1>
        <NoteList store={this.props.noteStore} />
      </div>
    );
  }
}

export store from './store';