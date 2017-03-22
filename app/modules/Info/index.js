import React, { Component } from 'react';
import Header from '../../shared/components/Header';

export default class Info extends Component {
  render() {
    return (
      <div>
        <Header leftLink="/" leftText="Settings"/>
        <p>Planks is an exercise timing app. It's not a doctor, coach, or a whip. All it does is help keep time. The plank exercise can be strenuous - DO NOT attempt to do the plank exercise unless you have been cleared by your physician for rigorous exercise.</p>
        <p>Additionally, using proper form when planking is critical. If you are not 100% sure of how to do the exercise, find a knowledgeable coach who can instruct you.</p>
        <p>When you are first starting out, only attempt short durations.</p>
      </div>
    );
  }
}
