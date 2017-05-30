import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {remainSeconds: this.props.seconds}

    this.startTimer = this.startTimer.bind(this);
  }
  
  startTimer() {
    const timer = window.setInterval(() => {
      this.setState((prev) => {
        return {remainSeconds: prev.remainSeconds - 1}
      });
    },1000);
    
    this.setState(() => {
      return {interval: timer}
    });
  }

  render() {
    return (
      <div>
        <LinearProgress mode="determinate" max={this.props.seconds} value={this.state.remainSeconds} />
        <RaisedButton label="START" onTouchTap={this.startTimer}  />
      </div>
    );
  }
  
}

export default CountDownTimer;
