import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import styles from '../styles.css';

@observer
export default class IntervalRow extends Component {

  render() {
    {/*const parentState = this.props.parent.state;*/}
    {/*//highlight the active row*/}
    {/*let rowStyle = styles.inactiveRow;*/}
    {/*if (parentState.hasStarted && this.props.row == parentState.activeRow) {*/}
      {/*rowStyle = styles.activeRow;*/}
    {/*}*/}

    //decide on the proper label for this row
    let label = 'Prone';
    if (this.props.row % 4 == 0) {
      label = 'Right side';
    } else if (this.props.row % 2 == 0) {
      label = 'Left side';
    }

    let activeSeconds = '';
    // if (this.props.row == parentState.activeRow) {
    //   activeSeconds = this.props.interval - parentState.activeSeconds;
    //   activeSeconds = this.props.interval - parentState.activeSeconds;
    //   //if we're done with the last interval, just set to zero
    //   activeSeconds = activeSeconds < 0 ? 0 : activeSeconds;
    // }
    return (
      <div>
        <div className={styles.intervalRow}>
          <span >{this.props.row + 1}. {label}: {this.props.oneSecondInterval}</span><span >{activeSeconds}</span>
        </div>
        <hr/>
      </div>
    );
  }
}