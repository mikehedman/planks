import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class IntervalSquare extends Component {

  render() {


    let numberToDisplay = this.props.interval;

    let squareClasses = 'square';
    if (this.props.row == this.props.activeIntervalIndex) {
      squareClasses += ' activeInterval';
      numberToDisplay = this.props.activeIntervalSeconds;
    } else {
      //last seconds of an interval, so flash the screen
      if (this.props.activeIntervalSeconds <=5 && this.props.activeIntervalSeconds >= 0) {
        squareClasses += this.props.activeIntervalSeconds % 2 ? ' backgroundReverse' : ' backgroundNormal';
      } else {
        squareClasses += ' backgroundNormal';
      }
    }


    // if (this.props.row == parentState.activeRow) {
    //   activeSeconds = this.props.interval - parentState.activeSeconds;
    //   activeSeconds = this.props.interval - parentState.activeSeconds;
    //   //if we're done with the last interval, just set to zero
    //   activeSeconds = activeSeconds < 0 ? 0 : activeSeconds;
    // }
    return (
      <div className={squareClasses}>
        <div className="content">
          <div className="table">
            <div className="table-cell">
              {numberToDisplay}
            </div>
          </div>
        </div>
      </div>

      // <div>
      //   <div className={styles.intervalRow}>
      //     <span >{this.props.row + 1}. {label}: {this.props.interval}</span><span >{activeSeconds}</span>
      //   </div>
      //   <hr/>
      // </div>
    );
  }
}