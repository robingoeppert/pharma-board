import React, { Component } from 'react';


/**
* props.title Title of this countdown
* props.duration Duration of the countdown in miliseconds
* props.interval Progress bar updating interval in miliseconds
*/
export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: false,
      isComplete: false,
      progressClass: 'is-primary'
    };

    this.onDayChange = this.onDayChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }


  onDayChange(event) {
    this.setState({
      startDay: event.target.value,
      isComplete: false
    });
  }

  onTimeChange(event) {
    this.setState({
      startTime: event.target.value,
      isComplete: false
    });
  }

  start() {
    if (this.state.startDay && this.state.startTime) {
      const startDay = this.state.startDay;
      const startTime = this.state.startTime;
      const startDate = new Date(startDay + ' ' + startTime);

      this.setState({
        isRunning: true,
        startDate: startDate.getTime()
      });

      this.intervalId = setInterval(() => this.tick(), this.props.interval);
    }
    else {
      console.error('Cannot start countdown, date or time for start wasn\'t set');
    }
  }

  stop() {
    clearInterval(this.intervalId);

    this.setState({
      isRunning: false
    })
  }

  tick() {
    // recalculate progress and update state

    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const startTime = this.state.startDate;
    const runningTime = currentTime - startTime;
    const duration = this.props.duration;
    const isComplete = startTime + this.props.duration < currentTime;
    let progressClass;

    if (runningTime >= (duration * 0.75) && runningTime < (duration * 0.875)) {
      progressClass = 'is-warning';
    } else if (runningTime >= (duration * 0.875)) {
      progressClass = 'is-danger';
    } else {
      progressClass = 'is-primary';
    }

    this.setState({
      current: currentTime - startTime,
      isComplete: isComplete,
      progressClass: progressClass
    });

    if (isComplete) {
      this.stop();
    }
  }


  render() {
    return (
      <div className="box countdown-setter">
        <h4 className="subtitle center">{this.props.title}</h4>
        <progress className={'progress is-large ' + this.state.progressClass} value={this.state.current} max={this.props.duration}></progress>
        <p>Status: {this.state.isRunning ? 'Läuft...' : (this.state.isComplete ? 'Fertig!' : 'Bereit')}</p>
        Startzeit:
        <input type="date" className="input form-stack" value={this.state.startDay} onChange={this.onDayChange} disabled={this.state.isRunning} />
        <input type="time" className="input form-stack" value={this.state.startTime} onChange={this.onTimeChange} disabled={this.state.isRunning} />
        <button className={'button is-warning is-outlined form-stack' + (this.state.isRunning ? ' hidden' : '')} onClick={this.start}>START</button>
        <button className={'button is-danger is-outlined form-stack' + (this.state.isRunning ? '' : ' hidden')} onClick={this.stop}>STOP</button>
      </div>
    );
  }
}
